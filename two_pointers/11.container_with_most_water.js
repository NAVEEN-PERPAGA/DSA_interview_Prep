// 11.  Container With Most Water

const run = (height) => {
    if (height.length <= 1) return 0
    let mostWaterArea = 0
    let startIndex = 0
    let lastIndex = height.length - 1
    while (startIndex < lastIndex) {
        const leftH = height[startIndex]
        const rightH = height[lastIndex]
        const currH = leftH < rightH ? leftH : rightH
        const area = (lastIndex - startIndex) * currH
        if (area > mostWaterArea) mostWaterArea = area
        // smart skipping for very large datasets,
        if (leftH < rightH) {
            while (startIndex < lastIndex && height[startIndex] <= leftH) {
                startIndex++
            }
        } else {
            while (startIndex < lastIndex && height[lastIndex] <= rightH) {
                lastIndex--
            }
        }
    }
    return mostWaterArea
}

console.log(run([1, 8, 6, 2, 5, 4, 8, 3, 7]))