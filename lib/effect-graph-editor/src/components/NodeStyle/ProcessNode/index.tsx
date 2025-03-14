import type { FC } from 'react';
import type { NodeProps } from '@xyflow/react';
import { cx } from '@/tools/cx';
import type { NEffectGraph } from '@/types';
import Header from '../Header';

export interface ProcessNodeProps extends NodeProps<NEffectGraph.ProcessNode> {}

const ProcessNode: FC<ProcessNodeProps> = ({ data }) => {
  console.log('ProcessNode', data);
  return (
    <div
      className={cx(
        'relative overflow-hidden rounded-8',
        'b-2 b-solid b-black bg-#222',
        'shadow-sm shadow-black/80'
      )}
      style={{ width: 250 }}
    >
      <Header title={data.title} />
    </div>
  );
};

export default ProcessNode;
