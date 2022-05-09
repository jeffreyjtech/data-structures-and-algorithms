'use strict';

const Graph = require('./graph');

let testGraph = new Graph();
let firstVertex;
let firstNeighbor;
let secondNeighbor;
let secondVertex;

describe('Testing the graph class', () => {

  test('The size method returns null if graph is empty', () => {
    expect(testGraph.size()).toBe(null);
  });

  it('Can add a vertex', () => {
    firstVertex = testGraph.addVertex(10);

    expect(testGraph.getVertices()).toContain(firstVertex);
  });

  test('The size method returns its correct size with only 1 vertex', () => {
    expect(testGraph.size()).toBe(1);
  });

  it('Can add an edge', () => {
    firstNeighbor = testGraph.addVertex(20);

    testGraph.addEdge(firstVertex, firstNeighbor, 1);
    const [firstNeighborEdge] = testGraph.getNeighbors(firstVertex);

    expect(firstNeighborEdge.vertex).toStrictEqual(firstNeighbor);
  });

  test('The size method returns its correct size with only 2 vertices and 1 edge', () => {
    expect(testGraph.size()).toBe(2);
  });

  it('Can retrieve a collection of vertices', () => {
    expect(testGraph.getVertices()).toContain(firstVertex, firstNeighbor);
  });

  it('Can retrieve a vertex\'s neighbors', () => {
    secondNeighbor = testGraph.addVertex(30);
    testGraph.addEdge(firstVertex, secondNeighbor, 2);

    const [firstNeighborEdge, secondNeighborEdge] = testGraph.getNeighbors(firstVertex);

    expect(firstNeighborEdge.vertex).toStrictEqual(firstNeighbor);
    expect(secondNeighborEdge.vertex).toStrictEqual(secondNeighbor);
  });

  test('Retrieved edges have a weight', () => {
    const [firstNeighborEdge] = testGraph.getNeighbors(firstVertex);

    expect(firstNeighborEdge.weight).toBe(1);
  });

  test('The size method returns its correct size with multiple edges and vertices', () => {
    secondVertex = testGraph.addVertex(45);
    testGraph.addEdge(secondNeighbor, secondVertex, 10);
    expect(testGraph.size()).toBe(4);
  });
});
