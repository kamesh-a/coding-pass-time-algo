/**
 * Print node value at each level
 *
 * Idea:
 *  Two queue, one currentLevel holding the node, another queue holding next level nodes
 *  Once currentLevel is done, we put nextLevel as currentLevel
 *
 */

const { STATE_ENUM, Node } = require("./graphAdjacentcyList");
const { QueueBySLL } = require("../../week-2/queue/queueWithSinglyLinkedList");

function printNodeWithLevel(rootNode) {
  if (rootNode) {
    bfsNodePrintEachLevel(rootNode);
  }
}

function bfsNodePrintEachLevel(root) {
  if (root && root.getState(STATE_ENUM.UNVISITED)) {
    let currentLevel = new QueueBySLL();
    let nextLevel = new QueueBySLL();

    currentLevel.add(root);
    root.setState(STATE_ENUM.VISITING);

    while (!currentLevel.isEmpty()) {
      const node = currentLevel.remove();
      console.log(node.data);

      for (const neighborNode of node.getNeighbors()) {
        if (neighborNode.getState() === STATE_ENUM.UNVISITED) {
          nextLevel.add(neighborNode);
        }
      }

      node.setState(STATE_ENUM.VISTED);

      if (currentLevel.isEmpty()) {
        console.log("---");
        currentLevel = nextLevel;
        nextLevel = new QueueBySLL();
      }
    }
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

printNodeWithLevel(root);
