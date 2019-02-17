const drones = require('./drones');

function setTarget({ id, longitude, latitude }) {
    drone = drones.find(drone => drone.id == id);
    drone.targetLongitude = longitude;
    drone.targetLatitude = latitude;
}

module.exports = setTarget;