function Alarm(time) {
  this.time = time;
}

Alarm.prototype.goOff = function(){
  var currentTime = moment()
  console.log("Moment: " + currentTime + typeof currentTime);
  console.log("Alarm: " + this.time + typeof this.time);
  if(moment(currentTime).get('hour') == moment(this.time).get('hour') && moment(currentTime).get('minute') == moment(this.time).get('minute'))
  {
    console.log("YESSSSSS");
    $('.container').addClass("alarm");
  }
}


module.exports.Alarm = Alarm;
