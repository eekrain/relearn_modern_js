function avg(numbers) {
  let sum = 0;
  for (let val of numbers) {
    sum += val;
  }
  return sum / numbers.length;
}

console.log(avg([10, 24, 64, 63, 23, 23]));