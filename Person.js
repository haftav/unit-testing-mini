class Person {
    constructor(birthyear) {
        this.age = this.calculateAge(new Date('01/01/' + birthyear))
        this.birthyear = birthyear
    }

    isMillenial() {
        return this.birthyear > 1982;
    }

    isRetiree() {
        return this.age >= 65;
    }

    calculateAge(birthday) {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
}

module.exports = Person;