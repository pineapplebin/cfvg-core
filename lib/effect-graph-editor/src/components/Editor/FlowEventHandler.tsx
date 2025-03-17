import type { FC, MouseEventHandler, PropsWithChildren } from 'react';
import { ReactFlow, type ProOptions, type OnConnectEnd } from '@xyflow/react';
import { useMemorizedFn } from '@/tools/ahooks';
import { useNodeTypes } from '@/data/component-types';
import { useEditorStore } from '@/store';
import { getCreateNodesMenuSetting } from './actions/create-nodes-menu';
import { calculateGestureEvent } from '@/tools/ui';

export interface FlowStateHandlerProps {}

const proOptions: ProOptions = { hideAttribution: true };

const FlowEventHandler: FC<PropsWithChildren<FlowStateHandlerProps>> = ({
  children,
}) => {
  const nodeTypes = useNodeTypes();

  const { setOpenMenuConfig, applyNodeChanges } = useEditorStore(
    ({ setOpenMenuConfig, applyNodeChanges }) => ({
      setOpenMenuConfig,
      applyNodeChanges,
    })
  );

  const handleConnectEnd = useMemorizedFn<OnConnectEnd>((ev, connection) => {
    const merged = calculateGestureEvent(ev);
    if (!connection.toNode && !connection.toHandle) {
      setOpenMenuConfig({
        x: merged.offsetX,
        y: merged.offsetY,
        config: getCreateNodesMenuSetting({ applyNodeChanges }),
      });
    }
  });

  const handleContextMenu = useMemorizedFn<MouseEventHandler>((ev) => {
    ev.preventDefault();
    const merged = calculateGestureEvent(ev);
    setOpenMenuConfig({
      x: merged.offsetX,
      y: merged.offsetY,
      config: getCreateNodesMenuSetting({ applyNodeChanges }),
    });
  });

  return (
    <ReactFlow
      nodesDraggable
      colorMode="light"
      nodeTypes={nodeTypes}
      proOptions={proOptions}
      onConnectEnd={handleConnectEnd}
      onContextMenu={handleContextMenu}
      onNodesChange={applyNodeChanges}
      // onEdgesChange={}
    >
      {children}
    </ReactFlow>
  );
};

export default FlowEventHandler;
