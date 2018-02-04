import {
  IContext,
  IBranchContext,
  SequenceFactory,
  SequenceWithPropsFactory,
  ConnectFactory
} from '@cerebral/fluent';
import { State } from './app/types';

export interface Context<Props = {}> extends IContext<Props> {
  state: State;
}

export interface BranchContext<Paths, Props = {}> extends IBranchContext<Paths, Props> {
  state: State;
}

export const connect = ConnectFactory<State, {}>();

export const sequence = SequenceFactory<Context>();

export const sequenceWithProps = SequenceWithPropsFactory<Context>();