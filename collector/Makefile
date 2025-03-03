#
# A Makefile to build, run and test Go code
#

.PHONY: default build fmt lint run run_race test clean vet docker_build docker_run docker_clean .start_redis

IMAGE_NAME := "<your-cointainer-repo>/multichain-collector:latest"
GIT_COMMIT := $(shell git rev-list -1 HEAD)

# This makes the APP_NAME be the name of the current directory
# Ex. in path /home/dev/app/my-app the APP_NAME will be set to my-app
APP_NAME := $(notdir $(CURDIR))
CHAIN_ID := "liq_test"

.start_redis: ## Start Redis if it isn't running
ifeq ($(shell docker ps | grep redis:latest 2> /dev/null),)
	docker run --name redis-bot --rm -p 6379:6379 -d redis:latest
endif

default: build ## Default: Build the binary for the service

dependencies: ## Install dependencies for the service
	docker pull redis
	go mod tidy

build: ## Build the binary for the service
	CGO_ENABLED=0 go build -o ./bin/${APP_NAME} ./src/*.go

run: build .start_redis ## Build and run the service binary
	# Add your environment variable here
	LOG_LEVEL=debug \
	LOG_FORMAT=text \
	SERVICE_NAME="bot-collector" \
	CHAIN_ID=${CHAIN_ID} \
	REDIS_DATABASE=0 \
	REDIS_METRICS_DATABASE=0 \
	REDIS_ENDPOINT="127.0.0.1:6379" \
	COLLECTOR_QUEUE_NAME="collector" \
	HEALTH_CHECK_QUEUE_NAME="health_check" \
	./bin/${APP_NAME}

run_race: ## Run the service with race condition checking enabled
	# Add your environment variable here
	LOG_LEVEL=debug \
	LOG_FORMAT=text \
	SERVICE_NAME="bot-collector" \
	CHAIN_ID=${CHAIN_ID} \
	REDIS_DATABASE=0 \
	REDIS_ENDPOINT="127.0.0.1:6379" \
	COLLECTOR_QUEUE_NAME="collector" \
	HEALTH_CHECK_QUEUE_NAME="health_check" \
	go run -race ./src/*.go

docker_build: build ## Build the service Docker container
	docker build -t ${IMAGE_NAME} .

docker_run: ## Run the Docker container in interactive mode
	docker run -it --rm --network="host" \
		-e LOG_LEVEL=debug \
		-e LOG_FORMAT=text \
		-e SERVICE_NAME="bot-collector" \
		-e CHAIN_ID=${CHAIN_ID} \
		-e REDIS_DATABASE=0 \
		-e REDIS_ENDPOINT="127.0.0.1:6379" \
		-e COLLECTOR_QUEUE_NAME="collector" \
		-e HEALTH_CHECK_QUEUE_NAME="health_check" \
		${IMAGE_NAME}

docker_push: ## Push the Docker container to the registry
	docker push ${IMAGE_NAME}

fmt: ## Format the code using `go fmt`
	go fmt ./...

test: ## Run the tests
	go test ./... -v

test_cover: ## Run tests with a coverage report
	go test ./... -v -cover -covermode=count -coverprofile=./coverage.out

test_cover_view: test_cover ## Run tests with coverage report and open HTML view
	go tool cover -html=coverage.out

clean: ## Remove compiled binaries from bin/
	rm ./bin/*

help: ## Display this help screen
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	