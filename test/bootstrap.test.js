global.chai = require('chai');
global.expect = chai.expect;
global.should = chai.should();
global.assert = chai.assert;
global.sinon = require('sinon');
global.sinonChai = require('sinon-chai');

chai.use(sinonChai);
