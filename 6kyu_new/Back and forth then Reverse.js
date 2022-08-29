A list S will be given. You need to generate a list T from it by following the given process:

Remove the first and last element from the list S and add them to the list T.
Reverse the list S
Repeat the process until list S gets emptied.
The above process results in the depletion of the list S. Your task is to generate list T without mutating the input List S.

Example
S = [1,2,3,4,5,6]
T = []

S = [2,3,4,5] => [5,4,3,2]
T = [1,6]

S = [4,3] => [3,4]
T = [1,6,5,2]

S = []
T = [1,6,5,2,3,4]
return T






function arrange(s) {
  let final_arr = []; //создали новый массив, который будем постепенно заполнять и в итоге выведем
  
  if (s === []){ // по условию если изначально пустой, то вывести пустой 
  return []
  }
  
  else{ // если не пустой изначально, то делаем следующие действия 
    final_arr[0] = s[0]; // закидываем 0 элемент и последний элемент из начального массива в новый  
    s.splice(0 , 1); // удаляем в начальном 1 элем
    final_arr[1] = s.slice(-1);
    s.splice(-1 , 1); //удаляем в начальном послпед. элем
    s.reverse(); // переводачиваем начальный массив
    
    while (s != []){ // пока не станет начальный элемент пустым делаем следующее 
      for (let i = 0; i < s.lengt; i++){
        final_arr.push (s[0]); // закидываем в конец нового массива первый элемент старого массива
        s.splice(0 , 1); //удаляем этот элем в старом массиве 
        final_arr.push (s[-1]); //закидываем в конец нового массива последний элемент старого массива
        s.splice(-1 , 1); //удаляем этот элем в старом массиве 
      }
    }
    return final_arr
  }
}


Надо посмотреть эту задачу, потому что превышается время на кодварсе. нужно оптимизировать код, а я не понимаю, как это можно сделать.
