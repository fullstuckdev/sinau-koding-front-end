// Fungsi delay 1 detik
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Fungsi async untuk membaca materi
  async function readMaterials() {
    await delay(1000);
    console.log("Membaca materi...");
  }
  
  // Fungsi async untuk mengerjakan latihan
  async function doExercises() {
    await delay(1000);
    console.log("Mengerjakan latihan soal...");
  }
  
  // Fungsi async untuk mereview catatan
  async function reviewNotes() {
    await delay(1000);
    console.log("Mereview catatan...");
  }
  
  // Fungsi utama untuk mengeksekusi semua proses secara berurutan
  async function prepareForExam() {
    await readMaterials();
    await doExercises();
    await reviewNotes();
    console.log("Siap menghadapi ujian!");
  }
  
  // Panggil fungsi utama
  prepareForExam();
  