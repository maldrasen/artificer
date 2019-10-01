// describe('Flags', function() {
//
//   afterEach(function() {
//     Flag.deleteAll();
//   });
//
//   it('You can set and check a flag without a value', function() {
//     Flag.set("test.flag")
//     expect(Flag.check('test.flag')).to.be.true;
//     expect(Flag.check('nope.flag')).to.be.false;
//   });
//
//   it('You can set a flag and update it with a new value', function() {
//     expect(Flag.check('test.flag')).to.be.false;
//     Flag.set("test.flag","first value");
//     expect(Flag.fetch('test.flag')).to.equal("first value");
//     Flag.set("test.flag","second value");
//     expect(Flag.fetch('test.flag')).to.equal("second value");
//   });
//
// });
