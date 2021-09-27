function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь

  "use strict";

  const discr = Math.pow(b, 2) - (4 * a * c);
  
  if (discr < 0){
    arr = [];
  } else if (discr === 0){
      let rootOfEquation = -b / (2*a);

      arr.push(rootOfEquation)
  } else if(discr > 0){
      let rootOfEquation = (-b + Math.sqrt(discr))/(2*a);
      let rootOfEquation2 = (-b - Math.sqrt(discr) )/(2*a);

      arr.push(rootOfEquation);
      arr.push(rootOfEquation2);
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  "use strict";
  // код для задачи №2 писать здесь

  let creditBody = amount - contribution;
  let creditTime = new Date();
  let difference = date - creditTime;
  let differenceMonth =  Math.floor((difference / 2592000000)); 
  
  p = percent / 12 / 100;

  everyMonth = ((creditBody * (p + p / (((1 + p)**differenceMonth) - 1))));
  totalAmount = everyMonth * differenceMonth;
  console.log(creditBody)
  console.log(typeof percent + " " + typeof contribution + " " + typeof amount + " " + typeof date)

  return totalAmount.toFixed(2);
}
