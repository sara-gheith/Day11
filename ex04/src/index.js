var monitorsListArray = ["Apple", "Peach", "Berry"];

function myMonitorsFunction(arr) {
  var newMonitorsList = [...arr];
  newMonitorsList = monitorsListArray;
  var monitorsList = [];

  for (var i = 0; i < newMonitorsList.length; i++) {
    monitorsList = newMonitorsList[i];
    i++;
  }
  for (var i = 0; i < newMonitorsList.length; i++) {
    monitorsList = newMonitorsList[i];
    newMonitorsList.push(["Apple", 1, "Peach", 2, "Berry", 3]);
    i++;
  }
  return monitorsList;
}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;
