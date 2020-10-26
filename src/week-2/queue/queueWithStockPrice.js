/**
 * https://interviewcamp.io/courses/interview-academy/lectures/3312056
 *
 * Stock price along with dates are given each day, find the maximum stack in last K no of days.
 * (24,1) (28,1) (27,2) (29,3) (26,4) (29,5)
 *
 * windowSize = k = 3;
 *
 * ex : (day < ( currentDay - windowDays + 1 ) )
 * - element in queue with Day = 1
 * - incoming day = 5
 * - windowSize = 3
 *
 *  currentDay - windowDays
 *  5 - 3 = 2
 *  but we need 3,4,5 including 5th day so
 *  currentDay - windowDays + 1
 *  5 - 3 + 1 = 3 last possible day which we can have in queue anything below that should be deleted.
 */

const { QueueBySLL } = require("./queueWithSinglyLinkedList");

class HighestStockPriceOnLastKDays {
  constructor(windowSize) {
    this.queue = new QueueBySLL();
    this.windowSize = windowSize;
  }

  add(price, day) {
    if (price && day) {
      const stockPriceInFront = this.queue.peek();
      const prevDay = stockPriceInFront ? stockPriceInFront.getDay() : 0;
      if (prevDay < day - this.windowSize + 1) {
        // we have more items in list we have to remove it.
        const removedNode = this.queue.remove();
        console.log(
          `Removed from queue :(${removedNode.price}, ${removedNode.day})`
        );
      }
      console.log(`Adding to queue :(${price}, ${day})`);
      this.queue.add(new StockPrice(price, day));
    }
  }

  max() {
    let max = 0;
    for (const sInfo of this.queue) {
      const price = sInfo.getPrice();
      if (max < price) {
        max = price;
      }
    }
    return max;
  }

  printInQueue() {
    console.log("----------------------");
    for (const sInfo of this.queue) {
      console.log(`in queue : (${sInfo.price}, ${sInfo.day})`);
    }
  }
}
class StockPrice {
  constructor(price, day) {
    this.price = price;
    this.day = day;
  }

  getPrice() {
    return this.price;
  }

  getDay() {
    return this.day;
  }
}

const queueWithStockPrice = new HighestStockPriceOnLastKDays(3);
queueWithStockPrice.add(32, 1);
queueWithStockPrice.add(45, 1);
queueWithStockPrice.add(37, 2);
queueWithStockPrice.printInQueue();
queueWithStockPrice.add(42, 3);
queueWithStockPrice.printInQueue();
queueWithStockPrice.add(43, 4);
queueWithStockPrice.printInQueue();
// queueWithStockPrice.add(46, 5);
queueWithStockPrice.printInQueue();
console.log(`Max : ${queueWithStockPrice.max()}`);
