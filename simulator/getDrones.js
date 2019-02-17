const baseCoords = require('./baseCoords');

const drones = Array.from({ length: 3 }, (v, k) => {
    return {
        id: k,
        longitude: baseCoords.longitude,
        latitude: baseCoords.latitude,
        bearing: 45 * k,
    }
})

function getDrones() {
    drones.forEach(move);
    return drones;
}

const velocity = 0.0001;

function move(drone) {
    drone.longitude += Math.sin(drone.bearing / 180 * Math.PI) * velocity;
    drone.latitude += Math.cos(drone.bearing / 180 * Math.PI) * velocity;
}

module.exports = getDrones;