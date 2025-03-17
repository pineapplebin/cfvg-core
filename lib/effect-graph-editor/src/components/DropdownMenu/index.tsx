import { useMemo, type FC, type ReactElement } from 'react';
import { DropdownMenu as RadixDrop } from 'radix-ui';
import { MdKeyboardArrowRight } from 'react-icons/md';
import type { NInternal } from '@/internal/types';
import { useEditorStore } from '@/store';
import { useMemorizedFn } from '@/tools/ahooks';

import styles from './index.module.css';
import { Icons } from '../Icons';
import type { IconType } from 'react-icons';

export interface DropdownMenuProps {}

const Indicator: FC<{
  item: Exclude<NInternal.MenuItems, NInternal.MenuSeparator>;
}> = ({ item }) => {
  if (!item.icon) {
    return null;
  }
  if (typeof item.icon === 'function') {
    return <Icons icon={item.icon as IconType} />;
  }
  return item.icon as ReactElement;
};

const Render: FC<{
  item: NInternal.MenuItems;
  context: Parameters<NInternal.MenuNormalItem['onClick']>[0];
}> = ({ item, context }) => {
  if (item.type === 'item') {
    return (
      <RadixDrop.Item
        className={styles.DropdownMenuItem}
        onClick={() => item.onClick(context)}
      >
        <RadixDrop.ItemIndicator className={styles.DropdownMenuItemIndicator}>
          <Indicator item={item} />
        </RadixDrop.ItemIndicator>
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
            <Icons icon={MdKeyboardArrowRight} />
          </div>
        </RadixDrop.SubTrigger>
        <RadixDrop.SubContent
          className={styles.DropdownMenuSubContent}
          sideOffset={-4}
          alignOffset={-3}
        >
          <RadixDrop.ItemIndicator className={styles.DropdownMenuItemIndicator}>
            <Indicator item={item} />
          </RadixDrop.ItemIndicator>
          {item.items.map((sub, idx) => (
            <Render key={idx} item={sub} context={context} />
          ))}
        </RadixDrop.SubContent>
      </RadixDrop.Sub>
    );
  }

  return null;
};

const DropdownMenu: FC<DropdownMenuProps> = () => {
  const { openMenuConfig, setOpenMenuConfig } = useEditorStore(
    ({ openMenuConfig, setOpenMenuConfig }) => ({
      openMenuConfig,
      setOpenMenuConfig,
    })
  );
  const open = !!openMenuConfig;

  const handleClose = useMemorizedFn(() => {
    setOpenMenuConfig(null);
  });

  const context = useMemo(() => {
    return {
      config: openMenuConfig!,
    };
  }, [openMenuConfig]);

  return (
    <RadixDrop.Root open={open} onOpenChange={handleClose}>
      <RadixDrop.Trigger asChild>
        <div
          className={styles.trigger}
          style={{ left: openMenuConfig?.x, top: openMenuConfig?.y }}
        ></div>
      </RadixDrop.Trigger>
      <RadixDrop.Content className={styles.DropdownMenuContent} side="right">
        {openMenuConfig?.config.items.map((item, idx) => (
          <Render key={idx} item={item} context={context} />
        ))}
      </RadixDrop.Content>
    </RadixDrop.Root>
  );
};

export default DropdownMenu;
