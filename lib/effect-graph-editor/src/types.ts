import type { Node } from '@xyflow/react';

type AnyKv = Record<string, any>;

export namespace NEffectGraph {
  export type EntryNode = Node<AnyKv & Definition.EntryNode, 'entry'>;
  export type ProcessNode = Node<AnyKv & Definition.ProcessNode, 'process'>;

  export type Nodes = EntryNode | ProcessNode;

  export namespace Definition {
    export interface ProcessLink {
      key: string;
      desc?: string;
    }

    export interface Value {
      key: string;
      valueType: string;
      desc: string;
      editable?: boolean;
      optional?: boolean;
    }

    export interface EntryNode {
      desc: string;
    }

    export interface ProcessNode {
      uniqueKey: string;
      title: string;
      entry?: ProcessLink;
      inputs: Value[];
      exits: ProcessLink[];
      outputs: Value[];
    }
  }
}
