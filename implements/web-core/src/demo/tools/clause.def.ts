import type { NAbilityStructure } from '@pineapple-bin/cfvg-protocol';
import type { LimitVariable } from './variables.js';
import type { FillUpClauseTypes } from './sentence.js';

type ClauseType = typeof NAbilityStructure.ClauseType;
type Timing = ClauseType['timing'];
type Condition = ClauseType['condition'];
type Action = ClauseType['action'];
type Meta = ClauseType['meta'];

export type ClauseDef<
  Key extends string,
  T extends NAbilityStructure.ClauseType,
  V extends NAbilityStructure.AbilityVariable[] = [],
  C extends NAbilityStructure.ClauseType[] = []
> = Omit<NAbilityStructure.Clause, 'uniqueKey' | 'variables' | 'type'> & {
  uniqueKey: Key;
  type: T;
} & (V extends [] ? {} : { variables: V }) &
  (C extends [] ? {} : { clauses: FillUpClauseTypes<C> });

export type MetaClause =
  // ...时，如果...，则
  | ClauseDef<'WhenIfDo', Meta, [], [Timing, Condition, Action]>
  // 通过支付...，如果支付则...
  | ClauseDef<'CostDo', Meta, [], [Action, Action]>;

export type TimingClause =
  // 当单位被骑升时
  ClauseDef<'WhenUnitIsRodeUpon', Timing, [LimitVariable<'Unit'>]>;

export type ConditionClause =
  // 直接放行
  | ClauseDef<'Pass', Condition>
  // 如果是后攻
  | ClauseDef<'IfWentSecond', Condition, [LimitVariable<'Fighter'>]>
  // 如果卡片是...类型
  | ClauseDef<
      'CheckCardType',
      Condition,
      [LimitVariable<'Card'>, LimitVariable<'CardType'>]
    >
  // 如果卡片名是...
  | ClauseDef<
      'CheckCardNameEq',
      Condition,
      [LimitVariable<'Card'>, LimitVariable<'CardName'>]
    >;

export type ActionClause =
  // 什么都不做
  | ClauseDef<'DoNothing', Action>
  // 抽x张卡
  | ClauseDef<'DrawCard', Action, [LimitVariable<'Number'>]>
  // 灵魂爆发x
  | ClauseDef<'SoulBlast', Action, [LimitVariable<'Number'>]>
  // 公开牌堆顶x张卡，如果是...，则...，不是的话...
  | ClauseDef<
      'RevealDeckTopCheck',
      Action,
      [LimitVariable<'Fighter'>, LimitVariable<'Number'>],
      [Condition, Action, Action]
    >
  // CALL到...
  | ClauseDef<'Call', Action, [LimitVariable<'Card'>, LimitVariable<'Zone'>]>
  // 放到...
  | ClauseDef<
      'PutInto',
      Action,
      [LimitVariable<'Card'>, LimitVariable<'Zone'>]
    >;
