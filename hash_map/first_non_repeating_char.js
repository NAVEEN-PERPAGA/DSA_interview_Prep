
const run = (n) => {
    const freqMap = {}
    for (char of n) {
        freqMap[char] = (freqMap[char] || 0) + 1
    }
    for (char of n) {
        if (freqMap[char] === 1) return char
    }
    return ""
}


console.log(run("loveleetcode"))
