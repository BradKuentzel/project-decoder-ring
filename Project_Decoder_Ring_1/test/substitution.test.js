const expect = require('chai').expect
const substitution = require('../src/substitution')
describe('substitution', ()=>{
    it('Should return false if the alphabet parameter is not 26 characters long', ()=>{
        const actual = substitution('Thinkful', 'abcdef',);
        expect(actual).to.be.false;
    });
    it('should ignore capitalization', ()=>{
        const expected = 'gsrmpufo';
        const actual = substitution('thinkful', 'zyxwvutsrqponmlkjihgfedcba');
        expect(actual).to.eql(expected);
    });
    it('spaces should be maintained throughout', ()=>{
        const expected = 'svool dliow';
        const actual = substitution('hello world', 'zyxwvutsrqponmlkjihgfedcba');
        expect(actual).to.eql(expected);
    });
    it('should return false if missing input', ()=>{
        const actual = substitution('', 'zyxwvutsrqponmlkjihgfedcba');
        expect(actual).to.be.false
    });
    it('should return false if characters are duplicated in the alphabet param', ()=>{
        const actual = substitution('test', 'abbnnhhsghkesylohgnaziondp');
        expect(actual).to.be.false
    });
    it('it should return false if alphabet is missing', ()=>{
        const actual = substitution('test', '');
        expect(actual).to.be.false
    });

}) 