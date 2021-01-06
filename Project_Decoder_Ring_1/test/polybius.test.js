const expect = require("chai").expect
const polybius = require("../src/polybius")
describe('polybius', ()=>{
    it('should ignore capitalization', () =>{
        const expected = '42111511343124425344';
        const actual = polybius('javascript');
        expect(actual).to.equal(expected)
    });
    it('output should still be a string', ()=>{
        const expected = polybius('method');
        expect(expected).to.be.a('string');
    });
    it('should encode the message sucessfully', ()=>{
        const expected = '3251131343';
        const actual = polybius('hello');
        expect(actual).to.equal(expected);
    });
    it('returns false if the string minus whitespace is not even', ()=>{
        const actual = polybius('27523', false);
        expect(actual).to.be.false;
    });
    it('decodes 42(i and j) as i/j', ()=>{
        const expected = 'thi/js i/jar';
        const actual = polybius('44324234 421124', false);
        expect(actual).to.equal(expected)
    });
}) 
