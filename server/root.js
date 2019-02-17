const setTarget = require('../simulator/controller');

const root = {
    setTarget: setTarget,
    drones: () => {
        return require('../simulator/drones');
    },
    base: () => {
        return require('../simulator/baseCoords');
    }
};

module.exports = root;