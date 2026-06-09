const run = (n) => {
    let arr = []
    for (item of n) {
        if (Array.isArray(item)) {
            const flattened_arr = run(item)
            arr = [...arr, ...flattened_arr]
        } else {
            arr.push(item)
        }
    }
    return arr
}

console.log(run([1, [2, [3, 4]], 5]))