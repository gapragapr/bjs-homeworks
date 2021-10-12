function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  let isSame = (arr1.length === arr2.length) && arr1.every(function(element, index){
      return element === arr2[index];
  });
  result = isSame;
  return Boolean(result); // boolean

}
function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr = arr.filter((element) => element > 0 && element % 3 === 0).map((element) => element * 10); // array
}
