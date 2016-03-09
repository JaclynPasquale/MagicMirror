var day = document.getElementById('day');
var date = document.getElementById('date');
var month = document.getElementById('month');
var time = document.getElementById('time');
var temp = document.getElementById('temp');
var city = document.getElementById('city');

var now = new Date();
var dayNumber = now.getDay();
var monthNumber = now.getMonth();

day.innerText = getFullDayOfWeekName(dayNumber);
date.innerText = now.getDate();
month.innerText = getFullMonthName(monthNumber);

updateTime();
setInterval(updateTime, 1000);

function getFullDayOfWeekName(day){
    switch (day){
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        default: return "Unknown";
    }
}

function getFullMonthName(monthNumber){
    switch (monthNumber){
        case 0: return "January";
        case 1: return "February";
        case 2: return "March";
        case 3: return "April";
        case 4: return "May";
        case 5: return "June";
        case 6: return "July";
        case 7: return "August";
        case 8: return "September";
        case 9: return "October";
        case 10: return "November";
        case 11: return "December";
        default: return "Unknown";
    }
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

function updateWeather(data){
        temp.innerHTML = data.current_observation.feelslike_f + "&#176;" + " F";
        city.innerHTML = data.current_observation.display_location.city;
}

document.addEventListener("DOMContentLoaded", function(){
var conditonsUrl = "http://api.wunderground.com/api/d89f318f93a1c98e/conditions/q/TN/Nashville.json";
getJSONP(conditonsUrl, 'updateWeather');
});