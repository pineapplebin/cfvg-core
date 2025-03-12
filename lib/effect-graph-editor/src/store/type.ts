import type { NInternal } from '@/internal/types';

export interface GraphEditorState {
  openMenuConfig: NInternal.OpenMenuConfig | null;
  setOpenMenuConfig: (config: NInternal.OpenMenuConfig | null) => void;
}
