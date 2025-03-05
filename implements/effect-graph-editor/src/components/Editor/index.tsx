import type { FC } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  BackgroundVariant,
  type Node,
} from '@xyflow/react';

import styles from './index.module.css';
import { useNodeTypes } from '@/hooks/component-types';

const Editor: FC = () => {
  const nodeTypes = useNodeTypes();

  const nodes: Node[] = [
    { id: 'test', type: 'test', data: {}, position: { x: 0, y: 0 } },
  ];

  return (
    <div className={styles.container}>
      <ReactFlow nodeTypes={nodeTypes} nodes={nodes}>
        <Background variant={BackgroundVariant.Cross} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Editor;
