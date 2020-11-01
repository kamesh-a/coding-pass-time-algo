/**
 * BFS
 *  - checks it level one by one
 *  - meaning lvl1, lvl2, lvl3
 *  - When BFS is needed queue should be used.
 *
 *  Result: https://share.anysnap.app/fBreNcUal2jx
 */

const { QueueBySLL } = require("../../week-2/queue/queueWithSinglyLinkedList");
const { Graph, STATE_ENUM, Node } = require("./graphAdjacentcyList");

function isTargetPresentInGraph(graph, target) {
  if (graph && target) {
    for (const rootNode of graph.getNodes()) {
      if (bfsFindTarget(rootNode, target)) {
        console.log(`Target is present in node tree`, rootNode);
        return true;
      }
    }
  }
}
function bfsFindTarget(root, t) {
  if (root && root.getState() === STATE_ENUM.UNVISITED && t) {
    const queue = new QueueBySLL();
    queue.add(root);
    root.setState(STATE_ENUM.VISITING);

    while (!queue.isEmpty()) {
      const node = queue.remove();
      console.log(`node[${node.data}] === ${t}`);
      if (node.data === t) {
        return true;
      }

      for (const neighborNode of node.getNeighbors()) {
        if (neighborNode.getState() === STATE_ENUM.UNVISITED) {
          queue.add(neighborNode);
          neighborNode.setState(STATE_ENUM.VISITING);
        }
      }
    }

    root.setState(STATE_ENUM.VISTED);
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
const levelTwoChildFour = new Node(34);
levelOneChildOne.addNeighbors(levelTwoChildOne);
levelOneChildOne.addNeighbors(levelTwoChildFour);
levelOneChildTwo.addNeighbors(levelTwoChildTwo);
levelOneChildTwo.addNeighbors(levelTwoChildThree);
const levelThreeChildOne = new Node(41);
levelTwoChildOne.addNeighbors(levelThreeChildOne);
levelThreeChildOne.addNeighbors(root);

/**
 * 10 (root) -> (21, 22) ( level-1 )
 *               |   |--> (32, 33) ( level-2 )
 *               |
 *               |-->(31, 34) ( level-2 )
 *                     |
 *                     |
 *                     |--> (41) ( level-3 ) --> (root)
 */

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
