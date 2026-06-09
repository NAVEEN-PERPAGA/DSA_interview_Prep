const run = (n) => {
    const result = []
    const stack = [...n]
    while (stack.length) {
        const next = stack.pop()
        if (Array.isArray(next)) {
            stack.push(...next)
        } else {
            result.push(next)
        }
    }
    return result.reverse()
}

console.log(run([1, [2, [3, 4]], 5]))