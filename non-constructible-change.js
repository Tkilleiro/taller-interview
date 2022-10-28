// For example, if you’re given coins = [1, 2, 5], the minimum amount of change that you can’t create is 4. If you’re given no coins, the minimum amount of change that you can’t create is 1.
const input0 = [1, 2, 5]; // 4

const input1 = [5, 7, 1, 1, 2, 3, 22]; // 20
const input2 = [1, 1, 1, 1, 1]; // 6
const input3 = [1, 5, 1, 1, 1, 10, 15, 20, 100]; // 55

const getMinimalAmount = (coins) => {
  //validation on the input
  coins.sort((a, b) => a - b); //O(n log(n))

  let sum = 1;

  for (let i = 0; i < coins.length; i++) { //O(n)
    if (coins[i] > sum) {
      return sum;
    }
    sum += coins[i];
  }
  return sum;
};
