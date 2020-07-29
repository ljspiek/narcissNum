function narcissistic(value) {
  if (value < 10) {
    return true;
  } else {
    let string = value.toString();
    let arr = string.split("");
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += Math.pow(arr[i], string.length);
    }
    if (total === value) {
      return true;
    } else return false;
  }
}

console.log(narcissistic(371));
