$(function(){

  setInterval(function(){
    $('#current-time').text(moment().format('LTS'));
  }, 1000);
});
