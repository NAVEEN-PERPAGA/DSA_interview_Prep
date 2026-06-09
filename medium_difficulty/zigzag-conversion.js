// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

function solution(s, numRows) {
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }
    let rows = new Array(numRows).fill("")
    let reachedBottom = false
    let reachedTop = true
    let rowIndexTracker = 0
    for (let char of s) {
        rows[rowIndexTracker] += char
        if (reachedTop) {
            rowIndexTracker++
        }
        if (reachedBottom) {
            rowIndexTracker--
        }
        if (rowIndexTracker === numRows - 1) {
            reachedBottom = true
            reachedTop = false
        }
        if (rowIndexTracker === 0) {
            reachedTop = true
            reachedBottom = false
        }
    }
    return rows.join('')
}









function ai_solution(s, numRows) {
    // If there's only one row or the string is shorter than rows, return as is
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    // Create an array of strings for each row
    const rows = new Array(numRows).fill("");
    let currentRow = 0;
    let goingDown = false;

    for (let char of s) {
        console.log(1, currentRow, goingDown)
        rows[currentRow] += char;

        // Flip direction if we hit the top or bottom
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move the pointer
        currentRow += goingDown ? 1 : -1;
    }

    // Join all rows together
    return rows.join("");
}

console.log(solution("PAYPALISHIRING", 4))
