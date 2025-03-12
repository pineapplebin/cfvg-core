import { createWithEqualityFn } from 'zustand/traditional';
import type { GraphEditorState } from './type';
import type { useStoreApi } from '@xyflow/react';

export interface CreateStoreOptions {
  flowStore: ReturnType<typeof useStoreApi>;
}

export function createStore({ flowStore }: CreateStoreOptions) {
  return createWithEqualityFn<GraphEditorState>((set, get) => {
    return {
      openMenuConfig: null,
      setOpenMenuConfig: (config) => {
        set({ openMenuConfig: config });
      },
    };
  }, Object.is);
}
