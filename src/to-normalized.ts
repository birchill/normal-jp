// prettier-ignore
const HANKAKU_KATAKANA_TO_ZENKAKU = [
 0x3002, 0x300c, 0x300d, 0x3001, 0x30fb, 0x30f2, 0x30a1, 0x30a3, 0x30a5,
 0x30a7, 0x30a9, 0x30e3, 0x30e5, 0x30e7, 0x30c3, 0x30fc, 0x30a2, 0x30a4,
 0x30a6, 0x30a8, 0x30aa, 0x30ab, 0x30ad, 0x30af, 0x30b1, 0x30b3, 0x30b5,
 0x30b7, 0x30b9, 0x30bb, 0x30bd, 0x30bf, 0x30c1, 0x30c4, 0x30c6, 0x30c8,
 0x30ca, 0x30cb, 0x30cc, 0x30cd, 0x30ce, 0x30cf, 0x30d2, 0x30d5, 0x30d8,
 0x30db, 0x30de, 0x30df, 0x30e0, 0x30e1, 0x30e2, 0x30e4, 0x30e6, 0x30e8,
 0x30e9, 0x30ea, 0x30eb, 0x30ec, 0x30ed, 0x30ef, 0x30f3, 0x3099, 0x309a,
];

// prettier-ignore
const VOICED_TO_COMPOSED = new Map([
  [0x3046, 0x3094], [0x304b, 0x304c], [0x304d, 0x304e], [0x304f, 0x3050],
  [0x3051, 0x3052], [0x3053, 0x3054], [0x3055, 0x3056], [0x3057, 0x3058],
  [0x3059, 0x305a], [0x305b, 0x305c], [0x305d, 0x305e], [0x305f, 0x3060],
  [0x3061, 0x3062], [0x3064, 0x3065], [0x3066, 0x3067], [0x3068, 0x3069],
  [0x306f, 0x3070], [0x3072, 0x3073], [0x3075, 0x3076], [0x3078, 0x3079],
  [0x307b, 0x307c], [0x309d, 0x309e], [0x30ab, 0x30ac], [0x30ad, 0x30ae],
  [0x30a6, 0x30f4], [0x30af, 0x30b0], [0x30b1, 0x30b2], [0x30b3, 0x30b4],
  [0x30b5, 0x30b6], [0x30b7, 0x30b8], [0x30b9, 0x30ba], [0x30bb, 0x30bc],
  [0x30bd, 0x30be], [0x30bf, 0x30c0], [0x30c1, 0x30c2], [0x30c4, 0x30c5],
  [0x30c6, 0x30c7], [0x30c8, 0x30c9], [0x30cf, 0x30d0], [0x30d2, 0x30d3],
  [0x30d5, 0x30d6], [0x30d8, 0x30d9], [0x30db, 0x30dc], [0x30ef, 0x30f7],
  [0x30f0, 0x30f8], [0x30f1, 0x30f9], [0x30f2, 0x30fa], [0x30fd, 0x30fe]
]);

// prettier-ignore
const SEMIVOICED_TO_COMPOSED = new Map([
  [0x306f, 0x3071], [0x3072, 0x3074], [0x3075, 0x3077], [0x3078, 0x307a],
  [0x307b, 0x307d], [0x30cf, 0x30d1], [0x30d2, 0x30d4], [0x30d5, 0x30d7],
  [0x30d8, 0x30da], [0x30db, 0x30dd]
]);

// First part of the CJK Compatibility block: 0x3300-0x3370
// prettier-ignore
const COMBINED_CHARS_A = [
 'アパート', 'アルファ', 'アンペア', 'アール', 'イニング', 'インチ', 'ウォン',
  'エスクード', 'エーカー', 'オンス', 'オーム', 'カイリ', 'カラット',
  'カロリー', 'ガロン', 'ガンマ', 'ギガ', 'ギニー', 'キュリー', 'ギルダー',
  'キロ', 'キログラム', 'キロメートル', 'キロワット', 'グラム', 'グラムトン',
  'クルゼイロ', 'クローネ', 'ケース', 'コルナ', 'コーポ', 'サイクル',
  'サンチーム', 'シリング', 'センチ', 'セント', 'ダース', 'デシ', 'ドル',
  'トン', 'ナノ', 'ノット', 'ハイツ', 'パーセント', 'パーツ', 'バーレル',
  'ピアストル', 'ピクル', 'ピコ', 'ビル', 'ファラッド', 'フィート',
  'ブッシェル', 'フラン', 'ヘクタール', 'ペソ', 'ペニヒ', 'ヘルツ', 'ペンス',
  'ページ', 'ベータ', 'ポイント', 'ボルト', 'ホン', 'ポンド', 'ホール',
  'ホーン', 'マイクロ', 'マイル', 'マッハ', 'マルク', 'マンション', 'ミクロン',
  'ミリ', 'ミリバール', 'メガ', 'メガトン', 'メートル', 'ヤード', 'ヤール',
  'ユアン', 'リットル', 'リラ', 'ルピー', 'ルーブル', 'レム', 'レントゲン',
  'ワット', '0点', '1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点',
  '9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '17点', '18点',
  '19点', '20点', '21点', '22点', '23点', '24点'
];

// Second part of the CJK Compatibility block: 0x337b-0x337f
// prettier-ignore
const COMBINED_CHARS_B = ['平成', '昭和', '大正', '明治', '株式会社'];

// First part of Enclosed CJK letters and motnhs block: 0x3220-0x3247
// prettier-ignore
const ENCLOSED_CHARS_A = [
  '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '月', '火', '水',
  '木', '金', '土', '日', '株', '有', '社', '名', '特', '財', '祝', '労', '代',
  '呼', '学', '監', '企', '資', '協', '祭', '休', '自', '至', '問', '幼', '文',
  '箏'
];

// Second part of Enclosed CJK letters and motnhs block: 0x3280-0x32b0
// prettier-ignore
const ENCLOSED_CHARS_B = [
  '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '月', '火', '水',
  '木', '金', '土', '日', '株', '有', '社', '名', '特', '財', '祝', '労', '秘',
  '男', '女', '適', '優', '印', '注', '頂', '休', '写', '正', '上', '中', '下',
  '左', '右', '医', '宗', '学', '監', '企', '資', '協', '夜'
];

// Third part of Enclosed CJK letters and motnhs block: 0x32c0-0x32cb
// prettier-ignore
const ENCLOSED_CHARS_C = [
  '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月',
  '12月'
];

// Fourth part of Enclosed CJK letters and motnhs block: 0x32d0-0x32ff
// prettier-ignore
const ENCLOSED_CHARS_D = [
  'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス',
  'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ',
  'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ',
  'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヰ', 'ヱ', 'ヲ', '令和'
];

// Enclosed Ideographic Supplement: 0x1f200-0x1f26f (actually up to 0x1f2ff but
// there are no characters in the range 0x1f266-0x1f2ff currently)
// prettier-ignore
const ENCLOSED_IDEOGRAPHIC_SUPPLEMENT = [
  'ほか', 'ココ', 'サ', undefined,
    undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined,
  '手', '字', '双', 'デ', '二', '多', '解', '天',
    '交', '映', '無', '料', '前', '後', '再', '新', 
  '初', '終', '生', '販', '声', '吹', '演', '投',
    '捕', '一', '三', '遊', '左', '中', '右', '指',
  '走', '打', '禁', '空', '合', '満', '有', '月',
    '申', '割', '営', '配',
    undefined, undefined, undefined, undefined,
  '本', '三', '二', '安', '点', '打', '盗', '勝',
    '敗', undefined, undefined, undefined,
    undefined, undefined, undefined, undefined,
  '得', '可', undefined, undefined,
    undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined,
  '福', '祿', '壽', '喜', '囍', '財', undefined, undefined,
    undefined, undefined, undefined, undefined,
    undefined, undefined, undefined, undefined,
];

// The following is a mapping from radical characters in the Kangxi Radicals
// and _some_ of the radicals in the CJK Radicals Supplement block.
//
// The purpose of this mapping is to help in looking up mis-encoded characters.
// Therefore, we have deliberately _not_ included some characters where even
// where there's a possible mapping because the characters don't necessarily
// look similar or are ambiguous (e.g. the different variants on しんにょう).
//
// We've also avoided using equivalents that are not in the BMP even if they're
// better because it seems unlikely someone would have wanted to encode a
// non-BMP character and used a radical character instead.
const RADICAL_TO_KANJI_CHARS: ReadonlyArray<[number, number]> = [
  // ⼀ → 一
  [0x2f00, 0x4e00],
  // ⼁ → 丨
  [0x2f01, 0x4e28],
  // ⼂ → 丶
  [0x2f02, 0x4e36],
  // ⼃ → 丿
  [0x2f03, 0x4e3f],
  // ⼄ → 乙
  [0x2f04, 0x4e59],
  // ⼅ → 亅
  [0x2f05, 0x4e85],
  // ⼆ → 二
  [0x2f06, 0x4e8c],
  // ⼇ → 亠
  [0x2f07, 0x4ea0],
  // ⼈ → 人
  [0x2f08, 0x4eba],
  // ⼉ → 儿
  [0x2f09, 0x513f],
  // ⼊ → 入
  [0x2f0a, 0x5165],
  // ⼋ → 八
  [0x2f0b, 0x516b],
  // ⼌ → 冂
  [0x2f0c, 0x5182],
  // ⼍ → 冖
  [0x2f0d, 0x5196],
  // ⼎ → 冫
  [0x2f0e, 0x51ab],
  // ⼏ → 几
  [0x2f0f, 0x51e0],
  // ⼐ → 凵
  [0x2f10, 0x51f5],
  // ⼑ → 刀
  [0x2f11, 0x5200],
  // ⼒ → 力
  [0x2f12, 0x529b],
  // ⼓ → 勹
  [0x2f13, 0x52f9],
  // ⼔ → 匕
  [0x2f14, 0x5315],
  // ⼕ → 匚
  [0x2f15, 0x531a],
  // ⼖ → 匸
  [0x2f16, 0x5338],
  // ⼗ → 十
  [0x2f17, 0x5341],
  // ⼘ → 卜
  [0x2f18, 0x535c],
  // ⼙ → 卩
  [0x2f19, 0x5369],
  // ⼚ → 厂
  [0x2f1a, 0x5382],
  // ⼛ → 厶
  [0x2f1b, 0x53b6],
  // ⼜ → 又
  [0x2f1c, 0x53c8],
  // ⼝ → 口
  [0x2f1d, 0x53e3],
  // ⼞ → 囗
  [0x2f1e, 0x56d7],
  // ⼟ → 土
  [0x2f1f, 0x571f],
  // ⼠ → 士
  [0x2f20, 0x58eb],
  // ⼡ → 夂
  [0x2f21, 0x5902],
  // ⼢ → 夊
  [0x2f22, 0x590a],
  // ⼣ → 夕
  [0x2f23, 0x5915],
  // ⼤ → 大
  [0x2f24, 0x5927],
  // ⼥ → 女
  [0x2f25, 0x5973],
  // ⼦ → 子
  [0x2f26, 0x5b50],
  // ⼧ → 宀
  [0x2f27, 0x5b80],
  // ⼨ → 寸
  [0x2f28, 0x5bf8],
  // ⼩ → 小
  [0x2f29, 0x5c0f],
  // ⼪ → 尢
  [0x2f2a, 0x5c22],
  // ⼫ → 尸
  [0x2f2b, 0x5c38],
  // ⼬ → 屮
  [0x2f2c, 0x5c6e],
  // ⼭ → 山
  [0x2f2d, 0x5c71],
  // ⼮ → 巛
  [0x2f2e, 0x5ddb],
  // ⼯ → 工
  [0x2f2f, 0x5de5],
  // ⼰ → 己
  [0x2f30, 0x5df1],
  // ⼱ → 巾
  [0x2f31, 0x5dfe],
  // ⼲ → 干
  [0x2f32, 0x5e72],
  // ⼳ → 幺
  [0x2f33, 0x5e7a],
  // ⼴ → 广
  [0x2f34, 0x5e7f],
  // ⼵ → 廴
  [0x2f35, 0x5ef4],
  // ⼶ → 廾
  [0x2f36, 0x5efe],
  // ⼷ → 弋
  [0x2f37, 0x5f0b],
  // ⼸ → 弓
  [0x2f38, 0x5f13],
  // ⼹ → 彐
  [0x2f39, 0x5f50],
  // ⼺ → 彡
  [0x2f3a, 0x5f61],
  // ⼻ → 彳
  [0x2f3b, 0x5f73],
  // ⼼ → 心
  [0x2f3c, 0x5fc3],
  // ⼽ → 戈
  [0x2f3d, 0x6208],
  // ⼾ → 戶
  [0x2f3e, 0x6236],
  // ⼿ → 手
  [0x2f3f, 0x624b],
  // ⽀ → 支
  [0x2f40, 0x652f],
  // ⽁ → 攴
  [0x2f41, 0x6534],
  // ⽂ → 文
  [0x2f42, 0x6587],
  // ⽃ → 斗
  [0x2f43, 0x6597],
  // ⽄ → 斤
  [0x2f44, 0x65a4],
  // ⽅ → 方
  [0x2f45, 0x65b9],
  // ⽆ → 无
  [0x2f46, 0x65e0],
  // ⽇ → 日
  [0x2f47, 0x65e5],
  // ⽈ → 曰
  [0x2f48, 0x66f0],
  // ⽉ → 月
  [0x2f49, 0x6708],
  // ⽊ → 木
  [0x2f4a, 0x6728],
  // ⽋ → 欠
  [0x2f4b, 0x6b20],
  // ⽌ → 止
  [0x2f4c, 0x6b62],
  // ⽍ → 歹
  [0x2f4d, 0x6b79],
  // ⽎ → 殳
  [0x2f4e, 0x6bb3],
  // ⽏ → 毋
  [0x2f4f, 0x6bcb],
  // ⽐ → 比
  [0x2f50, 0x6bd4],
  // ⽑ → 毛
  [0x2f51, 0x6bdb],
  // ⽒ → 氏
  [0x2f52, 0x6c0f],
  // ⽓ → 气
  [0x2f53, 0x6c14],
  // ⽔ → 水
  [0x2f54, 0x6c34],
  // ⽕ → 火
  [0x2f55, 0x706b],
  // ⽖ → 爪
  [0x2f56, 0x722a],
  // ⽗ → 父
  [0x2f57, 0x7236],
  // ⽘ → 爻
  [0x2f58, 0x723b],
  // ⽙ → 爿
  [0x2f59, 0x723f],
  // ⽚ → 片
  [0x2f5a, 0x7247],
  // ⽛ → 牙
  [0x2f5b, 0x7259],
  // ⽜ → 牛
  [0x2f5c, 0x725b],
  // ⽝ → 犬
  [0x2f5d, 0x72ac],
  // ⽞ → 玄
  [0x2f5e, 0x7384],
  // ⽟ → 玉
  [0x2f5f, 0x7389],
  // ⽠ → 瓜
  [0x2f60, 0x74dc],
  // ⽡ → 瓦
  [0x2f61, 0x74e6],
  // ⽢ → 甘
  [0x2f62, 0x7518],
  // ⽣ → 生
  [0x2f63, 0x751f],
  // ⽤ → 用
  [0x2f64, 0x7528],
  // ⽥ → 田
  [0x2f65, 0x7530],
  // ⽦ → 疋
  [0x2f66, 0x758b],
  // ⽧ → 疒
  [0x2f67, 0x7592],
  // ⽨ → 癶
  [0x2f68, 0x7676],
  // ⽩ → 白
  [0x2f69, 0x767d],
  // ⽪ → 皮
  [0x2f6a, 0x76ae],
  // ⽫ → 皿
  [0x2f6b, 0x76bf],
  // ⽬ → 目
  [0x2f6c, 0x76ee],
  // ⽭ → 矛
  [0x2f6d, 0x77db],
  // ⽮ → 矢
  [0x2f6e, 0x77e2],
  // ⽯ → 石
  [0x2f6f, 0x77f3],
  // ⽰ → 示
  [0x2f70, 0x793a],
  // ⽱ → 禸
  [0x2f71, 0x79b8],
  // ⽲ → 禾
  [0x2f72, 0x79be],
  // ⽳ → 穴
  [0x2f73, 0x7a74],
  // ⽴ → 立
  [0x2f74, 0x7acb],
  // ⽵ → 竹
  [0x2f75, 0x7af9],
  // ⽶ → 米
  [0x2f76, 0x7c73],
  // ⽷ → 糸
  [0x2f77, 0x7cf8],
  // ⽸ → 缶
  [0x2f78, 0x7f36],
  // ⽹ → 网
  [0x2f79, 0x7f51],
  // ⽺ → 羊
  [0x2f7a, 0x7f8a],
  // ⽻ → 羽
  [0x2f7b, 0x7fbd],
  // ⽼ → 老
  [0x2f7c, 0x8001],
  // ⽽ → 而
  [0x2f7d, 0x800c],
  // ⽾ → 耒
  [0x2f7e, 0x8012],
  // ⽿ → 耳
  [0x2f7f, 0x8033],
  // ⾀ → 聿
  [0x2f80, 0x807f],
  // ⾁ → 肉
  [0x2f81, 0x8089],
  // ⾂ → 臣
  [0x2f82, 0x81e3],
  // ⾃ → 自
  [0x2f83, 0x81ea],
  // ⾄ → 至
  [0x2f84, 0x81f3],
  // ⾅ → 臼
  [0x2f85, 0x81fc],
  // ⾆ → 舌
  [0x2f86, 0x820c],
  // ⾇ → 舛
  [0x2f87, 0x821b],
  // ⾈ → 舟
  [0x2f88, 0x821f],
  // ⾉ → 艮
  [0x2f89, 0x826e],
  // ⾊ → 色
  [0x2f8a, 0x8272],
  // ⾋ → 艸
  [0x2f8b, 0x8278],
  // ⾌ → 虍
  [0x2f8c, 0x864d],
  // ⾍ → 虫
  [0x2f8d, 0x866b],
  // ⾎ → 血
  [0x2f8e, 0x8840],
  // ⾏ → 行
  [0x2f8f, 0x884c],
  // ⾐ → 衣
  [0x2f90, 0x8863],
  // ⾑ → 襾
  [0x2f91, 0x897e],
  // ⾒ → 見
  [0x2f92, 0x898b],
  // ⾓ → 角
  [0x2f93, 0x89d2],
  // ⾔ → 言
  [0x2f94, 0x8a00],
  // ⾕ → 谷
  [0x2f95, 0x8c37],
  // ⾖ → 豆
  [0x2f96, 0x8c46],
  // ⾗ → 豕
  [0x2f97, 0x8c55],
  // ⾘ → 豸
  [0x2f98, 0x8c78],
  // ⾙ → 貝
  [0x2f99, 0x8c9d],
  // ⾚ → 赤
  [0x2f9a, 0x8d64],
  // ⾛ → 走
  [0x2f9b, 0x8d70],
  // ⾜ → 足
  [0x2f9c, 0x8db3],
  // ⾝ → 身
  [0x2f9d, 0x8eab],
  // ⾞ → 車
  [0x2f9e, 0x8eca],
  // ⾟ → 辛
  [0x2f9f, 0x8f9b],
  // ⾠ → 辰
  [0x2fa0, 0x8fb0],
  // ⾡ → 辵
  [0x2fa1, 0x8fb5],
  // ⾢ → 邑
  [0x2fa2, 0x9091],
  // ⾣ → 酉
  [0x2fa3, 0x9149],
  // ⾤ → 釆
  [0x2fa4, 0x91c6],
  // ⾥ → 里
  [0x2fa5, 0x91cc],
  // ⾦ → 金
  [0x2fa6, 0x91d1],
  // ⾧ → 長
  [0x2fa7, 0x9577],
  // ⾨ → 門
  [0x2fa8, 0x9580],
  // ⾩ → 阜
  [0x2fa9, 0x961c],
  // ⾪ → 隶
  [0x2faa, 0x96b6],
  // ⾫ → 隹
  [0x2fab, 0x96b9],
  // ⾬ → 雨
  [0x2fac, 0x96e8],
  // ⾭ → 靑
  [0x2fad, 0x9751],
  // ⾮ → 非
  [0x2fae, 0x975e],
  // ⾯ → 面
  [0x2faf, 0x9762],
  // ⾰ → 革
  [0x2fb0, 0x9769],
  // ⾱ → 韋
  [0x2fb1, 0x97cb],
  // ⾲ → 韭
  [0x2fb2, 0x97ed],
  // ⾳ → 音
  [0x2fb3, 0x97f3],
  // ⾴ → 頁
  [0x2fb4, 0x9801],
  // ⾵ → 風
  [0x2fb5, 0x98a8],
  // ⾶ → 飛
  [0x2fb6, 0x98db],
  // ⾷ → 食
  [0x2fb7, 0x98df],
  // ⾸ → 首
  [0x2fb8, 0x9996],
  // ⾹ → 香
  [0x2fb9, 0x9999],
  // ⾺ → 馬
  [0x2fba, 0x99ac],
  // ⾻ → 骨
  [0x2fbb, 0x9aa8],
  // ⾼ → 高
  [0x2fbc, 0x9ad8],
  // ⾽ → 髟
  [0x2fbd, 0x9adf],
  // ⾾ → 鬥
  [0x2fbe, 0x9b25],
  // ⾿ → 鬯
  [0x2fbf, 0x9b2f],
  // ⿀ → 鬲
  [0x2fc0, 0x9b32],
  // ⿁ → 鬼
  [0x2fc1, 0x9b3c],
  // ⿂ → 魚
  [0x2fc2, 0x9b5a],
  // ⿃ → 鳥
  [0x2fc3, 0x9ce5],
  // ⿄ → 鹵
  [0x2fc4, 0x9e75],
  // ⿅ → 鹿
  [0x2fc5, 0x9e7f],
  // ⿆ → 麥
  [0x2fc6, 0x9ea5],
  // ⿇ → 麻
  [0x2fc7, 0x9ebb],
  // ⿈ → 黃
  [0x2fc8, 0x9ec3],
  // ⿉ → 黍
  [0x2fc9, 0x9ecd],
  // ⿊ → 黑
  [0x2fca, 0x9ed1],
  // ⿋ → 黹
  [0x2fcb, 0x9ef9],
  // ⿌ → 黽
  [0x2fcc, 0x9efd],
  // ⿍ → 鼎
  [0x2fcd, 0x9f0e],
  // ⿎ → 鼓
  [0x2fce, 0x9f13],
  // ⿏ → 鼠
  [0x2fcf, 0x9f20],
  // ⿐ → 鼻
  [0x2fd0, 0x9f3b],
  // ⿑ → 齊
  [0x2fd1, 0x9f4a],
  // ⿒ → 齒
  [0x2fd2, 0x9f52],
  // ⿓ → 龍
  [0x2fd3, 0x9f8d],
  // ⿔ → 龜
  [0x2fd4, 0x9f9c],
  // ⿕ → 龠
  [0x2fd5, 0x9fa0],
  // ⺁ → 厂
  [0x2e81, 0x5382],
  // ⺃ → 乚
  [0x2e83, 0x4e5a],
  // ⺅ → 亻
  [0x2e85, 0x4ebb],
  // ⺆ → 冂
  [0x2e86, 0x5182],
  // ⺇ → 几
  [0x2e87, 0x51e0],
  // ⺉ → 刂
  [0x2e89, 0x5202],
  // ⺎ → 兀
  [0x2e8e, 0x5140],
  // ⺏ → 尣
  [0x2e8f, 0x5c23],
  // ⺐ → 尢
  [0x2e90, 0x5c22],
  // ⺑ → 尣
  [0x2e91, 0x5c23],
  // ⺒ → 巳
  [0x2e92, 0x5df3],
  // ⺓ → 幺
  [0x2e93, 0x5e7a],
  // ⺔ → 彑
  [0x2e94, 0x5f51],
  // ⺕ → 彐
  [0x2e95, 0x5f50],
  // ⺖ → 忄
  [0x2e96, 0x5fc4],
  // ⺘ → 扌
  [0x2e98, 0x624c],
  // ⺙ → 攵
  [0x2e99, 0x6535],
  // ⺛ → 旡
  [0x2e9b, 0x65e1],
  // ⺝ → 月
  [0x2e9d, 0x6708],
  // ⺞ → 歺
  [0x2e9e, 0x6b7a],
  // ⺟ → 母
  [0x2e9f, 0x6bcd],
  // ⺠ → 民
  [0x2ea0, 0x6c11],
  // ⺡ → 氵
  [0x2ea1, 0x6c35],
  // ⺢ → 氺
  [0x2ea2, 0x6c3a],
  // ⺣ → 灬
  [0x2ea3, 0x706c],
  // ⺤ → 爫
  [0x2ea4, 0x722b],
  // ⺥ → 爫
  [0x2ea5, 0x722b],
  // ⺦ → 丬
  [0x2ea6, 0x4e2c],
  // ⺨ → 犭
  [0x2ea8, 0x72ad],
  // ⺫ → 罒
  [0x2eab, 0x7f52],
  // ⺯ → 糹
  [0x2eaf, 0x7cf9],
  // ⺰ → 纟
  [0x2eb0, 0x7e9f],
  // ⺱ → 罓
  [0x2eb1, 0x7f53],
  // ⺴ → 㓁
  [0x2eb4, 0x34c1],
  // ⺸ → 羋
  [0x2eb8, 0x7f8b],
  // ⺹ → 耂
  [0x2eb9, 0x8002],
  // ⺺ → 肀
  [0x2eba, 0x8080],
  // ⺽ → 臼
  [0x2ebd, 0x81fc],
  // ⺾ → 艹
  [0x2ebe, 0x8279],
  // ⻁ → 虎
  [0x2ec1, 0x864e],
  // ⻂ → 衤
  [0x2ec2, 0x8864],
  // ⻃ → 覀
  [0x2ec3, 0x8980],
  // ⻄ → 西
  [0x2ec4, 0x897f],
  // ⻅ → 见
  [0x2ec5, 0x89c1],
  // ⻆ → 角
  [0x2ec6, 0x89d2],
  // ⻈ → 讠
  [0x2ec8, 0x8ba0],
  // ⻉ → 贝
  [0x2ec9, 0x8d1d],
  // ⻋ → 车
  [0x2ecb, 0x8f66],
  // ⻐ → 钅
  [0x2ed0, 0x9485],
  // ⻑ → 長
  [0x2ed1, 0x9577],
  // ⻒ → 镸
  [0x2ed2, 0x9578],
  // ⻓ → 长
  [0x2ed3, 0x957f],
  // ⻔ → 门
  [0x2ed4, 0x95e8],
  // ⻖ → 阝
  [0x2ed6, 0x961d],
  // ⻘ → 青
  [0x2ed8, 0x9752],
  // ⻙ → 韦
  [0x2ed9, 0x97e6],
  // ⻚ → 页
  [0x2eda, 0x9875],
  // ⻛ → 风
  [0x2edb, 0x98ce],
  // ⻜ → 飞
  [0x2edc, 0x98de],
  // ⻝ → 食
  [0x2edd, 0x98df],
  // ⻟ → 飠
  [0x2edf, 0x98e0],
  // ⻠ → 饣
  [0x2ee0, 0x9963],
  // ⻢ → 马
  [0x2ee2, 0x9a6c],
  // ⻣ → 骨
  [0x2ee3, 0x9aa8],
  // ⻤ → 鬼
  [0x2ee4, 0x9b3c],
  // ⻥ → 鱼
  [0x2ee5, 0x9c7c],
  // ⻦ → 鸟
  [0x2ee6, 0x9e1f],
  // ⻧ → 卤
  [0x2ee7, 0x5364],
  // ⻨ → 麦
  [0x2ee8, 0x9ea6],
  // ⻩ → 黄
  [0x2ee9, 0x9ec4],
  // ⻪ → 黾
  [0x2eea, 0x9efe],
  // ⻫ → 斉
  [0x2eeb, 0x6589],
  // ⻬ → 齐
  [0x2eec, 0x9f50],
  // ⻭ → 歯
  [0x2eed, 0x6b6f],
  // ⻮ → 齿
  [0x2eee, 0x9f7f],
  // ⻯ → 竜
  [0x2eef, 0x7adc],
  // ⻰ → 龙
  [0x2ef0, 0x9f99],
  // ⻱ → 龜
  [0x2ef1, 0x9f9c],
  // ⻲ → 亀
  [0x2ef2, 0x4e80],
  // ⻳ → 龟
  [0x2ef3, 0x9f9f],
];

let RADICAL_TO_KANJI: Map<number, number> | undefined;

// Converts:
//
// - half-width katakana to full-width katakana (e.g. ｶﾞｰﾃﾞﾝ → ガーデン)
// - decomposed characters to their composed equivalents
//   (e.g. ダイエット → ダイエット)
// - various enclosed characters into their plain form
//   (e.g. ㋕ → カ)
// - various combined characters into their expanded form
//   (e.g. ㌀ → アパート, ㋿ → 令和)
// - characters with variation selectors into the base character only
// - radicals into the equivalent kanji character
//
// while maintaining a mapping from output character offsets to input
// offsets.
export function toNormalized(input: string): [string, number[]] {
  // Lazily create the radical map so that RADICAL_TO_KANJI_CHARS can be
  // tree-shaken when this function is not being used (unlike arrays, Maps()
  // always seem to be included because presumably the ctor could have
  // side-effects).
  if (!RADICAL_TO_KANJI) {
    RADICAL_TO_KANJI = new Map(RADICAL_TO_KANJI_CHARS);
  }

  let inputLengths = [0];
  let result = '';

  for (let i = 0; i < input.length; ++i) {
    let c = input.charCodeAt(i);

    // Drop Unicode variation selectors
    if ((c >= 0xfe00 && c <= 0xfe0f) || (c >= 0xe0100 && c <= 0xe011f)) {
      inputLengths[result.length] = i + 1;
      continue;
    }

    // Handle surrogate pairs
    //
    // Unmatched low surrogate
    if (c >= 0xdc00 && c <= 0xdfff) {
      if (i + 1 < input.length) {
        inputLengths[result.length] = i + 1;
      }
      continue;
    }

    // High surrogate
    if (c >= 0xd800 && c <= 0xdbff) {
      // Incomplete surrogate pair at the end of the string
      if (i === input.length - 1) {
        continue;
      }

      // Look for low surrogate
      const c2 = input.charCodeAt(i + 1);
      if (c2 < 0xdc00 || c2 > 0xdfff) {
        inputLengths[result.length] = i + 1;
        continue;
      }

      c = (c - 0xd800) * 0x400 + c2 - 0xdc00 + 0x10000;
      ++i;
    }

    // Half-width to full-width katakana
    if (c >= 0xff61 && c <= 0xff9f) {
      c = HANKAKU_KATAKANA_TO_ZENKAKU[c - 0xff61]!;
    }

    // Decomposed characters (including any half-width katakana which we just
    // converted since half-width katakana is always decomposed).
    const prevChar = result.length ? result.charCodeAt(result.length - 1) : 0;
    if (c === 0x3099) {
      const composed = VOICED_TO_COMPOSED.get(prevChar);
      if (composed) {
        result = result.slice(0, -1);
        c = composed;
      }
    } else if (c === 0x309a) {
      // Decomposed semi-voiced mark (full-width or half-width)
      const composed = SEMIVOICED_TO_COMPOSED.get(prevChar);
      if (composed) {
        result = result.slice(0, -1);
        c = composed;
      }
    }

    // Look for an expanded character
    let expanded: string | undefined;
    if (c >= 0x3300 && c <= 0x3370) {
      expanded = COMBINED_CHARS_A[c - 0x3300];
    } else if (c >= 0x337b && c <= 0x337f) {
      expanded = COMBINED_CHARS_B[c - 0x337b];
    } else if (c >= 0x3220 && c <= 0x3247) {
      expanded = ENCLOSED_CHARS_A[c - 0x3220];
    } else if (c >= 0x3280 && c <= 0x32b0) {
      expanded = ENCLOSED_CHARS_B[c - 0x3280];
    } else if (c >= 0x32c0 && c <= 0x32cb) {
      expanded = ENCLOSED_CHARS_C[c - 0x32c0];
    } else if (c >= 0x32d0 && c <= 0x32ff) {
      expanded = ENCLOSED_CHARS_D[c - 0x32d0];
    } else if (c >= 0x1f200 && c <= 0x1f26f) {
      expanded = ENCLOSED_IDEOGRAPHIC_SUPPLEMENT[c - 0x1f200];
    }

    // Look for radical characters to map to kanji
    const radical = !expanded ? RADICAL_TO_KANJI.get(c) : undefined;
    if (radical) {
      expanded = String.fromCodePoint(radical);
    }

    // Add to the result
    const asStr = expanded || String.fromCodePoint(c);
    result += asStr;

    // Update the input lengths
    const start = c < 0x10000 ? i : i - 1;
    inputLengths.push(...Array(asStr.length - 1).fill(start));
    inputLengths[result.length] = i + 1;
  }

  return [result, inputLengths];
}
