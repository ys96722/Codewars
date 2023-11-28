/**
 * Given an integral number, determine if it's a square number:
 * @param {number} n 
 * @returns {boolean}
 */
export default function isSquare(n: number): boolean {
    return n >= 0 ? Math.sqrt(n) % 1 === 0 ? true : false : false
  };
  