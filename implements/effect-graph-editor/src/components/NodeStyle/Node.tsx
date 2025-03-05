import type { FC } from 'react';
import Header from './Header';
import styles from './Node.module.css';

const Node: FC = () => {
  return (
    <div className={styles.container} style={{ width: 250 }}>
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
