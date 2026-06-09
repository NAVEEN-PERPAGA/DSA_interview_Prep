const run = (candidates, target) => {
    const result = [];
    function dfs(startIndex, remaining, current) {
        console.log(startIndex, remaining, current)
        // Found a valid combination
        if (remaining === 0) {
            result.push([...current]);
            return;
        }
        // Exceeded target
        if (remaining < 0) {
            return;
        }
        for (let i = startIndex; i < candidates.length; i++) {
            current.push(candidates[i]);                // choose
            dfs(
                i,                                     // reuse same number
                remaining - candidates[i],
                current
            );
            console.log('backtracked', startIndex)
            current.pop();                             // backtrack
        }
    }
    dfs(0, target, []);
    return result;
}

// [], target - 7
// [2], target - 5
// [2, 2], target - 3
// [2, 2, 2], target - 1
// [2, 2, 2, 2], target - -1
// [2, 2, 2, 6] target - -5
// [2, 2, 3] target - 0, [[2, 2, 3]]
// [2, 3], [2, 6], [2, 7]
// [2], [3], [6], [7], target - 7


console.log(run([2, 3, 6, 7], 7))