const buah = ['apel', 'semangka', 'nanas']
const objBiodata = {
    nama: "Taufik",
    email: "taufik@gmail.com",
    linkedin: "Taufik Mulyawan",
    phone: "xxxxx"
}
const namaSemuaBuah = [...buah] // spread operator array
const namaObj = {...objBiodata} // spread operator object

console.log(namaSemuaBuah)
console.log(namaObj)