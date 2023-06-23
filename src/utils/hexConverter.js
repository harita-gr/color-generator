const hexConverter = (c) => {
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = (r, g, b) => {
  return hexConverter(r) + hexConverter(g) + hexConverter(b);
};

export default rgbToHex;
