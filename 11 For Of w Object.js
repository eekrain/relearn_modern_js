const tes = {
  a: 8,
  b: 7,
  c: 6,
  d: 7,
  e: 9,
  f: 10,
}

for (let index of Object.keys(tes)) {
  console.log(`key ${index} memiliki value = ${tes[index]}`);
}