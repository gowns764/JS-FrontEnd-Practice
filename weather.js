const API_KEY = "f36bf82673ff109b9f484935de6be606";
const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };

    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log('Can\'t access geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);

    if(loadedCords === null){
        askForCoords();
    } else {

    }
}

function init() {
    loadCoords();
}

init();