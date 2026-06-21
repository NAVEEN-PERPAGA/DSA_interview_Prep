// 22. Generate Parentheses


const run = (n) => {
    const result = []

    function backtrack(current, open, close) {
        if ((open + close) === n * 2) {
            result.push(current)
            return
        }

        if (open < n) {
            backtrack(current + '(', open + 1, close)
        }

        if (close < open) {
            backtrack(current + ')', open, close + 1)
        }
    }

    backtrack("", 0, 0)

    return result
}

console.log(run(3))

// ()(), (())
// 1 0, 1 1, 2 1, 2 2
// 1 0, 2 0, 2 1, 2 2