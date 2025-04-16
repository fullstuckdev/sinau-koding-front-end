// Type Alias
type StringOrNumber = string | number; // Data Primitiv
let myArray: StringOrNumber[] = ["halo", 100, "world"];

// Interface, dia sebagai Object
interface StringOrNumberArray {
  [index: number]: string | number;
}

let unionArray: StringOrNumberArray = ["ts", 101, "go"];
