import { defaultViewport } from '../../common/defaultViewport';

export const root = {
    drones: () => {
        const radius = 0.003;
        const time = new Date().getTime() / 100;
        const bearing = time % 360;
        const offsetX = -radius * Math.cos(bearing / 180 * Math.PI);
        const offsetY = radius * Math.sin(bearing / 180 * Math.PI);

        return [{
            id: 1,
            longitude: defaultViewport.longitude + offsetX, 
            latitude: defaultViewport.latitude + offsetY,
            bearing: bearing
        }];
    },
};