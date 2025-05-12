async function getData(){
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("gagal mengambil data", error)
    }
}

getData();