// Бинарный поиск (Binary Search)

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

// Реализация с помощью цикла.
// Суть: Находим средний элемент массива, если он равен искомогу, то возращаем его индекс.
// Если больше, то орезаем правую часть, а если меньше, то левую.
function binarySearch(array, item) {
  // Позиция первого элемента
  let start = 0;
  // Позиция последнего элемента
  let end = array.length;
  // Позиция среднего элемента в массиве
  let middle;
  // Флаг, который показывает найден ли элемент в массиве
  let found = false;
  // Позиция найденого элемента. Если элемент не найден, то возвращаем -1
  let position = -1;
  // Цикл работатет до тех пор либо пока не найден элемент, либо пока стартовая и конечная позиция не поровнялись.
  while (found === false && start <= end) {
    // Кол-во итераций
    count += 1;

    // Внутри цикла высчитываем позицию центрального элемента
    middle = Math.floor((start + end) / 2);
    // Если он равен искомому элементу, то возвращаем позицию элемента
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    // Если нужный элемент меньше центрального, то тогда нужна левая часть массива, поэтму отсекаем правую.
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      // Если больше, то обрезаем всю левую часть массива
      start = middle + 1;
    }
  }
  return position;
}

console.log(binarySearch(array, 0));
console.log(count);

// Реализация с помощью рукурсии.
// item - сам элемент, который ищем
// стартовую и конечную позицию передаем через параметры

function recursiveBinarySearch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  count += 1;
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    // отсеиваем всю правую часть
    return recursiveBinarySearch(array, item, start, middle - 1);
  } else {
    // отсеиваем всю левую часть
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
}

console.log(recursiveBinarySearch(array, 12, 0, array.length));
console.log(count);
