const { drones } = require('./viewModel');
const toDegrees = require('../utils/toDegrees');
const toRadians = require('../utils/toRadians');

setInterval(() => {
    drones.forEach(rotateToTarget);
    drones.forEach(move);
}, 500);

const maxVelocity = 0.0002;
const circlingRadius = 0.0015;

function rotateToTarget(drone) {
    const dx = drone.targetLatitude - drone.latitude;
    const dy = drone.targetLongitude - drone.longitude;
    const d = Math.sqrt(dx * dx + dy * dy);
    
    const targetBearing = toDegrees(Math.atan2(dy, dx) - Math.asin(circlingRadius / d));
    var dBearing = (targetBearing - drone.bearing) % 360;

    if (dBearing > 180) dBearing -= 360;
    else if (dBearing < -180) dBearing += 360;

    drone.bearing += dBearing;
}

function move(drone) {
    drone.latitude += Math.cos(toRadians(drone.bearing)) * maxVelocity;
    drone.longitude += Math.sin(toRadians(drone.bearing)) * maxVelocity;
}

function setTarget({ id, longitude, latitude }) {
    const drone = drones.find(drone => drone.id == id);
    drone.targetLongitude = longitude;
    drone.targetLatitude = latitude;
}

module.exports = setTarget;