// Default Parameter Values, misal taxRate null atau tidak values.
// Otomatis dia valuenya 0.l
function calculateTax(amount: number, taxRate: number = 0.1): number {
  console.log(`ini taxRate nilai default ${taxRate}`);
  return amount * (1 + taxRate);
}

// console.log(calculateTax(100));

interface ThemeOptions {
  background: string;
  text: string;
}

function createTheme(
  options: ThemeOptions = { background: "white", text: "black" }
): ThemeOptions {
  console.log(`Ini background ${options.background}, ini text ${options.text}`);
  return options;
}

console.log(createTheme());
