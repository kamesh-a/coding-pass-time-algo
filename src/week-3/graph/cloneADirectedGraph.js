/**
 * Cloning a Directed Graph with DFS.
 */

const { Node, STATE_ENUM } = require("./graphAdjacentcyList");
const { printGraph } = require("./recurseAndPrintGraphs");

function cloneGraph(rooNode) {
  if (rooNode) {
    const cache = new Map();
    const rootNodeCopy = new Node(rooNode.getData());
    cache.set(rooNode, rootNodeCopy);
    dfsVisit(rooNode, cache);
    return rootNodeCopy;
  }
}

function dfsVisit(rootNode, cache) {
  if (rootNode && cache) {
    rootNode.setState(STATE_ENUM.VISITING);
    console.log(`R v=[${rootNode.data}], s=[${rootNode.state}]`);

    for (const neighborNode of rootNode.getNeighbors()) {
      if (!cache.has(neighborNode)) {
        cache.set(neighborNode, new Node(neighborNode.getData()));
      }

      console.log(`N v=[${neighborNode.data}], s=[${neighborNode.state}]`);

      const rootNodeCopy = cache.get(rootNode);
      const neighborNodeCopy = cache.get(neighborNode);

      rootNodeCopy.addNeighbors(neighborNodeCopy);

      if (neighborNode.getState() === STATE_ENUM.UNVISITED) {
        dfsVisit(neighborNode, cache);
      } else {
        console.log(
          `Break v=[${neighborNode.data}], s=[${neighborNode.state}]`
        );
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
levelOneChildOne.addNeighbors(levelTwoChildOne);
levelOneChildTwo.addNeighbors(levelTwoChildTwo);
levelOneChildTwo.addNeighbors(levelTwoChildThree);
const levelThreeChildOne = new Node(41);
levelTwoChildOne.addNeighbors(levelThreeChildOne);
levelThreeChildOne.addNeighbors(root);

/**
 * 10 (root) -> (21, 22) ( level-1 )
 *               |   |--> (32, 33) ( level-2 )
 *               |
 *               |-->(31) ( level-2 ) --> (41) ( level-3 ) --> (root)
 */

const copiedNode = cloneGraph(root);
printGraph(copiedNode);
