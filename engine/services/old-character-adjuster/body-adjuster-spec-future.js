// TODO: Moved into the adjuster
// it('uses the light skin flag', function() {
//   let character = CharacterFactory.build({ body:{ skinColor:'red', 'light-skin':true }});
//   expect(character.getBody().skinShade).to.equal(5);
// });

// TODO: Moved into the adjuster
// it('uses the dark skin flag', function() {
//   let character = CharacterFactory.build({ body:{ skinColor:'red', 'dark-skin':true }});
//   expect(character.getBody().skinShade).to.equal(1);
// });
//
//   it('uses the short flag in the options', function() {
//     let character = CharacterFactory.build({ race:'elf', gender:'female', body:{ short:true }});
//     Configuration.metric = true;
//     expect(character.getBody().convertedHeight).to.equal(150);
//
//     Configuration.metric = false;
//     expect(character.getBody().convertedHeight).to.equal(59);
//   });
//
//   it('uses the tall flag in the options', function() {
//     let character = CharacterFactory.build({ race:'elf', gender:'male', body:{ tall:true }});
//     Configuration.metric = true;
//     expect(character.getBody().convertedHeight).to.equal(190);
//
//     Configuration.metric = false;
//     expect(character.getBody().convertedHeight).to.equal(74.75);
//   });
