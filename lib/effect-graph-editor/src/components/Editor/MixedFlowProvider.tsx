import {
  useState,
  type FC,
  type PropsWithChildren,
  type ComponentProps,
} from 'react';
import { ReactFlowProvider, useStoreApi } from '@xyflow/react';
import { createStore, MixedFlowContext } from '@/store';

const GraphStateWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  const flowStore = useStoreApi();
  const [store] = useState(() => createStore({ flowStore }));

  return (
    <MixedFlowContext.Provider value={store}>
      {children}
    </MixedFlowContext.Provider>
  );
};

type ReactFlowProviderProps = ComponentProps<typeof ReactFlowProvider>;

export interface MixedFlowProviderProps
  extends Pick<ReactFlowProviderProps, 'initialNodes' | 'initialEdges'> {}

const MixedFlowProvider: FC<PropsWithChildren<MixedFlowProviderProps>> = ({
  children,
  initialEdges,
  initialNodes,
}) => {
  return (
    <ReactFlowProvider initialNodes={initialNodes} initialEdges={initialEdges}>
      <GraphStateWrapper>{children}</GraphStateWrapper>
    </ReactFlowProvider>
  );
};

export default MixedFlowProvider;
