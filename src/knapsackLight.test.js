const solution = require('./knapsackLight.js');

test('test 1', () => {
    expect(solution(10, 5, 6, 4, 8)).toBe(10);
});

test('test 2', () => {
    expect(solution(10, 5, 6, 4, 9)).toBe(16);
});

test('test 3', () => {
    expect(solution(5, 3, 7, 4, 6)).toBe(7);
});

test('test 4', () => {
    expect(solution(10, 2, 11, 3, 1)).toBe(0);
});

test('test 5', () => {
    expect(solution(15, 2, 20, 3, 2)).toBe(15);
});

test('test 6', () => {
    expect(solution(2, 5, 3, 4, 5)).toBe(3);
});

test('test 7', () => {
    expect(solution(4, 3, 3, 4, 4)).toBe(4);
});

test('test 8', () => {
    expect(solution(3, 5, 3, 8, 10)).toBe(3);
});
