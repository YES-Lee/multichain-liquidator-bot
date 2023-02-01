// @ts-nocheck
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.20.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from '@tanstack/react-query'
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { StdFee } from '@cosmjs/amino'
import {
  InstantiateMsg,
  ExecuteMsg,
  Decimal,
  HealthResponse,
  QueryMsg,
  Uint128,
  VaultBaseForString,
  Coin,
  ArrayOfCoinBalanceResponseItem,
  CoinBalanceResponseItem,
  ArrayOfSharesResponseItem,
  SharesResponseItem,
  ArrayOfDebtShares,
  DebtShares,
  Addr,
  ArrayOfVaultWithBalance,
  VaultWithBalance,
  VaultBaseForAddr,
  VaultPositionAmount,
  VaultAmount,
  VaultAmount1,
  UnlockingPositions,
  ArrayOfVaultPositionResponseItem,
  VaultPositionResponseItem,
  VaultPosition,
  LockingVaultAmount,
  VaultUnlockingPosition,
  ArrayOfString,
  ConfigResponse,
  ArrayOfCoin,
  Positions,
  DebtAmount,
  ArrayOfVaultInstantiateConfig,
  VaultInstantiateConfig,
  VaultConfig,
} from './MarsMockCreditManager.types'
import {
  MarsMockCreditManagerQueryClient,
  MarsMockCreditManagerClient,
} from './MarsMockCreditManager.client'
export const marsMockCreditManagerQueryKeys = {
  contract: [
    {
      contract: 'marsMockCreditManager',
    },
  ] as const,
  address: (contractAddress: string | undefined) =>
    [{ ...marsMockCreditManagerQueryKeys.contract[0], address: contractAddress }] as const,
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      { ...marsMockCreditManagerQueryKeys.address(contractAddress)[0], method: 'config', args },
    ] as const,
  vaultConfigs: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      {
        ...marsMockCreditManagerQueryKeys.address(contractAddress)[0],
        method: 'vault_configs',
        args,
      },
    ] as const,
  allowedCoins: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      {
        ...marsMockCreditManagerQueryKeys.address(contractAddress)[0],
        method: 'allowed_coins',
        args,
      },
    ] as const,
  positions: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      { ...marsMockCreditManagerQueryKeys.address(contractAddress)[0], method: 'positions', args },
    ] as const,
  health: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      { ...marsMockCreditManagerQueryKeys.address(contractAddress)[0], method: 'health', args },
    ] as const,
  allCoinBalances: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      {
        ...marsMockCreditManagerQueryKeys.address(contractAddress)[0],
        method: 'all_coin_balances',
        args,
      },
    ] as const,
  allDebtShares: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      {
        ...marsMockCreditManagerQueryKeys.address(contractAddress)[0],
        method: 'all_debt_shares',
        args,
      },
    ] as const,
  totalDebtShares: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      {
        ...marsMockCreditManagerQueryKeys.address(contractAddress)[0],
        method: 'total_debt_shares',
        args,
      },
    ] as const,
  allTotalDebtShares: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      {
        ...marsMockCreditManagerQueryKeys.address(contractAddress)[0],
        method: 'all_total_debt_shares',
        args,
      },
    ] as const,
  allVaultPositions: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      {
        ...marsMockCreditManagerQueryKeys.address(contractAddress)[0],
        method: 'all_vault_positions',
        args,
      },
    ] as const,
  totalVaultCoinBalance: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      {
        ...marsMockCreditManagerQueryKeys.address(contractAddress)[0],
        method: 'total_vault_coin_balance',
        args,
      },
    ] as const,
  allTotalVaultCoinBalances: (
    contractAddress: string | undefined,
    args?: Record<string, unknown>,
  ) =>
    [
      {
        ...marsMockCreditManagerQueryKeys.address(contractAddress)[0],
        method: 'all_total_vault_coin_balances',
        args,
      },
    ] as const,
  estimateProvideLiquidity: (contractAddress: string | undefined, args?: Record<string, unknown>) =>
    [
      {
        ...marsMockCreditManagerQueryKeys.address(contractAddress)[0],
        method: 'estimate_provide_liquidity',
        args,
      },
    ] as const,
  estimateWithdrawLiquidity: (
    contractAddress: string | undefined,
    args?: Record<string, unknown>,
  ) =>
    [
      {
        ...marsMockCreditManagerQueryKeys.address(contractAddress)[0],
        method: 'estimate_withdraw_liquidity',
        args,
      },
    ] as const,
}
export interface MarsMockCreditManagerReactQuery<TResponse, TData = TResponse> {
  client: MarsMockCreditManagerQueryClient | undefined
  options?: Omit<
    UseQueryOptions<TResponse, Error, TData>,
    "'queryKey' | 'queryFn' | 'initialData'"
  > & {
    initialData?: undefined
  }
}
export interface MarsMockCreditManagerEstimateWithdrawLiquidityQuery<TData>
  extends MarsMockCreditManagerReactQuery<ArrayOfCoin, TData> {
  args: {
    lpToken: Coin
  }
}
export function useMarsMockCreditManagerEstimateWithdrawLiquidityQuery<TData = ArrayOfCoin>({
  client,
  args,
  options,
}: MarsMockCreditManagerEstimateWithdrawLiquidityQuery<TData>) {
  return useQuery<ArrayOfCoin, Error, TData>(
    marsMockCreditManagerQueryKeys.estimateWithdrawLiquidity(client?.contractAddress, args),
    () =>
      client
        ? client.estimateWithdrawLiquidity({
            lpToken: args.lpToken,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerEstimateProvideLiquidityQuery<TData>
  extends MarsMockCreditManagerReactQuery<Uint128, TData> {
  args: {
    coinsIn: Coin[]
    lpTokenOut: string
  }
}
export function useMarsMockCreditManagerEstimateProvideLiquidityQuery<TData = Uint128>({
  client,
  args,
  options,
}: MarsMockCreditManagerEstimateProvideLiquidityQuery<TData>) {
  return useQuery<Uint128, Error, TData>(
    marsMockCreditManagerQueryKeys.estimateProvideLiquidity(client?.contractAddress, args),
    () =>
      client
        ? client.estimateProvideLiquidity({
            coinsIn: args.coinsIn,
            lpTokenOut: args.lpTokenOut,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerAllTotalVaultCoinBalancesQuery<TData>
  extends MarsMockCreditManagerReactQuery<ArrayOfVaultWithBalance, TData> {
  args: {
    limit?: number
    startAfter?: VaultBaseForString
  }
}
export function useMarsMockCreditManagerAllTotalVaultCoinBalancesQuery<
  TData = ArrayOfVaultWithBalance,
>({ client, args, options }: MarsMockCreditManagerAllTotalVaultCoinBalancesQuery<TData>) {
  return useQuery<ArrayOfVaultWithBalance, Error, TData>(
    marsMockCreditManagerQueryKeys.allTotalVaultCoinBalances(client?.contractAddress, args),
    () =>
      client
        ? client.allTotalVaultCoinBalances({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerTotalVaultCoinBalanceQuery<TData>
  extends MarsMockCreditManagerReactQuery<Uint128, TData> {
  args: {
    vault: VaultBaseForString
  }
}
export function useMarsMockCreditManagerTotalVaultCoinBalanceQuery<TData = Uint128>({
  client,
  args,
  options,
}: MarsMockCreditManagerTotalVaultCoinBalanceQuery<TData>) {
  return useQuery<Uint128, Error, TData>(
    marsMockCreditManagerQueryKeys.totalVaultCoinBalance(client?.contractAddress, args),
    () =>
      client
        ? client.totalVaultCoinBalance({
            vault: args.vault,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerAllVaultPositionsQuery<TData>
  extends MarsMockCreditManagerReactQuery<ArrayOfVaultPositionResponseItem, TData> {
  args: {
    limit?: number
    startAfter?: string[][]
  }
}
export function useMarsMockCreditManagerAllVaultPositionsQuery<
  TData = ArrayOfVaultPositionResponseItem,
>({ client, args, options }: MarsMockCreditManagerAllVaultPositionsQuery<TData>) {
  return useQuery<ArrayOfVaultPositionResponseItem, Error, TData>(
    marsMockCreditManagerQueryKeys.allVaultPositions(client?.contractAddress, args),
    () =>
      client
        ? client.allVaultPositions({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerAllTotalDebtSharesQuery<TData>
  extends MarsMockCreditManagerReactQuery<ArrayOfDebtShares, TData> {
  args: {
    limit?: number
    startAfter?: string
  }
}
export function useMarsMockCreditManagerAllTotalDebtSharesQuery<TData = ArrayOfDebtShares>({
  client,
  args,
  options,
}: MarsMockCreditManagerAllTotalDebtSharesQuery<TData>) {
  return useQuery<ArrayOfDebtShares, Error, TData>(
    marsMockCreditManagerQueryKeys.allTotalDebtShares(client?.contractAddress, args),
    () =>
      client
        ? client.allTotalDebtShares({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerTotalDebtSharesQuery<TData>
  extends MarsMockCreditManagerReactQuery<DebtShares, TData> {}
export function useMarsMockCreditManagerTotalDebtSharesQuery<TData = DebtShares>({
  client,
  options,
}: MarsMockCreditManagerTotalDebtSharesQuery<TData>) {
  return useQuery<DebtShares, Error, TData>(
    marsMockCreditManagerQueryKeys.totalDebtShares(client?.contractAddress),
    () => (client ? client.totalDebtShares() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerAllDebtSharesQuery<TData>
  extends MarsMockCreditManagerReactQuery<ArrayOfSharesResponseItem, TData> {
  args: {
    limit?: number
    startAfter?: string[][]
  }
}
export function useMarsMockCreditManagerAllDebtSharesQuery<TData = ArrayOfSharesResponseItem>({
  client,
  args,
  options,
}: MarsMockCreditManagerAllDebtSharesQuery<TData>) {
  return useQuery<ArrayOfSharesResponseItem, Error, TData>(
    marsMockCreditManagerQueryKeys.allDebtShares(client?.contractAddress, args),
    () =>
      client
        ? client.allDebtShares({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerAllCoinBalancesQuery<TData>
  extends MarsMockCreditManagerReactQuery<ArrayOfCoinBalanceResponseItem, TData> {
  args: {
    limit?: number
    startAfter?: string[][]
  }
}
export function useMarsMockCreditManagerAllCoinBalancesQuery<
  TData = ArrayOfCoinBalanceResponseItem,
>({ client, args, options }: MarsMockCreditManagerAllCoinBalancesQuery<TData>) {
  return useQuery<ArrayOfCoinBalanceResponseItem, Error, TData>(
    marsMockCreditManagerQueryKeys.allCoinBalances(client?.contractAddress, args),
    () =>
      client
        ? client.allCoinBalances({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerHealthQuery<TData>
  extends MarsMockCreditManagerReactQuery<HealthResponse, TData> {
  args: {
    accountId: string
  }
}
export function useMarsMockCreditManagerHealthQuery<TData = HealthResponse>({
  client,
  args,
  options,
}: MarsMockCreditManagerHealthQuery<TData>) {
  return useQuery<HealthResponse, Error, TData>(
    marsMockCreditManagerQueryKeys.health(client?.contractAddress, args),
    () =>
      client
        ? client.health({
            accountId: args.accountId,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerPositionsQuery<TData>
  extends MarsMockCreditManagerReactQuery<Positions, TData> {
  args: {
    accountId: string
  }
}
export function useMarsMockCreditManagerPositionsQuery<TData = Positions>({
  client,
  args,
  options,
}: MarsMockCreditManagerPositionsQuery<TData>) {
  return useQuery<Positions, Error, TData>(
    marsMockCreditManagerQueryKeys.positions(client?.contractAddress, args),
    () =>
      client
        ? client.positions({
            accountId: args.accountId,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerAllowedCoinsQuery<TData>
  extends MarsMockCreditManagerReactQuery<ArrayOfString, TData> {
  args: {
    limit?: number
    startAfter?: string
  }
}
export function useMarsMockCreditManagerAllowedCoinsQuery<TData = ArrayOfString>({
  client,
  args,
  options,
}: MarsMockCreditManagerAllowedCoinsQuery<TData>) {
  return useQuery<ArrayOfString, Error, TData>(
    marsMockCreditManagerQueryKeys.allowedCoins(client?.contractAddress, args),
    () =>
      client
        ? client.allowedCoins({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerVaultConfigsQuery<TData>
  extends MarsMockCreditManagerReactQuery<ArrayOfVaultInstantiateConfig, TData> {
  args: {
    limit?: number
    startAfter?: VaultBaseForString
  }
}
export function useMarsMockCreditManagerVaultConfigsQuery<TData = ArrayOfVaultInstantiateConfig>({
  client,
  args,
  options,
}: MarsMockCreditManagerVaultConfigsQuery<TData>) {
  return useQuery<ArrayOfVaultInstantiateConfig, Error, TData>(
    marsMockCreditManagerQueryKeys.vaultConfigs(client?.contractAddress, args),
    () =>
      client
        ? client.vaultConfigs({
            limit: args.limit,
            startAfter: args.startAfter,
          })
        : Promise.reject(new Error('Invalid client')),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerConfigQuery<TData>
  extends MarsMockCreditManagerReactQuery<ConfigResponse, TData> {}
export function useMarsMockCreditManagerConfigQuery<TData = ConfigResponse>({
  client,
  options,
}: MarsMockCreditManagerConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(
    marsMockCreditManagerQueryKeys.config(client?.contractAddress),
    () => (client ? client.config() : Promise.reject(new Error('Invalid client'))),
    { ...options, enabled: !!client && (options?.enabled != undefined ? options.enabled : true) },
  )
}
export interface MarsMockCreditManagerSetHealthResponseMutation {
  client: MarsMockCreditManagerClient
  msg: {
    accountId: string
    response: HealthResponse
  }
  args?: {
    fee?: number | StdFee | 'auto'
    memo?: string
    funds?: Coin[]
  }
}
export function useMarsMockCreditManagerSetHealthResponseMutation(
  options?: Omit<
    UseMutationOptions<ExecuteResult, Error, MarsMockCreditManagerSetHealthResponseMutation>,
    'mutationFn'
  >,
) {
  return useMutation<ExecuteResult, Error, MarsMockCreditManagerSetHealthResponseMutation>(
    ({ client, msg, args: { fee, memo, funds } = {} }) =>
      client.setHealthResponse(msg, fee, memo, funds),
    options,
  )
}
