const products = [
    {id: 1, nama: "laptop", harga: 8000000, stok: 10},
    {id: 2, nama: "smartphone", harga: 7000000, stok: 5},
    {id: 3, nama: "layar monitor", harga: 6000000, stok: 2},
    {id: 4, nama: "kabel data", harga: 10000, stok: 0}
]

const checkStock = (product) => {
    // ternary operator (cara pertama)
    return product.stok > 0 ? "Tersedia" : "Habis"

    // IF ELSE (cara kedua)
    if(product.stok > 0) {
        return "Tersedia"
    } else {
        return "Habis"
    }
}

console.log("=== Daftar Produk ===")
products.forEach(product => {
    const status = checkStock(product)
    console.log(`${product.nama} | Rp ${product.harga} (${status})`)
})

const expensiveProduct = products.filter(product => product.harga > 1000000)
console.log("\nProduct di atas 1 juta:", expensiveProduct)