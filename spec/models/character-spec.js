// describe('Character', function() {
//   let character;
//
//   it('can be persisted in the database', function(done) {
//     let jada = new Character({
//       role: 'temp',
//       preName: 'The',
//       givenName: 'Jada',
//       postName: 'Fire',
//       gender: 'futa',
//       stamina: 100,
//       race: 'elf',
//       physical: 10,
//       mental: 11,
//       personal: 12,
//       magical: 13 });
//
//     jada.save((id) => {
//       Character.load(id, (jada) => {
//         expect(jada.role).to.equal('temp');
//         expect(jada.preName).to.equal('The');
//         expect(jada.givenName).to.equal('Jada');
//         expect(jada.postName).to.equal('Fire');
//         expect(jada.fullName).to.equal('The Jada Fire');
//         expect(jada.name).to.equal('The Jada Fire');
//         expect(jada.getGivenName(true)).to.equal("Jada's");
//         expect(jada.gender).to.equal(Gender.futa);
//         expect(jada.stamina).to.equal(100);
//         expect(jada.race.code).to.equal('elf');
//         expect(jada.physical).to.equal(10);
//         expect(jada.mental).to.equal(11);
//         expect(jada.personal).to.equal(12);
//         expect(jada.magical).to.equal(13);
//         done();
//       });
//     });
//   });
//
//   describe('Basic Attributes', function() {
//     beforeEach(function() {
//       character = new Character({ givenName:'Jada', postName:'Fire', race:'elf' });
//     });
//
//     it('can set and retrieve role', function() {
//       character.setRole('temp');
//       expect(character.role).to.equal('temp')
//     });
//
//     it('is the player when it has the player role', function() {
//       character.setRole('player');
//       expect(character.isPlayer).to.equal(true);
//     });
//
//     it('throws an error when role is unrecognized.', function() {
//       expect(function() {
//         character.setRole('bad');
//       }).to.throw('Bad value for role > bad');
//     });
//
//     it('gets race as model', function() {
//       expect(character.race.code).to.equal('elf');
//     });
//
//     it('gets profession as model', function() {
//       character.setProfession('maid');
//       expect(character.profession.code).to.equal('maid');
//     })
//
//     it('gets district as model', function() {
//       character.setDistrict('olendalia');
//       expect(character.district.code).to.equal('olendalia');
//     })
//
//     it('sets given name', function() {
//       character.setGivenName('Synder');
//       expect(character.getGivenName()).to.equal('Synder');
//     });
//
//     it('gets possessive given name', function() {
//       expect(character.getGivenName('p')).to.equal("Jada's")
//     });
//
//     it('sets preName', function() {
//       character.setPreName('Fuck me');
//       expect(character.name).to.equal('Fuck me Jada Fire')
//     });
//
//     it('sets postName', function() {
//       character.setPostName('Fucks');
//       expect(character.name).to.equal('Jada Fucks')
//     });
//
//     it('sets attributes', function() {
//       character.setPhysical(10);
//       character.setMental(11);
//       character.setPersonal(12);
//       character.setMagical(13);
//       character.setStamina(14);
//
//       expect(character.physical).to.equal(10);
//       expect(character.mental).to.equal(11);
//       expect(character.personal).to.equal(12);
//       expect(character.magical).to.equal(13);
//       expect(character.stamina).to.equal(14);
//     });
//   });
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
//   describe('Orgasms', function() {
//     beforeEach(function() {
//       character = new Character({});
//     });
//
//     it('has a baseline orgasm threshold', function() {
//       expect(character.getOrgasmThreshold()).to.equal(1000);
//     });
//
//     it('has a normal baseline orgasm state', function() {
//       expect(character.getOrgasmState()).to.equal('normal');
//     });
//
//     it('has 0 orgasms to start', function() {
//       expect(character.getOrgasmCount()).to.equal(0);
//     });
//
//     it('has baseline orgasm multiplier', function() {
//       expect(character.getOrgasmMultiplier()).to.equal(100);
//     });
//   });
//
//   describe('Slaves', function() {
//     it('can set a master', function(done) {
//       CharacterHelper.withTestCharacter({ givenName:"Master" }, (master) => {
//         CharacterHelper.withTestCharacter({ givenName:"Slave" }, (slave) => {
//           master.setDistrict('olendalia');
//           slave.setMaster(master);
//
//           expect(slave.name).to.equal("Master's Slave");
//           expect(slave.master_id).to.equal(master.id);
//           expect(slave.district.code).to.equal('olendalia');
//
//           done();
//         });
//       });
//     });
//
//     it('can unset a master', function(done) {
//       CharacterHelper.withTestCharacter({ givenName:"Master" }, (master) => {
//         CharacterHelper.withTestCharacter({ givenName:"Slave" }, (slave) => {
//           master.setDistrict('olendalia');
//           slave.setMaster(master);
//           slave.setMaster(null);
//
//           expect(slave.name).to.equal("Lost Slave");
//           expect(slave.master_id).to.equal(null);
//           expect(slave.district.code).to.equal('olendalia');
//
//           done();
//         });
//       });
//     });
//   });
//
// });
