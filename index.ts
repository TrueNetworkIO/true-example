import { U32, U64 } from '@truenetworkio/sdk'
import { dayScoreSchema } from './schemas'
import { getTrueNetworkInstance } from './true-network/true.config'

const main = async () => {
  const api = await getTrueNetworkInstance()

  const user = '5HYYeCa1Hae5YYGJ2pHskHLVrA7V5WjaSuSbntidhhD9qqgs'

  console.log(await dayScoreSchema.attest(api, user, {
    score: new U32(41),
    durationSpent: new U64(15000),
    treesClimbedPerDay: new U64(10),
    villansKilled: new U32(21)
  }))

  await api.network.disconnect()
}

main()