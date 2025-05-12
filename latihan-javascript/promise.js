const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false;
            if(success){
                resolve("Berhsil mengambil data");
            } else {
                reject("Gagal mengambil data");
            }
        }, 3000); // satuan detik = 3 detik => digunakan untuk mengatur waktu 
    });
}

getData()
.then((result) => console.log(result))
.catch((error) => console.log(error));