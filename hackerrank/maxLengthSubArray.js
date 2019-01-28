'use strict';

const maxLength = (arr, k) => {
  let count = 0,
    maxCount = 0,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] <= k) {
      sum += arr[i];
      count++;
      maxCount = Math.max(maxCount, count);
    } else if (sum !== 0) {
      sum = sum - arr[i - count] + arr[i];
    }
  }
  return maxCount;
};

const testArray = [5, 3, 4, 1, 2, 6];
const testK = 12;

// console.log(maxLength(testArray, testK));
