function getAsciiValue(char) {
  if (typeof char !== "string" || char.length !== 1) {
    return -1;
  }

  return char.charCodeAt(0);
}


console.log(getAsciiValue("b")); 