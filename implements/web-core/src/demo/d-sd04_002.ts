import {
  ClauseType,
  Kinds,
  Vars,
  defineCard,
  quickKind,
  clause,
  variable,
} from './tools/index.js';

// https://vgcard.yimieji.com/Cards/D-SD04/D-SD04_002/SD
export default defineCard({
  id: 3,
  printName: '樹角獣 ラティス',
  zhName: '树角兽 拉提斯',
}).addAbility(
  '【自】：这个单位被「树角兽王 马格诺利亚」RIDE时，通过【费用】[灵魂爆发1]，将你的牌堆顶的1张卡公开，那张卡是单位卡的话，CALL到R上，不是的话，加入手牌。',
  {
    kind: quickKind(Kinds.auto),
    sentences: [
      clause({
        uniqueKey: 'WhenIfDo',
        clauses: [
          {
            uniqueKey: 'WhenUnitIsRodeUpon',
            type: ClauseType.timing,
            variables: [Vars.runtime.thisUnit],
          },
          {
            uniqueKey: 'CheckCardNameEq',
            type: ClauseType.condition,
            variables: [
              Vars.runtime.contextCard,
              variable('CardName', '树角兽王 马格诺利亚'),
            ],
          },
          {
            uniqueKey: 'CostDo',
            type: ClauseType.meta,
            clauses: [
              {
                uniqueKey: 'SoulBlast',
                type: ClauseType.action,
                variables: [Vars.number(1)],
              },
              {
                uniqueKey: 'RevealDeckTopCheck',
                type: ClauseType.action,
                variables: [Vars.fighter.you, Vars.number(1)],
                clauses: [
                  {
                    uniqueKey: 'CheckCardType',
                    type: ClauseType.condition,
                    variables: [
                      Vars.runtime.contextCard,
                      variable('CardType', 'unit'),
                    ],
                  },
                  {
                    uniqueKey: 'Call',
                    type: ClauseType.action,
                    variables: [Vars.runtime.contextCard, Vars.zone.rc],
                  },
                  {
                    uniqueKey: 'PutInto',
                    type: ClauseType.action,
                    variables: [Vars.runtime.contextCard, Vars.zone.vc],
                  },
                ],
              },
            ],
          },
        ],
      }),
    ],
  }
);
