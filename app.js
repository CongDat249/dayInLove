const dayStart = "January 19,2020"
const millisecondPerSecond = 1000;
const millisecondPerMinute = millisecondPerSecond * 60;
const millisecondPerHour = millisecondPerMinute * 60;
const millisecondPerDay = millisecondPerHour * 24;
const dayDisplay = document.querySelector(".day");
const hourDisplay = document.querySelector(".hour");
const minuteDisplay = document.querySelector(".minute");
const secondDisplay = document.querySelector(".second");

function timeLoved(){
    today = new Date()
    let millisecondLoved = Date.parse(today) - Date.parse(dayStart);
    return millisecondLoved;
}

function formatTime(){
    var timeLeft = timeLoved();
    day = Math.floor(timeLeft/millisecondPerDay)
    dayDisplay.textContent = day;

    timeLeft = timeLeft%millisecondPerDay;
    hour = Math.floor(timeLeft/millisecondPerHour)
    hourDisplay.textContent = hour;
    
    timeLeft = timeLeft%millisecondPerHour;
    minute = Math.floor(timeLeft/millisecondPerMinute)
    minuteDisplay.textContent = minute;
    
    timeLeft = timeLeft%millisecondPerMinute;
    second = Math.floor(timeLeft/millisecondPerSecond)
    secondDisplay.textContent = second;
}


setInterval(formatTime,1000);
