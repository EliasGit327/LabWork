var N = 3;
var m = [
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
var colCleaning = function (col) {
    m.forEach(function (e, line) {
        var divider = m[line][col];
        m[line].forEach(function (e, i) { return m[line][i] = m[line][i] / divider; });
        if (m[line][col] < 0) {
            m[line].forEach(function (e, i) { return m[line][i] * -1; });
        }
    });
    // От всех строк выше отнимает текущую, чтобы занулить столбец выше
    for (var i = 0; i < col; i++) {
        subtractLine(i, col);
    }
    // От всех строк ниже отнимает текущую, чтобы занулить столбец ниже
    for (var i = col + 1; i < m.length; i++) {
        subtractLine(i, col);
    }
};
// Отнимает из стокри под номером fLine строку под номером sLine
var subtractLine = function (fLine, sLine) {
    m[fLine].forEach(function (e, i) { return m[fLine][i] -= m[sLine][i]; });
};
// Делит всю строку на число по индексу строки, чтобы получить выражение "1 * x = значение"
var toOne = function (line) {
    var divider = m[line][line];
    m[line].forEach(function (e, i) { return m[line][i] = m[line][i] / divider; });
};
// Делает ответ читаемым
var beautifyAnswer = function () {
    m.forEach(function (line, lineIndex) {
        toOne(lineIndex);
        // Округляем значения чтобы не иметь длинных чисел
        m[lineIndex].forEach(function (col, colIndex) {
            var num = Number(m[lineIndex][colIndex]); // The Number() only visualizes the type and is not needed
            var roundedStr = num.toFixed(15);
            var rounded = Number(roundedStr);
            m[lineIndex][colIndex] = rounded;
        });
    });
};
m.forEach(function (e, i) { return colCleaning(i); });
beautifyAnswer();
m.forEach(function (e) { return console.log(e); });
//# sourceMappingURL=gauss.js.map