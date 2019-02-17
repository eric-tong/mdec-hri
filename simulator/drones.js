const baseCoords = require('./baseCoords');

const drones = Array.from({ length: 1 }, (v, k) => {
    return {
        id: k,
        longitude: baseCoords.longitude,
        latitude: baseCoords.latitude,
        targetLongitude: baseCoords.longitude + 0.01,
        targetLatitude: baseCoords.latitude + 0.01,
        bearing: 0,
    }
})

module.exports = drones;