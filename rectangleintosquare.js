function sqInRect(lng, wdth) {
  //your code here;
  result = []

  if (lng === wdth) {
    return null
  }
  else {
    while (lng !== wdth) {
      let big;
      let small;

      if (lng > wdth) {
        big = lng;
        small = wdth  
      }
      else {
        big = wdth;
        small = lng;
      }

      result.push(small);
      lng= big-small;
      wdth = small;
    }
    result.push(wdth)
    return (result)
  }
}

sqInRect(5, 5)
sqInRect(5, 3)// [3, 2, 1, 1])
sqInRect(3, 5)// [3, 2, 1, 1])
sqInRect(20, 14)// [14, 6, 6, 2, 2, 2])