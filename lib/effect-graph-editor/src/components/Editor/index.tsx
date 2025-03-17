import { type FC } from 'react';
import { cx } from '@/tools/cx';
import { Background, Controls, BackgroundVariant } from '@xyflow/react';
import type { NEffectGraph } from '@/types';
import DropdownMenu from '../DropdownMenu';
import MixedStateProvider from './MixedStateProvider';
import FlowEventHandler from './FlowEventHandler';

export interface GraphEditorProps {
  initialValue?: NEffectGraph.EffectLogic;
  onChange?: (value: NEffectGraph.EffectLogic) => void;
}

const Editor: FC<GraphEditorProps> = ({ initialValue, onChange }) => {
  return (
    <div className={cx('size-full min-w-150 min-h-150 box-border text-14')}>
      <MixedStateProvider
        initialNodes={initialValue?.nodes}
        initialEdges={initialValue?.edges}
        onChange={onChange}
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
