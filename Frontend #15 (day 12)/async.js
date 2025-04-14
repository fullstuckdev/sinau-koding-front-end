function getUserAsync(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id, name: "Taufik" };
      resolve(user);
    }, 1000);
  });
}

async function mainAsync() {
  console.log("1. Start async process");
  const user = await getUserAsync(3); // tidak bakal memblokir thread utama
  console.log("2. Received async user:", user);
  console.log("3. End async process");
}

mainAsync()