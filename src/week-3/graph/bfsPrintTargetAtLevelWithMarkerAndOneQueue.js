/**
 * BFS
 *
 * Idea: Have one queue and marker to make use of level endings.
 *
 *
 * If queue is having item, and we seen mark as current node
 * we can think the neighbor nodes are already added to the queue.
 * Back -> [  M| 21 | 20 | M | root] -> front
 */

const { STATE_ENUM, Node } = require("./graphAdjacentcyList");
const { QueueBySLL } = require("../../week-2/queue/queueWithSinglyLinkedList");

function printNodeWithLevel(root) {
  if (root && root.getState() === STATE_ENUM.UNVISITED) {
    const marker = new Node("markerNode");
    const queue = new QueueBySLL();

    queue.add(root);
    queue.add(marker);

    while (!queue.isEmpty()) {
      const current = queue.remove();
      current.setState(STATE_ENUM.VISITING);
      if (current !== marker) {
        console.log(current.data);
      }

      if (current === marker) {
        if (!queue.isEmpty()) {
          // if queue is having item, and we seen mark as current node
          // we can think the neighbor nodes are already added to the queue.
          // Back -> [  M| 21 | 20 | M | root] -> front
          queue.add(marker);
        }
        console.log("---");
        continue;
      }

      for (const neighborNode of current.getNeighbors()) {
        if (neighborNode.getState() === STATE_ENUM.UNVISITED) {
          queue.add(neighborNode);
        }
      }

      current.setState(STATE_ENUM.VISTED);
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
