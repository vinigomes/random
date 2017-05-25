'use strict';

class RandomStringGenerator {

    constructor (size) {
        this._size = size;
    }

    set size(size) {
        this._size = size;
    }

    get size() {
        return this._size;
    }

    generate () {
        const symbols = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
        var randomString = '';
        for (var i = 0; i < this._size; i++) {
            var rnum = Math.floor(Math.random() * symbols.length);
            randomString += symbols.substring(rnum, rnum + 1);
        }
        return randomString;
    }
}

module.exports = RandomStringGenerator;
