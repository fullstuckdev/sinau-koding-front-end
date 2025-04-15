function openLaptop() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Laptop dinyalakan");
      resolve();
    }, 1000);
  });
}

function joinClass() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Masuk kelas online");
      resolve();
    }, 1000);
  });
}

function takeNotes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mencatat materi pelajaran");
      resolve();
    }, 1000);
  });
}

openLaptop()
  .then(() => joinClass())
  .then(() => takeNotes());
