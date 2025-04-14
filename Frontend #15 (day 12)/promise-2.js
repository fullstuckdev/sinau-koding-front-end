// untuk check paket dari kurir
function checkDelivery(isDelivered) {
  return new Promise((resolve, reject) => {
    console.log("Status: Pending... (Menunggu kurir)");

    setTimeout(() => {
      // kondisi apakah paket diterima atau belum
      if (isDelivered) {
        resolve("Paket sudah diterima!"); // status sukses - sukses
      } else {
        reject("Paket gagal dikirim!"); // status failed - reject
      }
    }, 2000); // delay selama 2 detik
  });
}

// const data = checkDelivery(true)
// console.log(data)

// Contoh 1: Paket Berhasil dikirim
// checkDelivery(true) // true berarti sukses
//   .then((result) => {
//     console.log("Fulfilled:", result);
//   })
//   .catch((error) => {
//     console.log("Rejected:", error);
//   });

// // Contoh 2: Paket Gagal dikirim
checkDelivery(false) // false berarti gagal
  .then((result) => {
    console.log("Fulfilled:", result);
  })
  .catch((error) => {
    console.log("Rejected:", error);
  });
