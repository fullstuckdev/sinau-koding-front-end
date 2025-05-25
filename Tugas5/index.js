// ==============================
// Soal 1: Callback Hell
// ==============================
// Deskripsi:
// - startWashing(callback) → mencetak “Mesin cuci dimulai”
// - dryClothes(callback) → mencetak “Baju sedang dikeringkan”
// - foldClothes(callback) → mencetak “Baju dilipat rapi”
// Setiap fungsi berjalan setelah 1 detik, secara berurutan (nested callback)

function startWashing(callback) {
  setTimeout(() => {
    console.log("Mesin cuci dimulai");
    callback();
  }, 1000);
}

function dryClothes(callback) {
  setTimeout(() => {
    console.log("Baju sedang dikeringkan");
    callback();
  }, 1000);
}

function foldClothes(callback) {
  setTimeout(() => {
    console.log("Baju dilipat rapi");
    callback();
  }, 1000);
}

function runLaundryProcess(next) {
  console.log("=== Soal 1: Callback Hell ===");
  startWashing(() => {
    dryClothes(() => {
      foldClothes(() => {
        console.log("Proses laundry selesai\n");
        next();
      });
    });
  });
}

// ==============================
// Soal 2: Promise Chaining
// ==============================
// Deskripsi:
// - openLaptop(): resolve dengan “Laptop dinyalakan”
// - joinClass(): resolve dengan “Masuk kelas online”
// - takeNotes(): resolve dengan “Mencatat materi pelajaran”
// Ketiga fungsi dijalankan dengan .then() secara berurutan

function openLaptop() {
  return new Promise((resolve) => {
    resolve("Laptop dinyalakan");
  });
}

function joinClass() {
  return new Promise((resolve) => {
    resolve("Masuk kelas online");
  });
}

function takeNotes() {
  return new Promise((resolve) => {
    resolve("Mencatat materi pelajaran");
  });
}

function runLearningProcess(next) {
  console.log("=== Soal 2: Promise Chaining ===");
  openLaptop()
    .then((res) => {
      console.log(res);
      return joinClass();
    })
    .then((res) => {
      console.log(res);
      return takeNotes();
    })
    .then((res) => {
      console.log(res);
      console.log("Proses belajar selesai\n");
      next();
    });
}

// ==============================
// Soal 3: Async / Await
// ==============================
// Deskripsi:
// - readMaterials(): tampilkan “Membaca materi…” setelah 1 detik
// - doExercises(): tampilkan “Mengerjakan latihan soal…” setelah 1 detik
// - reviewNotes(): tampilkan “Mereview catatan…” setelah 1 detik
// Ketiganya dijalankan dengan async/await secara berurutan
// Akhiri dengan: “Siap menghadapi ujian!”

function readMaterials() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Membaca materi…");
      resolve();
    }, 1000);
  });
}

function doExercises() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mengerjakan latihan soal…");
      resolve();
    }, 1000);
  });
}

function reviewNotes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mereview catatan…");
      resolve();
    }, 1000);
  });
}

async function runExamPreparation() {
  console.log("=== Soal 3: Async/Await ===");
  await readMaterials();
  await doExercises();
  await reviewNotes();
  console.log("Siap menghadapi ujian!\n");
}

// ==============================
// Jalankan Semua Soal Secara Berurutan
// ==============================

function main() {
  runLaundryProcess(() => {
    runLearningProcess(() => {
      runExamPreparation();
    });
  });
}

main();
