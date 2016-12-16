export function stringToHex(string) {
  let hash = 0, i, chr, len;

  for (i = 0, len = string.length; i < len; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
}


export function stringToHexColor(string) {
  let hexValue = stringToHex(string);

  if (hexValue.length >= 0 && hexValue.length <= 5) {
    return `#${hexValue.substr(0, 3)}`;
  }

  if (hexValue.length >= 6) {
    return `#${hexValue.substr(0, 6)}`;
  }
}
