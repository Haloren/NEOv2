// TIMER TILL NEXT NEO
const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('minutes');
const s = document.getElementById('seconds');

// Fetch NEO data
//let start_date=today let end_date=today+6
const loadNeos = () => {
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-09-29&end_date=2020-09-30&api_key=DEMO_KEY`)
    .then(resp => resp.json())
    // .then(json => console.log(json))
    .then((data) => {
        // debugger
        data.near_earth_objects["2020-09-29"].filter(e => e.close_approach_data[0].miss_distance.lunar < 20)[0]
    })        
}    

loadNeos();
//data.near_earth_objects["2020-09-29"][0].close_approach_data[0].miss_distance.lunar

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
    }
}