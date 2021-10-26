function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = {
        hash: args.join(","),
        value: func(...args)
      }; // получаем правильный хэш
      let idx = cache.findIndex((item)=> item.hash === args.join(",") ); // ищем элемент, хэш которого равен нашему хэшу
      if (idx !== -1 ) { // если элемент не найден
          console.log("Из кэша: " + cache[idx].value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + cache[idx].value;
      } else {
          let result = hash;
          cache.push(result)
          if (cache.length > 5) { 
            cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
          }
          console.log("Вычисляем: " + result.value);
          return "Вычисляем: " + result.value;  
      }
  }
  return wrapper;
  }

function debounceDecoratorNew(func, ms) {
  let flag = false
  return function(...args) {
    if (!flag) {
      func(...args);
      flag = true;
      setTimeout(() => {
        flag = false;
      }, ms);
    }
  }
}

function debounceDecorator2(func, ms) {
  let flag = false;
      sendMessage.count = 0;

  function sendMessage(...args) {
    if (!flag) {
      func(...args);
      flag = true;
      sendMessage.count++;

      setTimeout(() => {
        flag = false;
      } , ms);
    }
  }

  return sendMessage;
}
