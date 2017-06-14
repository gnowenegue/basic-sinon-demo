'use strict';

module.exports = {

    doNothing(cb) {
        return cb();
    },

    doSomething(result, cb) {
        if (result > 10) {
            result *= 2;
        } else {
            result /= 2;
        }

        return cb(result);
    }

};
