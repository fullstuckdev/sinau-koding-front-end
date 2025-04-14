function task1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 selesai");
      resolve();
    }, 1000); // delay selama 1 detik
  });
}

function task2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 selesai");
      resolve();
    }, 1000); // delay selama 1 detik
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3 selesai");
      resolve();
    }, 1000); // delay selama 1 detik
  });
}

async function runTasks() {
  await task1();
  await task2();
  await task3();
  console.log("Semua task selesai");
}


runTasks()