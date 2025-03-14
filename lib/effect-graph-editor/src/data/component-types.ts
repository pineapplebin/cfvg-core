import { useMemo } from 'react';
import type { NodeTypes } from '@xyflow/react';
import EntryNode from '@/components/NodeStyle/EntryNode/index';
import ProcessNode from '@/components/NodeStyle/ProcessNode/index';
import Node from '@/components/NodeStyle/Node';

const componentNodeTypes: NodeTypes = {
  entry: EntryNode,
  process: ProcessNode,
  // process: Node,
};

export function useNodeTypes() {
  return useMemo(() => componentNodeTypes, []);
}
