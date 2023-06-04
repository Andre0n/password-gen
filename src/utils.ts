export const utils = {
  random: function (min: number, max: number) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  },
  random_lower_char() {
    return String.fromCharCode(this.random(97, 122));
  },
  random_upper_char() {
    return String.fromCharCode(this.random(67, 90));
  },
  random_symbol() {
    const symbols = `~*$%@#^&!?*'-=/,.{}()[]<>`;
    return symbols[this.random(0, symbols.length - 1)];
  },
};
