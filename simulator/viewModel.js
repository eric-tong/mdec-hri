const baseCoords = {
    latitude: 51.7520,
    longitude: -1.2577,
}

const N = 3;
const segment = 2 * Math.PI / N;

const drones = Array.from({ length: N }, (v, k) => {
    return {
        id: k,
        longitude: baseCoords.longitude,
        latitude: baseCoords.latitude,
        targetLongitude: baseCoords.longitude + 0.004 * Math.sin(segment * k),
        targetLatitude: baseCoords.latitude + 0.004 * Math.cos(segment * k),
        bearing: 0,
    }
})

module.exports = { drones: drones, baseCoords: baseCoords };