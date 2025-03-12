import type { FC, ReactNode } from 'react';
import { cx } from '@/tools/cx';

import styles from './Header.module.css';

export interface HeaderProps {
  title: ReactNode;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className={cx(styles.container)}>
      <div className={styles.mask}></div>
      <div className={styles.contentHolder}>
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default Header;
