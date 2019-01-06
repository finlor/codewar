function listSquared(m, n) {
  const result = [];
  for (let i = m; i <= n; i++) {
    let divisorsOfi = [];
    for (let j = 0; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisorsOfi.push(Math.pow(j, 2));// your code
        if (i/j != j)
        divisorsOfi.push(Math.pow(i/j, 2));
      }
    }
    let sumOfDivisor = 1
    if (divisorsOfi.length > 1) {
      sumOfDivisor = divisorsOfi.reduce((a, b) => a + b);
    }
    if (Number.isInteger(Math.sqrt(sumOfDivisor))) {
      result.push([i, sumOfDivisor])
    }
  } 
  return console.log(result)
}

listSquared(0, 42)
