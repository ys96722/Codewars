/**
 * Given an array of integers, find the one that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 * @param {number} xs array of numbers to find odd numbers in
 * @return {number}
 */
export const findOdd = (xs: number[]): number => {
    const map: {[entry: number]: number} = {}
    xs.forEach((currentNumber: number) => {
        if (map[currentNumber]) {
            map[currentNumber] = map[currentNumber] + 1
        } else {
            map[currentNumber] = 1
        }
    })
    for (const [key, value] of Object.entries(map)) {
        if (value % 2 !== 0) {
            return Number(key)
        }
    }
    return 0;
  };
  