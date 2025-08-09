/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let sumTester = 0
    let answers = []
    for (let i = 0; i < candidates.length; i++) {

        let char = candidates[i]

        if (char > target) {
            candidates.splice(i, 1)
        } else {
            sumTester += char
            if (sumTester === target) {
                answers.push(char)
            } else {
                sumTester += char
                if (sumTester === target) {
                    answers.push(char)
                }
            }
        }

    }
    return answers
};

console.log(combinationSum2([2,3,6,7], 5))

// this is fucked up