function digitize(n) {
  let res;
  res = [...n.toString()].map(Number).reverse(); // Эта строка преоразует наше начальное число в массив со строчными элементами, потом переводит каждый элемент в число, а затем переворачивает массив.
  
  /*for (let i = 0; i < res.length; i++){
    res[i] = parseInt.res[i];
    }*/ //очень неудачная попытка. я сначала не допёрла до map(Number)... 
  return res
}
