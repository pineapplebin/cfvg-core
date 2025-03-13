import type { NEffectGraph } from '../types';
import { type NodeChange as FlowNodeChange, type Node } from '@xyflow/react';

export namespace NInternal {
  export interface MenuSeparator {
    type: 'separator';
  }

  export interface MenuNormalItem {
    type: 'item';
    label: string;
    onClick: (ctx: { config: OpenMenuConfig }) => void;
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

  export type NodeDataChange<N extends Node = NEffectGraph.Nodes> = {
    type: 'data';
    id: string;
    data: N['data'];
  };

  export type NodeChange =
    | FlowNodeChange<NEffectGraph.Nodes>
    | NodeDataChange<NEffectGraph.Nodes>;
}
