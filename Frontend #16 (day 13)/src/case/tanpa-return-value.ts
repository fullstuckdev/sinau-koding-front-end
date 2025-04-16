// Void Function
function logMessage(message: string): void {
  console.log(message);
}

// Void dengan Callback
function processData(callback: () => void): void {
  callback();
}
