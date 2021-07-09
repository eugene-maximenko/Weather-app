const request = require('request');

// Get the forecast by lat and lon
const forecast = (latitude, longitude, callback) => {

    // Url for request
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4a29db7ec38cf0793a1bf581b2339e74`;

    // Request
    request({ url, json: true }, (error, { body }) => {

        // Handle error 
        if (error) {
            callback('Hm, here is a low error of request :(', undefined);

            // Handle problems with coordinates
        } else if (body.message) {
            callback('Some problems with coordinates!', undefined);

            // Return the forecast
        } else {
            callback(undefined, 'It is currently ' + Math.round(body.main.temp - 273.15) + ' degrees out. There is a 0% chance of rain');
        }
    })

};

module.exports = forecast;