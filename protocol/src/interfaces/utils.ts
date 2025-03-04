export namespace NUtils {
  /**
   * BCP 47 语言标签
   */
  export type Locale = 'zh' | 'zh-Hans' | 'ja' | 'en';

  /**
   * 用于序列化为 JSON 的接口
   */
  export interface CanToJson<T> {
    toJson(): T;
    toJsonString(format?: boolean): string;
  }
}
