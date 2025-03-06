import { useMemo } from 'react';
import type { NodeTypes } from '@xyflow/react';
import EntryNode from '@/components/NodeStyle/EntryNode';

const componentNodeTypes: NodeTypes = {
  entry: EntryNode,
};

export function useNodeTypes() {
  return useMemo(() => componentNodeTypes, []);
}
