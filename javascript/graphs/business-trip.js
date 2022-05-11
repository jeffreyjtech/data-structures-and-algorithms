'use strict';

function businessTrip(graph, locations) {
  let current = locations.shift();
  let totalCost = 0;
  while (locations.length > 0) {
    const neighbors = graph.getNeighbors(current);
    current = locations.shift();
    for (let i = 0; i < neighbors.length; i++) {
      if (neighbors[i].vertex === current) {
        totalCost += neighbors[i].weight;
        break;
      } else if (i+1 === neighbors.length) {
        return [false, 0];
      }
    }
  }
  return [true, totalCost];
}

module.exports = businessTrip;
