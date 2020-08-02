// sama kaya array, object hanya menyimpan reference memory, makanya pakai const
const tes = {
  firstName: 'Ardian',
  lastName: 'Eka Candra',
  alamat: 'Jogja',
};

console.log(tes);

tes.firstName.toUpperCase();

console.log(tes);

tes.firstName = tes.firstName.toUpperCase();

console.log(tes);