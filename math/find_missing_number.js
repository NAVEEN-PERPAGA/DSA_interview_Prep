const run = (n) => {
    const l = n.length
    const expectedSum = (((l + 1) * (l + 1)) / 2)
    const actualSum = n.reduce((acc, curr) => acc + curr, 0)
    return expectedSum - actualSum
}

console.log(run([1, 2, 3, 5, 6]))