const names = ["Ani", "Budi", "Citra", "Deni"];

const greetings = names.map((name) => `Halo ${name}`);

// console.log(greetings);

const employees = [
  {
    id: 1,
    nama: "Employee A",
    position: "Software Engineer",
    salary: 10000000,
    yearsOfService: 4,
    projects: ["Web App", "Mobile App"],
  },
  {
    id: 2,
    nama: "Employee B",
    position: "UI/UX Designer",
    salary: 8000000,
    yearsOfService: 4,
    projects: ["Website design"],
  },
  {
    id: 3,
    nama: "Employee C",
    position: "Project Manager",
    salary: 9000000,
    yearsOfService: 1,
    projects: ["CRM System", "E-Commerce"],
  },
  {
    id: 4,
    nama: "Employee D",
    position: "Cyber",
    salary: 7000000,
    yearsOfService: 1,
    projects: ["Project A"],
  },
];

// 3. Every()
const allHaveProjects = employees.every(
  (employee) => employee.projects.length > 0
);

console.log(allHaveProjects);
