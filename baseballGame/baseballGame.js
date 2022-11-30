// Leetcode problem #682
// https://leetcode.com/problems/baseball-game/

const { Stack } = require('../dataStructures/Stack')

const addToScoreCard = (operation, scorecard) => {
    const numRe = /\d+/
    if(operation.match(numRe)) {
        scorecard.push(Number(operation))
    } else if (operation === 'C') {
        scorecard.pop()
    } else if (operation === '+') {
        const lastScore = scorecard.pop()
        const lastLastScore = scorecard.peek()
        scorecard.push(lastScore)
        scorecard.push(lastScore + lastLastScore)
    } else if (operation === 'D') {
        scorecard.push(scorecard.peek() * 2)
    }
}

const calculateScore = scorecard => {
    let results = 0

    while(scorecard.size() > 0) {
        results += scorecard.pop()
    }

    return results
}

var calPoints = function(operations) {
    const scorecard = new Stack()

    for(let operation of operations) {
        addToScoreCard(operation, scorecard)
    }

    return calculateScore(scorecard)
};

module.exports = {
    calPoints: calPoints
}