const APIURL = https://api.nasa.gov

// Format todays date YYYY-MM-DD for use in API 
const formatDate = { year: 'numeric', month: '2-digit', day: '2-digit'}
let dateToday = new Date();

dateAPI = console.log(dateToday.toLocaleDateString("en-US", formatDate));

// API fetch function
async function getNeoByApproachDate(date) {
    const resp = await fetch(APIURL + '/neo/rest/v1/feed?start_date=' + dateAPI + '&end_date=END_DATE&api_key=' + API_KEY)
}