export function kanaToHiragana(input: string): string {
  let result = '';

  for (const char of input) {
    let c = char.codePointAt(0)!;

    if ((c >= 0x30a1 && c <= 0x30f6) || c === 0x30fd || c === 0x30fe) {
      c -= 0x60;
    }

    result += String.fromCodePoint(c);
  }

  return result;
}
