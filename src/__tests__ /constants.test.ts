import { keccak256 } from '@ethersproject/solidity'

import UniswapV2Pair from '../../abis/UniswapV2Pair.json'
import { INIT_CODE_HASH, SupportedChainId } from '../index'

// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [UniswapV2Pair.bytecode])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH[SupportedChainId.RINKEBY])
    })
  })
})
