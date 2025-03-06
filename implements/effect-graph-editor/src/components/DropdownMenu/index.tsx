import type { FC } from 'react';
import { DropdownMenu as RadixDrop } from 'radix-ui';
import styles from './index.module.css';

export interface DropdownMenuProps {
  openConfig?: { x: number; y: number } | null;
  onOpenChange?: (open: boolean) => void;
}

const DropdownMenu: FC<DropdownMenuProps> = ({ openConfig, onOpenChange }) => {
  const open = !!openConfig;

  return (
    <RadixDrop.Root open={open} onOpenChange={onOpenChange}>
      <RadixDrop.Trigger asChild>
        <div
          className={styles.trigger}
          style={{ left: openConfig?.x, top: openConfig?.y }}
        ></div>
      </RadixDrop.Trigger>
      <RadixDrop.Content className={styles.DropdownMenuContent} side="right">
        <RadixDrop.Item className={styles.DropdownMenuItem} title="test">
          item
        </RadixDrop.Item>
      </RadixDrop.Content>
    </RadixDrop.Root>
  );
};

export default DropdownMenu;
