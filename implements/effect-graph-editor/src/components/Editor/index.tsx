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
import DropdownMenu from '../DropdownMenu';

import styles from './index.module.css';

const proOptions: ProOptions = { hideAttribution: true };

const Editor: FC = () => {
  const nodeTypes = useNodeTypes();
  const state = useGraphDataStore();

  const handleOnConnectEnd: ReactFlowProps['onConnectEnd'] = (
    ev,
    connection
  ) => {
    console.log(ev, connection);
    if (!('clientX' in ev)) {
      return;
    }
    if (!connection.toNode && !connection.toHandle) {
      state.setDropdownMenuOpenConfig({ x: ev.clientX, y: ev.clientY });
    }
  };

  return (
    <div className={styles.container}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={state.nodes}
        proOptions={proOptions}
        nodesDraggable
        onConnectEnd={handleOnConnectEnd}
      >
        <Background variant={BackgroundVariant.Cross} />
        <Controls />
      </ReactFlow>
      <DropdownMenu
        openConfig={state.dropdownMenuOpenConfig}
        onOpenChange={() => state.setDropdownMenuOpenConfig(null)}
      />
    </div>
  );
};

export default Editor;
