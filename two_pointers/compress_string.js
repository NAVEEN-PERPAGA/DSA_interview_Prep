
const run = (n) => {
    if (n.length <= 1) return ""
    let count = 1
    let compressedStr = ""
    for (let i = 0; i < n.length; i++) {
        if (n[i] === n[i + 1]) {
            count++
        } else {
            compressedStr += n[i] + count
            count  = 1
        }
    }   
    return compressedStr.length < n.length ? compressedStr : n 
}


console.log(run("aabbbcc"))
