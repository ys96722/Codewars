/**
 * Instruction: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
 * @param {string} words 
 * @returns {string}
 */
export function spinWords(words: string): string {
    const splitWords: string[] = words.split(" ")
    return splitWords.map((word: string) => word.length < 5 ? word : word.split("").reverse().join("")).join(" ")
}