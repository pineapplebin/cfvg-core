import type { FC } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import type { NEffectGraph } from '@/types';

import styles from './index.module.css';

export interface EntryNodeProps extends NodeProps<NEffectGraph.EntryNode> {}

const EntryNode: FC<EntryNodeProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.handleWrapper}>
        <Handle
          className={styles.handle}
          type="source"
          position={Position.Bottom}
        />
      </div>
      <div className={styles.desc}>{data.desc}</div>
    </div>
  );
};

export default EntryNode;
