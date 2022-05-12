'use strict';

const { Queue } = require('../stack-and-queue/index');

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

  addBidirectionalEdge(startVertex, endVertext, weight) {
    const startNeighbors = this.adjacencyList.get(startVertex);
    startNeighbors.push(new Edge(endVertext, weight));
    const endNeighbors = this.adjacencyList.get(endVertext);
    endNeighbors.push(new Edge(startVertex, weight));
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

  breadthFirst(startVertex) {
    let queue = new Queue();
    queue.enqueue(startVertex);
    let visited = new Set();
    visited.add(startVertex);

    let current = null;

    while (!queue.isEmpty()) {
      current = queue.dequeue();
      let neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.enqueue(edge.vertex);
        }
      }
    }
    return [...visited];
  }

  depthFirst(startVertex) {
    let visited = new Set();
    visited.add(startVertex);

    const traverse = (vertex) => {
      let neighbors = this.getNeighbors(vertex);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          traverse(edge.vertex);
        }
      }
      return vertex;
    };
    traverse(startVertex);
    return [...visited].reverse();
  }
}

module.exports = Graph;
