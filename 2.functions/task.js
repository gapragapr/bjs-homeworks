// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;

  if (arr.length >= 3){
    if (arr.length === 3){
      min = arr[0];
      max = arr[0];
      for(let i = 0; i <= arr[1]; i++){
        max = i;
        for(let ii = arr[2]; ii > arr[1]; ii--){
          min = ii;
        }
      }
      sum = (min + max) + arr[2];
    }
    if (arr.length > 3){
      massiveLengthMore3();
    }
    testAvg = sum / arr.length;
  }
  if (arr.length < 3){
    massiveLengthSmaller3();
  }
  avg = Number(testAvg.toFixed(2))
  function massiveLengthMore3(){
    min = arr[3];
    max = arr[4];
    sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4];
  }
  function massiveLengthSmaller3(){
    min = arr[0];
    max = arr[0];
    sum = arr[0] * 2;
    testAvg = sum / 2;
  }
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum;
  // Ваш код
  for (let i = 0; i < arr[0].length; i++){
    sum = arr[0][i] + arr[1][i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max
  // Ваш кода
  // for ...
  for (let i = 0; i < arrOfArr.length; i++){
    worker(arrOfArr[i]);
  }
  
  for (let i = 0; i < arrOfArr.length; i++){
    console.log(max)
  }
  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
