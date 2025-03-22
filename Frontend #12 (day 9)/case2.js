// 1) method ToString() - Mengubah array menjadi string dengan koma
const buah = ["Apel", "Jeruk", "Mangga"];
// console.log(buah.toString()) // Apel,Jeruk,Mangga

// 2) method at() = mengambil element paeda index tertentu
const angka = [10, 20, 30, 40, 50];
// console.log(angka.at(2)) // 30
// sama saja dengan
// console.log(angka[2]) // 30

// 3) method join() - menggabungkan elemet array dengan pemisah
const hewan = ["Kucing", "Anjing", "Kelinci"];
// console.log(hewan.join(" - ")) // Output: Kucing - Anjing - Kelinci
// console.log(hewan.join(" | ")) // Output: Kucing | Anjing | Kelinci

// 4) Method pop() - menghapus element terakhir pada array
const warna = ["Merah", "Biru", "Hijau", "Kuning"];
// console.log(`Array sebelum pop:`, warna)
const warnaYangDihapus = warna.pop();
// console.log("Elemen yang dihapus: ", warnaYangDihapus)
// console.log(`Array setelah pop:`, warna)

// 5) Method push() - menambahkan element terakhir pada array
const makanan = ["Nasi Goreng", "Mie Goreng"];
console.log(`Array sebelum dipush:`, makanan);
makanan.push("Sate", "Bakso");
console.log(`Array setelah dipush:`, makanan);
makanan.splice(1, 3)
console.log(`Array setelah displice:`, makanan);


// 6) Method Map()
const products = [
  { id: 1, nama: "laptop", harga: 10000000 },
  { id: 2, nama: "laptop B", harga: 1000000 },
  { id: 3, nama: "laptop C", harga: 100000 },
];

const formattedProduct = products.map((product) => {
  return {
    name: product.nama,
    price: new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(product.harga),
  };
});

console.log(`Product setelah di map`);
console.log(formattedProduct);


// 7) Method Find()
const findProductById = (id) => {
    const product = products.find(p => p.id === id)
    if (product) console.log(`Produk ditemukan dengan ID ${product.id}`)
    else console.log(`Produk tidak ditemukan`)
}

findProductById(3)

// 8) Method Reduce()
const totalPrice = products.reduce((total, product) => total + product.harga, 0)
console.log(totalPrice)

// method yg dipake FE:
// toString, join, push, pop, at, map, find, reduce
