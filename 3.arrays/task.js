function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  if (arr1.length === arr2.length){
    arr1.every(function(element, index) {
      if (arr1[element] === arr2[element]) {
        result = 1;
      }
      else{
        result = 0;
      }
    })
  }
  else{
    result = 0;
  }
  
  return Boolean(result); // boolean

}
function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr = arr.filter((element) => element > 0 && element % 3 === 0).map((element) => element * 10); // array
}
