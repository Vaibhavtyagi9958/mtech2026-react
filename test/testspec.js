const {add}= require('../src/Add')
const expect = require('chai').expect;

describe('Add function', function(){
        it('should return the sum of two number', function(){
            const result = add(2, 3);
            expect(result).to.equal(5);

        });

        it('should return a number', function(){
            const result = add(2, 3);
            expect(result).to.be.a('number');
        });
    }
);

const {subtract}= require('../src/Add')
// const expect = require('chai').expect;
describe('Subtract function', function(){
        it('should return the Subtract of two number', function(){
            const result = subtract(2, 3);
            expect(result).to.equal(-1);

        });

        it('should return a number', function(){
            const result = subtract(2, 3);
            expect(result).to.be.a('number');
        });
    }
);