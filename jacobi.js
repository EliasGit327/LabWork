var mj = [
    // [10, 1, -1, 11],
    // [1, 10, -1, 10],
    // [-1, 1, 10, 10]
    [5.48, 1.12, 0.95, 1.32, 12.33],
    [1.12, 4.88, 2.12, 0.57, 15.41],
    [0.95, 2.12, 7.03, 1.29, 19.07],
    [-1.32, 0.57, 1.29, 5.77, 14.25]
];
var answer = [];
var divideMatrix = function () {
    mj.forEach(function (line, lineIndex) {
        var divider = line[lineIndex];
        line.forEach(function (col, colIndex) {
            mj[lineIndex][colIndex] /= divider;
        });
    });
};
var changePos = function () {
    mj.forEach(function (line, lineIndex) {
        mj[lineIndex][lineIndex] = 0;
        for (var i = 0; i < mj[lineIndex].length - 1; i++)
            mj[lineIndex][i] *= -1;
    });
};
var prepare = function () {
    var newAnswer = [];
    mj.forEach(function (line) {
        newAnswer.push(line[line.length - 1]);
    });
    answer = newAnswer;
    return newAnswer;
};
var calculateNewAnswer = function () {
    var newAnswer = [];
    var newValue = 0;
    mj.forEach(function (line, lineIndex) {
        newValue = 0;
        for (var i = 0; i < mj[lineIndex].length - 1; i++) {
            newValue += mj[lineIndex][i] * answer[i];
        }
        newValue += mj[lineIndex][mj[lineIndex].length - 1];
        newAnswer.push(newValue);
    });
    answer = newAnswer;
};
var calculate = function (accuracy) {
    divideMatrix();
    changePos();
    prepare();
    for (var i = 0; i < accuracy; i++) {
        calculateNewAnswer();
    }
    console.log('____________________________');
    console.log(answer);
};
mj.forEach(function (e) { return console.log(e); });
calculate(100);
//# sourceMappingURL=jacobi.js.map