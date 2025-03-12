import type { FC, PropsWithChildren, ReactNode } from 'react';
import { ReactFlow, type ProOptions, type OnConnectEnd } from '@xyflow/react';
import { preventDefault, useMemorizedFn } from '@/tools/ahooks';
import { useNodeTypes } from '@/data/component-types';
import { useEditorStore } from '@/store';

export interface FlowStateHandlerProps {}

const proOptions: ProOptions = { hideAttribution: true };

const FlowStateHandler: FC<PropsWithChildren<FlowStateHandlerProps>> = ({
  children,
}) => {
  const nodeTypes = useNodeTypes();
  const { setOpenMenuConfig } = useEditorStore(({ setOpenMenuConfig }) => ({
    setOpenMenuConfig,
  }));

  const handleConnectEnd = useMemorizedFn<OnConnectEnd>((ev, connection) => {
    if (!('touches' in ev) && !connection.toNode && !connection.toHandle) {
      setOpenMenuConfig({
        x: ev.clientX,
        y: ev.clientY,
        config: {
          items: [
            {
              type: 'sub-group',
              label: '新增',
              items: [
                {
                  type: 'item',
                  label: '节点',
                  onClick: () => console.log('新增节点'),
                },
              ],
            },
          ],
        },
      });
    }
  });

  return (
    <ReactFlow
      nodesDraggable
      colorMode="light"
      nodeTypes={nodeTypes}
      proOptions={proOptions}
      onContextMenu={preventDefault}
      onConnectEnd={handleConnectEnd}
    >
      {children}
    </ReactFlow>
  );
};

export default FlowStateHandler;
