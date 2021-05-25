/**
 * Converts various 旧字体 (kyuujitai, old character forms) to 新字体
 * (shinjitai, new character forms).
 *
 * Based on the data in https://en.wikipedia.org/wiki/Kyūjitai but does not
 * handle kyuujitai represented using variation selectors since these are
 * stripped by `toNormalized`.
 */
export function kyuujitaiToShinjitai(input: string): string {
  const inputCodePoints = [...input].map((c) =>
    c.codePointAt(0)
  ) as Array<number>;
  const outputCodePoints: Array<number> = [];

  for (const c of inputCodePoints) {
    outputCodePoints.push(KYUU_TO_SHIN[c] || c);
  }

  return String.fromCodePoint(...outputCodePoints);
}

const KYUU_TO_SHIN: { [c: number]: number } = {
  20056: 20055,
  20098: 20081,
  20121: 20120,
  20126: 20124,
  20315: 20175,
  20358: 26469,
  20482: 20341,
  20551: 20206,
  20659: 20253,
  20702: 20605,
  20729: 20385,
  20745: 20537,
  20818: 20816,
  20841: 20001,
  20904: 23500,
  20937: 28092,
  20955: 20956,
  21097: 21104,
  21133: 21091,
  21137: 21092,
  21214: 21172,
  21235: 21234,
  21237: 21169,
  21240: 21223,
  21312: 21306,
  21367: 24059,
  21373: 21363,
  21443: 21442,
  21854: 21782,
  21934: 21336,
  22169: 22107,
  22196: 21427,
  22225: 22065,
  22280: 22287,
  22283: 22269,
  22285: 22258,
  22291: 20870,
  22294: 22259,
  22296: 22243,
  22492: 37326,
  22575: 23597,
  22686: 22679,
  22702: 22549,
  22739: 22311,
  22744: 22593,
  22750: 22730,
  22756: 22732,
  22767: 22766,
  22777: 22769,
  22781: 23551,
  22887: 22885,
  22892: 22888,
  23363: 23330,
  23416: 23398,
  23522: 23517,
  23526: 23455,
  23531: 20889,
  23532: 23515,
  23542: 23453,
  23559: 23558,
  23560: 23554,
  23565: 23550,
  23622: 23626,
  23643: 23631,
  23660: 23646,
  23791: 23792,
  23805: 23777,
  23947: 23798,
  23997: 23731,
  24022: 24012,
  24034: 24035,
  24118: 24111,
  24183: 24182,
  24290: 24259,
  24291: 24195,
  24307: 24193,
  24392: 24382,
  24396: 24357,
  24398: 24367,
  24465: 24452,
  24478: 24467,
  24501: 24500,
  24503: 24499,
  24646: 24658,
  24800: 24693,
  24801: 24746,
  24817: 24745,
  24892: 24910,
  24920: 24808,
  25033: 24540,
  25079: 25040,
  25088: 24651,
  25136: 25126,
  25138: 25135,
  25150: 25147,
  25282: 25173,
  25300: 25244,
  25308: 25309,
  25406: 25375,
  25554: 25407,
  25581: 25522,
  25620: 25531,
  25622: 25594,
  25628: 25436,
  25799: 25246,
  25802: 25731,
  25812: 25285,
  25818: 25312,
  25831: 25369,
  25844: 25313,
  25885: 25666,
  25898: 25785,
  25910: 21454,
  25928: 21177,
  25933: 21465,
  25941: 21189,
  25976: 25968,
  26039: 26029,
  26180: 26179,
  26202: 26217,
  26205: 26172,
  26310: 26278,
  26313: 26241,
  26366: 26365,
  26371: 20250,
  26781: 26465,
  26855: 26719,
  27054: 26628,
  27079: 27097,
  27114: 27010,
  27138: 27005,
  27155: 27004,
  27166: 26530,
  27171: 27096,
  27243: 27178,
  27292: 26727,
  27298: 26908,
  27387: 26716,
  27402: 27177,
  27472: 27431,
  27489: 27475,
  27493: 27497,
  27511: 27508,
  27512: 24112,
  27544: 27531,
  27580: 27579,
  27590: 27572,
  27599: 27598,
  27683: 27671,
  28041: 28169,
  28122: 28057,
  28136: 27972,
  28154: 27973,
  28212: 28167,
  28330: 28179,
  28331: 28201,
  28399: 28382,
  28415: 28288,
  28497: 28300,
  28507: 28508,
  28545: 28171,
  28580: 27810,
  28629: 28287,
  28639: 28168,
  28657: 27996,
  28670: 27818,
  28711: 28381,
  28712: 28716,
  28771: 28286,
  28976: 28948,
  29128: 28783,
  29138: 28988,
  29151: 21942,
  29200: 28809,
  29229: 20105,
  29234: 28858,
  29351: 29344,
  29376: 29366,
  29433: 29421,
  29518: 22888,
  29544: 29420,
  29557: 29471,
  29560: 29539,
  29563: 29486,
  29923: 24321,
  29953: 29942,
  30059: 30011,
  30070: 24403,
  30090: 30067,
  30246: 30185,
  30305: 30196,
  30332: 30330,
  30403: 26479,
  30428: 30423,
  30433: 23613,
  30494: 30495,
  30799: 30740,
  30862: 30741,
  31014: 30783,
  31061: 31192,
  31103: 31108,
  31146: 31109,
  31150: 31036,
  31152: 31074,
  31153: 31095,
  31281: 31216,
  31291: 31282,
  31310: 38964,
  31319: 31298,
  31337: 31311,
  31344: 31331,
  31434: 31363,
  31453: 20006,
  31929: 31883,
  32114: 31992,
  32147: 32076,
  32160: 32209,
  32214: 32210,
  32227: 32257,
  32291: 30476,
  32305: 32294,
  32317: 32207,
  32353: 32333,
  32361: 32260,
  32362: 32117,
  32363: 32331,
  32380: 32153,
  32396: 32154,
  32406: 32330,
  32570: 27424,
  32592: 32566,
  32882: 22768,
  32893: 32884,
  32901: 31899,
  33126: 33075,
  33213: 32966,
  33247: 33235,
  33274: 21488,
  33287: 19982,
  33290: 26087,
  33399: 33398,
  33674: 33624,
  33686: 33550,
  33824: 33804,
  33836: 19975,
  34083: 33931,
  34199: 22290,
  34224: 34219,
  34255: 34101,
  34269: 33464,
  34277: 34220,
  34310: 33446,
  34389: 20966,
  34395: 34394,
  34399: 21495,
  34722: 34509,
  34802: 34411,
  34847: 34635,
  34870: 34453,
  34875: 34542,
  34910: 34907,
  35037: 35013,
  35139: 35090,
  35258: 35226,
  35261: 35239,
  35264: 35251,
  35320: 35302,
  35616: 35617,
  35657: 35388,
  35695: 35379,
  35709: 35465,
  35712: 35501,
  35722: 22793,
  35731: 35698,
  35738: 35715,
  35920: 35914,
  35924: 33398,
  35947: 20104,
  36019: 24336,
  36067: 22770,
  36084: 38972,
  36106: 36059,
  36368: 36341,
  36544: 36527,
  36629: 36605,
  36635: 36620,
  36681: 36578,
  36776: 24321,
  36781: 36766,
  36783: 24321,
  36953: 36965,
  36958: 36883,
  36978: 36933,
  37002: 36794,
  37086: 37070,
  37141: 37111,
  37257: 37204,
  37291: 21307,
  37292: 37284,
  37297: 37271,
  37312: 37304,
  37323: 37320,
  37636: 37682,
  37666: 37549,
  37706: 37676,
  37805: 37806,
  37941: 37444,
  37956: 37619,
  37979: 37489,
  38364: 38306,
  38519: 38501,
  38568: 38543,
  38570: 38522,
  38577: 38560,
  38617: 21452,
  38620: 38609,
  38712: 35207,
  38728: 38666,
  38748: 38745,
  39002: 39003,
  39023: 38997,
  39132: 32763,
  39192: 20313,
  39200: 39173,
  39368: 39366,
  39479: 39442,
  39493: 39366,
  39511: 39443,
  39515: 39365,
  39635: 39620,
  39636: 20307,
  39662: 39658,
  39725: 38360,
  40388: 40335,
  40407: 40206,
  40572: 40568,
  40573: 22633,
  40613: 40614,
  40628: 40633,
  40629: 40634,
  40643: 40644,
  40657: 40658,
  40664: 40665,
  40670: 28857,
  40680: 20826,
  40778: 25993,
  40779: 25998,
  40786: 27503,
  40801: 40802,
  40845: 31452,
  40860: 20096,
};
