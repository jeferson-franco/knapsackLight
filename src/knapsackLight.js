function solution(value1, weight1, value2, weight2, maxW) {
    if(weight1 + weight2 <= maxW) {
        return value1 + value2;
    } else if(weight1 <= maxW && weight2 > maxW) {
        return value1;
    } else if(weight2 <= maxW && weight1 > maxW) {
        return value2;
    } else if(weight1 > maxW && weight2 > maxW) {
        return 0;
    } else {
        return value2 > value1 ? value2 : value1;
    }
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test knapsackLight

// alternative solution