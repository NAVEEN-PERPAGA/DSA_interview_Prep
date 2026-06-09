const solution = (arr) => {
    const char_hash = {}
    for (num of arr) {
        console.log(char_hash)
        if (!char_hash[num]) {
            char_hash[num] = 1
        } else {
            return true
        }
    }
    return false
}

const array = [1, 2, 3, 1]
console.log(solution(array))