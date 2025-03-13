import { type FC } from 'react';
import { Background, Controls, BackgroundVariant } from '@xyflow/react';
import type { NEffectGraph } from '@/types';
import DropdownMenu from '../DropdownMenu';
import MixedStateProvider from './MixedStateProvider';
import FlowEventHandler from './FlowEventHandler';

import styles from './index.module.css';

export interface GraphEditorProps {
  initialValue?: NEffectGraph.EffectLogic;
  onChange?: (value: NEffectGraph.EffectLogic) => void;
}

const Editor: FC<GraphEditorProps> = ({ initialValue, onChange }) => {
  console.log(initialValue);
  return (
    <div className={styles.container}>
      <MixedStateProvider
        initialNodes={initialValue?.nodes}
        initialEdges={initialValue?.edges}
      >
        <FlowEventHandler>
          <Background variant={BackgroundVariant.Dots} />
          <Controls />
        </FlowEventHandler>
        <DropdownMenu />
      </MixedStateProvider>
    </div>
  );
};

export default Editor;
