const [getDrones, setTarget] = require('../simulator/getDrones');

const root = {
    setTarget: setTarget,
    drones: () => {
        return getDrones();
    },
    base: () => {
        return require('../simulator/baseCoords');
    }
};

module.exports = root;