/**
 * Expands the ー character to equivalent kana.
 *
 * Note that for some combinations there are multiple possible expansions.
 * e.g. カオー could be カオウ but オーサカ is オオサカ.
 *
 * (Technically, ー represents an extended vowel sound and オオ is actually
 * pronounced _differently_ to オウ, as two separate sounds, but people still
 * write オーサカ so we should recognize it.)
 *
 * This function returns an empty array if the input string contains no
 * ー characters.
 *
 * Only the お-row is ambiguous (ー can be either う or お). Every other row
 * expands to a single vowel, so the number of results is 2^n where n is the
 * number of お-row long vowels in the input. That gets expensive quickly: a
 * 40 character run of them produces over a million strings.
 *
 * Callers working with arbitrary input should therefore pass `maxVariants` to
 * bound both the size of the result and the work done producing it. Expansion
 * stops as soon as that many results have been generated, so the result is
 * truncated rather than complete. The order in which results are generated is
 * deterministic but otherwise unspecified.
 */
export function expandChoon(
  input: string,
  { maxVariants = Infinity }: { maxVariants?: number } = {}
): Array<string> {
  if (input.indexOf('ー') === -1 || maxVariants < 1) {
    return [];
  }

  const replacer = (vowel: string) => (match: string, start: string) =>
    `${start}${vowel.repeat(match.length - 1)}`;

  // Expand the simple cases
  const initialResult = input
    .replace(/([うくぐすずつづぬふぶぷむゆゅる])ー+/g, replacer('う'))
    .replace(/([ウクグスズツヅヌフブプムユュル])ー+/g, replacer('ウ'))
    .replace(/([あかがさざただなはばぱまやゃらわ])ー+/g, replacer('あ'))
    .replace(/([アカガサザタダナハバパマヤャラワ])ー+/g, replacer('ア'))
    .replace(/([いきぎしじちぢにひびぴみり])ー+/g, replacer('い'))
    .replace(/([イキギシジチヂニヒビピミリ])ー+/g, replacer('イ'))
    .replace(/([えけげせぜてでねへべぺめれ])ー+/g, replacer('え'))
    .replace(/([エケゲセゼテデネヘベペメレ])ー+/g, replacer('エ'));

  // Now generate a result for each possible expansion of お・う
  const result: Array<string> = [];
  const matchO = /([おこごそぞとどのほぼぽもよょろを])ー+/;
  const matchKatakanaO = /([オコゴソゾトドノホボポモヨョロヲ])ー+/;
  const expandO = (base: string) => {
    // Stop as soon as we have enough. Because this unwinds the whole recursion
    // it also caps the work done, not just the size of the result.
    if (result.length >= maxVariants) {
      return;
    }

    let expandedWithU = base.replace(matchO, replacer('う'));
    if (expandedWithU === base) {
      expandedWithU = base.replace(matchKatakanaO, replacer('ウ'));
    }

    // If there have been no changes, then there are no more substitutions to
    // make for this string.
    if (expandedWithU === base) {
      // Check that there is _some_ change from the original input, however.
      if (base !== input) {
        result.push(expandedWithU);
      }
      return;
    }

    // Continue expanding with this base
    expandO(expandedWithU);

    // Also, in "parallel", try expanding using お・オ
    let expandedWithO = base.replace(matchO, replacer('お'));
    if (expandedWithO === base) {
      expandedWithO = base.replace(matchKatakanaO, replacer('オ'));
    }
    expandO(expandedWithO);
  };

  expandO(initialResult);

  return result;
}
