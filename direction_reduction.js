function dirReduc(arr) {
  // ...
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === "NORTH" && arr[i + 1] === "SOUTH") || (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") || (arr[i] === "EAST" && arr[i + 1] === "WEST") || (arr[i] === "WEST" && arr[i + 1] === "EAST")) {
      console.log(i)
      arr.splice(i, 2)
      i=i-2;

    }
  }
    return console.log(arr)


  }
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
  dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
  dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]);
