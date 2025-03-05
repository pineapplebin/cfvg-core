import { CoreBoolean, CoreNumber, CoreString } from './basic.js';
import { CoreFighter } from './fighter.js';

export type AllVariableTypeNames = (typeof defineVariables)[number]['typeName'];

export const defineVariables = [
  CoreString,
  CoreNumber,
  CoreBoolean,
  CoreFighter,
];
