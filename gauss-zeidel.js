var mz = [
    [5.48, 1.12, 0.95, 1.32, 12.33],
    [1.12, 4.88, 2.12, 0.57, 15.41],
    [0.95, 2.12, 7.03, 1.29, 19.07],
    [-1.32, 0.57, 1.29, 5.77, 14.25]
];
var answerZ = [];
var divideMatrixZ = function () {
    mz.forEach(function (line, lineIndex) {
        var divider = line[lineIndex];
        line.forEach(function (col, colIndex) {
            mz[lineIndex][colIndex] /= divider;
        });
    });
};
var changePosZ = function () {
    mz.forEach(function (line, lineIndex) {
        mz[lineIndex][lineIndex] = 0;
        for (var i = 0; i < mz[lineIndex].length - 1; i++)
            mz[lineIndex][i] *= -1;
    });
};
var prepareZ = function () {
    var newAnswer = [];
    mz.forEach(function (line) {
        newAnswer.push(line[line.length - 1]);
    });
    answerZ = newAnswer;
    return newAnswer;
};
var calculateNewAnswerZ = function () {
    var newAnswer = [];
    var newValue = 0;
    mz.forEach(function (line, lineIndex) {
        newValue = 0;
        for (var i = 0; i < mz[lineIndex].length - 1; i++) {
            newValue += mz[lineIndex][i] * answerZ[i];
        }
        newValue += mz[lineIndex][mz[lineIndex].length - 1];
        answerZ[lineIndex] = newValue;
    });
};
var calculateZ = function (accuracy) {
    divideMatrixZ();
    changePosZ();
    prepareZ();
    for (var i = 0; i < accuracy; i++) {
        calculateNewAnswerZ();
    }
    console.log('____________________________');
    console.log(answerZ);
};
mz.forEach(function (e) { return console.log(e); });
calculateZ(5);
//# sourceMappingURL=gauss-zeidel.js.map