// 16. 3Sum Closest


const run = (nums, target) => {
    let closest = nums[0] + nums[1] + nums[2]
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1
        let right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === target) {
                return sum
            }
            if (Math.abs(target - sum) < Math.abs(target - closest)) {
                diff = Math.abs(target - sum)
                closest = sum
            }
            if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }
    return closest
}

console.log(run([-4, -1, 1, 2], 2))

// -4, -1, 1, 2