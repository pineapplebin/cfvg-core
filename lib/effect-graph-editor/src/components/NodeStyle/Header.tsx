import type { FC, ReactNode } from 'react';
import { cx } from '@/tools/cx';

import styles from './Header.module.css';

export interface HeaderProps {
  title: ReactNode;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div className={cx('relative w-full')}>
      <div className={cx('absolute size-full', styles.mask)}></div>
      <div
        className={cx(
          'relative w-full min-h-28 px-8 py-4',
          'flex items-center'
        )}
      >
        <div className={cx(styles.title)}>{title}</div>
      </div>
    </div>
  );
};

export default Header;
