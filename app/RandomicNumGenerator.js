'use strict';

class NumberRandomGenerator {

    constructor(number) {
        this._limitNumber = number;
    }

    set limitNumber(number) {
        this._limitNumber = number;
    }

    get limitNumber() {
        return this._limitNumber;
    }

    generate() {
        return Number(Math.random() * this.limitNumber).toFixed(0);
    }
}

module.exports = NumberRandomGenerator;