
import { TrueApi, testnet } from '@truenetworkio/sdk'
import { TrueConfig } from '@truenetworkio/sdk/dist/utils/cli-config'

// If you are not in a NodeJS environment, please comment the code following code:
import dotenv from 'dotenv'
import { dailyProgress, dayScoreSchema } from '../schemas'
dotenv.config()

export const getTrueNetworkInstance = async (): Promise<TrueApi> => {
  const trueApi = await TrueApi.create(config.account.secret, config.network)

  console.log(trueApi.account.address)
  await trueApi.setIssuer(config.issuer.hash)

  return trueApi;
}

export const config: TrueConfig = {
  network: testnet,
  account: {
    address: 'jUT259GoV7z2GUrFH3UeFVRk5qSTwjzrjeqyUatKz4FAGBq',
    secret: process.env.TRUE_NETWORK_SECRET_KEY ?? ''
  },
  issuer: {
    name: 'TestApp',
    hash: '0xd8cd9fc822c6a80acefd2f66fa9fa88ac52f01690f6cfb448e10597406df3f78'
  },
  algorithm: {
    id: 100,
    path: 'acm',
    schemas: [dayScoreSchema, dailyProgress]
  },
}
  