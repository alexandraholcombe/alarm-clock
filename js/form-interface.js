var Alarm = require("./../js/alarmtime.js");

$(function(){
  $('#time-form').submit(function(event) {
    event.preventDefault();

    var alarmTime = $('#alarm-time').val();

    alarmTime = alarmTime.split(":");

    var newMoment = moment().hour(alarmTime[0]).minute(alarmTime[1]).second(0);

    var newAlarm = new Alarm.Alarm(newMoment);
    console.log(newMoment);

    setInterval(function(){
      newAlarm.goOff();
    }, 1);

  });
})
