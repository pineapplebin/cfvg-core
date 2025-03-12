import type { FC } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { ThickArrowRightIcon } from '@radix-ui/react-icons';
import type { NEffectGraph } from '@/types';

import styles from './index.module.css';

export interface EntryNodeProps extends NodeProps<NEffectGraph.EntryNode> {}

const EntryNode: FC<EntryNodeProps> = ({ data }) => {
  return (
    <div
      className={styles.container}
      onContextMenu={(ev) => console.log('entry node context menu')}
    >
      <div className={styles.handleWrapper}>
        <Handle
          className={styles.handle}
          type="source"
          position={Position.Bottom}
        >
          <ThickArrowRightIcon
            width="100%"
            height="100%"
            style={{ pointerEvents: 'none' }}
          />
        </Handle>
      </div>
      <div className={styles.desc}>{data.desc}</div>
    </div>
  );
};

export default EntryNode;
