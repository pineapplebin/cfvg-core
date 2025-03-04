import { NCore } from '../spec.js';
import { CoreBoolean, CoreNumber, CoreString } from './basic.js';
import { CoreFighter } from './fighter.js';

export const defineVariables = [
  CoreString,
  CoreNumber,
  CoreBoolean,
  CoreFighter,
];

export type AllVariableTypeNames = (typeof defineVariables)[number]['typeName'];
