import type { NEffectGraph } from '@/types';
import { useState } from 'react';

export interface GraphDataState {
  nodes: NEffectGraph.Nodes[];
}

export const ENTRY_ID = '$$effect-graph:entry';

function initEntryNode(): NEffectGraph.EntryNode {
  return {
    id: ENTRY_ID,
    type: 'entry',
    data: { desc: '效果' },
    position: { x: 0, y: 0 },
    draggable: false,
  };
}

export function useGraphDataStore(): GraphDataState {
  const [nodes, setNodes] = useState<NEffectGraph.Nodes[]>([initEntryNode()]);

  return {
    nodes,
  };
}
