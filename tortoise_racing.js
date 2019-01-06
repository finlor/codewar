/*
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, [] for Kotlin or "-1 -1 -1".*/


function race(v1, v2, g) {
  // your code
  let result = [];
  if (v1 >= v2) {
    return null
  }

  else {
    let difference = v2 - v1;
    let heure = Math.trunc(g / difference);
    let rest = g % difference;
    result.push(heure);
    let minute = Math.trunc(rest / difference * 60);
    let rest2 = (rest * 60) % difference;
    result.push(minute);
    let seconde = Math.trunc(rest2 / difference * 60);
    result.push(seconde);

    return (result);
  }
}
race(720, 850, 70);
race(80, 91, 37);
race(80, 100, 40);