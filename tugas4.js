console.log("======================Tugas Nomor 1=====================")
// Fungsi deep copy dengan rekursi dan spread operator
function deepCopy(obj) {
  // Jika nilainya primitif atau null, kembalikan langsung
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Jika obj berupa array, salin elemen satu per satu
  if (Array.isArray(obj)) {
    return obj.map(item => deepCopy(item));
  }

  // Jika obj berupa object biasa, salin setiap properti
  const copiedObj = { ...obj };
  for (const key in copiedObj) {
    copiedObj[key] = deepCopy(obj[key]);
  }

  return copiedObj;
}

// Contoh input seperti pada gambar
const person = {
  name: "John",
  age: 30,
  hobbies: ["reading", "gaming"],
  address: { city: "New York", zip: 10001 }
};

// Deep copy objek person
const copyPerson = deepCopy(person);

// Ubah properti pada copyPerson
copyPerson.address.city = "Los Angeles";
copyPerson.hobbies.push("Coding");

// Log hasil untuk verifikasi
console.log(person.address.city);
console.log(person.hobbies);

console.log("")
console.log("======================Tugas Nomor 2=====================")
const products = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 500 },
  { name: "Monitor", price: 1200 },
  { name: "Mouse", price: 300 }
];

const result = products
  .filter(product => product.price > 1000) // Filter produk dengan harga diatas 1000
  .map(product => product.name) // Ambil nama produk
  .reduce((acc, name, index, array) => acc + name + (index < array.length - 1 ? ", " : ""), ""); // Gabungkan dengan koma

console.log(result);

console.log("")
console.log("======================Tugas Nomor 3=====================")
const validateField = (...rules) => (value) => {
  return rules.every((rule) => rule(value));
};

const isNotEmpty = (value) => value.length > 0;
const isEmail = (value) => /\S+@\S+\.\S+/.test(value);

const validate = validateField(isNotEmpty, isEmail);

console.log(validate("example@mail.com")); // true
console.log(validate("")); // false
console.log(validate("invalid-email")); // false
