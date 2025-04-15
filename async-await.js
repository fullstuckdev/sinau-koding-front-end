function readMaterials() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Membaca materi...");
      resolve();
    }, 1000);
  });
}

function doExercices() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mengerjakan latihan soal...");
      resolve();
    }, 1000);
  });
}

function reviewNotes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Mereview catatan...");
      resolve();
    }, 1000);
  });
}

async function runTasks() {
  await readMaterials();
  await doExercices();
  await reviewNotes();
  console.log("Siap menghadapi ujian");
}

runTasks();
