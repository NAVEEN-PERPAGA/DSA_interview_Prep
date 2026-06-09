const run = (n) => {
    const l = n.length
    let left = 0
    let right = l - 1
    while (left <= right) {
        console.log(left, right)
        let mid = Math.floor((left + right) / 2)
        if (n[mid] === mid + 1) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left + 1
}

console.log(run([1, 2, 3, 5, 6]))

// start - 0, end - 9, mid - 4
// start - 5, end - 9, mid - 7
// start - 8, end - 9, mid - 8
// start - 9, end - 9, mid - 9 