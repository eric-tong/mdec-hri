import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Query {
    drones: [Drone]
  }

  type Drone {
    id: ID
    longitude: Float
    latitude: Float
    bearing: Float
  }
`);