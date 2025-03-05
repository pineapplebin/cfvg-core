import type { AllVariableTypeNames } from './variables/index.js';

export namespace NCore {
  type VariableCompareResult = 'equal' | 'not-equal';

  export type VariableTypeMetadataBasicType = 'string' | 'number' | 'boolean';

  export type VariableTypeMetadataComplexTypeField = {
    key: string;
    type: VariableTypeMetadata;
  };
  export type VariableTypeMetadataObjectType = {
    fields: VariableTypeMetadataComplexTypeField[];
  };
  export type VariableTypeMetadataEnumType<T = any> = {
    enums: {
      name: string;
      value: T;
    }[];
  };

  export type VariableTypeMetadata =
    | VariableTypeMetadataBasicType
    | VariableTypeMetadataObjectType
    | VariableTypeMetadataEnumType;

  export type VariableMetadataDefine<T extends VariableTypeMetadata> = T;

  export type MetadataToType<M extends VariableTypeMetadata> =
    M extends 'string'
      ? string
      : M extends 'number'
      ? number
      : M extends 'boolean'
      ? boolean
      : M extends VariableTypeMetadataObjectType
      ? {
          [K in M['fields'][number]['key']]: MetadataToType<
            M['fields'][number]['type']
          >;
        }
      : M extends VariableTypeMetadataEnumType
      ? M['enums'][number]['value']
      : never;

  export type AbstractVariableConstructor<M extends VariableTypeMetadata> = {
    name: string;
    metadata: M;
    new (value: any): AbstractVariable<NCore.MetadataToType<M>>;
  };

  export abstract class AbstractVariable<V> {
    static typeName: string;
    static metadata: VariableTypeMetadata;

    abstract value: V;
    compare(other: AbstractVariable<V>): VariableCompareResult {
      return this.value === other.value ? 'equal' : 'not-equal';
    }
  }

  export namespace Predefine {
    export type VariableTypes = AllVariableTypeNames;
  }
}
