# Graphs

A graph is a non-linear data structure that can be looked at as a collection of vertices (or vertices) potentially connected by line segments named edges.

## Challenge

The challenge for this assignment was to implement a `Graph` class:

- The graph should be represented as an adjacency list
- The graph should have methods for adding a node, adding an edge, getting all nodes, getting a node's neighbors, and reading the size (as measured by the quantity of nodes) of the graph.

## Approach & Efficiency

I took an approach based very much on what we were shown during the Graphs lecture. This includes using a `Map` to store the adjacency list.

A result of this is that the efficiency of the methods I implemented is contingent on the performance of the `Map` object. Inferring from requirements in the 2nd paragraph of [the ECMA spec for maps](https://262.ecma-international.org/6.0/#sec-map-objects), the time efficiency should be "sublinear", which I assume means O(1) for all the methods I used. The space efficiency should be O(1) as well.

## API

- `addVertex`
  - Arguments: value
  - Returns: The added vertex
  - Add a vertex to the graph
- `addEdge`
  - Arguments: 2 vertices to be connected by the edge, weight
  - Returns: nothing
  - Adds a new edge between two vertices in the graph with the weight
  - Both vertices should already be in the Graph
- `getVertices`
  - Arguments: none
  - Returns all of the vertices in the graph as a collection (set, list, or similar)
- `getNeighbors`
  - Arguments: vertex
  - Returns a collection of edges connected to the given vertex
  - Include the weight of the connection in the returned collection
- `size`
  - Arguments: none
  - Returns the total number of vertices in the graph
