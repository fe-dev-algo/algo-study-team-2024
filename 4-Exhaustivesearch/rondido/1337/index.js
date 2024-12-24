/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */

var kWeakestRows = function (mat, k) {
  const len = mat.length;
  let result = Array(len).fill(0);
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      if (mat[i][j] == "1") {
        result[i] += 1;
      }
    }
  }
  const sortedIndices = result
    .map((value, index) => index)
    .sort((a, b) => result[a] - result[b]);
  return sortedIndices.slice(0, k);
};
