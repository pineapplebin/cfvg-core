import type { FC, ReactElement, ReactNode } from 'react';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { DropdownMenu as RadixDrop } from 'radix-ui';
import styles from './index.module.css';
import type { NInternal } from '@/internal/types';

export interface DropdownMenuProps {
  openConfig?: NInternal.OpenMenuConfig | null;
  onOpenChange?: (open: boolean) => void;
}

function Render({ item }: { item: NInternal.MenuItems }): ReactElement | null {
  if (item.type === 'item') {
    return (
      <RadixDrop.Item
        className={styles.DropdownMenuItem}
        onClick={item.onClick}
      >
        {item.label}
      </RadixDrop.Item>
    );
  }

  if (item.type === 'separator') {
    return <RadixDrop.Separator className={styles.DropdownMenuSeparator} />;
  }

  if (item.type === 'sub-group') {
    return (
      <RadixDrop.Sub>
        <RadixDrop.SubTrigger className={styles.DropdownMenuSubTrigger}>
          {item.label}
          <div className={styles.RightSlot}>
            <ChevronRightIcon />
          </div>
        </RadixDrop.SubTrigger>
        <RadixDrop.SubContent
          className={styles.DropdownMenuSubContent}
          sideOffset={2}
          alignOffset={-5}
        >
          {item.items.map((sub, idx) => (
            <Render key={idx} item={sub} />
          ))}
        </RadixDrop.SubContent>
      </RadixDrop.Sub>
    );
  }

  return null;
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
        {openConfig?.config.items.map((item, idx) => (
          <Render key={idx} item={item} />
        ))}
      </RadixDrop.Content>
    </RadixDrop.Root>
  );
};

export default DropdownMenu;
