import type { FC, PropsWithChildren } from 'react';
import {
  ReactFlow,
  useStoreApi,
  type ProOptions,
  type ReactFlowProps,
} from '@xyflow/react';
import { preventDefault } from '@/tools/ahooks';
import { useNodeTypes } from '@/data/component-types';

export type ExposedReactFlowProps = Pick<ReactFlowProps, 'id'>;
export interface FlowStateHandlerProps extends ExposedReactFlowProps {}

const proOptions: ProOptions = { hideAttribution: true };

const FlowStateHandler: FC<PropsWithChildren<FlowStateHandlerProps>> = ({
  children,
  ...exposedProps
}) => {
  const api = useStoreApi();
  const nodeTypes = useNodeTypes();

  return (
    <ReactFlow
      nodesDraggable
      colorMode="light"
      nodeTypes={nodeTypes}
      proOptions={proOptions}
      onContextMenu={preventDefault}
      {...exposedProps}
    >
      {children}
    </ReactFlow>
  );
};

export default FlowStateHandler;
