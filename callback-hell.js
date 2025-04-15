function startWashing(callback) {
  console.log("Mesin cuci dimulai...");
  setTimeout(() => {
    console.log("Mesin cuci sedang mencuci (1 detik)");
    callback();
  }, 1000);
}

function dryClothes(callback) {
  console.log("Mulai mengeringkan baju....");
  setTimeout(() => {
    console.log("Baju sedang dikeringkan (1 detik)");
    callback();
  }, 1000);
}

function foldClothes(callback) {
  console.log("Mulai melipat baju....");
  setTimeout(() => {
    console.log("Baju dilipat rapi (1 detik)");
    callback();
  }, 1000);
}

startWashing(() => {
  dryClothes(() => {
    foldClothes(() => {
      console.log("Semua pekerjaan telah selesai");
    });
  });
});
