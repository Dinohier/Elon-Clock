setInterval(function () {
  let currtentDate = new Date()
  let hours = currtentDate.getHours().toString(2)
  let mins  = currtentDate.getMinutes().toString(2)
  let secs  = currtentDate.getSeconds().toString(2);
  // -- force all fields to be appropriate length

  console.log("hours " + hours)
  console.log("mins " + mins)
  console.log("seconde " + secs)

    document.getElementById("bHours").innerHTML = hours;
    document.getElementById("bMins").innerHTML = mins;
    document.getElementById("bSecs").innerHTML = secs;

  // while (hours.length < ) hours = '0' + hours;
  // while (mins.length < 6)  mins  = '0' + mins;
  // while (secs.length < 6)  secs  = '0' + secs;

  while (hours.length < 5) {
    hours = "0" + hours;
  }

  while (mins.length < 6) {
    mins = "0" + mins;
  }

  
  while (mins.length < 6) {
    secs = "0" + secs;
  }

  //-- update DOM elements
  $('#hours .dot').each(function (index) {
    $(this)[hours.charAt(index) == 0 ? 'addClass' : 'removeClass']('off');
  });
  $('#mins .dot').each(function (index) {
    $(this)[mins.charAt(index) == 0 ? 'addClass' : 'removeClass']('off');
  });
  $('#secs .dot').each(function (index) {
    $(this)[secs.charAt(index) == 0 ? 'addClass' : 'removeClass']('off');
  });
}, 100);

function clock() {
  var now = new Date();
  var secs = ('0' + now.getSeconds()).slice(-2);
  var mins = ('0' + now.getMinutes()).slice(-2);
  var hr = now.getHours();
  var Time = hr + ":" + mins + ":" + secs;
  document.getElementById("inside").innerHTML = Time;
  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);


  $("#info").click(function(){
    $(".information").toggleClass("show");
  });

    $("#insideInfo").click(function(){
    $(".information").removeClass("show");
  });


  $("#daynight").click(function(){
    $("body").toggleClass("dark");
    $("#day").toggleClass("show");
    $("#nigth").toggleClass("show");
  });



var today = new Date().getHours();
if (today >= 6 && today <= 23) {
    document.body.classList.remove("dark");
    var element = document.getElementById("day");
    element.classList.add("show");
    document.getElementById("information").style.color = "#000";
    document.getElementById("darkLink").style.color = "#000";
    document.getElementById("inside").style.color = "#000";
} else {
    document.body.classList.add("dark");
    var element = document.getElementById("nigth");
    element.classList.add("show");
}

