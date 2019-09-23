//
//   describe('Gender', function() {
//     it('is male when male', function() {
//       character.setGender('male');
//       expect(character.isMale).to.equal(true);
//     });
//
//     it('is female when female', function() {
//       character.setGender('female');
//       expect(character.isFemale).to.equal(true);
//     });
//
//     it('is neither male nor female when futa', function() {
//       character.setGender('futa');
//       expect(character.isFemale).to.equal(false);
//       expect(character.isMale).to.equal(false);
//     });
//
//     it('can also set gender with a gender model', function() {
//       character.setGender(Gender.male);
//       expect(character.gender).to.equal(Gender.male);
//     });
//
//     it('throws an error when gender is unrecognized.', function() {
//       expect(function() {
//         character.setGender('goat')
//       }).to.throw('Bad value for gender > goat');
//     });
//   });
//
