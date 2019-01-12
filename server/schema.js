const graphql = require('graphql');

const schema = graphql.buildSchema(`
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

module.exports = schema;