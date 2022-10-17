var generateRandomInsult=function (){
    var randomBodyParts=["нога","рука","шея","голова","стопа"];
    var randomAdjectives=["длинная","некрасивая","короткая","страшная","ужасная"];
    var randomAnimalBodyParts=["хвост","шея","копыта","пасть","туловище"];
    var randomAnimals=["бегемота","жирафа","козы","осла","динозавра"];
    //Соединяем случайные строки в предложение:
    var randomResult= "У тебя "+pickRandomWord(randomBodyParts)+ " ещё более "+pickRandomWord(randomAdjectives)+", чем "+pickRandomWord(randomAnimalBodyParts)+" y "+pickRandomWord(randomAnimals)+"."
    return randomResult;
    };
