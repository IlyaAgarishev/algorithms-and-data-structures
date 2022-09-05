// Сортировка выбором(Selection Sort)

const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
let count = 0;

// Суть: Есть массив неупорядоченных элементов. Находим в цикле минимальный элемент,
// затем меняем местами с первым элементом, затем опять пробегаемся по массиву и находим минимальное значение,
// но меняем его уже со вторым элементом, затем с 3,4 итд пока не будет отсортирован весь массив.
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array;
}

console.log(selectionSort(arr));
console.log(arr.length);
console.log("count = ", count);
