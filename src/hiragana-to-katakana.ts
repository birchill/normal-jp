export function hiraganaToKatakana(input: string): string {
  let result = '';

  for (const char of input) {
    let c = char.codePointAt(0)!;

    if ((c >= 0x3041 && c <= 0x3096) || c === 0x309d || c === 0x309e) {
      c += 0x60;
    }

    result += String.fromCodePoint(c);
  }

  return result;
}
