function getUserCallback(id, callback) {
  // Simulasi delay dari server
  setTimeout(() => {
    const user = { id, name: "Taufik Callback" };
    callback(null, user); // Pemanggilan parameter
  }, 1000); // delay waktu
}

// Pemanggilan
getUserCallback(1, (err, user) => {
  // kalau err tidak null
  if (err) {
    console.error("Error:", err);
  } else {
    // kalau err null
    console.log("SQ (Callback) User:", user);
  }
});
