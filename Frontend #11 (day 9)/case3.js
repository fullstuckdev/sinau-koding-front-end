// Array (untuk real case, sumber data ada di back-end.. di dalam database)
const movies = [
    {
        judul: "Avengers",
        genre: "Action",
        rating: 4.5,
        sudahDitonton: true,
        tahun: 2012
    },
    {
        judul: "Frozen",
        genre: "Animation",
        rating: 4.3,
        sudahDitonton: false,
        tahun: 2013
    },
    {
        judul: "Spider-Man",
        genre: "Action",
        rating: 4.7,
        sudahDitonton: true,
        tahun: 2021
    },
    {
        judul: "Film A",
        genre: "Action",
        rating: 2.7,
        sudahDitonton: true,
        tahun: 2015
    }
]

const getWatchStatus = (status) => {
    return status ? "Sudah ditonton" : "Belum ditonton"
}

const getRatingCategory = (rating) => {
    switch(true) {
        case rating >= 4.5:
            return "Sangat bagus"
        case rating >= 4.0:
            return "Bagus"
        default:
            return "Biasa"
    }
}

// Daftar Film Favorit
console.log("=== DAFTAR FILM FAVORIT === \n")
movies.forEach(film => {
    console.log(`Judul: ${film.judul}`)
    console.log(`Genre: ${film.genre}`)
    console.log(`Tahun: ${film.tahun}`)
    console.log(`Rating: ${film.rating} (${getRatingCategory(film.rating)})`)
    console.log(`Status: ${getWatchStatus(film.sudahDitonton)}`)
    console.log("-".repeat(30) + "\n")
})

// Menghitung Statistik Sederhana
const filmSudahDitonton = movies.filter(film => film.sudahDitonton).length
const filmAction = movies.filter(film => film.genre === "Action").length
const rataRating = movies.reduce((sum, film) => sum + film.rating, 0) / movies.length

console.log("=== STATISTIK ===")
console.log(`Total Film: ${movies.length}`)
console.log(`Sudah ditonton: ${filmSudahDitonton}`)
console.log(`Film Action: ${filmAction}`)
console.log(`Rata-rata rating: ${rataRating.toFixed(1)}`)