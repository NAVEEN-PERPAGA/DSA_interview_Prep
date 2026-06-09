const run = (n) => {
    let writePointer = 0
    // step:1 move all non-zero elements to the left
    for (let readPointer = 0; readPointer < n.length; readPointer++) {
        if (n[readPointer] !== 0) {
            n[writePointer] = n[readPointer]
            writePointer++
        }
    }
    // step: 2 fill rest of the array with zeroes
    while (writePointer < n.length) {
        n[writePointer] = 0
        writePointer++
    }
    return n
}

console.log(run([1, 0, 2, 0, 3, 0]))