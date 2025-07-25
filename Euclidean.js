// Normal

function Euclid(x, y) { 
  let high = x;
  let low = y;

  if (high < low) {
    high = y;
    low = x
  }

  while (low != 0) {
    const i = Math.floor(high / low);
    const multiplication = high - (i * low);

    high = low
    low = multiplication
  }

  return high;
}

console.log(Euclid(20,20));