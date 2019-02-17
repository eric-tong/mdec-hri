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

function getDrones() {
    drones.forEach(rotateToTarget);
    drones.forEach(move);
    return drones;
}

function setTarget({ id, longitude, latitude }) {
    drone = drones.find(drone => drone.id == id);
    drone.targetLongitude = longitude;
    drone.targetLatitude = latitude;
}

function rotateToTarget(drone) {
    dx = drone.targetLatitude - drone.latitude;
    dy = drone.targetLongitude - drone.longitude;
    drone.bearing = Math.atan2(dx, dy) / Math.PI * 180;
}

const velocity = 0.001;

function move(drone) {
    drone.latitude += Math.cos(drone.bearing / 180 * Math.PI) * velocity;
    drone.longitude += Math.sin(drone.bearing / 180 * Math.PI) * velocity;
}

module.exports = [getDrones, setTarget];