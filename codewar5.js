function accum(s) {
    // your code
    let result = ""
    for (i = 0; i < s.length; i++) {
        if (i+1===s.length){
        result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i);}
        else {
            result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-";}

        

    }
    return console.log(result)
}


accum("abcd");    // "A-Bb-Ccc-Dddd"