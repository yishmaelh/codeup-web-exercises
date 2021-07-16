"use strict";

$(document).ready(function() {
    $.get("https://api.openweathermap.org/data/2.5/weather", {
        appid: OPEN_WEATHER_API_KEY,
        q: "Austin, US",
        units: 'imperial'
    }).done(function(data) {
        console.log(data);
    });
});