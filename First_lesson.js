var randomNames = ["Дима","Артём","Егор"];
var randomAdjectives = ["тупорылый","отсталый","недалёкий"];
var randomWords= ["мудила","еблан","петух","олень","гомункул"];
//Выбор случайного имени:
var randomName = randomNames[Math.floor(Math.random()*3)];
//Выбор случайного прилагательный:
var randomAdjective = randomAdjectives[Math.floor(Math.random()*3)];
//Выбор случайного оскорбления:
var randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];
//Соединяем случайные строки в предложение:
randomInsult= "Ты, " + randomName + ", конечно, " + randomAdjective + " " + randomWord + " !!!";
randomInsult;
