import type { FC } from 'react';
import type { NodeProps } from '@xyflow/react';
import { IoPlay } from 'react-icons/io5';
import { AiOutlineNodeIndex } from 'react-icons/ai';
import { cx } from '@/tools/cx';
import type { NEffectGraph } from '@/types';
import { Icons } from '@/components/Icons';
import Header from '../Header';
import CustomHandle from '@/components/CustomHandle';

export interface ProcessNodeProps extends NodeProps<NEffectGraph.ProcessNode> {}

const ProcessNode: FC<ProcessNodeProps> = ({ data }) => {
  return (
    <div
      className={cx(
        'relative overflow-hidden rounded-8',
        'b-2 b-solid b-black bg-#222',
        'shadow-md shadow-black/80'
      )}
      style={{ width: 230 }}
    >
      <Header
        title={data.title}
        flavor="blue"
        iconSlot={
          <Icons
            icon={AiOutlineNodeIndex}
            props={{ size: 24, color: '#5bd7ff' }}
          />
        }
      />
      <div className="flex items-start">
        <div className="grow-1 pl-4 py-4">
          <CustomHandle className="size-20!" type="target">
            <Icons icon={IoPlay} />
          </CustomHandle>
        </div>
        <div className="w-6 shrink-0"></div>
        <div className="grow-1"></div>
      </div>
    </div>
  );
};

export default ProcessNode;
