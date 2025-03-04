import type { NAbilityStructure } from '@pineapple-bin/cfvg-protocol';
import { Vars, variable } from './variables.js';

export enum Kinds {
  auto = 'Automatic',
  cont = 'Continuous',
  act = 'Activated',
}

function req(
  data: NAbilityStructure.BaseRequirement
): NAbilityStructure.BaseRequirement {
  return data;
}

export function quickKind(
  kind: Kinds,
  ...requirements: NAbilityStructure.BaseRequirement[]
): NAbilityStructure.BaseAbilityKind {
  return {
    kind,
    requirements,
  };
}

export const Requirements = {
  // vanguard circle
  vc: req({ type: 'ZoneRequirement', variables: [Vars.zone.vc] }),
  // rearguard circle
  rc: req({ type: 'ZoneRequirement', variables: [Vars.zone.rc] }),
  // guardian circle
  gc: req({ type: 'ZoneRequirement', variables: [Vars.zone.gc] }),
  // once per turn
  once: req({ type: 'OncePerTurnRequirement', variables: [] }),
};
