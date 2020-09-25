function rollDice() {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll;
}

console.log(rollDice());