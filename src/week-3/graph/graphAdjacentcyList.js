/**
 * DFS - Depth first search in graphs
 *
 * Nodes
 * Edges
 * Clique : Where all nodes are connected to all other nodes.
 * Island : No node is interconnected.
 *
 * Directed Graph: Edges connect from one node to another in only one direction.
 * UnDirected Graph: An edge can have go both the direction.
 */

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNodes(node) {
    this.nodes.push(node);
  }

  getNodes() {
    return this.nodes;
  }
}

const STATE_ENUM = {
  VISITING: "VISITING",
  UNVISITED: "UNVISITED",
  VISTED: "VISITED",
};

class Node {
  constructor(data) {
    this.neighbors = [];
    this.data = data;
    this.state = STATE_ENUM.UNVISITED;
  }

  setState(nodeState = STATE_ENUM.VISITING) {
    this.state = nodeState;
  }

  getState() {
    return this.state;
  }

  getNeighbors() {
    return this.neighbors;
  }

  addNeighbors(nodeToAdd) {
    return this.neighbors.push(nodeToAdd);
  }

  getData() {
    return this.data;
  }
}

module.exports = {
  Graph,
  Node,
  STATE_ENUM,
};
