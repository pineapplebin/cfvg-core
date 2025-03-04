import {
  Kinds,
  Requirements,
  defineCard,
  quickKind,
  clause,
  ClauseType,
  variable,
  Vars,
} from './tools/index.js';

// https://vgcard.yimieji.com/Cards/D-SD04/D-SD04_008/SD
export default defineCard({
  id: 1,
  printName: '友情の騎士 サイラス',
  zhName: '友情的骑士 塞伊拉斯',
}).addAbility(
  '【起】【R】【1回合1次】：通过【费用】[灵魂爆发2]，公开你的牌堆顶的1张卡，那张卡是单位卡的话，CALL到R上，不是的话，加入手牌。',
  {
    kind: quickKind(Kinds.act, Requirements.rc, Requirements.once),
    sentences: [
      clause({
        uniqueKey: 'CostDo',
        clauses: [
          {
            uniqueKey: 'SoulBlast',
            type: ClauseType.action,
            variables: [Vars.number(2)],
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
      }),
    ],
  }
);
