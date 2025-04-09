const menuItems = [
  { id: 1, name: "Makanan", parentId: null }, // kotak A
  { id: 2, name: "Minuman", parentId: null }, // kotak B
  { id: 3, name: "Nasi Goreng", parentId: 1 }, // item dari kotak A
  { id: 4, name: "Mie Goreng", parentId: 1 }, // item dari kotak A
  { id: 5, name: "Es Teh", parentId: 2 }, // item dari kotak B
  { id: 6, name: "Es Jeruk", parentId: 2 }, // item dari kotak B
  { id: 7, name: "Es Teh + Jeruk", parentId: 5 }, // item dari kotak B
];

function createTree(items, parentId = null) {
  // cari kotaknya, cocokin berdasarkan parent ID
  // mencari data di kotak yang ditemukan
  return items
    .filter((item) => item.parentId === parentId)
    .map((item) => ({
      ...item,
      children: createTree(items, item.id),
    }));
}

const menuTree = createTree(menuItems)
console.log(JSON.stringify(menuTree, null, 2))