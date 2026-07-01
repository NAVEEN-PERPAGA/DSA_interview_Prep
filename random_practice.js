// 34. Find First and Last Position of Element in Sorted Array


const run = (nums, target) => {
    let first = -1
    let last = -1
    if (!nums.length) return [first, last]
    let start = 0
    let final = nums.length - 1
    while (start <= final) {
        let mid = Math.floor((start + final) / 2)
        if (target === nums[mid]) {
            first = mid
        }
        if (target <= nums[mid]) {
            final = mid - 1
        } else {
            start = mid + 1
        }
    }
    if (first === -1) return [first, last]
    start = 0
    final = nums.length - 1
    while (start <= final) {
        let mid = Math.floor((start + final) / 2)
        if (target === nums[mid]) {
            last = mid
        }
        if (target < nums[mid]) {
            final = mid - 1
        } else {
            start = mid + 1
        }
    }
    return [first, last]
}

console.log(run([5, 7, 8, 8, 8, 8, 8, 8, 10], 8))
