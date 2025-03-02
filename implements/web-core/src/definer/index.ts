// export function definer() {}

// 【自】【R】【一回合一次】：这个单位攻击等级3以上的单位时，你的灵魂里的相互不同等级的卡有4张以上的话，这个回合中，这个单位的力量+10000。
// 句式：
// ...时，...的话，...
// When [timing], if [condition], [action]

// 【自】【R】：由于你的先导者的能力的费用同时使用4张以上的卡进行了灵魂爆发时，对手有等级3以上的先导者的话，通过【费用】[计数爆发1]，将这个单位重置。（仅限同1次费用内进行了灵魂爆发4以上的场合才能使用这个能力。）
//
// ...时，...的话，通过 ...，...
// action = [cost] action
// condition = [condition] or | and [condition]
// timing
//

// Ability = Kind + SentencePattern[]
// SentencePattern => result { executed, canceled }
//

// 【永】【R】：这个单位支援的战斗中，你有等级3以上的含有「维兹卢格」的先导者的话，这个单位的力量+5000。
// ...中，...的话，...
// During [timing]，if [condition], [action]
//

// 【起】： condition? action
