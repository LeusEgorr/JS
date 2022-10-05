var randomBodyParts=["нога","рука","шея","голова","стопа"];
var randomAdjectives=["длинная","некрасивая","короткая","страшная","ужасная"];
var randomAnimalBodyParts=["хвост","шея","копыта","пасть","туловище"];
var randomAnimals=["бегемота","жирафа","козы","осла","динозавра"];
//Выбор случайной части тела:
var randomBodyPart = randomBodyParts[Math.floor(Math.random()*5)]; 
//Выбор случайного прилагательного:
var randomAdjective = randomAdjectives[Math.floor(Math.random()*5)];
//Выбор случайной части тела животного:
var randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random()*5)];
//Выбор случайного животного:
var randomAnimal = randomAnimals[Math.floor(Math.random()*5)];
//Соединяем случайные строки в предложение:
var randomResult= "У тебя "+randomBodyPart+ " ещё более "+randomAdjective+", чем "+randomAnimalBodyPart+" y "+randomAnimal+"."
randomResult;