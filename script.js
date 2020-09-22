// TIMER TILL NEXT NEO
const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('minutes');
const s = document.getElementById('seconds');

// Nearest approach (close_approach_date_full) or default to "2029-Apr-13 21:46"
const nearestApproach = "2029-04-13 21:46"; 

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

//add a zero before single digit numbers
function formatTime(time) {
    return time < 10 ? `0${time}` : time; 
}
//countdown by 1 second
countdown();
setInterval(countdown, 1000);


// FORMAT DATE FOR API FETCH
function formatDate(date) {
    let d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}
const formatStartDate = formatDate(new Date());

const endDate = new Date(formatStartDate);
    endDate.setDate(endDate.getDate()+3);
const formatEndDate = formatDate(endDate);

// FETCH NEO DATA    
function fetchNEO() {
    // start_date = current date, end_date= current date+days, & add API key
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${formatStartDate}&end_date=${formatEndDate}&api_key=6BA4cK9eCN7hdycLbdsRUZTzehK1qaNTRFiqUfaI`)
        .then(res => res.json())
        .then(json => console.log(json));
}