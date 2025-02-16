import { IUtils } from "./utils";

export namespace ICard {
  /**
   * 卡片类型
   */
  export enum CardType {
    /**
     * 单位卡
     */
    unit = 1,
    /**
     * 指令卡
     */
    order = 2,
    /**
     * 纹章卡
     */
    crest = 3,
  }

  /**
   * 卡片的基础信息
   *
   * 必须包含的字段
   */
  export interface BaseCardInfo {
    /**
     * 唯一 ID
     *
     * 一般情况与一灭寂的卡片 ID 一致
     */
    id: number;

    /**
     * 印刷名称
     *
     * 默认为日文名称
     */
    printName: string;

    /**
     * 本地化名称
     */
    localeNameMap: Partial<Record<IUtils.Locale, string>> &
      Record<string, string>;

    /**
     * 卡片类型
     */
    cardType: CardType;
  }

  export enum UnitCardType {
    normal = 1,
    trigger = 2,
    g = 3,
    token = 4,
  }

  /**
   * 单位卡的信息
   */
  export interface UnitCardInfo extends BaseCardInfo {
    unitType: UnitCardType;
  }

  /**
   * 指令卡的信息
   */
  export interface OrderCardInfo extends BaseCardInfo {}

  /**
   * 纹章卡的信息
   */
  export interface CrestCardInfo extends BaseCardInfo {}

  export type CardInfo = UnitCardInfo | OrderCardInfo | CrestCardInfo;
}
