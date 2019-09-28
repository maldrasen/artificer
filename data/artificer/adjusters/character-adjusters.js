
Adjustment.build('strong', {
  apply: (character) => { return new Promise(resolve => {
    console.log(character.name,'gets strong');
  })}
});
Adjustment.build('weak', {
  apply: (character) => { return new Promise(resolve => {
    console.log(character.name,'gets weak');
  })}
});
Adjustment.build('smart', {
  apply: (character) => { return new Promise(resolve => {
    console.log(character.name,'gets smart');
  })}
});
Adjustment.build('stupid', {
  apply: (character) => { return new Promise(resolve => {
    console.log(character.name,'gets stupid');
  })}
});
Adjustment.build('beautiful', {
  apply: (character) => { return new Promise(resolve => {
    console.log(character.name,'gets beautiful');
  })}
});
Adjustment.build('ugly', {
  apply: (character) => { return new Promise(resolve => {
    console.log(character.name,'gets ugly');
  })}
});
Adjustment.build('magical', {
  apply: (character) => { return new Promise(resolve => {
    console.log(character.name,'gets magical');
  })}
});


// if (adjustment == 'strong')    { return applyPhysical(character, adjustmentsMade[character.id], 'strong');    }
// if (adjustment == 'weak')      { return applyPhysical(character, adjustmentsMade[character.id], 'weak');      }
// if (adjustment == 'smart')     { return applyMental(character,   adjustmentsMade[character.id], 'smart');     }
// if (adjustment == 'stupid')    { return applyMental(character,   adjustmentsMade[character.id], 'stupid');    }
// if (adjustment == 'ugly')      { return applyPersonal(character, adjustmentsMade[character.id], 'ugly');      }
// if (adjustment == 'beautiful') { return applyPersonal(character, adjustmentsMade[character.id], 'beautiful'); }
// if (adjustment == 'magical')   { return applyMagical(character,  adjustmentsMade[character.id]);              }

  // function applyPhysical(character, adjustments, flag) {
  //   if (adjustments.indexOf('strong') >= 0 && flag == 'weak') { throw `Contradicting physical adjustment ${flag}`; }
  //   if (adjustments.indexOf('weak') >= 0 && flag == 'strong') { throw `Contradicting physical adjustment ${flag}`; }
  //   if (flag == 'strong') { character.setPhysical(Math.round(character.physical*(1.5+Math.random()))); }
  //   if (flag == 'weak') {   character.setPhysical(Math.round(character.physical/(1.5+Math.random()))); }
  //   adjustmentsMade[character.id].push(flag);
  // }
  //
  // function applyMental(character, adjustments, flag) {
  //   if (adjustments.indexOf('smart') >= 0 && flag == 'stupid') { throw `Contradicting mental adjustment ${flag}`; }
  //   if (adjustments.indexOf('stupid') >= 0 && flag == 'smart') { throw `Contradicting mental adjustment ${flag}`; }
  //   if (flag == 'smart') {  character.setMental(Math.round(character.mental*(1.5+Math.random()))); }
  //   if (flag == 'stupid') { character.setMental(Math.round(character.mental/(1.5+Math.random()))); }
  //   adjustmentsMade[character.id].push(flag);
  // }
  //
  // function applyPersonal(character, adjustments, flag) {
  //   if (adjustments.indexOf('beautiful') >= 0 && flag == 'ugly') { throw `Contradicting personal adjustment ${flag}`; }
  //   if (adjustments.indexOf('ugly') >= 0 && flag == 'beautiful') { throw `Contradicting personal adjustment ${flag}`; }
  //   if (flag == 'beautiful') { character.setPersonal(Math.round(character.personal*(1.5+Math.random()))); }
  //   if (flag == 'ugly') {      character.setPersonal(Math.round(character.personal/(1.5+Math.random()))); }
  //   adjustmentsMade[character.id].push(flag);
  // }
  //
  // function applyMagical(character, adjustments) {
  //   character.setMagical(Math.round(character.magical*(1.5+Math.random())));
  //   adjustmentsMade[character.id].push('magical');
  // }
