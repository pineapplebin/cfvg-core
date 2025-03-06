import type { FC } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  BackgroundVariant,
  type Node,
  type ProOptions,
  type ReactFlowProps,
} from '@xyflow/react';
import { useNodeTypes } from '@/hooks/component-types';
import { useGraphDataStore } from '@/hooks/graph-data';

import styles from './index.module.css';

const proOptions: ProOptions = { hideAttribution: true };

const Editor: FC = () => {
  const nodeTypes = useNodeTypes();
  const state = useGraphDataStore();

  const handleOnConnectEnd: ReactFlowProps['onConnectEnd'] = (
    ev,
    connection
  ) => {
    //
    if (!connection.toNode && !connection.toHandle) {
    }
  };

  return (
    <div className={styles.container}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={state.nodes}
        proOptions={proOptions}
        nodesDraggable
        onConnectEnd={console.log}
      >
        <Background variant={BackgroundVariant.Cross} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Editor;
