import { U32, U64 } from '@truenetworkio/sdk'
import { dailyProgress, dayScoreSchema } from './schemas'
import { getTrueNetworkInstance } from './true-network/true.config'

const main = async () => {
  const api = await getTrueNetworkInstance()

  // Solana User's Address.
  const user = 'Ap67uX5zrvVAEt5TuFnk9J2w8fFZpht9FAtTdhxViViM'

  // Ethereum User's Address.
  const user2 = '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97'

  console.log(await dayScoreSchema.attest(api, user, {
    score: 7,
    durationSpent: 1200,
    treesClimbedPerDay: 56,
    villansKilled: 4
  }))

  await dailyProgress.attest(api, user, {
    radioScore: 5,
    miles: 10
  })

  console.log(await dayScoreSchema.attest(api, user2, {
    score: 11,
    durationSpent: 1,
    treesClimbedPerDay: 1,
    villansKilled: 1
  }))


  console.log(await dailyProgress.attest(api, user2, {
    radioScore: 14,
    miles: 18
  }))


  await api.network.disconnect()
}

main()