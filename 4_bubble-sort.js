// Пузыкрьковая сортировка(Bubble Sort)

const arr = [
  0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
  3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
  -1, -5, 23,
];
let count = 0;

// Суть: в двойном цикле пробегаемся по всему массиву и сравниваем попарно лежащие элементы.
// Если следующий элемент массива меньше чем предыдуший, то мы меняем их местами.
// Получается "всплытие" самый большой элемент с каждой итерацией потихоньку всплывает наверх.
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return array;
}

console.log("length", arr.length);
console.log(bubbleSort(arr)); // O(n*n)
console.log("count = ", count);
