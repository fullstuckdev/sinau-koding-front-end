function startWashing(callback) {
  console.log("Mulai mencuci baju....");
  setTimeout(() => {
    console.log("Mesin cuci sedang mencuci (butuh waktu 3 detik)");
    callback();
  }, 3000);
}

function cleanRoom(callback) {
  console.log("Mulai membersihkan kamar....");
  setTimeout(() => {
    console.log("Kamar selesai dibersihkan (2 detik)");
    callback();
  }, 2000);
}

function cookNoodles(callback) {
  console.log("Mulai memasak mie....");
  setTimeout(() => {
    console.log("mie siap disantap (1 detik)");
    callback();
  }, 1000);
}

// CALLBACK Hell -> (Sulit untuk dibaca)
startWashing(() => {
  cleanRoom(() => {
    cookNoodles(() => {
      console.log("Semua pekerjaan telah selesai");
    });
  });
});
