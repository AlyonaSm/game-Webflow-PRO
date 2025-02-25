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


// Бот-игра 
const gameBotFunction = function() {
    let mysteryNumber = randomGenerate(1, 100);
    console.log(mysteryNumber)
    let attempts = 2;
    const checkIsNumber = function(number) {
        if (isFinite(number)) {
            return number;
        } else if (!isNaN(parseFloat(number))) {
            return parseFloat(number)
        } else {
            console.log('Число не введено')
        }
    } 
    function askQuestion() {
        let number = prompt('Угадайте число от 0 до 100');
        if (number === null || number === "") {
            alert('Вы завершили игру');
            return
        } 
        let answerNum = checkIsNumber(number);
        if (isFinite(answerNum) && answerNum == answerNum.trim()) {
            if (answerNum > mysteryNumber) {
                alert('Попробуйте число поменьше');
                attempts;
            } else if (answerNum < mysteryNumber) {
                alert('Попробуйте число побольше');
                attempts;
            } else {
                if (confirm('Поздравляю с победой! Сыграем еще раз?')) {
                    attempts = 2;
                    mysteryNumber = randomGenerate(1, 100);
                    console.log(mysteryNumber)
                    askQuestion()
                } else {
                    attempts = 0;
                    return;
                }
            }
            if (attempts > 0) {
                attempts = attempts - 1;
                askQuestion();
            } else {
                if(confirm('Попытки закончились. Хотите попробовать снова?')) {
                    attempts = 2;
                    mysteryNumber = randomGenerate(1, 100);
                    console.log(mysteryNumber)
                    askQuestion()
                } else {
                    alert('Вы завершили игру');
                    attempts = 0;
                    return;
                }
            } 
        } else {
            alert('Введите число');
            askQuestion();
        }
        return askQuestion;
    }
    askQuestion()
}


gameBotFunction()