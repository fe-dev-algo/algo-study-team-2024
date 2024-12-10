/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  function backtrack(str, open, close) {
    // 길이가 n * 2이면 완성된 문자열을 결과에 추가
    if (str.length === n * 2) {
      result.push(str);
      return;
    }

    // n보다 작을 때까지 열린 괄호 추가
    if (open < n) {
      backtrack(str + "(", open + 1, close);
    }

    // 열린 괄호보다 작을 때까지 닫힌 괄호 추가
    if (close < open) {
      backtrack(str + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);

  return result;
};
