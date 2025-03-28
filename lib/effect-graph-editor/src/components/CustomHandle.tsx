import { cx } from '@/tools/cx';
import { Handle, Position, type HandleProps } from '@xyflow/react';
import type { CSSProperties, FC, PropsWithChildren } from 'react';

import commonStyle from './common.module.css';

export interface CustomHandleProps {
  className?: string;
  style?: CSSProperties;
  type: HandleProps['type'];
}

const CustomHandle: FC<PropsWithChildren<CustomHandleProps>> = ({
  children,
  className,
  style,
  type,
}) => {
  return (
    <Handle
      className={cx(commonStyle.normalizeHandle, className)}
      style={style}
      type={type}
      position={Position.Bottom}
    >
      <div className="leading-[1] pointer-events-none touch-none">
        {children}
      </div>
    </Handle>
  );
};

export default CustomHandle;
