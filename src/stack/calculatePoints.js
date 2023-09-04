/**
 * @param {string[]} operations
 * @return {number}
 */
function calculatePoints(operations) {
  const record = [];

  for (const operation of operations) {
    const lastIdx = record.length - 1;
    switch (operation) {
      case "+": {
        const summed = record[lastIdx] + record[lastIdx - 1];
        record.push(summed);
        break;
      }
      case "D": {
        const doubled = record[lastIdx] * 2;
        record.push(doubled);
        break;
      }
      case "C": {
        const lastRecord = record[lastIdx];
        record.pop(lastRecord);
        break;
      }
      default: {
        record.push(Number(operation));
        break;
      }
    }
  }

  console.log(record);

  let result = 0;

  for (const score of record) {
    result += score;
  }

  return result;
}

"C", "D", "+";

console.log(calculatePoints(["5", "2", "C", "D", "+"])); // 30
