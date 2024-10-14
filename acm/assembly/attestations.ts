
// Auto Generated File.
// Created using Reputation CLI from True Network.
// To update the classes, use the "reputation-cli acm-prepare" at the root directory that contains "true-network".

@inline
function readMemory<T>(index: usize): T {
  return load<T>(index);
}


class DAYSCORESCHEMA {
  villansKilled: u32;
  treesClimbedPerDay: u64;
  score: u32;
  durationSpent: u64;

  constructor() {
    this.villansKilled = readMemory<u32>(0);
    this.treesClimbedPerDay = readMemory<u64>(4);
    this.score = readMemory<u32>(12);
    this.durationSpent = readMemory<u64>(16);
  }
}


class DAILYPROGRESS {
  radioScore: u32;
  miles: u64;

  constructor() {
    this.radioScore = readMemory<u32>(24);
    this.miles = readMemory<u64>(28);
  }
}


export class Attestations {
  static dayScoreSchema: DAYSCORESCHEMA = new DAYSCORESCHEMA();
  static dailyProgress: DAILYPROGRESS = new DAILYPROGRESS();
}
