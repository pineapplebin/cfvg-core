import { NCore } from '../spec.js';

export type TStringMetadata = 'string';
export type TStringType = NCore.MetadataToType<TStringMetadata>;

export class CoreString extends NCore.AbstractVariable<TStringType> {
  static typeName = 'String' as const;
  static metadata = 'string' as const;
  value: string;

  constructor(val: any) {
    super();
    this.value = String(val);
  }
}

export type TNumberMetadata = 'number';
export type TNumberType = NCore.MetadataToType<TNumberMetadata>;

export class CoreNumber extends NCore.AbstractVariable<TNumberType> {
  static typeName = 'Number' as const;
  static metadata = 'number' as const;
  value: number;

  constructor(val: any) {
    super();
    this.value = Number(val);
  }
}

export type TBooleanMetadata = 'boolean';
export type TBooleanType = NCore.MetadataToType<TBooleanMetadata>;

export class CoreBoolean extends NCore.AbstractVariable<TBooleanType> {
  static typeName = 'Boolean' as const;
  static metadata = 'boolean' as const;
  value: boolean;

  constructor(val: any) {
    super();
    this.value = Boolean(val);
  }
}
