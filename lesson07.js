'use strict'

// function counter() {
//   let a = 0;
//   return function() {
//      return a++
//   }
// }

// const resCounter = counter()

// Проверка, что введено именно число
const checkIsNumber = function(number) {
    if (isFinite(number)) {
        return number;
    } else if (!isNaN(parseFloat(number))) {
        return parseFloat(number)
    } else {
        console.log('Число не введено')
    }
} 


// Генерация случайного числа
const randomGenerate = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  // Максимум не включается, минимум включается
}



const gameBotFunction = function() {
    let mysteryNumber = randomGenerate(1, 100);
    console.log(mysteryNumber)
    let attempts = 3;
    function askQuestion() {
        let number = prompt('Угадайте число от 0 до 100');
        if (number === null || number === "") {
            alert('Вы завершили игру');
            return
        } 
        let answerNum = checkIsNumber(number);
        if (answerNum > mysteryNumber) {
            alert('Попробуйте число поменьше');
            attempts = attempts-1;
        } else if (answerNum < mysteryNumber) {
            alert('Попробуйте число побольше');
            attempts = attempts-1;
        } else {
            if (confirm('Поздравляю с победой! Сыграем еще раз?')) {
                attempts = 3;
                mysteryNumber = randomGenerate(1, 100);
                console.log(mysteryNumber)
                askQuestion()
            } else {
                alert('Вы завершили игру');
                attempts = 0;
                return;
            }
        }
        if (attempts > 0) {
            askQuestion();
        } else {
            if(confirm('Попытки закончились. Хотите попробовать снова?')) {
                attempts = 3;
                mysteryNumber = randomGenerate(1, 100);
                console.log(mysteryNumber)
                askQuestion()
            } else {
                alert('Вы завершили игру');
                return;
            }
        } 
        return askQuestion;
    }
    askQuestion()
}


gameBotFunction()