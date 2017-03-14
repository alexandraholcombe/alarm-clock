function Alarm(time) {
  this.time = conversion(time);
}

var conversion = function(time) {

  var time = time.split(":");

  var hours = parseInt(time[0]);

  if(hours > 12){
    hours  = hours  - 12;
    return hours + ":" + time[1] + " PM";
  } else {
    return hours + ":" + time[1] + " AM";
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
