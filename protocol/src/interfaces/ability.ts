import { NCardStructure } from './card.js';

/**
 * 效果定义命名空间
 *
 * 与 效果实现 区分开
 *
 * @since 1.0.0
 */
export namespace NAbilityStructure {
  /**
   * 能力类型基类
   *
   * Example:
   *  【自】、【起】、【永】、施放条件 etc...
   */
  export interface BaseAbilityKind {
    /**
     * 能力类型的唯一标识
     */
    kind: string;
    /**
     * 能力的可用领域
     */
    availableZones: string[];
    /**
     * 能力关键字
     */
    keywords: BaseKeyword[];
    /**
     * 是否为一回合一次
     */
    isOncePerTurn: boolean;
  }

  export interface BaseKeyword {
    keyword: string;
  }

  /**
   * 能力定义
   *
   * 用于描述卡片单个能力的定义，具体逻辑由定义的类型实现
   */
  export interface Ability {
    /**
     * 能力类型
     */
    kind: BaseAbilityKind;
    /**
     * 能力具体句子内容
     */
    sentences: SentencePattern[];
  }

  /**
   * 句式
   *
   * 句式控制执行流程
   */
  export interface SentencePattern {
    /**
     * 句式的唯一标识
     *
     * 不能重复，具体逻辑实现需要一一对应实现
     */
    uniqueKey: string;
    /**
     * 子句列表
     *
     * 根据句式，有不同固定数量/类型的子句
     */
    clauses: Clause[];
  }

  export enum ClauseType {
    /**
     * 检查时机子句
     */
    timing = 1,

    /**
     * 条件子句
     */
    condition = 2,

    /**
     * 执行动作子句
     */
    action = 3,

    /**
     * 替代规则子句
     */
    alternate = 4,
  }

  export interface Clause {
    /**
     * 子句的唯一标识
     *
     * 不能重复，具体逻辑实现需要一一对应实现
     */
    uniqueKey: string;
    /**
     * 子句类型
     *
     * 检查时机、条件、执行动作、替代规则
     */
    type: ClauseType;
    /**
     * 子句的变量
     */
    variables?: ClauseVariable[];
    /**
     * 子句的子句
     */
    clauses?: Clause[];
  }

  export interface ClauseVariable {}
}
