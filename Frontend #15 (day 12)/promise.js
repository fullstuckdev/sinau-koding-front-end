// Resolve => Sukses
// Reject => Gagal

function getUserPromise(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error("ID harus lebih besar dari 0"));
      } else {
        const user = { id, name: "Taufik Promise" };
        resolve(user);
      }
    }, 1000);
  });
}

// SUKSES, karena ID lebih besar 0
getUserPromise(2)
  // THEN itu ketika sukses, (RESOLVE)
  .then((user) => {
    console.log("HQ (Promise) User:", user);
  })
  // CATCH ketika error, (REJECT)
  .catch((err) => {
    console.log("Error:", err);
  });

// GAGAL, karena ID kurang atau sama dengan 0
getUserPromise(0)
  // THEN itu ketika sukses, (RESOLVE)
  .then((user) => {
    console.log("HQ (Promise) User:", user);
  })
  // CATCH ketika error, (REJECT)
  .catch((err) => {
    console.log("Error:", err);
  });
