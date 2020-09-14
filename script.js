const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('minutes');
const s = document.getElementById('seconds');

// Nearest approach astroid or default to "13 Apr 2029"
const nearestApproach = "2029-04-13"; 


// Countdown Timer
function countdown() {
    const nearestDate = new Date(nearestApproach);
    const currentDate = new Date();

    const totalSeconds = (nearestDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log(days, hours, minutes, seconds);

    d.innerHTML = formatTime(days);
    h.innerHTML = formatTime(hours);
    m.innerHTML = formatTime(minutes);
    s.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time; //return time < 10 ? "0"+time : time;
}

countdown();
setInterval(countdown, 1000); //countdown by 1 second

// Fetch NEO Information
function fetchNEO() {
    // start_date = current date end_date= current date +1 day & add API key
    fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2029-04-13&end_date=2029-04-13&api_key=DEMO_KEY")
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            console.log(json);
        })
}