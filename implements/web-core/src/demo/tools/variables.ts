import type { NAbilityStructure } from '@bin-cfvg/protocol';

type VariableDef<TypeName extends string, ValueType> = [TypeName, ValueType];
type Clean<Item extends readonly unknown[]> = Item extends VariableDef<
  infer A,
  infer B
>
  ? B extends Array<infer C>
    ? VariableDef<A, C>
    : never
  : never;
type VariableTables = typeof tables;
type VariableTypes = VariableTables[number][0];
type VariableParams = Clean<VariableTables[number]>;

type ToMaps<T extends VariableDef<string, any>> = T extends [
  ...VariableDef<infer K, infer V>
]
  ? { [k in K]: V }
  : never;
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;
type VariableMaps = UnionToIntersection<ToMaps<VariableParams>>;

export type LimitVariable<T extends VariableTypes> =
  T extends keyof VariableMaps
    ? {
        type: T;
        value: VariableMaps[T];
      }
    : never;

function val<TypeName extends string, ValueType>(
  type: TypeName,
  values: ValueType[]
): VariableDef<TypeName, ValueType[]> {
  return [type, values];
}

export function variable<K extends VariableTypes>(
  type: K,
  value: VariableMaps[K]
): LimitVariable<K> {
  return { type, value } as any;
}

export const Vars = {
  number: (n: number) => variable('Number', n),
  fighter: {
    you: variable('Fighter', 'you'),
    opponent: variable('Fighter', 'opponent'),
  },
  zone: {
    vc: variable('Zone', { fighter: 'you', zone: 'VanguardCircle' }),
    rc: variable('Zone', { fighter: 'you', zone: 'RearguardCircle' }),
    gc: variable('Zone', { fighter: 'you', zone: 'GuardianCircle' }),
  },
  runtime: {
    contextCard: variable('Card', 'context'),
    thisUnit: variable('Unit', 'this'),
  },
} as const;

export const tables = [
  // 数值类型
  val('Number', [1]),
  // 战斗者枚举类型
  val('Fighter', ['you', 'opponent'] as const),
  // 领域类型
  val('Zone', [{} as { fighter: 'you' | 'opponent'; zone: string }]),
  // 单位类型
  val('Unit', ['this'] as const),
  // 卡片
  val('Card', ['context'] as const),
  // 卡片类型
  val('CardType', ['']),
  // 卡片名称
  val('CardName', ['']),
] as const;
