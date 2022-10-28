
const input1 = [1, 2, 3, 5, 6, 8, 9] // [1, 4, 9, 25, 36, 64, 81]

const input2 = [-2, -1] // [1, 4]

const input3 = [-10, -5, 0, 5, 10] // [0, 25, 25, 100, 100]

const returnSquares = (input) => {

  for (let i = 0; i < input.length; i++) { //O(n)
    input[i] = input[i] * input[i];
  }
  
  input.sort((a, b) => a - b); //O(n log(n))

  return input;
}

console.log(returnSquares(input3))