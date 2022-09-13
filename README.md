# Алгоритмы и структуры данных в javascript

## Алгоритм линейного поиска в массиве(Linear Search):

```javascript
const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    // count - количество итераций
    count += 1;
    if (array[i] === item) {
      // Возвращаем индекс элемента при нахождении
      return i;
    }
  }
  // Возвращаем null если элемент не найден
  return null;
}
```

## Бинарный поиск (Binary Search):

```javascript
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
```

## Рекурсивный бинарный поиск (Recursive binary Search):

```javascript
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
```

## Сортировка выбором(Selection Sort):

```javascript
const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
let count = 0;

// Суть: Есть массив неупорядоченных элементов. Находим в цикле минимальный элемент,
// затем меняем местами с первым элементом, затем опять пробегаемся по массиву и находим минимальное значение,
// но меняем его уже со вторым элементом, затем с 3,4 итд пока не будет отсортирован весь массив.
function selectionSort(array) {
  // Этот цикл просто идет по всем элементам
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    // Во вложенном цикле ищется минимальный элемент на данную итерацию
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }

    // Меняем местами элементы
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }

  // Возвращаем отсортированный массив
  return array;
}

// Кол-во итераций 325. Длина массива 26. Таким образом O(1/2*n*n),
// но коэффициенты в оценке сложности алгоритма не учавствуют. Поэтому будет O(n*n)
console.log(selectionSort(arr));
console.log(arr.length);
console.log("count = ", count);
```

## Пузыкрьковая сортировка(Bubble Sort):

```javascript
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
```

## Рекурсия(Recursion):

```javascript
// Рекурсия - это функция, которая вызывает сама себя.
// Рекурсия должна всегда иметь условие, при котором вызов функции прекращается,
// иначе будет переполнение стека вызова.

// Факториал - это n * (n-1) * (n-2) * (n-3) ...
const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Числа фибоначчи -  1,1,2,3,5,8,13,21
const fibonachi = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
};
```

## Быстрая сортировка(Quick Sort):

![QuickSort](https://i.imgur.com/VIQNhPb.png)

```javascript
// Быстрая сортировка(Quick Sort)

const arr = [
  0, 3, 2, 5, 6, 8, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6,
  3, 32, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7,
  -1, -5, 23,
];
let count = 0;

// Суть: Работает по принципу "Разделяй и властвуй". Мы делим массив на подмассивы и каждый раз рекурсивно.
// Выбираем опорный элемент у каждого массива(его можно выбрать случайно, но чаще всего берут центральный).
// Пробегаемся по массиву и все элементы, которые по значению меньше опорного - добавляем в один массив,
// а все которые больше - в другой. И для каждого из этих массивов выполняется такая же операция.
// Так делается до тех пор, пока  длина массива не станет равна 1.

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  // pivotIndex - опорный индекс элемента, в нашем случае берем центральный (array.length / 2)
  let pivotIndex = Math.floor(array.length / 2);
  // pivot - сам опорный элемент, в нашем случае берем центральный
  let pivot = array[pivotIndex];
  // массив с числами, которые меньше чем опорные
  let less = [];
  // массив с числами, которые больше чем опорные
  let greater = [];

  // Проходимся по всему массиву и наполняем массивы less и greater
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  // Проделывем ту же самую операцию с двумя след. массивами
  return [...quickSort(less), pivot, ...quickSort(greater)];
}
```

## Поиск в ширину в графе:

![PoiskVShirinu](https://i.imgur.com/SxOxCXk.png)

```javascript

```
