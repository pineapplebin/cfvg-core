import type { StoreApi } from 'zustand';
import {
  createWithEqualityFn,
  type UseBoundStoreWithEqualityFn,
} from 'zustand/traditional';
import type { useStoreApi } from '@xyflow/react';
import type { GraphEditorState } from './type';
import { applyChanges } from './utils/apply-changes';
import type { NEffectGraph } from '../types';

export interface CreateStoreOptions {
  flowStore: ReturnType<typeof useStoreApi<NEffectGraph.Nodes>>;
}

export function createStore({
  flowStore,
}: CreateStoreOptions): UseBoundStoreWithEqualityFn<
  StoreApi<GraphEditorState>
> {
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
        const newNodes = applyChanges(changes, nodes);
        setNodes(newNodes);
      },
    };
  }, Object.is);
}
