// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  avg = 0;

  for (let i = 0; i < arr.length; i++){
      if (arr[i] > max){
        max = arr[i];
      }
      if (arr[i] < min){
        min = arr[i];
      }
      sum += arr[i];
  }

  let setAvg = sum / arr.length;
  avg = Number(setAvg.toFixed(2));
  
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let max = [];
  let sum = 0;
  // Ваш код

  for (let i = 0; i < arr.length; i++){
    let testArr = arr[i];
    let arrSum = 0;
      for (let j = 0; j < arr[i].length; j++){
        arrSum += testArr[j];
      }
    max.push(arrSum);
  }

  for (let k = 0; k < max.length; k++){
  	if (max[k] > sum){
    	sum = max[k];
    }
  }

  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = 0;
  // Ваш код
  // for ...
  for (let i = 0; i < arrOfArr.length; i++){
    if (max < worker(arrOfArr)){
      max = worker(arrOfArr)
    } 
  }
  
  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код


}
