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
  let sum = [];

  for (let i = 0; i < arr.length; i++){
	let testArr = arr[i];
  let arrSum = 0;
  for (let j = 0; j < testArr.length; j++){
  	arrSum += testArr[j];
  }
  	sum.push(arrSum)
	}

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  // Ваш код
  // for ...
  for (let i = 0; i < arrOfArr.length; i++){
    let result = func(arrOfArr)[i];
    if (result > max){
      max = result;
    }
  }
  
  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let diffMin = 0;
  let diffMax = 0;
  let difference = [];
  let sum = [];
  for (let i = 0; i < arr.length; i++){
	  let testArr = arr[i]
    for (let j = 0; j < testArr.length; j++){
  	  diffMin = Math.min.apply(null, testArr)
      diffMax = Math.max.apply(null, testArr)
    }
  difference.push(diffMax - diffMin);
}

  sum.push(Math.max.apply(null, difference));
  return sum;
}
