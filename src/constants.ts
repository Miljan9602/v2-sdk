import { Percent } from '@miljan9602/sdk-core'
import JSBI from 'jsbi'

/**
 * @deprecated use FACTORY_ADDRESS_MAP instead
 */
export const FACTORY_ADDRESS = '0x5D370a6189F89603FaB67e9C68383e63F7B6A262'

export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = {
  // Mainnet
  1: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  // Ropsten
  3: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  // Goerli
  5: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  // Optimism
  10: '0x0c3c1c532F1e39EdF36BE9Fe0bE1410313E074Bf',
  // Arbitrum
  42161: '0xf1D7CC64Fb4452F05c498126312eBE29f30Fbcf9',
  // Avalanche
  43114: '0xa2E0215146460315b9C51AF82F4a50fE4492b102',
  // Base
  8453: '0x8909dc15e40173ff4699343b6eb8132c65e18ec6',
  // BNB
  56: '0x8909Dc15e40173Ff4699343b6eB8132c65e18eC6',
  // Polygon
  137: '0x9e5A52f57b3038F1B8EeE45F28b3C1967e22799C',
  // SEI Testnet
  713715: '0x5D370a6189F89603FaB67e9C68383e63F7B6A262'

}

export const INIT_CODE_HASH = '0x1b3e04307b072bdd8c3c97d4f9c8328e2a0bf37df8e36064c1b3468c7c7bc8b2'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)
