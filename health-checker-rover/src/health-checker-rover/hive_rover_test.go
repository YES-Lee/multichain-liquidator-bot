package health_checker_rover

import (
	"fmt"
	"github.com/mars-protocol/multichain-liquidator-bot/runtime/types"
	"testing"
)

func Test_weCanQueryAccounts(t *testing.T) {

	hiveEndpoint := "http://127.0.0.1:8085/graphql"
	creditManagerAddress := "osmo1gsy3cm2n5mnmv9esz5ysm7np3xgxryktjmfgu22jldfwps2u3rksfzkkmw"
	batchSize := 200

	mockPosition := types.HealthCheckWorkItem{
		Address:    "osmo18nm43hck80s2et26g2csvltecvhk49526dugd9",
		Debts:      []types.Asset{},
		Collateral: []types.Asset{},
	}

	positions := []types.HealthCheckWorkItem{}

	for i := 1; i <= batchSize; i++ {
		positions = append(positions, mockPosition)
	}

	hiveRover := RoverHive{hiveEndpoint}

	result, err := hiveRover.FetchBatch(creditManagerAddress, positions)

	if err != nil {
		t.Errorf("Error occured during request: %s", err)
	}

	expectedLength := len(positions)
	actualLength := len(result)
	if expectedLength != actualLength {
		t.Errorf("Length was incorrect. Expected %d but got %d", expectedLength, actualLength)
	}

	liquidatable := result[0].ContractQuery.Health.Liquidatable
	fmt.Printf("liquidatable: %t", liquidatable)
}
