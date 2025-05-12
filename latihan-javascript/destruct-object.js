const mahasiswa = {
    nama : "najwa",
    nim : 103122400028,
    kelas : "SE01"
}

const {nama, nim, kelas, prodi = "RPL"} = mahasiswa;

console.log(nama)
console.log(nim)
console.log(kelas)
console.log(prodi)


