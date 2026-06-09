const run = (n, count) => {
    let finalArr = []
    for (let i = 0; i < n.length; i += count) {
        finalArr.push(n.slice(i, i + count))
    }
    return finalArr
}

console.log(run([1, 2, 3, 4, 5, 6], 4))