export const median = (data) => {
  const len = data.length;

  const dataSet = data.sort((a, b) => {
    return a - b;
  });
  let median;
  //   if odd no.of data median is the middle data
  if (len % 2 !== 0) {
    let middle = Math.floor(dataSet.length / 2);
    median = dataSet[middle];
  }
  //   if even no.of data median is the mean of two the middle data
  else {
    let middle1 = len / 2;
    let middle2 = middle1 - 1;
    median = (dataSet[middle1] + dataSet[middle2]) / 2;
  }
  return median;
};
