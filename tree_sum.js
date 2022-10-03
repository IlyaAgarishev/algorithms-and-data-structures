// Задача посчитать сумму значений всех узлов
// v - значение, с - потомки
// Если у узла нету потомков, то его называют "листом"

const tree = [
  {
    v: 5,
    c: [
      {
        v: 5,
      },
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 11,
        c: [
          {
            v: 12,
            c: [
              {
                v: 5,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 7,
      },
      {
        v: 12,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 14,
      },
    ],
  },
];

// Суть: для реализации с помощью итерации нужна структура данных - СТЕК.
// Стек похож на очередь, но работает по другому. Элементы всегда добавляются в конец структуры и извлекаются
// также из конца. В очереди добавляем в конец, а извлекаем из начала, то в стеке мы добавляем и извлекаем с конца.

function treeSum(tree) {
  if (!tree.length) {
    return 0;
  }

  let sum = 0;
  // Создаем структуру данных стек, в которую будем записывать узлы.
  let stack = [];

  // Добавляем вершины дерева в стек
  tree.forEach((node) => stack.push(node));

  while (stack.length) {
    let node = stack.pop();
    sum += node.v;
    if (node.c) {
      node.c.forEach((n) => stack.push(n));
    }
  }

  return sum;
}

console.log(treeSum(tree));

// Рекурсивный вариант

function recursiveTreeSum(tree) {
  let sum = 0;

  tree.forEach((node) => {
    sum += node.v;

    if (!node.c) {
      return node.v;
    }

    sum += recursiveTreeSum(node.c);
  });

  return sum;
}

console.log(recursiveTreeSum(tree));
