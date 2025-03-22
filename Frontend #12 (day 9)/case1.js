// function cekGanjilGenap
function cekGanjilGenap(bilangan) {
  if (bilangan <= 0) return "Bilangan harus positif";
  else if (bilangan % 2 === 0) return "Bilangan Genap";
  else return "Bilangan Ganjil";
}

let hasil = cekGanjilGenap(1101);
console.log(hasil);

// object
const orang = { nama: "Ana", umur: 23, hobi: "renang" };
orang.nama = "Taufik"; // edit properti
orang.pekerjaan = "Developer"; // tambah properti
delete orang.pekerjaan; // hapus properti
console.log(orang);

// array
// buah[0] => semangka // index ke 0
// buah[1] => apel // index ke 1
// buah[2] => jeruk // index ke 2
// buah[3] => strawberry // index ke 3

const buah = [
  "semangka", // buah[0]
  "apel", // buah[1]
  "jeruk", // buah[2]
  "strawberry", // buah[3]
];

buah[0] = "Durian"; // edit array index 0
buah.push("Leci"); // tambah array index akhir
buah.pop(); // menghapus index terakhir
console.log(buah);
console.log(`Panjang array buah ${buah.length}`)
console.log(buah[buah.length - 1]) // buah[3]

// nested object
const orangNested = {
  nama: "Taufik", // orangNested.nama
  hobi: "berenang", // orangNested.hobi
  alamat: {
    kota: "Jakarta", // orangNested.alamat.kota
    kecamatan: "Kembangan", // orangNested.alamat.kecamatan
    kodepos: {
      kode: 40227, // orangNested.kodepos.kode
    },
  },
  perkenalan: function () {
    return `
    Halo nama saya ${orangNested.nama}, 
    hobi saya ${orangNested.hobi}, 
    saya tinggal di ${orangNested.alamat.kota} kecamatan ${orangNested.alamat.kecamatan}
    dengan kode pos ${orangNested.alamat.kodepos.kode}`;
  },
};

console.log(orangNested.perkenalan());

// fungsi
const person = {
  nama: "John",
  umur: 25,
  tambahUmur: function () {
    person.umur += 1;
  },
};

console.log(`umur awal ${person.umur}`);
person.tambahUmur(); // tambah 1 tahun
person.tambahUmur(); // tambah 1 tahun
person.tambahUmur(); // tambah 1 tahun
console.log(`umur setelah ditambah ${person.umur}`);

// array berisi object
const arrayOfObject = [
  {
    nama: "Taufik", // arrayOfObject[0].nama
    role: "Backend", // arrayOfObject[0].role
  },
  {
    nama: "Mulyawan", // arrayOfObject[1].nama
    role: "Frontend", // arrayOfObject[1].role
  },
  {
    nama: "Bob", // arrayOfObject[2].nama
    role: "DevOps", // arrayOfObject[2].role
  },
];

console.log(arrayOfObject[0].nama);
console.log(arrayOfObject[1].role);





