// bakal input data-data product melalui Interface
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  status?: boolean; // ? artinya optional
}

// bakal memasukan data Product ke keranjang melalui Interface
interface CartItem {
  product: Product;
  quantity: number;
}

// Generic Class
class ShoppingCart<T extends CartItem> {
  // Array Private (array kosong, buat nampung data)
  private items: T[] = [];

  // Method AddItems
  addItem(item: T): void {
    // check apakah ada atau ga produknya?
    const existingItem = this.items.find(
      (i) => i.product.id === item.product.id
    );

    if (existingItem) {
      // Jika itemnya ada, kita tambah quantity
      existingItem.quantity += item.quantity;
    } else {
      // Jika itemnya tidak ada, kita tambah quantity + productnya
      this.items.push(item);
    }
  }

  // Method removeItem -> menghapus sebuah item
  removeItem(productId: number): void {
    // Filtering berdasarkan parameter productId
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Method untuk menghitung total harga
  getTotal(): number {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }

  // Method untuk menampilkan data items
  getItems(): ReadonlyArray<T> {
    return this.items;
  }
}

// Products[] fungsinya untuk memasukan data-data produk
const products: Product[] = [
  { id: 1, name: "Laptop", price: 10000000, stock: 5 }, // index ke-0
  { id: 2, name: "Telepon", price: 1000000, stock: 4, status: true }, // index ke-1
];

// Instance Cart
const cart = new ShoppingCart<CartItem>();

// Add Items
cart.addItem({ product: products[0], quantity: 1 });
cart.addItem({ product: products[1], quantity: 1 });

// Menampilkan output
console.log("Cart Items:", cart.getItems());
console.log("Total:", cart.getTotal());