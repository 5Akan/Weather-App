const key = '0c0b8f672b46c080c2b3073b3e6a8f3e';

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
    console.log(respData);
}

getWeatherByLocation('Nigeria');