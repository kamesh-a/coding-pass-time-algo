/**
 * Give a graph with nodes, find the target is available in graph.
 *
 * graph -> Array<node>
 * node -> Array<neighbour_node>
 *
 * Time Complexity: O(V + E)
 * Space Complexity: O(V) as we are storing state data & state in node itself.
 *
 * Result: https://share.anysnap.app/fBreNcUal2jx
 */
const { STATE_ENUM, Graph, Node } = require("./graphAdjacentcyList");

function isTargetPresentInGraph(graph, target) {
  if (graph && target) {
    for (const rootNode of graph.getNodes()) {
      if (dfsFindTarget(rootNode, target)) {
        console.log(`Target(${target}) found in `, rootNode);
        return true;
      }
    }
    return false;
  }
}

function dfsFindTarget(root, t) {
  if (root && t && root.getState() === STATE_ENUM.UNVISITED) {
    root.setState(STATE_ENUM.VISITING);

    console.log(`checking level : node[${root.data}] === ${t}`);

    if (root.data === t) {
      return true;
    }

    for (const neighborNode of root.getNeighbors()) {
      if (dfsFindTarget(neighborNode, t)) {
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
