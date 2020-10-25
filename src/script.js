//Format current date for API call start_date & end_date 
let today = new Date();
let dd = today.getDate()+1;//todays date plus one so there's always something to count toward
let mm = today.getMonth()+1;
const yyyy = today.getFullYear();
if(dd<10)
{dd = `0${dd}`;}
if(mm<10)
{mm = `0${mm}`;}
startDate = `${yyyy}-${mm}-${dd}`
// console.log(startDate);

API_KEY="6BA4cK9eCN7hdycLbdsRUZTzehK1qaNTRFiqUfaI"
const NASA_API = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=${API_KEY}`
// console.log(NASA_API)

const main = document.querySelector("main")

// Fetch NEO data on page load document.onload
document.addEventListener("DOMContentLoaded", () => loadNeos())

const loadNeos = () => {
    fetch(NASA_API)
    .then(resp => resp.json())
    // .then(json => console.log(json))
    // .then(json => {
    //     json.near_earth_objects[`${startDate}`].forEach(neo => renderNeos(neo))        
    // })
    .then(json => {
        renderNeo(json.near_earth_objects[`${startDate}`][0])
    })
}   

const renderNeo = (neoHash) => { //renderNeos
    neoName = (neoHash.name).substring(1, (neoHash.name).length-1)
    
    neoDate = (neoHash.close_approach_data[0].close_approach_date_full)
    
    neoLunar = (parseFloat(neoHash.close_approach_data[0].miss_distance.lunar)).toFixed(2)
    neoKM = Math.round(neoHash.close_approach_data[0].miss_distance.kilometers)

    neoDiameterMin = Math.round(neoHash.estimated_diameter.meters.estimated_diameter_min)
    neoDiameterMax = Math.round(neoHash.estimated_diameter.meters.estimated_diameter_max)

    console.log(`Name: ${neoName}`)
    console.log(`Approach Date: ${neoDate}`)
    console.log(`Lunar Miss Distance: ${neoLunar}`)
    console.log(`Kilometer Miss Distance: ${neoKM}`)
    console.log(`Min Est Diameter: ${neoDiameterMax}`)
    console.log(`Max Est Diameter: ${neoDiameterMin}`)

    //NEO
    const h3 = document.createElement("h3")
    h3.setAttribute("class", "neoName")
    formatNeoName = (neoHash.name).substring(1, (neoHash.name).length-1);
    neoDate = neoHash.close_approach_data[0].close_approach_date_full
    h3.innerHTML = formatNeoName + " - " + neoDate
    main.appendChild(h3)
}

// Nearest approach (close_approach_date_full) or default to "2029-Apr-13 21:46"
let nearestApproach = new Date() + 1; //neoDate goes here

// TIMER TILL NEXT NEO
const d = document.getElementById('days');
const h = document.getElementById('hours');
const m = document.getElementById('minutes');
const s = document.getElementById('seconds');

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