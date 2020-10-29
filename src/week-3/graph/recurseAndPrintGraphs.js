const { STATE_ENUM } = require("./graphAdjacentcyList");

function printGraph(rootNode) {
  if (rootNode) {
    const level = 0;
    console.log(`---------------------------------`);
    printRecurse(rootNode, level);
  }
}

function printRecurse(rootNode, level) {
  console.log(`level-${level} : ${rootNode.data}`);
  while (
    rootNode.getNeighbors().length &&
    rootNode.getState() !== STATE_ENUM.VISTED
  ) {
    rootNode.setState(STATE_ENUM.VISTED);

    level++;

    for (const node of rootNode.getNeighbors()) {
      printRecurse(node, level);
    }
  }
}

module.exports = {
  printGraph,
};
