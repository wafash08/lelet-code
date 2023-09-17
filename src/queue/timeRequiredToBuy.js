/**
 *
 * @param {number[]} tickets number of tickets
 * @param {number} k position of person who wants to buy
 * @returns {number} time required by person for buying the ticket
 */
export function timeRequiredToBuy(tickets, k) {
  let count = 0;
  let tracker = 0;
  while (tickets[k] !== 0) {
    if (tracker === tickets.length) {
      tracker = 0;
    }
    if (tickets[tracker] === 0) {
      tracker++;
      continue;
    }
    tickets[tracker]--;
    count++;
    tracker++;
  }
  return count;
}

// todo
// implement with queue
// tickets = [2, 3, 2], position k = 2
// output = 6
