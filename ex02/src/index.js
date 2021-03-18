var temps = [
  [31, 32, 19, 37],
  [29, 27, 55, 36],
  [17, 27, 42, 46],
  [29, 52, 21, 64],
  [91, 27, 31, 61]
];

function myArrayFunction(arr) {
  var newTemps = [...arr];
  var averageDayTemp = [];
  newTemps = temps;

  for (var i = 0; i < newTemps.length; i++) {
    var a =
      (newTemps[0][0] + newTemps[0][1] + newTemps[0][2] + newTemps[0][3]) / 4;
  }
  for (var i = 0; i < newTemps.length; i++) {
    var b =
      (newTemps[1][0] + newTemps[1][1] + newTemps[1][2] + newTemps[1][3]) / 4;
  }
  for (var i = 0; i < newTemps.length; i++) {
    var c =
      (newTemps[2][0] + newTemps[2][1] + newTemps[2][2] + newTemps[2][3]) / 4;
  }
  for (var i = 0; i < newTemps.length; i++) {
    var d =
      (newTemps[3][0] + newTemps[3][1] + newTemps[3][2] + newTemps[3][3]) / 4;
  }
  for (var i = 0; i < newTemps.length; i++) {
    var e =
      (newTemps[4][0] + newTemps[4][1] + newTemps[4][2] + newTemps[4][3]) / 4;
  }

  averageDayTemp.push(a, b, c, d, e);

  return averageDayTemp;
}

console.log(myArrayFunction(temps));
module.exports = myArrayFunction;
