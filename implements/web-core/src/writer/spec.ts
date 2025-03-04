import {
  type NCardStructure,
  NAbilityStructure,
} from '@pineapple-bin/cfvg-protocol';
import type { NCore } from '../core/spec.js';

export namespace NCoreWriter {
  export interface SavingCard extends NCardStructure.BaseCardInfo {
    save(): Promise<boolean>;
  }

  export type LimitedVariable<
    T extends NCore.Predefine.VariableTypes = NCore.Predefine.VariableTypes
  > = {
    typeName: T;
  };

  export type LimitedClauseExactly<T extends NAbilityStructure.ClauseType> = {
    exactly: T;
  };
  export type LimitedClauseRepeat<T extends NAbilityStructure.ClauseType> = {
    repeat: T;
  };
  export type LimitedClauseOr<T extends NAbilityStructure.ClauseType> = {
    or: T[];
  };

  export type LimitedClause<
    T extends NAbilityStructure.ClauseType = NAbilityStructure.ClauseType
  > = LimitedClauseExactly<T> | LimitedClauseRepeat<T> | LimitedClauseOr<T>;

  export interface ClauseMetadata<
    T extends NAbilityStructure.ClauseType,
    V extends LimitedVariable[],
    C extends LimitedClause[]
  > {
    uniqueKey: string;
    readableName: string;

    type: T;

    variableMetadata: [...V];
    clauseMetadata: [...C];
  }

  export namespace Predefine {
    export type ExactlyTiming =
      LimitedClauseExactly<NAbilityStructure.ClauseType.timing>;
    export type ExactlyCondition =
      LimitedClauseExactly<NAbilityStructure.ClauseType.condition>;
    export type ActionOrMeta = LimitedClauseOr<
      NAbilityStructure.ClauseType.action | NAbilityStructure.ClauseType.meta
    >;
  }
}

export const predefine = {
  exactlyTiming: (): NCoreWriter.Predefine.ExactlyTiming => {
    return { exactly: NAbilityStructure.ClauseType.timing };
  },
  exactlyCondition: (): NCoreWriter.Predefine.ExactlyCondition => {
    return { exactly: NAbilityStructure.ClauseType.condition };
  },
  actionOrMeta: (): NCoreWriter.Predefine.ActionOrMeta => {
    return {
      or: [
        NAbilityStructure.ClauseType.action,
        NAbilityStructure.ClauseType.meta,
      ],
    };
  },
};
