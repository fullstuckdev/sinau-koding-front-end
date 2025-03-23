//tugas 1
console.log("---------------------ini tugas 1---------------------")

// Fungsi untuk melakukan deep copy pada objek
function deepCopy(obj) {
    // Jika obj bukan objek atau array, kembalikan langsung (nilai primitif)
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    // Jika obj adalah array, buat salinan baru dengan rekursi
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    }
    
    // Jika obj adalah objek, buat salinan baru dengan spread operator
    return Object.keys(obj).reduce((acc, key) => {
        acc[key] = deepCopy(obj[key]);
        return acc;
    }, {});
}

// Contoh penggunaan
const person = {
    name: "John",
    age: 30,
    hobbies: ["Reading", "Gaming"],
    address: {
        city: "New York",
        zip: "12345"
    }
};

const copyPerson = deepCopy(person);

// Mengubah nilai dalam objek yang telah disalin
copyPerson.address.city = "Los Angeles";
copyPerson.hobbies.push = "Coding";

console.log(person.address.city); //new york
console.log(person.hobbies) ; //reading, gaming, coding


//tugas 2
console.log("---------------------ini tugas 2---------------------")

const products = [
    { name: "Laptop", price: 1500 },
    { name: "Mouse", price: 300 },
    { name: "Keyboard", price: 500 },
    { name: "Monitor", price: 1200 }
];

// Filter produk dengan harga di atas 1000
const filteredProducts = products.filter(product => product.price > 1000);

// Ambil hanya nama produk
const productNames = filteredProducts.map(product => product.name);

// Gabungkan nama produk menjadi satu string
const resultString = productNames.join(", ");

console.log(resultString); //laptop, monitor

//tugas 3
console.log("---------------------ini tugas 3---------------------")

// pembuatan fungsi untuk memvalidasi apakah data benar atau salah
function validateField(rules) {
    return function(value) {
        return rules.every(rule => rule(value));
    };
}

// Contoh aturan validasi
const isNotEmpty = (value) => value.length > 0;
const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);


// Contoh penggunaan
const validate = validateField([isNotEmpty, isEmail]);


console.log(validate("test@example.com")); // true
console.log(validate("")); // false
console.log(validate("invalid-email")); // false