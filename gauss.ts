const N = 3;

const m: number[][] = [
  // [1, 2, -4, 3],
  // [2, -3, 3, -1],
  // [3, 2, -2, 5]

  // [3, 2, 1, 1, -2],
  // [1, -1, 4, -1, -1],
  // [-2, -2, -3, 1, 9],
  // [1, 5, -1, 2, 4]

  // [1, -1, 0, -2],
  // [2, 1, 1, 2],
  // [3, -1, 2, 2]

  [5.48, 1.12, 0.95, 1.32, 12.33],
  [1.12, 4.88, 2.12, 0.57, 15.41],
  [0.95, 2.12, 7.03, 1.29, 19.07],
  [-1.32, 0.57, 1.29, 5.77, 14.25]
];

const colCleaning = (col: number) => {
  m.forEach((e, line) => {
    const divider = m[line][col];
    m[line].forEach((e, i) => m[line][i] = m[line][i] / divider);

    if (m[line][col] < 0) {
      m[line].forEach((e, i) => m[line][i] * -1);
    }
  });

  // От всех строк выше отнимает текущую, чтобы занулить столбец выше
  for (let i = 0; i < col; i++) {
    subtractLine(i, col);
  }

  // От всех строк ниже отнимает текущую, чтобы занулить столбец ниже
  for (let i = col + 1; i < m.length; i++) {
    subtractLine(i, col);
  }
};

// Отнимает из стокри под номером fLine строку под номером sLine
const subtractLine = (fLine: number, sLine: number) => {
  m[fLine].forEach((e, i) => m[fLine][i] -= m[sLine][i]);
};

// Делит всю строку на число по индексу строки, чтобы получить выражение "1 * x = значение"
const toOne = (line: number) => {
  const divider = m[line][line];
  m[line].forEach((e, i) => m[line][i] = m[line][i] / divider);
}

// Делает ответ читаемым
const beautifyAnswer = () => {
  m.forEach((line, lineIndex) => {

    toOne(lineIndex);

    // Округляем значения чтобы не иметь длинных чисел
    m[lineIndex].forEach((col, colIndex) => {
      const num = Number(m[lineIndex][colIndex]) // The Number() only visualizes the type and is not needed
      const roundedStr = num.toFixed(15);
      const rounded = Number(roundedStr);
      m[lineIndex][colIndex] = rounded
    });
  });
};

m.forEach((e, i) => colCleaning(i));
beautifyAnswer();
m.forEach(e => console.log(e));
