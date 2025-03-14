import type { FC } from 'react';
import Header from './Header';
import styles from './Node.module.css';
import { cx } from '@/tools/cx';
import type { NodeProps } from '@xyflow/react';

const Node: FC<NodeProps> = ({ selected }) => {
  return (
    <div
      className={cx(styles.container, selected && styles.selected)}
      style={{ width: 250 }}
      onContextMenu={(ev) => {
        ev.preventDefault();
        ev.stopPropagation();
      }}
    >
      <Header
        title={
          <div>
            test
            <br />
            test
          </div>
        }
      />
    </div>
  );
};

export default Node;
