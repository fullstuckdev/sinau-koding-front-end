const karyawan = [
  { nama: "Budi", performa: 85 },
  { nama: "Ani", performa: 92 },
  { nama: "Citra", performa: 78 },
  { nama: "Deni", performa: 88 },
  { nama: "Eva", performa: 95 },
];

// Hitung performanya
const totalPerforma = karyawan.reduce((total, kar) => total + kar.performa, 0);
const rataRataPerforma = totalPerforma / karyawan.length;

// Karyawan yang bakal dapat bonus
const karyawanDenganBonus = karyawan.map((kar) => {
  return {
    nama: kar.nama,
    performa: kar.performa,
    dapatBonus: kar.performa > rataRataPerforma,
    status:
      kar.performa > rataRataPerforma ? "Dapat Bonus" : "Tidak Dapat Bonus",
  };
});

console.log(`Rata-rata performa: ${rataRataPerforma}`)
console.log(`\nDaftar Karyawan dan Status Bonus:`)
console.table(karyawanDenganBonus)