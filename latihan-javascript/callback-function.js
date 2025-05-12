function greet(nama, callback) {
    callback();
    return 'Hello,  ${nama}'; 
}

function callMe() {
    console.log("Saya merupakan callback function");
}

greet("najwa", callMe);