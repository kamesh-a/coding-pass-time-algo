/**
 * Give a graph with nodes, find the target is available in graph.
 *
 * graph -> Array<node>
 * node -> Array<neighbour_node>
 */
const { STATE_ENUM, Graph, Node } = require("./graphAdjacentcyList");

function isTargetPresentInGraph(graphEntry, target) {
  if (graphEntry) {
    for (const node of graphEntry.getNodes()) {
      if (node.data === target || dfsVisit(node, target)) {
        console.log(`Present in node tree`, node);
        return true;
      }
    }
    return false;
  }
}

function dfsVisit(root, target) {
  if (root.getState() === STATE_ENUM.UNVISITED) {
    root.setState(STATE_ENUM.VISITING);

    if (root.data === target) {
      return true;
    }

    for (const node of root.getNeighbors()) {
      if (dfsVisit(node, target)) {
        return true;
      }
    }

    root.setState(STATE_ENUM.VISTED);
    return false;
  }
}

const root = new Node(10);
const levelOneChildOne = new Node(21);
const levelOneChildTwo = new Node(22);
root.addNeighbors(levelOneChildOne);
root.addNeighbors(levelOneChildTwo);
const levelTwoChildOne = new Node(31);
const levelTwoChildTwo = new Node(32);
const levelTwoChildThree = new Node(33);
levelOneChildOne.addNeighbors(levelTwoChildOne);
levelOneChildTwo.addNeighbors(levelTwoChildTwo);
levelOneChildTwo.addNeighbors(levelTwoChildThree);
const levelThreeChildOne = new Node(41);
levelTwoChildOne.addNeighbors(levelThreeChildOne);
levelThreeChildOne.addNeighbors(root);

const rootTwo = new Node(13);
const rootTwoLevelOneChildOne = new Node(26);
const rootTwoLevelOneChildTwo = new Node(39);
rootTwo.addNeighbors(rootTwoLevelOneChildOne);
rootTwo.addNeighbors(rootTwoLevelOneChildTwo);

const graph = new Graph();
graph.addNodes(root);
graph.addNodes(rootTwo);

const result = isTargetPresentInGraph(graph, 41);
console.log(`Is target present in graph = ${result}`);
