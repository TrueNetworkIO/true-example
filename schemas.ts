import { Schema, U32, U64 } from "@truenetworkio/sdk"

type DayScore = {
  score: U32,
  durationSpent: U64,
  treesClimbedPerDay: U64,
  villansKilled: U32
}

export const dayScoreSchema = new Schema<DayScore>({
  score: new U32(0),
  durationSpent: new U64(0),
  treesClimbedPerDay: new U64(0),
  villansKilled: new U32(0)
})
