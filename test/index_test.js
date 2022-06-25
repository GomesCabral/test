const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', ()=>{
  describe('.announceDawn', ()=>{
    it('it returns a rooster call', ()=>{

        //Setup
      const expected = 'cock-a-doodle-doo';

      //Exercise
      const actual = Rooster.announceDawn();

      //Verify
      assert.equal(actual, expected);
    });
  });
  describe('.timeAtDawn', ()=>{
    it('check if return the argument as string', ()=>{

        //Setup 
      const inputNumber = 12;
      const expected = '12';


      //Exercise
      const actual = Rooster.timeAtDawn(inputNumber);

      //Verify
      assert.equal(actual, expected);
    });
    it('throws a range error if passed a number less than 0', ()=>{

        //Setup
        const inputNumber = -1;
        const expected = RangeError;

        //Exercise

        //Verify
        assert.throws(()=>{
            Rooster.timeAtDawn(inputNumber);    //Exercise
        }, expected);
    });

    it('throws a range error if passed a number bigger than 23', ()=>{

        //Setup
        const inputNumber = 24;
        const expected = RangeError;

        //Exercise

        //Verify
        assert.throws(()=>{
            Rooster.timeAtDawn(inputNumber);    //Exercise
        }, expected);
    });
  });
});