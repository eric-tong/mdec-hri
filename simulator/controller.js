const { drones } = require('./viewModel');
const toDegrees = require('../utils/toDegrees');
const toRadians = require('../utils/toRadians');

setInterval(() => {
    drones.forEach(rotateToTarget);
    drones.forEach(move);
}, 500);

function rotateToTarget(drone) {
    const dx = drone.targetLatitude - drone.latitude;
    const dy = drone.targetLongitude - drone.longitude;

    const targetBearing = toDegrees(Math.atan2(dy, dx));
    var dBearing = (targetBearing - drone.bearing) % 360;

    if (dBearing > 180) dBearing -= 360;
    else if (dBearing < -180) dBearing += 360;

    drone.bearing += dBearing;
}

const velocity = 0.0002;

function move(drone) {
    drone.latitude += Math.cos(toRadians(drone.bearing)) * velocity;
    drone.longitude += Math.sin(toRadians(drone.bearing)) * velocity;
}

function setTarget({ id, longitude, latitude }) {
    const drone = drones.find(drone => drone.id == id);
    drone.targetLongitude = longitude;
    drone.targetLatitude = latitude;
}

module.exports = setTarget;