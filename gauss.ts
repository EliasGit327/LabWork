const mg: number[][] = [
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
  mg.forEach((e, line) => {
    const divider = mg[line][col];
    mg[line].forEach((e, i) => mg[line][i] = mg[line][i] / divider);

    if (mg[line][col] < 0) {
      mg[line].forEach((e, i) => mg[line][i] * -1);
    }
  });

  // От всех строк выше отнимает текущую, чтобы занулить столбец выше
  for (let i = 0; i < col; i++) {
    subtractLine(i, col);
  }

  // От всех строк ниже отнимает текущую, чтобы занулить столбец ниже
  for (let i = col + 1; i < mg.length; i++) {
    subtractLine(i, col);
  }
};

// Отнимает из стокри под номером fLine строку под номером sLine
const subtractLine = (fLine: number, sLine: number) => {
  mg[fLine].forEach((e, i) => mg[fLine][i] -= mg[sLine][i]);
};

// Делит всю строку на число по индексу строки, чтобы получить выражение "1 * x = значение"
const toOne = (line: number) => {
  const divider = mg[line][line];
  mg[line].forEach((e, i) => mg[line][i] = mg[line][i] / divider);
}

// Делает ответ читаемым
const beautifyAnswer = () => {
  mg.forEach((line, lineIndex) => {

    toOne(lineIndex);

    // Округляем значения чтобы не иметь длинных чисел
    mg[lineIndex].forEach((col, colIndex) => {
      const num = Number(mg[lineIndex][colIndex]) // The Number() only visualizes the type and is not needed
      const roundedStr = num.toFixed(15);
      const rounded = Number(roundedStr);
      mg[lineIndex][colIndex] = rounded
    });
  });
};

mg.forEach((e, i) => colCleaning(i));
beautifyAnswer();
mg.forEach(e => console.log(e));
