function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = {
        hash: args.join(","),
      }; // получаем правильный хэш
      let idx = cache.findIndex((item)=> item.hash === args.join(",") ); // ищем элемент, хэш которого равен нашему хэшу
      if (idx !== -1 ) { // если элемент не найден
          console.log("Из кэша: " + cache[idx].value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + cache[idx].value;
      }
      hash.value = func(...args)
      cache.push(hash)
      if (cache.length > 5) { 
        cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + hash.value);
      return "Вычисляем: " + hash.value;  
  }
  return wrapper;
  }

function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = false;
  return function(...args) {
    clearTimeout(timeout)

    if (!flag) {
      func(...args);
      flag = true;

      timeout = setTimeout(() => {
        flag = false;
      }, ms);
    }
  }
}

function debounceDecorator2(func, ms) {
  let flag = false;
  sendMessage.count = 0;
  let timeout;

  function sendMessage(...args) {
    if (!flag) {
      clearTimeout(timeout)
      func(...args);
      flag = true;
      sendMessage.count++;

      timeout = setTimeout(() => {
        flag = false;
      } , ms);
    }
  }

  return sendMessage;
}
