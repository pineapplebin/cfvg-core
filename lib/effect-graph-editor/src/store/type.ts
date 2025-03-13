import type { NInternal } from '@/internal/types';
import type { NEffectGraph } from '@/types';
import type { NodeChange } from '@xyflow/react';

export interface GraphEditorState {
  /**
   * 弹出菜单配置
   */
  openMenuConfig: NInternal.OpenMenuConfig | null;

  /**
   * 修改弹出菜单配置
   *
   * null 表示关闭弹出菜单
   */
  setOpenMenuConfig: (config: NInternal.OpenMenuConfig | null) => void;

  /**
   * 应用单个节点变更
   */
  applyNodeChange: (change: NInternal.NodeChange) => void;

  /**
   * 批量应用节点变更
   */
  applyNodeChanges: (changes: NInternal.NodeChange[]) => void;
}
