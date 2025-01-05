import { createWalletClient, custom } from 'viem'
import { baseSepolia } from 'viem/chains'
import { http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { eip712WalletActions } from 'viem/zksync'
 
export function createViemWalletClient() {
      const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x$(string)`)

    return createWalletClient({
        account,
        chain: baseSepolia,
        transport:http()
      }).extend(eip712WalletActions())
}