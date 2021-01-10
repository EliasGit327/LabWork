var mg = [
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
    mg.forEach(function (e, line) {
        var divider = mg[line][col];
        mg[line].forEach(function (e, i) { return mg[line][i] = mg[line][i] / divider; });
        if (mg[line][col] < 0) {
            mg[line].forEach(function (e, i) { return mg[line][i] * -1; });
        }
    });
    // От всех строк выше отнимает текущую, чтобы занулить столбец выше
    for (var i = 0; i < col; i++) {
        subtractLine(i, col);
    }
    // От всех строк ниже отнимает текущую, чтобы занулить столбец ниже
    for (var i = col + 1; i < mg.length; i++) {
        subtractLine(i, col);
    }
};
// Отнимает из стокри под номером fLine строку под номером sLine
var subtractLine = function (fLine, sLine) {
    mg[fLine].forEach(function (e, i) { return mg[fLine][i] -= mg[sLine][i]; });
};
// Делит всю строку на число по индексу строки, чтобы получить выражение "1 * x = значение"
var toOne = function (line) {
    var divider = mg[line][line];
    mg[line].forEach(function (e, i) { return mg[line][i] = mg[line][i] / divider; });
};
// Делает ответ читаемым
var beautifyAnswer = function () {
    mg.forEach(function (line, lineIndex) {
        toOne(lineIndex);
        // Округляем значения чтобы не иметь длинных чисел
        mg[lineIndex].forEach(function (col, colIndex) {
            var num = Number(mg[lineIndex][colIndex]); // The Number() only visualizes the type and is not needed
            var roundedStr = num.toFixed(15);
            mg[lineIndex][colIndex] = Number(roundedStr);
        });
    });
};
mg.forEach(function (e, i) { return colCleaning(i); });
beautifyAnswer();
mg.forEach(function (e) { return console.log(e); });
//# sourceMappingURL=gauss.js.map