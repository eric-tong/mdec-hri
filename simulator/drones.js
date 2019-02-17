const baseCoords = require('./baseCoords');

const drones = Array.from({ length: 1 }, (v, k) => {
    return {
        id: k,
        longitude: baseCoords.longitude,
        latitude: baseCoords.latitude,
        targetLongitude: baseCoords.longitude + 0.001,
        targetLatitude: baseCoords.latitude + 0.001,
        bearing: 0,
    }
})

setInterval(() => {
    drones.forEach(rotateToTarget);
    drones.forEach(move);
}, 500);

function rotateToTarget(drone) {
    dx = drone.targetLatitude - drone.latitude;
    dy = drone.targetLongitude - drone.longitude;
    drone.bearing = Math.atan2(dy, dx) / Math.PI * 180;
}

const velocity = 0.0005;

function move(drone) {
    drone.latitude += Math.cos(drone.bearing / 180 * Math.PI) * velocity;
    drone.longitude += Math.sin(drone.bearing / 180 * Math.PI) * velocity;
}

module.exports = drones;