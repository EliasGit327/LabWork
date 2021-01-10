const mz: number[][] = [
  [5.48, 1.12, 0.95, 1.32, 12.33],
  [1.12, 4.88, 2.12, 0.57, 15.41],
  [0.95, 2.12, 7.03, 1.29, 19.07],
  [-1.32, 0.57, 1.29, 5.77, 14.25]
];
let answerZ = [];

const divideMatrixZ = () => {
  mz.forEach((line, lineIndex) => {
    const divider = line[lineIndex];
    line.forEach((col, colIndex) => {
      mz[lineIndex][colIndex] /= divider;
    });
  });
};

const changePosZ = () => {
  mz.forEach((line, lineIndex) => {
    mz[lineIndex][lineIndex] = 0;
    for (let i = 0; i < mz[lineIndex].length - 1; i++)
      mz[lineIndex][i] *= -1;

  });
};

const prepareZ = (): number[] => {
  const newAnswer = [];
  mz.forEach((line) => {
    newAnswer.push(line[line.length - 1]);
  });
  answerZ = newAnswer;
  return newAnswer;
};

const calculateNewAnswerZ = () => {
  const newAnswer = [];
  let newValue = 0;
  mz.forEach((line, lineIndex) => {
    newValue = 0;
    for (let i = 0; i < mz[lineIndex].length - 1; i++) {
      newValue += mz[lineIndex][i] * answerZ[i];
    }
    newValue += mz[lineIndex][mz[lineIndex].length - 1];
    answerZ[lineIndex] = newValue;
  });
};

const calculateZ = (accuracy: number) => {
  divideMatrixZ();
  changePosZ();
  prepareZ();

  for (let i = 0; i < accuracy; i++) {
    calculateNewAnswerZ();
  }
  console.log('____________________________');
  console.log(answerZ);
};

mz.forEach(e => console.log(e));
calculateZ(5);
