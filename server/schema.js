const graphql = require('graphql');

const schema = graphql.buildSchema(`
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
    bearing: Float
  }
`);

module.exports = schema;