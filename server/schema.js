const graphql = require('graphql');

const schema = graphql.buildSchema(`
  type Mutation {
    setTarget(id: ID, latitude: Float, longitude: Float): String
  }

  type Query {
    base: Base
    drones: [Drone]
  }

  type Base {
    longitude: Float
    latitude: Float
  }

  type Drone {
    id: ID
    longitude: Float
    latitude: Float
    targetLongitude: Float
    targetLatitude: Float
    bearing: Float
  }
`);

module.exports = schema;