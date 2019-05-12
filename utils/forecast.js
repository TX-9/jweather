const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/57ad78a5609a039e769b5b13c2736f25/'  + latitude + ',' + longitude;

    request({url, json:true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary);
        }
    })
}

module.exports = forecast;
