/**
 * 效果定义命名空间
 *
 * 与 效果实现 区分开
 *
 * @since 1.0.0
 */
export namespace IEffectDefinition {
  /**
   * 效果定义
   *
   * 用于描述卡片效果的定义，机构化，具体逻辑由定义的类型实现
   */
  export interface AbilityDefinition {
    root: SentencePattern;
  }

  /**
   * 句式
   */
  export interface SentencePattern {
    /**
     * 句式的唯一标识
     *
     * 不能重复，具体逻辑实现需要一一对应实现
     */
    uniqueKey: string;
  }

  export interface SentenceAction {}

  export interface SentenceCondition {}
}
