const drones = require('./drones');
const toDegrees = require('../utils/toDegrees');
const toRadians = require('../utils/toRadians');

setInterval(() => {
    drones.forEach(rotateToTarget);
    drones.forEach(move);
}, 500);

function rotateToTarget(drone) {
    dx = drone.targetLatitude - drone.latitude;
    dy = drone.targetLongitude - drone.longitude;
    drone.bearing = toDegrees(Math.atan2(dy, dx));
}

const velocity = 0.0002;

function move(drone) {
    drone.latitude += Math.cos(toRadians(drone.bearing)) * velocity;
    drone.longitude += Math.sin(toRadians(drone.bearing)) * velocity;
}

function setTarget({ id, longitude, latitude }) {
    drone = drones.find(drone => drone.id == id);
    drone.targetLongitude = longitude;
    drone.targetLatitude = latitude;
}

module.exports = setTarget;