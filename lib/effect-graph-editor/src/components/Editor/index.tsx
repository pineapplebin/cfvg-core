import { useCallback, type FC } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  BackgroundVariant,
  type ProOptions,
  type OnConnectEnd,
  ReactFlowProvider,
} from '@xyflow/react';
import { useNodeTypes } from '@/data/component-types';
import { useGraphDataStore } from '@/data/graph-data';
import { preventDefault, useMemorizedFn } from '@/tools/ahooks';
import DropdownMenu from '../DropdownMenu';

import styles from './index.module.css';
import FlowStateHandler from './FlowStateHandler';

const proOptions: ProOptions = { hideAttribution: true };

const Editor: FC = () => {
  const state = useGraphDataStore();

  const handleOnConnectEnd = useMemorizedFn<OnConnectEnd>((ev, connection) => {
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
  });

  return (
    <div className={styles.container}>
      <ReactFlowProvider initialNodes={state.nodes}>
        <FlowStateHandler>
          <Background variant={BackgroundVariant.Dots} />
          <Controls />
        </FlowStateHandler>
        <DropdownMenu
          openConfig={state.menuOpenConfig}
          onOpenChange={() => state.setMenuOpenConfig(null)}
        />
      </ReactFlowProvider>
    </div>
  );
};

export default Editor;
