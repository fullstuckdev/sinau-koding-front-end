const students = [
    {
        nama: "Charlie",
        skor: {
            matematika: 100,
            english: 100,
            pemrograman: 100
        }
    },
    {
        nama: "Alice",
        skor: {
            matematika: 85,
            english: 85,
            pemrograman: 85
        },
    },
    {
        nama: "Bob",
        skor: {
            matematika: 50,
            english: 50,
            pemrograman: 50
        },
    }
]

const calculateAverage = (skor) => {
    const total = Object.values(skor).reduce((sum, score) => sum + score, 0)
    return total / Object.values(skor).length
}

const determineGrade = (average) => {
    // misal 90.5 => menjadi 90
   const gradeRange = Math.floor(average / 10) * 10

   switch (gradeRange) {
    case 90:
    case 100:
        return 'A'
    case 80:
        return 'B'
    case 70:
        return 'C'
    default:
        return 'D'
   }
}

console.log("=== Hasil Nilai Siswa ===")
students.forEach(student => {
    const average = calculateAverage(student.skor)
    const grade = determineGrade(average)

    const status = average >= 75 ? "Lulus" : "Tidak Lulus"

    console.log(`\nNama: ${student.nama}`)
    console.log(`Nilai rata-rata: ${average.toFixed(2)}`)
    console.log(`Grade: ${grade}`)
    console.log(`Status: ${status}`)

    console.log(`Detail Nilai:`)
    for (let subject in student.skor) {
        console.log(`- ${subject}: ${student.skor[subject]}`)
    }
})