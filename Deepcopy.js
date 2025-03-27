// Fungsi untuk melakukan deep copy pada objek
function deepCopy(obj) {
    // Jika obj bukan objek atau array, langsung kembalikan nilainya (primitive value)
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Jika obj adalah array, buat salinan baru dengan rekursi
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    }

    // Jika obj adalah objek, buat salinan baru menggunakan spread operator dan rekursi
    return Object.keys(obj).reduce((copy, key) => {
        copy[key] = deepCopy(obj[key]);
        return copy;
    }, {});
}

// Contoh penggunaan
const original = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zip: 10001
    },
    hobbies: ["reading", "gaming"]
};

const copied = deepCopy(original);

// untuk menambahkan city dan hobi
copied.address.city = "Los Angeles";
copied.hobbies.push("coding");

console.log("Original:", original);
console.log("Copied:", copied);
