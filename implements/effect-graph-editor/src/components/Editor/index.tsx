import { useCallback, type FC } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  BackgroundVariant,
  type ProOptions,
  type OnConnectEnd,
} from '@xyflow/react';
import { useNodeTypes } from '@/hooks/component-types';
import { useGraphDataStore } from '@/hooks/graph-data';
import DropdownMenu from '../DropdownMenu';

import styles from './index.module.css';

const proOptions: ProOptions = { hideAttribution: true };

const Editor: FC = () => {
  const nodeTypes = useNodeTypes();
  const state = useGraphDataStore();

  const handleOnConnectEnd = useCallback<OnConnectEnd>(
    (ev, connection) => {
      console.log(ev, connection);
      if (!connection.toNode && !connection.toHandle) {
        if ('clientX' in ev) {
          state.setMenuOpenConfig({
            x: ev.clientX,
            y: ev.clientY,
            config: {
              items: [
                {
                  type: 'sub-group',
                  label: '添加',
                  items: [
                    {
                      type: 'item',
                      label: '添加节点',
                      onClick: () => {
                        console.log('add node');
                      },
                    },
                  ],
                },
              ],
            },
          });
        } else {
          // show popup menu
        }
      }
    },
    [state.setMenuOpenConfig]
  );

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
        openConfig={state.menuOpenConfig}
        onOpenChange={() => state.setMenuOpenConfig(null)}
      />
    </div>
  );
};

export default Editor;
