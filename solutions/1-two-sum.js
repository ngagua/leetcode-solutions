/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const sorted = nums.map((num, index) => [num, index]).sort((a, b) => a[0] - b[0])
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex < endIndex) {
    const sum = sorted[startIndex][0] + sorted[endIndex][0];

    if (sum === target) {
      return [sorted[startIndex][1], sorted[endIndex][1]];
    }

    if (sum > target) {
      --endIndex;
    } else {
      ++startIndex;
    }
  }


};
