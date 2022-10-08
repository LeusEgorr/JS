var alhpabet = "абвгдеёжзийклмнопрстуфчцчшщъыьэюя";
var randomString = "";
while (randomString.length < 10) {
  randomString += alhpabet[Math.floor(Math.random() * alhpabet.length)]; 
}
console.log(randomString);