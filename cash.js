// Алгоритм кеширования данных во избижании повторных вычеслений

// cashFunction - ф-ия которая кеширует внутри себя результат вычесления другой ф-ии fn
function cashFunction(fn) {
  // Объект, который хранит по ключу результат кеширования, ключем будет параметр n который мы передаем в fn
  const cash = {};

  return (n) => {
    if (cash[n]) {
      console.log("Выведено из кеша: ", cash[n]);

      return cash[n];
    }

    let result = fn(n);

    cash[n] = result;

    console.log("Выведено не из кеша: ", cash[n]);

    return result;
  };
}

// Допустим ф-ия факториала очень тяжелая, а мы не хотим трать лишние ресурсы, поэтому кешируем вычесления и выдаем их.
function factorial(n) {
  let result = 1;
  while (n != 1) {
    result *= n;
    n -= 1;
  }

  return result;
}

const cashFactorial = cashFunction(factorial);

cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
cashFactorial(5);
cashFactorial(1);
