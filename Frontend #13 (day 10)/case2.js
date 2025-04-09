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
    projects: [],
  },
];

// 1. Map()
const employeeReports = employees.map((employee, index) => {
  const bonusPercentage = employee.yearsOfService >= 3 ? 0.15 : 0.1;
  const bonus = employee.salary * bonusPercentage;

  return {
    no: index + 1,
    name: employee.nama,
    position: employee.position,
    totalProjects: employee.projects.length,
    bonus: bonus,
    totalCompensation: employee.salary + bonus,
  };
});

console.log(employeeReports);

// 2. Reduce()
const totalSalaryExpense = employees.reduce((total, employee) => {
  return total + employee.salary;
}, 0);

const allProjects = employees.reduce((projects, employee) => {
  // gabungkan array kosong, dengan array yang udah ada
  return [...projects, ...employee.projects];
}, []);

// filtering ini, untuk menghapus duplikasi
const filtering = [...new Set(allProjects)];

console.log(`Reduce - Total Pengeluaran Gaji: Rp. ${totalSalaryExpense}`);
console.log(`Reduce - Total Unique Projects: ${filtering.length}`);

// 3. Every()
const allHaveProjects = employees.every(
  (employee) => employee.projects.length > 0
);

console.log(allHaveProjects);

const numbers = [1, 2, 3, 4, 5];

const newArray = numbers.map((element, index, array) => {
  console.log(`
    Element saat ini: ${element}
    Index saat ini: ${index}
    Array penuh: [${array}]`);

  return element * 2;
});


console.log(`hasil akhir ${newArray}`)

