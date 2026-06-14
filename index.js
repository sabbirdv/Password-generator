// let fruits = ["apple", "orange", "banana" ]



function randomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols){
    const uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const Symbols = "~!@#$%^&*()_+<>?"

    let allowChar = "";
    let password = "";

    allowChar += includeUppercase ? uppercaseChar : "";
    allowChar += includeLowercase ? lowercaseChar : "";
    allowChar += includeNumbers ? numbers : "";
    allowChar += includeSymbols ? Symbols : "";

    if(isNaN(length)|| length  <= 0 ){
        return `(password length must be at least 1)`
    }
    if(allowChar.length === 0){
        return `(At least 1 set of charecter needs to be selected)`
    }

    for(let i = 0; i < length ; i++){
        let randomIndex = Math.floor(Math.random() * allowChar.length);
        password += allowChar[randomIndex]
    }

    return password;

}

function generate() {

    const passLength = parseInt(document.getElementById('userInput').value);
    
    const includeUppercase = true;
    const includeLowercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const password = randomPassword(passLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

    document.getElementById('userResult').innerText = password;
}
function copy(){
    const passwordText = document.getElementById('userResult').innerText;
    navigator.clipboard.writeText(passwordText);
    alert("Password copied to clipboard!");
} 