Вопрос 

https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {  
  let first = numbers[0];
  let second = numbers[1];
  
  for (i = 2; i < numbers.length; i++){
   if (numbers[i] < first) {
              if (second > numbers[i] ) {
                second = numbers[i];
              } else {
                first = numbers[i];                  
              }
          }
    }
  return first + second
}
