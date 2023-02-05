const key = '28233195ef7f7f6ae49f6202745c97a5';

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
}


getWeatherByLocation('Bauchi'); 

