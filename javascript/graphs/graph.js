'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);

    return vertex;
  }

  addEdge(startVertex, endVertext, weight) {
    const neighbors = this.adjacencyList.get(startVertex);
    neighbors.push(new Edge(endVertext, weight));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  getVertices() {
    return [...this.adjacencyList.keys()];
  }

  size() {
    return [...this.adjacencyList.keys()].length || null;
  }
}

module.exports = Graph;
