//loads the date and time from the localStorage
//and updates the pages HTML when the windows gets loaded.
window.onload = function ()
{
    updateHTML('datetime', getLocalStorage(getPageName()));
}

//gets the current date and time, saves it to the localStorage
//and updates the pages HTML
function saveDateTime()
{
    let datetime = getDateTime()
    setLocalStorage(getPageName(), datetime);
    updateHTML('datetime', datetime);
}

//updates the innerHTML at a given id with the given value
function updateHTML(id, value)
{
    document.getElementById(id).innerHTML = value;
}

//gets the current date and time
function getDateTime()
{
    let now = new Date();
    let currentDate = now.getDate() + "." + (now.getMonth() + 1) + "." + now.getFullYear();
    let currentTime = now.getHours() + ":" + minuteCheck(now.getMinutes());
    return currentDate + " " + currentTime;
}

//checks if a minutes is under 10 and adds a 0 to it to match the time pattern
function minuteCheck(minute)
{
    if (minute < 10) {
        minute = "0" + minute;
    }
    return minute;
}

//splits the url to get the page name
function getPageName()
{
    let url = window.location.pathname;
    let html = url.split("/").pop();
    let page = html.split(".");
    return page[0];
}

//null safely reads the localStorage at a given key
function getLocalStorage(page)
{
    if (window.localStorage.getItem(page) != null) {
        return window.localStorage.getItem(page);
    } else {
        return "14.08.2021 14:00";
    }
}

//sets a new entry in the localStorage with a given key, value pair
function setLocalStorage(key, value)
{
    window.localStorage.setItem(key, value);
}
