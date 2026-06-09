
const run = (n) => {
    if (!n) return ""
    let capitalize = true
    let newStr = ""
    for (let i = 0; i < n.length; i++) {
        const char = n[i]
        if (char === " ") {
            newStr += char
            capitalize = true
        } else if (capitalize) {
            newStr += char.toUpperCase()
            capitalize = false
        } else {
            newStr += char
        }
    }
    return newStr
}


console.log(run("hello world is here"))
