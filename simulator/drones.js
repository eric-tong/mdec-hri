const baseCoords = require('./baseCoords');

const drones = Array.from({ length: 1 }, (v, k) => {
    return {
        id: k,
        longitude: baseCoords.longitude,
        latitude: baseCoords.latitude,
        targetLongitude: baseCoords.longitude + 0.005,
        targetLatitude: baseCoords.latitude + 0.005,
        bearing: 0,
    }
})

module.exports = drones;