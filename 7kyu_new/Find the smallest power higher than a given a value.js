function findNextPower(val, pow_) {
    
  let Our = Math.pow(val, (1/pow_)); //узнаём, какое число в степени пов даёт результат валью
  
  if (Our % 1 === 0){ // если это число целое, то мы прибавляем 1 и возводим в степень, чтобы узнать ближайшее число и возвращаем его
    Our ++; 
    return Math.pow(Our, pow_)
  }
  
  else{ // если оно не целое, то мы результат округляем в большую сторону (результат такой же, что и +1) и возводим в степень пор.
    let Nearestf = Math.ceil(Our); 
    return Math.pow(Nearestf, pow_)
  }
}


Даш, чекни этот код, пожалуйста, у меня 1 проверка почему-то не проходит.
https://www.codewars.com/kata/56ba65c6a15703ac7e002075/train/javascript
