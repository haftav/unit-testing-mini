let Person = require('./Person');

//arrange, act, assert

test('test person class', () => {
    // arrange
    let dan = new Person(1987);
    // act
    let result = dan.isMillenial();
    // assert
    expect(result).toBeTruthy();
})

test('test someone who is not born yet', () => {
    let baby = new Person(2020);

    let result = baby.isRetiree();

    expect(result).toBeFalsy();
})

test('test if old person is retiree', () => {
    let oldPerson = new Person(1940);

    let result = oldPerson.isRetiree();

    expect(result).toBeTruthy();
})