const root = {
    drones: () => {
        return require('../simulator/getDrones')();
    },
    base: () => {
        return require('../simulator/baseCoords');
    }
};

module.exports = root;