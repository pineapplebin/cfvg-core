import type { NEffectGraph } from '..';

export namespace NInternal {
  export interface MenuSeparator {
    type: 'separator';
  }

  export interface MenuNormalItem {
    type: 'item';
    label: string;
    onClick: () => void;
  }

  export interface MenuSubGroup {
    type: 'sub-group';
    label: string;
    items: MenuItems[];
  }

  export type MenuItems = MenuNormalItem | MenuSeparator | MenuSubGroup;

  export interface MenuSetting {
    items: MenuItems[];
  }

  export type OpenMenuConfig = {
    node?: NEffectGraph.Nodes;
    x: number;
    y: number;
    config: MenuSetting;
  };
}
