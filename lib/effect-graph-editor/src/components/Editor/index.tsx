import { type FC } from 'react';
import { Background, Controls, BackgroundVariant } from '@xyflow/react';
import type { NEffectGraph } from '@/types';
import DropdownMenu from '../DropdownMenu';
import MixedFlowProvider from './MixedFlowProvider';
import FlowStateHandler from './FlowStateHandler';

import styles from './index.module.css';

export interface GraphEditorProps {
  initialValue?: NEffectGraph.EffectLogic;
  onChange?: (value: NEffectGraph.EffectLogic) => void;
}

const Editor: FC<GraphEditorProps> = ({ initialValue, onChange }) => {
  return (
    <div className={styles.container}>
      <MixedFlowProvider
        initialNodes={initialValue?.nodes}
        initialEdges={initialValue?.edges}
      >
        <FlowStateHandler>
          <Background variant={BackgroundVariant.Dots} />
          <Controls />
        </FlowStateHandler>
        <DropdownMenu />
      </MixedFlowProvider>
    </div>
  );
};

export default Editor;
