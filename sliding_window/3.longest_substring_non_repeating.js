// 3. Longest Substring Without Repeating Characters
const run = (s) => {
    if (s.length === 1) return 1
    if (s.length === 0) return 0
    let longest = 1
    let startIdx = 0
    let lastIdx = 0
    let seen = {}
    while (lastIdx < s.length) {
        const char = s[lastIdx]
        if (seen[char]) {
            const startChar = s[startIdx]
            if (startChar !== char) {
                startIdx++
                seen[startChar] = false
            } else {
                startIdx++
                lastIdx++
            }
        } else {
            seen[char] = true
            lastIdx++
            const subStrLength = lastIdx - startIdx
            if (subStrLength > longest) {
                longest = subStrLength
            }
        }
        // console.log(seen)
    }
    return longest
}

console.log(run("pwwkew"))