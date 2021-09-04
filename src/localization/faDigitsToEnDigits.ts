type faDigitsType =
  | '\u06F0'
  | '\u06F1'
  | '\u06F2'
  | '\u06F3'
  | '\u06F4'
  | '\u06F5'
  | '\u06F6'
  | '\u06F7'
  | '\u06F8'
  | '\u06F9';

type faDigitsVsEnDigitsType = { [faDigit in faDigitsType]: string };

export const faDigitsToEnDigits = (faDigits: string) => {
  let faDigitsVsEnDigits: faDigitsVsEnDigitsType = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  };

  if (faDigits) {
    return faDigits
      .toString()
      .replace(
        /[^0-9.]/g,
        (faDigit: string) =>
          faDigitsVsEnDigits[faDigit as faDigitsType] || faDigit
      );
  } else {
    return faDigits;
  }
};
