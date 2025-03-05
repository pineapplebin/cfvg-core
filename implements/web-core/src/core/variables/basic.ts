import { NCore } from '../spec.js';

export type TStringMetadata = NCore.VariableMetadataDefine<'string'>;
export type TStringType = NCore.MetadataToType<TStringMetadata>;

export class CoreString extends NCore.AbstractVariable<TStringType> {
  static typeName = 'String' as const;
  static metadata: TStringMetadata = 'string';
  value: TStringType;

  constructor(val: any) {
    super();
    this.value = String(val);
  }
}

export type TNumberMetadata = NCore.VariableMetadataDefine<'number'>;
export type TNumberType = NCore.MetadataToType<TNumberMetadata>;

export class CoreNumber extends NCore.AbstractVariable<TNumberType> {
  static typeName = 'Number' as const;
  static metadata: TNumberMetadata = 'number';
  value: TNumberType;

  constructor(val: any) {
    super();
    this.value = Number(val);
  }
}

export type TBooleanMetadata = NCore.VariableMetadataDefine<'boolean'>;
export type TBooleanType = NCore.MetadataToType<TBooleanMetadata>;

export class CoreBoolean extends NCore.AbstractVariable<TBooleanType> {
  static typeName = 'Boolean' as const;
  static metadata: TBooleanMetadata = 'boolean';
  value: TBooleanType;

  constructor(val: any) {
    super();
    this.value = Boolean(val);
  }
}
