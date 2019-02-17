const setTarget = require('../simulator/controller');
const { baseCoords, drones } = require('../simulator/viewModel');

const root = {
    setTarget: setTarget,
    drones: () => drones,
    base: () => baseCoords
};

module.exports = root;