import { createContext, useContext } from 'react';
import type { createStore } from './create';

export const MixedFlowContext = createContext<ReturnType<
  typeof createStore
> | null>(null);

export const useFlowContext = () => {
  return useContext(MixedFlowContext);
};
