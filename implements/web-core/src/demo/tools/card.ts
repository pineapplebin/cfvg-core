import {
  NAbilityStructure,
  NCardStructure,
  type NUtils,
} from '@bin-cfvg/protocol';

type DefineCardParams = Pick<
  NCardStructure.UnitCardInfo,
  'id' | 'printName'
> & {
  zhName: string;
};

class DemoUnitCard
  implements
    NCardStructure.UnitCardInfo,
    NUtils.CanToJson<NCardStructure.UnitCardInfo>
{
  unitType: NCardStructure.UnitCardType;
  id: number;
  printName: string;
  localeNameMap: Partial<Record<NUtils.Locale, string>> &
    Record<string, string>;
  cardType: NCardStructure.CardType;
  abilities: NAbilityStructure.Ability[];

  constructor(params: DefineCardParams) {
    this.id = params.id;
    this.unitType = NCardStructure.UnitCardType.normal;
    this.printName = params.printName;
    this.localeNameMap = { zh: params.zhName };
    this.cardType = NCardStructure.CardType.unit;
    this.abilities = [];
  }

  toJson(): NCardStructure.UnitCardInfo {
    return {
      id: this.id,
      unitType: this.unitType,
      printName: this.printName,
      localeNameMap: this.localeNameMap,
      cardType: this.cardType,
      abilities: this.abilities,
    };
  }

  toJsonString(format?: boolean): string {
    return JSON.stringify(this.toJson(), null, format ? 2 : undefined);
  }

  addAbility(printText: string, ability: NAbilityStructure.Ability): this {
    this.abilities.push(ability);
    return this;
  }
}

export function defineCard(params: DefineCardParams): DemoUnitCard {
  return new DemoUnitCard(params);
}
