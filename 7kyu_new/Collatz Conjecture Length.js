//The Collatz Conjecture states that for any natural number n, if n is even, divide it by 2. If n is odd, multiply it by 3 and add 1. If you repeat the process continuously for n, n will eventually reach 1.
//For example, if n = 20, the resulting sequence will be:
//[20, 10, 5, 16, 8, 4, 2, 1]
//Write a program that will output the length of the Collatz Conjecture for any given n. In the example above, the output would be 8.

function collatz(n) {
  let count = 0;
  
  while (n != 1){ // "круговой цикл", чтобы посчитать количество цифр в цепочке гипотезы. Звучит странно, знаю.
    if (n%2 === 0){ // по условию если число чётное, то нужно разделить его на 2, если нет, то умножить на 3 и +1. таким образом мы из любого числа в итоге получим 1.
      n = n/2;
      count ++;
    }
    else { //если число нечётное, то продолжаем по алгоритму
      n = n*3+1;
      count ++; //каждый шак мы фиксируем счётчиком 
    }
  }
  return count + 1 // выводим +1 по причине того, что нужно вывести именно количество цифр всей цепочки, а мы считаем действия. Можно было бы изначально поставить каунт = 1, но ладно.
}
