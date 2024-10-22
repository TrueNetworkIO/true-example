import { dailyProgress, dayScoreSchema } from './schemas'
import { getTrueNetworkInstance } from './true-network/true.config'

const main = async () => {
  const api = await getTrueNetworkInstance()

  // Solana User's Address.
  const solanaUserWallet = 'Ap67uX5zrvVAEt5TuFnk9J2w8fFZpht9FAtTdhxViViM'

  // Ethereum User's Address.
  const ethereumUserWallet = '0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97'

  // Polkadot User's Address.
  const polkadotUserWallet = '5DHrzaEFnNrwhMy4LqRs43zp8rNAhaEhXNqNMZ9bpZZevCqE'

  await dayScoreSchema.attest(api, polkadotUserWallet, {
    score: 5,
    durationSpent: 11,
    treesClimbedPerDay: 23,
    villansKilled: 3
  })

  await dailyProgress.attest(api, polkadotUserWallet, {
    radioScore: 5,
    miles: 10
  })


  console.log(await dayScoreSchema.attest(api, solanaUserWallet, {
    score: 7,
    durationSpent: 1200,
    treesClimbedPerDay: 56,
    villansKilled: 4
  }))

  await dailyProgress.attest(api, solanaUserWallet, {
    radioScore: 5,
    miles: 10
  })

  console.log(await dayScoreSchema.attest(api, ethereumUserWallet, {
    score: 11,
    durationSpent: 1,
    treesClimbedPerDay: 1,
    villansKilled: 1
  }))


  console.log(await dailyProgress.attest(api, ethereumUserWallet, {
    radioScore: 14,
    miles: 18
  }))


  await api.network.disconnect()
}

main()