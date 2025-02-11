const themeToggle = document.getElementById('theme-toggle'); // berfungsi untuk mengubah tema

function toggleTheme() { // berfungsi untuk  mengubah tema
    const currentTheme = document.documentElement.getAttribute ('data-theme'); // mendapatkan tema saat ini
    if (currentTheme === 'light') { // jika tema saat ini adalah light
        document.documentElement.setAttribute('data-theme', 'dark'); // mengubah tema menjadi dark
        localStorage.setItem('theme', 'dark'); // localStorage berfungsi untuk menyimpan data secara lokal
    } else {
        document.documentElement.setAttribute('data-theme', 'light'); 
        localStorage.setItem('theme', 'light');    
    }
}

const savedTheme = localStorage.getItem('theme'); // berfungsi untuk mengambil tema yang telah disimpan di local storage
if(savedTheme === 'dark') { // jika tema yang telah disimpan adalah dark
    document.documentElement.setAttribute('data-theme', 'light'); // berfungsi untuk mengubah tema menjadi light
    themeToggle.checked = true; // berfungsi untuk mengubah tema menjadi checked
} else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.checked = false;
}

themeToggle.addEventListener('change', toggleTheme); // berfungsi untuk mengubah tema ketika checkbox diubah