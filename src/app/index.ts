import { Module } from '@cerebral/fluent';
import { ModuleState } from './types';

const state: ModuleState = {
  foo: 'FLUENT'
};

export const module = Module({
  state
});