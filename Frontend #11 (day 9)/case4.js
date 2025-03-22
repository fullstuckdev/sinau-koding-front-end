const products = [
    {id: 1, nama: "laptop", harga: 8000000, stok: 10, kategori: "Gaming"},
    {id: 2, nama: "smartphone", harga: 7000000, stok: 5, kategori: "Audio"},
    {id: 3, nama: "layar monitor", harga: 6000000, stok: 2, kategori: "Gaming"},
    {id: 4, nama: "kabel data", harga: 10000, stok: 0, kategori: "Aksesoris"}
]

// keranjang belanja
let cart = []


// ini bisa dipanggil. tapi manggilnya otomatis jadi addToCart(2,1)
addToCart()

const addToCart = (productId = 2, quantity = 1) => {
    const product = products.find(item => item.id === productId)

    if (!product) return "Produk tidak ditemukan"

    if (product.stok < quantity) return "Stok tidak mencukupi"

    const existingItem = cart.find(item => item.id === productId)

    if (existingItem) {
        existingItem.quantity += quantity
    } else {
        cart.push({
            id: product.id,
            nama: product.nama,
            harga: product.harga,
            quantity: quantity
        })
    }

    product.stok -= quantity
    return "Product berhasil ditambahkan ke keranjang"

    // ini tidak bakal terbaca, ketika ada command return
    let halo = "testing"


    if (existingItem) {
        existingItem.quantity += quantity
    } else {
        cart.push({
            id: product.id,
            nama: product.nama,
            harga: product.harga,
            quantity: quantity
        })
    }

}

const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.harga * item.quantity), 0)
}

const showCart = () => {
    if (cart.length === 0) return "Keranjang masih kosong"

    console.log("\n=== ISI KERANJANG ===")
    cart.forEach(item => {
        console.log(`${item.nama} (${item.quantity}x) - Rp${(item.harga * item.quantity).toLocaleString()}`)
    })

    const total = calculateTotal()
    console.log("\nTotal Belanja: Rp" + total.toLocaleString())

    const diskon = total > 1000000 ? total * 0.1 : 0;
    console.log(`Diskon (10%): Rp${diskon.toLocaleString()}`)
    console.log(`Total Akhir: Rp${(total - diskon).toLocaleString()}`)
}

const filterByCategory = (kategori) => {
    const filtered = products.filter(product => product.kategori === kategori)
    return filtered.length ? filtered : "Tidak ada produk dalam kategori ini"
}

console.log("=== DAFTAR PRODUK ===")
products.forEach(product => {
    console.log(`${product.nama} - Rp${product.harga.toLocaleString()} (Stok: ${product.stok})`)
})

console.log("\n=== SIMULASI PEMBELIAN ===")
console.log(addToCart(2, 2)) // bagian kiri, product id. bagian kanan jumlahnya.
console.log(addToCart(1, 8))
console.log(addToCart(3, 1))

// testing => Product berhasil ditambahkan ke keranjang
let testing = addToCart(2,2)
console.log(`testing ${testing}`)

addToCart(2, 2) // pemanggilan fungsi, dengan parameter
showCart() // pemanggilan fungsi, tanpa parameter