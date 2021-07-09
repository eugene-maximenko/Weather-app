const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// Location
const location = process.argv[2];

// Get the geocode of location
geocode(location, (error, { latitude, longitude, location}) => {

    // Validate the location
    if (!location) {
        return console.log('Please, provide a location!');
    }

    // Handle error
    if (error) {
        return console.log(error);
    }
    
    // Get the forecast by lon, lat
    forecast(latitude, longitude, (error, forecastData) => {

        // Handle error
        if (error) {
            return console.log(error);
        }
        
        // Log the location and forecast
        console.log(location);
        console.log(forecastData);
    });
});