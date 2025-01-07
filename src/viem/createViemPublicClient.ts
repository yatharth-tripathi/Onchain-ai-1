import { createPublicClient, http } from 'viem'
import { baseSepolia } from 'viem/chains'
import { mainnet } from 'viem/chains'

export function createViemPublicClient() {


    return createPublicClient({

        chain: mainnet,
        transport: http()
    })
}