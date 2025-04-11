// Get Element By ID
const judul = document.getElementById("judul"); // Ngambil ID
document.getElementById("ubahJudul").addEventListener("click", () => {
  judul.textContent = "Hello World!!!"; // Text Content
});

// Query Selector
const paragrafPertama = document.querySelector(".paragraf");
document.getElementById("warnaiParagraf").addEventListener("click", () => {
  paragrafPertama.style.color = "blue";
});

// Query Selector All
const semuaParagraf = document.querySelectorAll(".paragraf");
document.getElementById("tandaiParagraf").addEventListener("click", () => {
  semuaParagraf.forEach((p, index) => {
    p.textContent += `(Paragraf ke-${index + 1})`;
  });
});

// InnerHTML
document.getElementById("gantiHTML").addEventListener("click", () => {
  document.getElementById("outputNama").innerHTML =
    "<strong> Konten baru dengan HTML! </strong>";
});

// Value
document.getElementById("tampilkanNama").addEventListener("click", () => {
  const nama = document.getElementById("inputNama").value;
  document.getElementById("outputNama").textContent = `Halo, ${nama}!`;
});

// Set Attribute
document.getElementById("setAtribut").addEventListener("click", () => {
  judul.setAttribute("style", "color: red; font-style: italic;");
  judul.setAttribute("title", "Ini adalah judul");
});

// Remove Attribute
document.getElementById("hapusAtribut").addEventListener("click", () => {
  judul.removeAttribute("style");
  judul.removeAttribute("title");
});

// Create Element
let elemenBaru; // masih null
let elemenCounter = 1;
document.getElementById("buatElemen").addEventListener("click", () => {
  elemenBaru = document.createElement("p"); // buat bikin tag baru
  elemenBaru.textContent = `Ini elemen ke-${elemenCounter}`; // buat nentuin text nya
  elemenBaru.style.color = "green"; // warna dari text
  elemenCounter++;
  alert("Elemen dibuat, silahkan pilih tambah atau sisipkan!");
});

// Append Child
document.getElementById("tambahKeAkhir").addEventListener("click", () => {
  // kalau elementBaru tidak null
  if (elemenBaru) {
    document.getElementById("containerBaru").appendChild(elemenBaru); // masukin elemen baru ke dalam id containerBaru
    elemenBaru = null;
  }
});

// Insert Before
document.getElementById("sisipkanAwal").addEventListener("click", () => {
  // kalau elementBaru tidak null
  if (elemenBaru) {
    const container = document.getElementById("containerBaru");
    const pertama = container.querySelector("p");
    container.insertBefore(elemenBaru, pertama.nextSibling);
    elemenBaru;
  }
});

// Remove Child
document.getElementById("hapusAnakTerakhir").addEventListener("click", () => {
  const container = document.getElementById("containerBaru");
  if (container.children.length > 1) {
    container.removeChild(container.lastElementChild);
  } else {
    alert("tidak ada elemen lagi yang bisa dihapus.");
  }
});

// Remove
document.getElementById("hapusSemua").addEventListener("click", () => {
  const container = document.getElementById("containerBaru");
  const children = container.querySelectorAll("p");
  children.forEach((child, index) => {
    if (index !== 0) child.remove();
  });
});

// Inline Event Handler
function tampilkanInline() {
  alert("ini dari Inline Event Handler");
}

// Event Listener
document.getElementById("btnListener").addEventListener("click", () => {
  alert("ini dari Event Listener Modern");
});

function onChangeData() {
  alert("Dropdown berubah");
}

function onClickData() {
  alert("Tombol diklik");
}

function onMouseOverData() {
  console.log("Mouse masuk");
}

function onMouseOverOutData() {
  console.log("Mouse keluar");
}

function onKeyDownData(e) {
  console.log(`Tombol ${e.key} ditekan!`);
}

function onloadData() {
  console.log(`Halaman sedang dimuat`);
}
