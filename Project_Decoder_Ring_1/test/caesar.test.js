const expect = require("chai").expect
const caesar = require("../src/caesar")
describe('caesar', ()=>{
  it('should return false if shift value is 0, > 25, < -25, or not given', ()=>{
    expect(caesar('false', -26)).to.be.false;
    expect(caesar('false', 26)).to.be.false;
    expect(caesar('false', 0)).to.be.false;
    expect(caesar('false')).to.be.false;
  });
  it('should maintain spaces and other non-alphabetic symbols', ()=>{
    expect(caesar('a !( a', 1)).to.eql('b !( b');
    expect(caesar('a !( a', 1, false)).to.eql('z !( z');
  });
  it('should handle shifts that go past the end of the alphabet', ()=>{
    expect(caesar('z', 3)).to.eql('c');
    expect(caesar('c', 3, false)).to.eql('z');
  });
  it('should handle shifts in the negative direction', ()=>{
    expect(caesar('z', -3)).to.eql('w');
    expect(caesar('c', -3, false)).to.eql('f');
  });
  it('should ignore capitalization', ()=>{
    expect(caesar('AaABbB', 1)).to.eql(caesar('aaabbb', 1));
    expect(caesar('aAabBb', 1, false)).to.eql(caesar('aaabbb', 1, false));
  });
});