'use strict';

const myHelpers = require('../../src/myHelpers');

describe('##### MY SERVICES #####', function () {

    var myServices;

    it('Load the service', function (done) {
        myServices = require('../../src/myServices');
        expect(myServices).to.exist;

        return done();
    });

    describe('addition()', function () {

        var myHelpers_doNothing_stub;

        beforeEach(function () {
            myHelpers_doNothing_stub = sinon.stub(myHelpers, 'doNothing');
        });

        afterEach(function () {
            myHelpers_doNothing_stub.restore();
        });

        it('Should return correct result', function (done) {
            var callback = sinon.spy();
            myHelpers_doNothing_stub.yields();

            myServices.addition(1, 2, callback);

            expect(callback).to.have.been.calledOnce;
            expect(callback).to.have.been.calledWithExactly(3);

            return done();
        });

        it('Should return incorrect result', function (done) {
            var callback = sinon.spy();
            myHelpers_doNothing_stub.yields();

            myServices.addition(1, 2, callback);

            expect(callback).to.have.been.calledOnce;
            expect(callback).to.not.have.been.calledWithExactly(4);

            return done();
        });

    });

});
