package health_checker_rover

import (
	"encoding/json"
	"testing"
)

var (
	addressesPerJob      = 100
	jobsPerWorker        = 10
	hiveEndpoint         = "https://osmosis-delphi-testnet-1.simply-vc.com.mt/XF32UOOU55CX/osmosis-hive/graphql" //todo mock me
	creditManagerAddress = "osmo12lf593ekns80tyv9v5qqr2yhu070zrgwkkd8hqrn0eg9nl9yp27qv7djff"
	numberOfAddresses    = 200
)

func initService() HealthCheckerRover {

	batchSize := 200

	hive := RoverHive{hiveEndpoint}
	service := HealthCheckerRover{
		hive:                 hive,
		creditManagerAddress: creditManagerAddress,
		jobsPerWorker:        jobsPerWorker,
		addressesPerJob:      addressesPerJob,
		batchSize:            batchSize,
	}

	return service
}

func TestWeCanGenerateAndRunJobs(t *testing.T) {
	batchSize := 200
	mockPosition := types.RoverHealthCheckWorkItem{
		Identifier: "25",
	}

	positions := []types.RoverHealthCheckWorkItem{}

	for i := 1; i <= batchSize; i++ {
		positions = append(positions, mockPosition)
	}

	service := initService()

	jobs := service.generateJobs(positions, service.addressesPerJob)

	userResults, success := service.RunWorkerPool(jobs)

	if !success {
		t.Error("Unknown error occurred during processing of jobs")
	}

	if len(userResults) != len(positions) {
		t.Errorf("Incorrect number of batches, found %d but expected %d", len(userResults), len(positions))
	}

}

func TestCanFilterUnhealthyPositions(t *testing.T) {

	dataA :=
		ContractQuery{Liquidatable: true}

	dataB :=
		ContractQuery{Liquidatable: false}

	accountId := "1234"
	// create fake positions
	results := []UserResult{
		{
			AccountId:     accountId,
			ContractQuery: dataA,
		},
		{
			AccountId:     "2",
			ContractQuery: dataB,
		},
	}

	service := initService()

	unhealthy := service.produceUnhealthyPositions(results)

	var accounts []string

	for _, item := range unhealthy {
		var account string
		json.Unmarshal(item, &account)
		accounts = append(accounts, account)
	}

	if accounts[0] != accountId {
		t.Fatalf("expected first account to equal 1")
	}
	if len(unhealthy) != 1 {
		t.Fatalf("Expected 1 unhealthy position, found %d", len(unhealthy))
	}

}
