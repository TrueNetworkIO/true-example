// Reading the memory of the runtime to fetch the attestation details.
// These load methods reads the memory, and the function load<type>(sizeInBytes)
// must be in continous order of the schema structure. 

// Using the sample implementation from the GamePlay schema. 
@inline
function load_score(): u32 {
  return load<u32>(0);
}

@inline
function load_duration_spent(): u64 {
  return load<u64>(4);
}

@inline
function load_trees_climbed_per_day(): u64 {
  return load<u64>(8);
}

@inline
function load_villans_killed(): u32 {
  return load<u32>(16);
}

// The exact codebase for the algorithm that takes these inputs i.e. attestation
// from the memory and returns a final reputation score for the user.
// Feel free to use math functions here as per your requirement. 
export function calc(): i64 {
  let score = load_score();
  let duration = load_duration_spent();
  let trees_climbed = load_trees_climbed_per_day();
  let villans_killed = load_villans_killed();

  return (score) * ((villas_killed + trees_climbed) / duration);
}