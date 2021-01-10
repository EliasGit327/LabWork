const mj: number[][] = [
  // [10, 1, -1, 11],
  // [1, 10, -1, 10],
  // [-1, 1, 10, 10]

  [5.48, 1.12, 0.95, 1.32, 12.33],
  [1.12, 4.88, 2.12, 0.57, 15.41],
  [0.95, 2.12, 7.03, 1.29, 19.07],
  [-1.32, 0.57, 1.29, 5.77, 14.25]
];
let answer = [];

const divideMatrix = () => {
  mj.forEach((line,lineIndex) => {
    const divider = line[lineIndex];
    line.forEach((col, colIndex) => {
      mj[lineIndex][colIndex] /=  divider;
    });
  });
};

const changePos = () => {
  mj.forEach((line,lineIndex) => {
    mj[lineIndex][lineIndex] = 0;
    for (let i = 0; i < mj[lineIndex].length - 1; i++)
      mj[lineIndex][i] *= -1;

  });
};

const prepare = (): number[] => {
  const newAnswer = [];
  mj.forEach((line) => {
    newAnswer.push(line[line.length - 1]);
  });
  answer = newAnswer;
  return newAnswer;
};

const calculateNewAnswer = () => {
  const newAnswer = [];
  let newValue = 0;
  mj.forEach((line, lineIndex) => {
    newValue = 0;
    for (let i = 0; i < mj[lineIndex].length - 1; i++) {
      newValue += mj[lineIndex][i] * answer[i];
    }
    newValue += mj[lineIndex][mj[lineIndex].length - 1];
    newAnswer.push(newValue);
  });
  answer = newAnswer;
};

const calculate = (accuracy: number) => {
  divideMatrix();
  changePos();
  prepare();

  for (let i = 0; i < accuracy; i++) {
    calculateNewAnswer();
  }
  console.log('____________________________');
  console.log(answer);
};

mj.forEach(e => console.log(e));
calculate(100);


