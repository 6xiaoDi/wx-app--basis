function convertToCastString(casts) {
  let castsjoin = "";
  for (let idx in casts) {
    castsjoin = castsjoin + casts[idx].name + " / ";
  }
  return castsjoin.substring(0, castsjoin.length - 2);
}

export {
  convertToCastString
}