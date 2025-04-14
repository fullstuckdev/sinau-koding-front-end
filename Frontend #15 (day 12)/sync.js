function getUserSync(id) {
  // Tidak memakai delay
  const user = { id, name: "Taufik Sync" }; // Ini masih loading
  return user;
}

function mainSync() {
  console.log("1. Start sync process");
  const user = getUserSync(3);
  console.log("2. Received async user:", user);
  console.log("3. End async process");
}

mainSync();
