export function halfToFullWidthNum(input: string): string {
  let result = '';

  for (const char of input) {
    let c = char.codePointAt(0)!;

    if (c >= 0x30 && c <= 0x39) {
      c += 0xff10 - 0x30;
    } else if (c >= 0x2c && c <= 0x2e) {
      c += 0xff0c - 0x2c;
    }

    result += String.fromCodePoint(c);
  }

  return result;
}
