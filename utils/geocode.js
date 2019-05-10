const request = require('request');

const geocode = (address, callback) => {
    const url;

    request({url, json:true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location service', undefined);
        } else if (body.feature.length === 0) {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                latitude: body.feature[0].center[1],
                longtitude: body.feature[0].center[0],
                location: body.feature[0].place_name
            });
        }
    })
}

module.exports = geocode;