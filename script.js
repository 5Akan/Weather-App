const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const key = '1dc06d1aef48c2336ab539e27950b774';

const api_url = (location) => `http://api.weatherstack.com/current?access_key=${key}&query=${location}`;
/**
 * The format above uses arrow to declare a variable 
 * or small funstion and add a value to it 
 * e.g const greet =(value)=> "Hello" + value;
 * you call it like this ,
 * greet("Everyone");
 * output is "Hello Everyone"
 */

async function getWeatherByLocation(location) {
    const resp = await fetch(api_url(location));

    const respData = await resp.json();
    console.log(respData, respData.current.temperature);

    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
    <h2>${data.current.temperature}˚C <img src = "${data.current.weather_icons[0]}"/></h2>
    
    
    `
    //Clean up
    main.innerHTML = '';

    main.appendChild(weather);
    
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const location = search.value;

    if(location){
        getWeatherByLocation(location);
    }
})
getWeatherByLocation('Bauchi'); 

// "data.current.weather_icons"
// "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/data.current.weather_icons.png"