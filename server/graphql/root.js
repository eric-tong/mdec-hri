import { defaultViewport } from '../../common/defaultViewport';

export const root = {
    drones: () => {
        return {
            id: 1,
            longitude: defaultViewport.longitude, 
            latitude: defaultViewport.latitude,
            bearing: 45
        };
    },
};