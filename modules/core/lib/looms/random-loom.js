// Random Utility Tokens:
//   random|1-100      Between 1 and 100
//   randomEng|3-6     Between three and six
//   RandomEng|1-9     Between One and Nine
Weaver.registerLoom('utility', /^[rR]andom/, (utility, argument, context) => {
  if (utility == 'random')    { return randomFrom(argument) }
  if (utility == 'randomEng') { return EnglishUtility.numberInEnglish(randomFrom(argument)); }
  if (utility == 'RandomEng') { return EnglishUtility.NumberInEnglish(randomFrom(argument)); }
  return Weaver.error(`Bad random token(${utility})`);
});

function randomFrom(argument) {
  if (argument.match(/\d+-\d+/)) {
    let parts = argument.split('-');
    return Random.between(
      parseInt(parts[0]),
      parseInt(parts[1]));
  }
  throw `RandomLoom cannot get a random number from ${argument}`
}
