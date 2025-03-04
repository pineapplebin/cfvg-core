import { NAbilityStructure } from '@pineapple-bin/cfvg-protocol';
import { type NCoreWriter, predefine } from '../../spec.js';

export type TMetadata = NCoreWriter.ClauseMetadata<
  NAbilityStructure.ClauseType.meta,
  [],
  [
    NCoreWriter.Predefine.ExactlyTiming,
    NCoreWriter.Predefine.ExactlyCondition,
    NCoreWriter.Predefine.ActionOrMeta
  ]
>;

export const metadata: TMetadata = {
  uniqueKey: 'WhenIfDo',
  readableName: '...时，如果...，则...',
  type: NAbilityStructure.ClauseType.meta,

  variableMetadata: [],
  clauseMetadata: [
    predefine.exactlyTiming(),
    predefine.exactlyCondition(),
    predefine.actionOrMeta(),
  ],
};
