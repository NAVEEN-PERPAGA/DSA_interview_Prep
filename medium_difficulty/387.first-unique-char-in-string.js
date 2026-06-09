// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"

// Output: 0

// Explanation:

// The character 'l' at index 0 is the first character that does not occur at any other index.

function solution(s) {
    let freqMap = {}
    for (const char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1
    }

    for (const key of Object.keys(freqMap)) {
        if (freqMap[key] === 1) {
            return key
        }
    }
    return -1
}

console.log(solution('leetcode'))