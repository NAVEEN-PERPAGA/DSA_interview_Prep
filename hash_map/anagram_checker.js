
const run = (str1, str2) => {
    if (str1.length !== str2.length) return false
    if (str1.length === 0) return false
    const charMap = {}

    for (char of str1) {
        charMap[char] = (charMap[char] || 0) + 1
    }
    for (char of str2) {
        if (!charMap[char]) {
            return false
        }
        charMap[char]--
    }
    return true
}


console.log(run("listenn", "silentt"))
