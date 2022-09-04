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
