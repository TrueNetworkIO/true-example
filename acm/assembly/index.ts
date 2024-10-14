
// The Algorithm.
// This is the space to design your reputation algorithm taking in account 
// multiple schemas across true network to calculate a reputation score for
// your users & the community. 

import { Attestations } from "./attestations";

// This is the starting point, calc function.
// Algorithm Compute Module (ACM) uses this as starting point to execute
// your reputation algorithm and expects an i64 as result.
export function calc(): i64 {
  const dayScoreSchema = Attestations.dayScoreSchema;
  const dailyProgress = Attestations.dailyProgress;

  const daily = dailyProgress.miles + dailyProgress.radioScore;
  const overallProgress = daily + dayScoreSchema.score * ((dayScoreSchema.durationSpent + dayScoreSchema.treesClimbedPerDay + dayScoreSchema.villansKilled) / 3);

  return overallProgress;
}
