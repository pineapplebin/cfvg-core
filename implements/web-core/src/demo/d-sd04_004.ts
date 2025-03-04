import {
  Kinds,
  quickKind,
  defineCard,
  clause,
  ClauseType,
  variable,
} from './tools/index.js';

// https://vgcard.yimieji.com/Cards/D-SD04/D-SD04_004/SD
export default defineCard({
  id: 2,
  printName: '樹角獣 ローテ',
  zhName: '树角兽 罗特',
}).addAbility('【自】：这个单位被RIDE时，你是后攻的话，抽1张卡。', {
  kind: quickKind(Kinds.auto),
  sentences: [
    clause({
      uniqueKey: 'WhenIfDo',
      clauses: [
        {
          uniqueKey: 'WhenUnitIsRodeUpon',
          type: ClauseType.timing,
          variables: [variable('Unit', 'this')],
        },
        {
          uniqueKey: 'IfWentSecond',
          type: ClauseType.condition,
          variables: [variable('Fighter', 'you')],
        },
        {
          uniqueKey: 'DrawCard',
          type: ClauseType.action,
          variables: [variable('Number', 1)],
        },
      ],
    }),
  ],
});
