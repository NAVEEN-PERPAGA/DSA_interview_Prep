// 12. Integer to Roman


const better_run = (num) => {
    let roman = ''
    const values = [
        { val: 1000, letter: 'M' },
        { val: 900, letter: 'CM' },
        { val: 500, letter: 'D' },
        { val: 400, letter: 'CD' },
        { val: 100, letter: 'C' },
        { val: 90, letter: 'XC' },
        { val: 50, letter: 'L' },
        { val: 40, letter: 'XL' },
        { val: 10, letter: 'X' },
        { val: 9, letter: 'IX' },
        { val: 5, letter: 'V' },
        { val: 4, letter: 'IV' },
        { val: 1, letter: 'I' }
    ]

    for (let i = 0; i < values.length; i++) {
        while (num >= values[i].val) {
            roman += values[i].letter
            num -= values[i].val
        }
    }
    return roman
}

const run = (num) => {
    num = num.toString()
    let roman = ''
    const roman_hash = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    for (let i = 0; i < num.length; i++) {
        const char = num[i]
        const keys = Object.keys(roman_hash).map(Number)
        let zeroesToBeAdded = num.length - i - 1
        let zeroes = Array(zeroesToBeAdded).fill('0').reduce((acc, curr) => acc + curr, '')
        let finalNumber = Number(char + zeroes)
        if (roman_hash[finalNumber]) {
            roman += roman_hash[finalNumber]
        } else {
            let romanChar = ''
            while (finalNumber > 0) {
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i]
                    if (finalNumber > keys[keys.length - 1]) {
                        while (finalNumber >= keys[keys.length - 1]) {
                            finalNumber -= keys[keys.length - 1]
                            romanChar += roman_hash[keys[keys.length - 1]]
                        }
                        break;
                    }
                    if (key > finalNumber) {
                        if (char === '4' || char === '9') {
                            finalNumber = key - finalNumber
                            romanChar += roman_hash[key]
                        } else {
                            finalNumber -= keys[i - 1]
                            romanChar += roman_hash[keys[i - 1]]
                        }
                        break;
                    } else if (key === finalNumber) {
                        finalNumber = key - finalNumber
                        if (char === '4' || char === '9') {
                            romanChar = `${roman_hash[key]}${romanChar}`
                        } else {
                            romanChar += roman_hash[key]
                        }
                        break;
                    }
                }
            }
            roman += romanChar
        }
    }
    return roman
}

// 40, 50 - 10, XL
// 8, 8 - 5 = 3, 3 - 1 = 2, 2 - 1 = 1, 1 - 1 = 0 VIII 
// 'LIV'
// console.log(run(3749)) 
console.log(better_run(3749))