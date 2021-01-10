var m = [
    // [1, 2, -4, 3],
    // [2, -3, 3, -1],
    // [3, 2, -2, 5]
    [3, 2, 1, 1, -2],
    [1, -1, 4, -1, -1],
    [-2, -2, -3, 1, 9],
    [1, 5, -1, 2, 4]
];
var colCleaning = function (col) {
    m.forEach(function (e, line) {
        var divider = m[line][col];
        m[line].forEach(function (e, i) { return m[line][i] = m[line][i] / divider; });
        if (m[line][col] < 0) {
            m[line].forEach(function (e, i) { return m[line][i] * -1; });
        }
    });
    for (var i = 0; i < col; i++) {
        subtractLine(i, col);
    }
    for (var i = col + 1; i < m.length; i++) {
        subtractLine(i, col);
    }
};
var subtractLine = function (fLine, sLine) {
    m[fLine].forEach(function (e, i) { return m[fLine][i] -= m[sLine][i]; });
};
// Делит всю строку на число по индексу строки, чтобы получить выражение "1 * x = значение"
var toOne = function (line) {
    var divider = m[line][line];
    m[line].forEach(function (e, i) { return m[line][i] = m[line][i] / divider; });
};
// colCleaning(0);
// colCleaning(1);
// colCleaning(2);
// toOne(0);
// toOne(1);
// toOne(2);
var beautifyAnswer = function () {
    m.forEach(function (line, lineIndex) {
        toOne(lineIndex);
        // Округляем значения чтобы не иметь длинных чисел
        m[lineIndex].forEach(function (col, colIndex) {
            m[lineIndex][colIndex] = Math.round(m[lineIndex][colIndex]);
        });
    });
};
m.forEach(function (e, i) { return colCleaning(i); });
beautifyAnswer();
m.forEach(function (e) { return console.log(e); });
//# sourceMappingURL=gauss.js.map