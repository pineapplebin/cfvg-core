import { useContext } from 'react';
import { useStoreWithEqualityFn as useZustandStore } from 'zustand/traditional';
import { MixedFlowContext } from './context';
import type { GraphEditorState } from '.';

export function useEditorStore<U = unknown>(
  selector: (state: GraphEditorState) => U,
  eq?: (a: U, b: U) => boolean
) {
  const store = useContext(MixedFlowContext);

  if (!store) {
    throw new Error(
      'useEditorStore must be used within a MixedFlowContext.Provider'
    );
  }

  return useZustandStore(store, selector, eq);
}
