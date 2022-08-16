function oddOrEven(array) {
  let sum = 0;
  
   if (array.length === 0){ // проверяем массив, чтобы он был не пустым. и если пустой, то выводим "even"
     return "even"
   }
  
    else { // если не пустой, то проходим по всем элементам и суммируем 
      for (let i = 0; i < array.length; i++){
        sum += array[i];
      }
    }
  
  if (sum%2 === 0){ // если сумма делится без отстатка на 2, то выводим, что чётное 
    return "even"
  }
  
  else { // если же нет, то выводим, что нечётное
    return "odd" 
  }
  
}
