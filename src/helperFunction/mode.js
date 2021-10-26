export const mode = (data) => {
  let map = {};
// frequency counter for data array
  for (let i = 0; i < data.length; i++) {
    if (data[i] in map) {
      map[data[i]]++;
    } else {
      map[data[i]] = 1;
    }
  }
// finding value with max frequency
  let value;
  let max = -1;
  for (let key in map) {
    if (map[key] > max) {
      max = map[key];
      value = key;
    }
  }
  let mode;
//   if all data are present only once mode doesn't exist
  if (max === 1) {
    mode = -1;
  } else {
    mode = value;
  }
//   console.log("mode:", mode);
  return mode;;
};
