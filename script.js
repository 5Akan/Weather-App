const APIURL = 'http://api.weatherstack.com/current?access_key=e38cb2988109e5bb3049e9c9f5fec0b2&query=';

async function getWeatherByLocation(location) {
    const resp = await fetch(APIURL+location);

    const respData = await resp.json();
    console.log(respData);
}

getWeatherByLocation('Nigeria');