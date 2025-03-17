import type { NInternal } from '@/internal/types';
import type { GraphEditorState } from '@/store';

export function getCreateNodesMenuSetting({
  applyNodeChanges,
}: Pick<GraphEditorState, 'applyNodeChanges'>): NInternal.MenuSetting {
  return {
    items: [
      {
        type: 'sub-group',
        label: '新增',
        items: [
          {
            type: 'item',
            label: '流程节点',
            onClick: ({ config }) => {
              applyNodeChanges([
                {
                  type: 'add',
                  item: {
                    id: 'node-' + Date.now(),
                    type: 'process',
                    position: { x: config.x, y: config.y },
                    data: {
                      uniqueKey: 'you-known-what',
                      title: '节点',
                      inputs: [],
                      outputs: [],
                      exits: [],
                    },
                  },
                },
              ]);
            },
          },
        ],
      },
    ],
  };
}
