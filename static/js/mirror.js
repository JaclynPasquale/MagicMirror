var day = document.getElementById('day');
var date = document.getElementById('date');
var month = document.getElementById('month');
var time = document.getElementById('time');
var temp = document.getElementById('temp');
var city = document.getElementById('city');
var now = new Date();
var number = now.getDay();
switch (number){
  case 0:
  day.innerText = "Sunday"
  break;
  case 1:
  day.innerText = "Monday"
  break;
  case 2:
  day.innerText = "Tuesday"
  break;
  case 3:
  day.innerText = "Wednesday"
  break
  case 4:
  day.innerText = "Thursday"
  break
  case 5:
  day.innerText = "Friday"
  break
  case 6:
  day.innerText = "Saturday"
  break
}
date.innerText = now.getDate();
var monthNumber = now.getMonth();
switch (monthNumber){
  case 0:
  month.innerText = "January"
  break;
  case 1:
  month.innerText = "February"
  break;
  case 2:
  month.innerText = "March"
  break;
  case 3:
  month.innerText = "April"
  break
  case 4:
  month.innerText = "May"
  break
  case 5:
  month.innerText = "June"
  break
  case 6:
  month.innerText = "July"
  break
  case 7:
  month.innerText = "August"
  break
  case 8:
  month.innerText = "September"
  break
  case 9:
  month.innerText = "October"
  break
  case 10:
  month.innerText = "November"
  break
  case 11:
  month.innerText = "December"
  break
}
function updateTime(){
  var now = new Date();
  var hours = now.getHours() % 12;
  if(hours == 0){
    hours = 12;
  }
  var min = now.getMinutes();
  if(min < 10){
    min = "0" + min;
  }
  time.innerText = hours + ":" + min;
}
setInterval(updateTime, 1000);

function getJSONP(url, cbName){
  var $script = document.createElement('script')
  $script.src = url + '?callback=' + cbName;
  document.body.appendChild($script);
}


function getLocation(){
    navigator.geolocation.getCurrentPosition(function(position){
    var url = "http://api.wunderground.com/api/d89f318f93a1c98e/geolookup/q/" + position.coords.latitude + "," + position.coords.longitude + ".json";
    getJSONP(url, 'myAwesomeFunction')
  });
}

function myAwesomeFunction(data){
        temp.innerHTML = data.current_observation.feelslike_f + "&#176;" + " F";
        city.innerHTML = data.current_observation.display_location.city;
        
        console.log(data);
}

document.addEventListener("DOMContentLoaded", function(){
var conditonsUrl = "http://api.wunderground.com/api/d89f318f93a1c98e/conditions/q/TN/Nashville.json";
getJSONP(conditonsUrl, 'myAwesomeFunction');
});