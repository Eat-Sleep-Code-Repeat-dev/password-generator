const characters = [
    "A","B","C","D","E","F","G","H","I",
"J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
"X","Y","Z","a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x","y",
"z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~"
,"`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];



const generateBtn = document.getElementById("generate-Btn")
const passwordOneEl = document.getElementById("password-One-El")
const passwordTwoEl = document.getElementById("password-Two-El")
const textMessageEl = document.getElementById("copyText")

 function generate() {
    let password = ""
    
    for (let i = 0; i < 15; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
        }
   return password
}

function renderPasswords() {
    let passwordOne = generate();
    let passwordTwo = generate();
    passwordOneEl.value = passwordOne;
    passwordTwoEl.value = passwordTwo;
    textMessageEl.textContent = ""
  }


document.getElementById("password-One-El").onclick = function() {
    this.select();
    document.execCommand('copy');
    textMessageEl.textContent = "Password copied to clipboard.." 
}
document.getElementById("password-Two-El").onclick = function() {
    this.select();
    document.execCommand('copy');
    textMessageEl.textContent = "Password copied to clipboard.." 
}






