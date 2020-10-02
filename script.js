//Format current date for API call start_date & end_date 
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
const yyyy = today.getFullYear();
if(dd<10)
{dd = `0${dd}`;}
if(mm<10)
{mm = `0${mm}`;}
startDate = `${yyyy}-${mm}-${dd}`
console.log(startDate);
let ed = today.getDate()+3;
if(ed<10)
{ed = `0${ed}`;}
endDate = `${yyyy}-${mm}-${ed}`
console.log(endDate);

const NASA_API = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`
console.log(NASA_API);
// Fetch NEO data on page load document.onload
document.addEventListener("DOMContentLoaded", () => loadNeos())

const loadNeos = () => {
    fetch(NASA_API)
    .then(resp => resp.json())
    .then(json => {
        // console.log(json)
        // debugger
        json.near_earth_objects[`${startDate}`]
    })
}    
//json.near_earth_objects["2020-09-29"][0].close_approach_data[0].miss_distance.lunar < 20)












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

//onclick of distance and diameter button
function showSize() {
    let x = document.getElementById("showMore");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none"
    }
}