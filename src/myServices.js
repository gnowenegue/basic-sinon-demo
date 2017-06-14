'use strict';

const myHelpers = require('./myHelpers');

module.exports = {

    addition(value1, value2, cb) {
        var result = value1 + value2;

        myHelpers.doNothing(function () {
            return cb(result);
        });
    },

};
