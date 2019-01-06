function array_diff(a, b){
  for(let i = 0; i<b.length; i++){
    // console.log('valeur de b:' + b[i])
    for(let j =0; j<a.length; j++){
      // console.log('valeur de a:' + a[j])
      if (b[i]===a[j] ){
        console.log(a[i], b[j])
        a.splice(j, 1)
        // j-= 1;
      }
    }
  }console.log(a)
  return a;
}

// array_diff([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]) // [2, 2, 4]
array_diff([1, 1, 2 ,3 ,1 ,2 ,3 ,4, 4, 3 ,5, 6, 7, 2, 8], [1, 3, 4, 2])
