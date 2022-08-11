function isDivisible(n, x, y) {
  
  if (((n%x) == 0) && ((n%y) == 0)) { //Условие, что число делится без остатка и на x, и на y
    return true 
  }
  
  else 
    return false 
}
