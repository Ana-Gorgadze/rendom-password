const passwordBox = document.getElementById("password");
const length = 8;

const upperCase = "ABCDEFGHIJKELMNOPQRSTVWXYZ";
const loverCase = "abcdefghijklmnopqrstvwxyz";
const number = "1234567890";
const symbol = "#@.,"

const allCars = upperCase + loverCase + number + symbol;

function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += loverCase[Math.floor(Math.random() * loverCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allCars[Math.floor(Math.random() * allCars.length)]
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}