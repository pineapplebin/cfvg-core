import { useMemo } from 'react';
import type { NodeTypes } from '@xyflow/react';
import Node from '@/components/NodeStyle/Node';

const componentNodeTypes: NodeTypes = {
  test: Node,
};

export function useNodeTypes() {
  return useMemo(() => componentNodeTypes, []);
}
