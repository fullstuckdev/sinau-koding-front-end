const minuman = ["Jus jeruk", "Jus apel", "Jus Mangga"]

// 1. Shift() - Menghapus elemen pertama (index pertama)
const firstDrink = minuman.shift()
console.log(minuman)

// 2. Unshift() - menambahkan elemen pertama
minuman.unshift("Jus Semangka")
console.log(minuman)

// 3. Concat()
const banyakMinuman = ["Susu", "Teh", "Kopi"]
const semuaMinuman = minuman.concat(banyakMinuman)
console.log(semuaMinuman)

// 4. Splice
semuaMinuman.splice(1, 2, "Jus Sirsak")
console.log(semuaMinuman)

// 5 Slice
const beberapaMinuman = semuaMinuman.slice(1,3)
console.log(beberapaMinuman)