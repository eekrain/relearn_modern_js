const num = [1, 2, 3, 4, 5];

console.log(num);
// bisa dilakukan perubahan, karena tidak merubah reference memory
num.push(6);
console.log(num);

num[0] = -2;
console.log(num);

// error karena merubah reference
num = [1, 2, 3, 4, 5];
console.log(num);