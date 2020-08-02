const jeopardyWinnings = {
  regularPlay: 2522800,
  watsonChallenge: 300000,
  tournamentOfChampions: 500000,
  battleOfTheDecades: 100000,
};

// bisa dilakukan perulangan karena langsung akses ke key-nya
for (let prop in jeopardyWinnings) {
  console.log(prop);
  console.log(jeopardyWinnings[prop]);
}

// Ga terlalu berguna untuk list array, karena key pasti sama
const num = [11, 22, 33, 44, 55, 66, 77, 88, 99];
for (let x in num) {
  console.log(x);
}