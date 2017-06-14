'use strict';

const myServices = require('./myServices');
const myHelpers = require('./myHelpers');

module.exports = {

    main() {
        myServices.addition(1, 2, function (result) {
            myHelpers.doSomething(result, function (result) {
                console.log('##### result', result);
            });
        });
    }

};
