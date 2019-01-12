const defaultCoords = {
    latitude: 51.7520,
    longitude: -1.2577,
}

const root = {
    drones: () => {
        const N = 3;
        const time = new Date().getTime() / 99;
        const radius = 0.003;
        const drones = [];

        for (let i = 0; i < N; i++) {
            const bearing = time % 360 + i * 45;
            const offsets = getOffsets(bearing, radius * (i + 1) / 2);
            drones.push({
                id: i,
                longitude: defaultCoords.longitude + offsets[0],
                latitude: defaultCoords.latitude + offsets[1],
                bearing: bearing
            });
        }

        return drones;
    },
};

function getOffsets(bearing, radius) {
    const offsetX = -radius * Math.cos(bearing / 180 * Math.PI);
    const offsetY = radius * Math.sin(bearing / 180 * Math.PI);
    return [offsetX, offsetY];
}

module.exports = root;