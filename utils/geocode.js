const request = require('request');

// Get the geocode for address
const geocode = (address, callback) => {

    // Create url
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoidGlnZXIzMTI5IiwiYSI6ImNrbmYwZWFzcjEzZ3Yyem83M2RzbjRubTAifQ.vjxDj3LPTG7_KpU3pIp29g&limit=1&language=ru';

    // Create request
    request({ url, json: true }, (error, { body }) => {

        // Handle error
        if (error) {
            callback('Unable to connect to location services!', undefined);
            
            // Handle wrong body
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined);

            // Return the lat, lon and location 
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].text
            });
        }
    })
}

module.exports = geocode;