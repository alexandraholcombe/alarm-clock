var Alarm = require("./../js/alarmtime.js");

$(function(){
  $('#time-form').submit(function(event) {
    event.preventDefault();

    var alarmTime = $('#alarm-time').val();
    var newAlarm = new Alarm.Alarm(alarmTime);
    console.log(alarmTime);
    newAlarm.goOff(moment().format('LT'));

  });
})
