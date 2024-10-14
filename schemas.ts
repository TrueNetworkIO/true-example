import { Hash, Schema, U32, U64 } from "@truenetworkio/sdk"

export const dayScoreSchema = Schema.create({
  score: U32,
  durationSpent: U64,
  treesClimbedPerDay: U64,
  villansKilled: U32
})

export const dailyProgress = Schema.create({
  miles: U64,
  radioScore: U32
})
