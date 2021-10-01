"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  // код для задачи №1 писать здесь

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
  // код для задачи №2 писать здесь

  const errors = [];

  errors.push(validateInputValue('Процентная ставка', percent));
  errors.push(validateInputValue('Начальный взнос', contribution));
  errors.push(validateInputValue('Общая стоимость', amount));
  errors.push(validateDateValue('Срок ипотеки', date));

  const invalid = errors.filter(e => e !== '');
  if (invalid.length){
    return invalid.join('. ');
  };

  let creditBody = amount - contribution;
  let creditTime = new Date();
  let difference = date - creditTime;
  let differenceMonth =  Math.floor((difference / 2592000000)); 

  const p = percent / 12 / 100;
  const everyMonth = ((creditBody * (p + p / (((1 + p)**differenceMonth) - 1))));

  totalAmount = everyMonth * differenceMonth;

  return Number(totalAmount.toFixed(2));

  function validateInputValue(inputName, inputValue){
    if (inputValue === ''){
      return `Параметр <${inputName}> не введен`;
    }

    const numberValue = Number(inputValue);

    if (isNaN(numberValue)){
      return `Параметр "${inputName}" содержит неправильное значение "${inputValue}"`;
    }

    return '';
  }

  function validateDateValue(inputName, inputValue){
    if (isNaN(inputValue)){
      return `Дата "${inputName}" не выбрана`
    }

    return '';
  }
}