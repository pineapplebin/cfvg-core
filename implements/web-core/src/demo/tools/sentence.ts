import { NAbilityStructure } from '@bin-cfvg/protocol';
import type {
  TimingClause,
  ConditionClause,
  ActionClause,
  MetaClause,
  ClauseDef,
} from './clause.def.js';

type DetermineType<T> = T extends NAbilityStructure.ClauseType.timing
  ? TimingClause
  : T extends NAbilityStructure.ClauseType.condition
  ? ConditionClause
  : T extends
      | NAbilityStructure.ClauseType.action
      | NAbilityStructure.ClauseType.meta
  ? ActionClause | MetaClause
  : never;

export type FillUpClauseTypes<T extends unknown[]> = T extends [
  infer Head,
  ...infer Rest
]
  ? [DetermineType<Head>, ...FillUpClauseTypes<Rest>]
  : [];

type MakeParams<Def, Key extends string> = Def extends ClauseDef<
  Key,
  any,
  any,
  infer C
>
  ? { uniqueKey: Key; clauses: FillUpClauseTypes<C> }
  : never;

export function clause<K extends MetaClause['uniqueKey']>(
  params: MakeParams<MetaClause, K>
): NAbilityStructure.Clause {
  return {
    ...params,
    type: NAbilityStructure.ClauseType.meta,
  };
}
