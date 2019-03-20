const setTarget = require('../simulator/controller');
const { baseCoords, drones } = require('../simulator/viewModel');

const root = {
    setTarget: setTarget,
    drones: () => drones,
    drone: ({id}) => drones.find(drone => drone.id == id),
    base: () => baseCoords
};

module.exports = root;