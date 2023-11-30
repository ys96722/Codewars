/**
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 * @param {number} n 
 * @returns {number}
 */

export function countBits(n: number): number {
  if (n > 0) {
    const bits = n.toString(2)
    let counter = 0
    for (let i = 0; i < bits.length; i++) {
      if (bits[i] === '1') {
        counter = counter + 1
      }
    }
    return counter
  } else {
    return 0
  }
}