'use strict';

const Graph = require('./graph');

describe('Testing the depthFirst traversal method', () => {
  test('Returns correct output on fruit whiteboard example', () => {
    let graph = new Graph();
    let orange = graph.addVertex('orange');
    let apple = graph.addVertex('apple');
    graph.addEdge(orange, apple);
    let apricot = graph.addVertex('apricot');
    graph.addEdge(orange, apricot);
    let fig = graph.addVertex('fig');
    graph.addEdge(apricot, fig);
    let cherry = graph.addVertex('cherry');
    graph.addEdge(fig, cherry);
    let grape = graph.addVertex('grape');
    graph.addEdge(cherry, grape);
    graph.addEdge(grape, fig);
    let cabbage = graph.addVertex('cabbage');

    console.log(graph.depthFirst(orange));

    expect(graph.depthFirst(orange)).toStrictEqual([
      grape,
      cherry,
      fig,
      apricot,
      apple,
      orange,
    ]);
    expect(graph.depthFirst(cabbage)).toStrictEqual([cabbage]);
  });

  test('Returns correct output on a single vertex graph', () => {
    let graph = new Graph();
    let orange = graph.addVertex('orange');

    expect(graph.depthFirst(orange)).toStrictEqual([orange]);
  });

  test('Returns correct output on a complete, cyclical graph (all vertices connect to all other vertices)', () => {
    let graph = new Graph();
    let orange = graph.addVertex('orange');
    let apple = graph.addVertex('apple');
    let apricot = graph.addVertex('apricot');
    graph.addEdge(orange, apple);
    graph.addEdge(apple, apricot);
    graph.addEdge(orange, apricot);

    graph.addEdge(apple, orange);
    graph.addEdge(orange, apricot);
    graph.addEdge(apricot, apple);

    expect(graph.depthFirst(orange)).toStrictEqual([apricot, apple, orange]);
  });
});
