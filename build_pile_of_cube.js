//The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.


function findNb(m) {
  let somme = 0;
  let n = 0;

  while (somme <= m) {
    somme += (n * n * n);
    n++;
    if (somme === m) {
      return console.log(n+1)
      break;
    }
  }
  if (somme > m) {
    return (console.log (-1))}
}

findNb(4183059834009);
findNb(24723578342962);
findNb(135440716410000);
