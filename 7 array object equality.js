let x = [1, 2, 3];
let y = [1, 2, 3];

// Return false. Value nya sama tapi tidak memenuhi equality karena yg disimpan reference nya saja
// Harus manual compare pake loop
console.log(x === y);
console.log(x == y);

const tes = {
  firstName: 'Ardian',
  lastName: 'Eka Candra',
  alamat: [],
};

// ini gak akan bisa, soalnya udah beda reference memory. biar bener bisa pake .length
if (tes.alamat === [])
  console.log('kosong');
else
  console.log('ada');