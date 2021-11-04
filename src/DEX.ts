import { SupportedChainId } from './constants'

export type AddressMap = { [chainId in SupportedChainId]: string }

type Platforms =
  | 'MANEKISWAP'
  | 'UNISWAP'
  | 'BALANCER'
  | 'BAKERYSWAP'
  | 'CURVE'
  | 'PANCAKESWAP'
  | 'SUSHISWAP'
  | 'QUICKSWAP'
  | '1INCH'

export const INIT_CODE_HASH: { [key in Platforms]: Partial<AddressMap> } = {
  MANEKISWAP: {
    [SupportedChainId.MAINNET]: '0x96e8ac4277198ff8b6f785478aa9a39f403cb768dd02cbee326c3e7da348845f', // Uniswap
    [SupportedChainId.ROPSTEN]: '0x0000000000000000000000000000000000000000000000000000000000000000',
    [SupportedChainId.RINKEBY]: '0xc504c260b7a99152dcc258f5a6f9e6628e16e080e46a2cf586d8889d33f02a9c',
    [SupportedChainId.GÖRLI]: '0x0000000000000000000000000000000000000000000000000000000000000000',
    [SupportedChainId.KOVAN]: '0x0000000000000000000000000000000000000000000000000000000000000000'
  },
  // https://github.com/Uniswap/interface/blob/main/src/constants/addresses.ts
  UNISWAP: {},
  // https://docs.balancer.fi/products/merkle-orchard#addresses
  BALANCER: {},
  BAKERYSWAP: {},
  CURVE: {},
  PANCAKESWAP: {},
  SUSHISWAP: {}
}

export const FACTORY_ADDRESS: { [key in Platforms]: Partial<AddressMap> } = {
  MANEKISWAP: {
    [SupportedChainId.MAINNET]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // Uniswap
    [SupportedChainId.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [SupportedChainId.RINKEBY]: '0x97c4ab76e6818FaA20Bc75D18B59b3F99685e2cf',
    [SupportedChainId.GÖRLI]: '0x0000000000000000000000000000000000000000',
    [SupportedChainId.KOVAN]: '0x0000000000000000000000000000000000000000'
  },
  // https://github.com/Uniswap/interface/blob/main/src/constants/addresses.ts
  UNISWAP: {
    [SupportedChainId.MAINNET]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // Uniswap
    [SupportedChainId.ROPSTEN]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    [SupportedChainId.RINKEBY]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    [SupportedChainId.GÖRLI]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    [SupportedChainId.KOVAN]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
  },
  //https://github.com/sushiswap/sushiswap-sdk/blob/canary/src/constants/addresses.ts
  SUSHISWAP: {
    [SupportedChainId.MAINNET]: '0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac', // Uniswap
    [SupportedChainId.ROPSTEN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [SupportedChainId.RINKEBY]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [SupportedChainId.GÖRLI]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [SupportedChainId.KOVAN]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [SupportedChainId.FANTOM]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [SupportedChainId.FANTOM_TESTNET]: '',
    [SupportedChainId.BSC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [SupportedChainId.BSC_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [SupportedChainId.AVALANCHE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [SupportedChainId.AVALANCHE_FUJI]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    [SupportedChainId.HECO]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [SupportedChainId.HECO_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [SupportedChainId.HARMONY]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
    [SupportedChainId.HARMONY_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
  }
}

export const ROUTER_ADDRESS: { [key in Platforms]: Partial<AddressMap> } = {
  MANEKISWAP: {
    [SupportedChainId.MAINNET]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', // Uniswap
    [SupportedChainId.ROPSTEN]: '0x0000000000000000000000000000000000000000',
    [SupportedChainId.RINKEBY]: '0xb167044f29eFE9bbc58a2A06Ae8d5d950da350C3',
    [SupportedChainId.GÖRLI]: '0x0000000000000000000000000000000000000000',
    [SupportedChainId.KOVAN]: '0x0000000000000000000000000000000000000000'
  },
  // https://github.com/Uniswap/interface/blob/main/src/constants/addresses.ts
  UNISWAP: {
    [SupportedChainId.MAINNET]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', // Uniswap
    [SupportedChainId.ROPSTEN]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    [SupportedChainId.RINKEBY]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    [SupportedChainId.GÖRLI]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
    [SupportedChainId.KOVAN]: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'
  },
  // https://github.com/sushiswap/sushiswap-sdk/blob/canary/src/constants/addresses.ts
  SUSHISWAP: {
    [SupportedChainId.MAINNET]: '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F', // Uniswap
    [SupportedChainId.ROPSTEN]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [SupportedChainId.RINKEBY]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [SupportedChainId.GÖRLI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [SupportedChainId.KOVAN]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [SupportedChainId.FANTOM]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [SupportedChainId.FANTOM_TESTNET]: '',
    [SupportedChainId.BSC]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [SupportedChainId.BSC_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [SupportedChainId.AVALANCHE]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [SupportedChainId.AVALANCHE_FUJI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [SupportedChainId.HECO]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [SupportedChainId.HECO_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [SupportedChainId.HARMONY]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
    [SupportedChainId.HARMONY_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506'
  }
}
