'use strict';

const myServices = require('../../src/myServices');
const myHelpers = require('../../src/myHelpers');

describe('##### MY APP #####', function () {

    var myApp;

    it('Load the app', function (done) {
        myApp = require('../../src/myApp');
        expect(myApp).to.exist;

        return done();
    });

    describe('main()', function () {

        it('Should return correct result', function (done) {
            var myServices_addition_stub = sinon.stub(myServices, 'addition');
            var myHelpers_doSomething_stub = sinon.stub(myHelpers, 'doSomething');

            myApp.main();

            myServices_addition_stub.yield();
            myHelpers_doSomething_stub.yield(3);

            myServices_addition_stub.restore();
            myHelpers_doSomething_stub.restore();

            return done();
        });

    });

});
