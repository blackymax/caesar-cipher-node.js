const caesarMachine = (text, shift, mode) => {
  if (mode !== 'encode') {
    shift *= -1;
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArray = alphabet.split('');
  return text
    .split('')
    .map((letter) => {
      const searchIdx = alphabetArray.indexOf(letter.toLowerCase());
      if (searchIdx >= 0) {
        const isLow = letter === letter.toLowerCase();
        let newIndex = (searchIdx + shift) % alphabet.length;
        if (newIndex < 0) {
          newIndex += alphabet.length;
        }
        let shiftedLetter = alphabet[newIndex];
        if (!isLow) {
          shiftedLetter = shiftedLetter.toUpperCase();
        }
        return shiftedLetter;
      } else {
        return letter;
      }
    })
    .join('');
};

module.exports = { caesarMachine };
