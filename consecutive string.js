function longestConsec(strarr, k) {
  let newarray = [];
  let i = 0;
  if ((strarr.length === 0) || (k > strarr.length) || (k <= 0)) {
    return "";
  }
  while (i + k - 1 < strarr.length) {
    string = '';
    for (let nombreboucleK = 0; nombreboucleK < k; nombreboucleK++) {
      string += strarr[i + nombreboucleK]
    }
    newarray.push(string);
    i++;
  }
  let result = newarray.map(x =>
    x.length)
  let index = 0
  index = result.indexOf(Math.max(...result));
  return newarray[index];

}

longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)
  //You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

  //#Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

  //n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

  /*testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
  testing(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
  testing(longestConsec([], 3), "")
  testing(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
  testing(longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
  testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
  testing(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
  testing(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
  testing(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
})})
*/