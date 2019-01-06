
function inArray(array1, array2) {
result= [];
resultsansdoublon= []
  for (let i=0; i<array1.length; i++) {
    for (let y=0; y<array2.length; y++) {
      if (array2[y].includes(array1[i])){
        result.push(array1[i])
      }
    }
  }
  result.sort();
  for (let i=0; i<result.length; i++) {
    if (result[i]===result[i+1]){
      result.splice(i,1)
    }
  }
  return console.log(result)

}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a1 = ["xyz", "live", "strong"]
inArray(a1, a2), ["live", "strong"]