// 3. Longest Substring Without Repeating Characters
const run = (s) => {
    let longest = 0
    let start = 0
    let lastSeen = {}
    for (let end = 0; end < s.length; end++) {
        const char = s[end]
        if (start <= lastSeen[char]) {
            start = lastSeen[char] + 1
        }
        lastSeen[char] = end
        longest = Math.max(longest, end - start + 1)
    }
    return longest
}

console.log(run("dvdf"))