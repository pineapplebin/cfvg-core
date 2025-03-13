import { useMemo } from 'react';
import type { NodeTypes } from '@xyflow/react';
import EntryNode from '@/components/NodeStyle/EntryNode';
import Node from '@/components/NodeStyle/Node';

const componentNodeTypes: NodeTypes = {
  entry: EntryNode,
  process: Node,
};

export function useNodeTypes() {
  return useMemo(() => componentNodeTypes, []);
}
