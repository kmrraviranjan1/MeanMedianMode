export const deviation = (data) => {
  const value = mean(data);

  const variance = data.map((num) => {
    return (num - value) * (num - value);
  });
  const value2 = mean(variance);

  const standardDeviation = Math.sqrt(value2);
  console.log("standardDeviation:", standardDeviation);
  return standardDeviation;
};

const mean = (data) => {
  const sum = data.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  const noOfData = data.length;
  // mean is simple average of data set
  const mean = sum / noOfData;
  // console.log('mean:', mean)
  return mean;
};
