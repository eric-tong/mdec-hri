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

function getDrones() {
    drones.forEach(rotateToTarget);
    drones.forEach(move);
    return drones;
}


function rotateToTarget(drone) {
    dx = drone.targetLatitude - drone.latitude;
    dy = drone.targetLongitude - drone.longitude;
    drone.bearing = Math.atan(dx / dy) / Math.PI * 180;
}

const velocity = 0.0003;

function move(drone) {
    drone.latitude += Math.cos(drone.bearing / 180 * Math.PI) * velocity;
    drone.longitude += Math.sin(drone.bearing / 180 * Math.PI) * velocity;
}

module.exports = getDrones;