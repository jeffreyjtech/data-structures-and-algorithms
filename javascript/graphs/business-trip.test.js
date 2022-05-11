'use strict';

const businessTrip = require('./business-trip');
const Graph = require('./graph');

describe('Testing businessTrip function', () => {
  let locationGraph = new Graph();
  let orangeCounty = locationGraph.addVertex('orange county');
  let appleton = locationGraph.addVertex('appleton');
  let apricotVilla = locationGraph.addVertex('apricot villa');
  let cabbageFarms = locationGraph.addVertex('cabbage farms');
  let cherryLane = locationGraph.addVertex('cherry lane');
  let figForest = locationGraph.addVertex('fig forest');
  let grapeCity = locationGraph.addVertex('grape city');

  locationGraph.addBidirectionalEdge(orangeCounty, appleton, 8);
  locationGraph.addBidirectionalEdge(appleton, cabbageFarms, 12);
  locationGraph.addBidirectionalEdge(orangeCounty, apricotVilla, 9);
  locationGraph.addBidirectionalEdge(apricotVilla, figForest, 17);
  locationGraph.addBidirectionalEdge(figForest, grapeCity, 20);
  locationGraph.addBidirectionalEdge(figForest, cherryLane, 6);
  locationGraph.addBidirectionalEdge(grapeCity, cherryLane, 25);
  locationGraph.addBidirectionalEdge(cherryLane, cabbageFarms, 4);

  it('Returns true & correct cost for a "happy path" input', () => {
    let results = businessTrip(locationGraph, [orangeCounty, appleton, cabbageFarms]);

    expect(results).toStrictEqual([true, 20]);
  });

  it('Returns false & 0 for a failing location list', () => {
    let results = businessTrip(locationGraph, [orangeCounty, appleton, grapeCity]);

    expect(results).toStrictEqual([false, 0]);
  });

  it('Returns true & correct cost for a list with a loop', () => {
    let results = businessTrip(locationGraph, [figForest, cherryLane, grapeCity, figForest, apricotVilla]);

    expect(results).toStrictEqual([true, 68]);
  });
});
