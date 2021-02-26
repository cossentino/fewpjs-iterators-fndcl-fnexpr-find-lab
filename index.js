




function superbowlWin(objArray) {
  let winRecord = objArray.find(function(e) { return e['result'] === "W" })
  if (!!winRecord) {
    return winRecord['year']
  } 
}