function largestNumFromArr(arr) {
    var maxNumArray = [];
    maxNumArray = [...arr];
    for (var i = 0; i < arr.length; ++i) {
        var max = -Infinity;
        for (var j = 0; j < arr[i].length; j++)
        if(arr[i][j] > max)
        max = arr [i][j];
        maxNumArray.push(max);
    }
    return max;
}

console.log(largestNumFromArr(maxNumArray));
module.exports = largestNumFromArr;