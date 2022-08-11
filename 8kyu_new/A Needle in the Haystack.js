function findNeedle(haystack) {
  let place;
  for (let i = 0; i < haystack.length; i++){ //Проходим по всем элементам массива, чтобы найти "needle" и запоминаем индекс в перененную place 
    if (haystack[i] == "needle"){
      place = i;
    }
  }
  return "found the needle at position " + place
}
