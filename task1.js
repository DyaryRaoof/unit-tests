function stringLength(string) {
  if (string.length > 0 && string.length < 10) {
    return string.length;
  } else {
    throw new Error('String length should be more than 0 and bellow 10');
  }
}

module.exports.stringLength = stringLength;
