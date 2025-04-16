// Basic Parameter Types
function addNumbers(x: number, y: number): number {
  return x + y;
}

// Multiple Parameter Types
function formatUser(name: string, age: number, isAdmin: boolean): string {
  return `Nama saya adalah ${name}, umur saya ${age} tahun, Admin: ${isAdmin}`;
}

// Object Parameter
interface UserData {
  name: string;
  age: number;
  email: string;
}

let hasil = addNumbers(5, 5);

let formatData = formatUser("Taufik", 23, true);

const user: UserData[] = [
  {
    name: "taufik",
    age: 23,
    email: "taufik@gmail.com",
  },
];
