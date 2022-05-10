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
      console.log('Starting iteration', queue);
      current = queue.dequeue();
      let neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if(!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.enqueue(edge.vertex);
        }
      }
      console.log('Ending iteration', queue);
    }
    return visited;
  }

  /*
    depthFirst(startVertex) {
    let stack = new Stack();
    stack.push(startVertex);
    let visited = new Set();
    visited.add(startVertex);

    let current = null;

    console.log(stack.isEmpty());

    while (!stack.isEmpty()) {
      current = stack.pop();
      let neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        console.log(stack);
        visited.add(edge.vertex);
        stack.push(edge.vertex);
      }
    }
    return visited;
  */
}

// let graph1 = new Graph();
// let orange = graph1.addVertex('orange');
// let apple = graph1.addVertex('apple');
// graph1.addEdge(orange, apple);
// let apricot = graph1.addVertex('apricot');
// graph1.addEdge(orange, apricot);
// let fig = graph1.addVertex('fig');
// graph1.addEdge(apricot, fig);
// let cherry = graph1.addVertex('cherry');
// graph1.addEdge(fig, cherry);
// let grape = graph1.addVertex('grape');
// graph1.addEdge(cherry, grape);
// graph1.addEdge(grape, fig);
// let cabbage = graph1.addVertex('cabbage');

// console.log(graph1.breadthFirst(orange));

module.exports = Graph;
