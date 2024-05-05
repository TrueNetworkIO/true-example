
import { TrueApi, testnet } from '@truenetworkio/sdk'
import { TrueConfig } from '@truenetworkio/sdk/dist/utils/cli-config'

// If you are using a NodeJS environment, please uncomment the below code
// and install the dotenv dependency, using yarn add dotenv.
import dotenv from 'dotenv'
dotenv.config()

export const getTrueNetworkInstance = async (): Promise<TrueApi> => {
  const trueApi = await TrueApi.create(config.account.secret)

  await trueApi.setIssuer(config.issuer.hash)

  return trueApi;
}

export const config: TrueConfig = {
  network: testnet,
  account: {
    address: 'jgZK4XYppqabyHNyj3ja7d1jELXHMD4wSHWMPiHHnL5xrJj',
    secret: process.env.TRUE_NETWORK_SECRET_KEY ?? ''
  },
  issuer: {
    name: 'TrueExampleTest',
    hash: '0xad24c1047230cee84b34ea30bb824fa13b2aeba63900aecbb7581a68e82e8e56'
  },
  algorithm: {
    id: undefined,
    path: undefined,
    schemas: []
  },
}
  