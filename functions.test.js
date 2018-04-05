let fns = require('./functions');

test('returnTwo should return 2', () => {
    expect(fns.returnTwo()).toBe(2);
})

test("greeting('James') should return 'Hello, James.'", () => {
    expect(fns.greeting('James')).toBe('Hello, James.');
})

test("greeting('Jill') should return 'Hello, Jill.'", () => {
    expect(fns.greeting('Jill')).toBe('Hello, Jill.');
})

test("add(1, 2) should return 3.", () => {
    expect(fns.add(1, 2)).toBe(3);
})

test("add(5, 9) should return 14.", () => {
    expect(fns.add(5, 9)).toBe(14);
})

describe('Math functions', () => {
    test('expect multiply will multiply two numbers', () => {
        expect(fns.multiply(2, 4)).toBe(8);
    })

    test('expect subtract to subtract numbers', () => {
        expect(fns.subtract(10, 5)).toBe(5);
    })
})

