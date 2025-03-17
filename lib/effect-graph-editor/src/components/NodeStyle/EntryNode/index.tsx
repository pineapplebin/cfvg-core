import type { FC } from 'react';
import { type NodeProps } from '@xyflow/react';
import { IoPlay } from 'react-icons/io5';
import type { NEffectGraph } from '@/types';
import { Icons } from '@/components/Icons';
import { cx } from '@/tools/cx';
import styles from './index.module.css';
import CustomHandle from '@/components/CustomHandle';

export interface EntryNodeProps extends NodeProps<NEffectGraph.EntryNode> {}

const EntryNode: FC<EntryNodeProps> = ({ data }) => {
  return (
    <div
      className={cx(
        'relative size-44 rounded-8 overflow-hidden',
        'b-2 b-solid b-black',
        'shadow-md shadow-black/80'
      )}
    >
      <div className={cx(styles.bg, 'absolute size-full')}></div>
      <div className="relative size-full flex flex-col flex-center">
        <CustomHandle type="source">
          <Icons icon={IoPlay} />
        </CustomHandle>
        <div className={cx('text-12 font-bold text-white')}>{data.desc}</div>
      </div>
    </div>
  );
};

export default EntryNode;
