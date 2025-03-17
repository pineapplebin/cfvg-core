import {
  useState,
  type FC,
  type PropsWithChildren,
  type ComponentProps,
  useEffect,
} from 'react';
import { shallow } from 'zustand/shallow';
import { ReactFlowProvider, useStoreApi } from '@xyflow/react';
import { createStore, MixedFlowContext } from '@/store';
import type { NEffectGraph } from '@/types';

const GraphStateWrapper: FC<
  PropsWithChildren<Pick<MixedFlowProviderProps, 'onChange'>>
> = ({ children, onChange }) => {
  const flowStore = useStoreApi<NEffectGraph.Nodes>();
  const [store] = useState(() => createStore({ flowStore }));

  useEffect(() => {
    const unsubscribe = flowStore.subscribe(
      ({ nodes, edges }, { nodes: oldNodes, edges: oldEdges }) => {
        if (!shallow({ nodes, edges }, { node: oldNodes, edges: oldEdges })) {
          onChange?.({ nodes, edges });
        }
      }
    );

    return unsubscribe;
  }, [flowStore]);

  return (
    <MixedFlowContext.Provider value={store}>
      {children}
    </MixedFlowContext.Provider>
  );
};

type ReactFlowProviderProps = ComponentProps<typeof ReactFlowProvider>;

export interface MixedFlowProviderProps
  extends Pick<ReactFlowProviderProps, 'initialNodes' | 'initialEdges'> {
  onChange?: (value: NEffectGraph.EffectLogic) => void;
}

const MixedStateProvider: FC<PropsWithChildren<MixedFlowProviderProps>> = ({
  children,
  initialEdges,
  initialNodes,
  onChange,
}) => {
  return (
    <ReactFlowProvider initialNodes={initialNodes} initialEdges={initialEdges}>
      <GraphStateWrapper onChange={onChange}>{children}</GraphStateWrapper>
    </ReactFlowProvider>
  );
};

export default MixedStateProvider;
