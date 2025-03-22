const products = [
  { id: 1, nama: "laptop", harga: 10000000, stock: 10 },
  { id: 2, nama: "laptop B", harga: 1000000, stock: 0 },
  { id: 3, nama: "laptop C", harga: 100000, stock: 0 },
];

// 1. IndexOf - Mencari element sederhana
const fruits = ["Apel", "Jeruk", "Mangga", "Durian"];
const jerukindex = fruits.indexOf("Jeruk"); // mencari dari depan
const jerukLastindex = fruits.lastIndexOf("Durian"); // mencari dari belakang
console.log(`Index pertama jeruk: ${jerukindex}`);
console.log(`Index terakhir jeruk: ${jerukLastindex}`);

// 2. Find
// cari harga yang di atas 1 juta
const expensiveProduct = products.find((product) => product.harga > 1000000);
console.log(expensiveProduct);

// 3. Find Index
const laptop = products.findIndex((product) => product.nama === "laptop B");
console.log(laptop);

// 4. include
const buahYangTersedia = ["Jeruk"];
console.log("Ada jeruk?", buahYangTersedia.includes("Jeruk"));
console.log("Ada semangka?", buahYangTersedia.includes("Semangka"));

// 5. filtering
const produkYangTersedia = products.filter((product) => product.stock > 0);
console.log(produkYangTersedia);

const number = [10, 1200, 1203102, 1000, 0, 50, 20, 25, 40, 50];

// 1. sort() - kecil ke besar
const sorted = [...number].sort((a, b) => a - b);
console.log(sorted);

const students = [
  { nama: "Taufik", score: 100 },
  { nama: "Orang A", score: 90 },
  { nama: "Orang B", score: 80 },
  { nama: "Orang C", score: 70 },
  { nama: "Orang D", score: 60 },
  { nama: "Orang E", score: 50 },
  { nama: "Orang F", score: 97 },
];

const highScoreStudents = students
  .filter((student) => student.score > 70)
  .sort((a, b) => b.score - a.score);

console.log(highScoreStudents);
