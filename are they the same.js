function comp(array1, array2) {
  //your code here

  if (((array1!=null && array2!=null) && array1.length!=array2.length) || (array1 === null) || (array2 === null) || 
  (array1=== undefined) || (array2===undefined) || (array1.length===0) || (array2.length===0) ||(array2===[])) {
      return console.log(false);
  }
   else {     
  let arrsquare = array1.map(function (num) { return num * num });
  let arr2 = [];
  for (let i = 0; i < array2.length; i++) {
      if (arrsquare.includes(array2[i])) {
          arr2.push(true);
      } else {
          arr2.push(false);
      }
  }
  return console.log(arr2.includes(false) ? false : true);
}}
const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
//comp(a1, b);
const bnull = [];
const anull = [];
comp(anull, bnull);
const a3=[4,4,5];
const a2=[16,25,25];
comp(a3,a2)
/* a or b might be [] (all languages except R, Shell). a or b might be nil or null or None or nothing (except in Haskell, Elixir, C++, Rust, R, Shell).

If a or b are nil (or null or None), the problem doesn't make sense so return false.

If a or b are empty the result is evident by itself.*/