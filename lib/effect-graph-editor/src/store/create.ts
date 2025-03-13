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

      applyNodeChange: (change) => {
        const { setNodes, nodes } = flowStore.getState();
        switch (change.type) {
          case 'add':
            const newNodes = ([] as typeof nodes).concat(nodes);
            newNodes.splice(change.index ?? nodes.length, 0, change.item);
            setNodes(newNodes);
            break;
          case 'replace':
            setNodes(
              nodes.map((node) => (node.id === change.id ? change.item : node))
            );
            break;
          case 'remove':
            setNodes(nodes.filter((node) => node.id !== change.id));
            break;
          case 'position':
          // case 'dimensions':
          case 'select':
            const { id, type, ...update } = change;
            setNodes(
              nodes.map((node) =>
                node.id === change.id ? { ...node, ...update } : node
              )
            );
            break;
          case 'data':
            setNodes(
              nodes.map((node) =>
                node.id === change.id
                  ? { ...node, data: { ...node.data, ...change.data } }
                  : node
              )
            );
            break;
        }
      },

      applyNodeChanges: (changes) => {
        console.log('apply changes', changes);
        for (const change of changes) {
          get().applyNodeChange(change);
        }
      },
    };
  }, Object.is);
}
