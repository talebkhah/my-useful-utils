export const enDigitsToFaDigits = (enDigits: string | number) => {
  let fa = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

  if (enDigits) {
    return enDigits.toString().replace(/[0-9]/g, function(enDigit) {
      return fa[+enDigit];
    });
  } else {
    return enDigits;
  }
};
