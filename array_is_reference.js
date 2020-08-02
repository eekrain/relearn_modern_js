let num = [1, 2, 3, 4];
otherNum = num;

// kalau ada variabel yg sama sama nyimpen array yg sama, maka kalau salah satu berubah, variabel yg nyimpen
// itu array bakal berubah juga

// karena variabel hanya menyimpan reference memory dari value array nya

console.log("num");
console.log(num);

console.log("num");
console.log(num);

otherNum.pop();
otherNum.pop();

console.log("num");
console.log(num);

console.log("num");
console.log(num);