// Best case to use for of
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`)
}

// Best case to use for 
const x = ['car', 'milk', 'bath'];
const y = ['glass', 'bottle', 'bowl'];


for (let i = 0; i < 3; i++) {
  console.log(`x = ${x[i]}, y = ${y[i]}`)
}