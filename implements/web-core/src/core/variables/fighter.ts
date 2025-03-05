import { NCore } from '../spec.js';

export enum EFighter {
  you = 'you',
  opponent = 'opponent',
  any = 'any',
  both = 'both',
}

export type TFighterMetadata = NCore.VariableMetadataDefine<{
  enums: { name: string; value: EFighter }[];
}>;
export type TFighterType = NCore.MetadataToType<TFighterMetadata>;

export class CoreFighter extends NCore.AbstractVariable<TFighterType> {
  static typeName = 'Fighter' as const;
  static metadata: TFighterMetadata = {
    enums: [
      { name: '你', value: EFighter.you },
      { name: '对手', value: EFighter.opponent },
      { name: '任一', value: EFighter.any },
      { name: '全都', value: EFighter.both },
    ],
  };

  value: TFighterType;

  constructor(val: any) {
    super();
    this.value = val === '你' ? EFighter.you : EFighter.opponent;
  }
}
