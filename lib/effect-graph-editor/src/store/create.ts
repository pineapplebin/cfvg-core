import { createWithEqualityFn } from 'zustand/traditional';
import type { GraphEditorState } from './type';
import type { useStoreApi } from '@xyflow/react';
import { applyChanges } from './utils/apply-changes';
import type { NEffectGraph } from '..';

export interface CreateStoreOptions {
  flowStore: ReturnType<typeof useStoreApi<NEffectGraph.Nodes>>;
}

export function createStore({ flowStore }: CreateStoreOptions) {
  return createWithEqualityFn<GraphEditorState>((set, get) => {
    return {
      openMenuConfig: null,
      setOpenMenuConfig: (config) => {
        set({ openMenuConfig: config });
      },

      applyNodeChange: (change) => {
        get().applyNodeChanges([change]);
      },

      applyNodeChanges: (changes) => {
        const { nodes, setNodes } = flowStore.getState();
        console.log('applyChanges', nodes, changes);
        const newNodes = applyChanges(changes, nodes);
        setNodes(newNodes);
      },
    };
  }, Object.is);
}
