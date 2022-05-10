'use strict';

const Graph = require('./graph');

let graph1 = new Graph();
let orange = graph1.addVertex('orange');
let apple = graph1.addVertex('apple');
graph1.addEdge(orange, apple);
let apricot = graph1.addVertex('apricot');
graph1.addEdge(orange, apricot);
let fig = graph1.addVertex('fig');
graph1.addEdge(apricot, fig);
let cherry = graph1.addVertex('cherry');
graph1.addEdge(fig, cherry);
let grape = graph1.addVertex('grape');
graph1.addEdge(cherry, grape);
graph1.addEdge(grape, fig);
let cabbage = graph1.addVertex('cabbage');

describe('Testing the breadthFirst traversal method', () => {

  test('Returns correct output on fruit whiteboard example', () => {

    expect(graph1.breadthFirst(orange)).toStrictEqual([orange, apple, apricot, fig, cherry, grape]);
    expect(graph1.breadthFirst(cabbage)).toStrictEqual([cabbage]);
  });
});
