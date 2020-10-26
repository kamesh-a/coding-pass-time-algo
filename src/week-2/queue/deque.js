/**
 * Deque is queue but
 * 1. It can add & remove from both the ends.
 */

const { QueueByDLL } = require("./queueWithDoublyLinkedList");

/**
 * We are just re-exporting here because we have implement addition in front/back
 * and removal to both ends with doublyLinkedList of Queue implementation.
 *
 */
moddule.exports = {
  Deque: QueueByDLL,
};
