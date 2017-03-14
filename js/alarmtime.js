function Alarm(time) {
  this.time = conversion(time);
}

var conversion = function(time) {

  var time = time.split(":");

  if(parseInt(time[0]) > 12){
    parseInt(time[0])  = parseInt(time[0])  - 12;
    return time[0] + ":" + time[1] + " PM";
  } else {
    return time[0] + ":" + time[1] + " AM";
  }
}

Alarm.prototype.goOff = function(currentTime){
  console.log("Moment: " + currentTime + typeof currentTime);
  console.log("Alarm: " + this.time + typeof this.time);
  if(this.time == currentTime)
  {
    $('body').addClass("alarm");
  }
}


module.exports.Alarm = Alarm;
