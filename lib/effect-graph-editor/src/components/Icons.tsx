import { cx } from '@/tools/cx';
import type { ComponentType, FC } from 'react';
import type { IconBaseProps, IconType } from 'react-icons';

export const Icons: FC<{ icon: IconType; props?: IconBaseProps }> = ({
  icon,
  props,
}) => {
  const Comp = icon as ComponentType<IconBaseProps>;
  return (
    <div>
      <Comp
        size={20}
        color="#fff"
        {...props}
        className={cx(props?.className)}
      />
    </div>
  );
};
