import JSBI from 'jsbi'

// https://chainlist.org/
export enum SupportedChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,

  AVALANCHE = 43114,
  AVALANCHE_FUJI = 43113,

  BSC = 56,
  BSC_TESTNET = 97,

  FANTOM = 250,
  FANTOM_TESTNET = 4002,

  HECO = 128,
  HECO_TESTNET = 256,

  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,

  POLYGON = 137,
  POLYGON_MUMBAI = 80001,

  OPTIMISTIC = 10,
  OPTIMISTIC_KOVAN = 69
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

// exports for external consumption
export type BigintIsh = JSBI | string | number

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
