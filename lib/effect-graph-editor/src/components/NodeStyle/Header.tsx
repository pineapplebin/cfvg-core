import { useMemo, type FC, type ReactNode } from 'react';
import { cx } from '@/tools/cx';

import styles from './Header.module.css';

export interface HeaderProps {
  title: ReactNode;
  flavor?: 'blue';
  iconSlot?: ReactNode;
}

const Header: FC<HeaderProps> = ({ title, flavor, iconSlot }) => {
  const flavorClz = useMemo(() => {
    if (!flavor) return '';
    return styles[flavor];
  }, [flavor]);

  return (
    <div className={cx('relative w-full')}>
      <div className={cx('absolute size-full', styles.mask, flavorClz)}></div>
      <div
        className={cx(
          'relative w-full min-h-24 px-4 py-2',
          'flex items-center'
        )}
      >
        {iconSlot}
        <div className={cx(styles.title)}>{title}</div>
      </div>
    </div>
  );
};

export default Header;
