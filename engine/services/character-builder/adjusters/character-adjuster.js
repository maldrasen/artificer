global.CharacterAdjuster = (function() {

  function build(character, options, nameAdjustments) {
    return new Promise((resolve, reject) => {
      console.log("\n=== Adjuster ===")
      console.log("For : ",character.name)
      console.log(">",nameAdjustments.aspects)
      console.log(">",nameAdjustments.triggers)
      resolve();
    });
  }

  return { build:build };

})();

CharacterAdjuster.TRIGGERS = [

  // Body
  'dark-skin',
  'thicc',
  'thin',

  // Body Parts
  'big-balls',
  'big-clit',
  'big-cock',
  'big-labia',
  'big-nipples',
  'big-pussy',
  'big-tits',
  'monster-balls',
  'monster-clit',
  'monster-cock',
  'monster-labia',
  'monster-pussy',
  'monster-tits',
  'small-tits',

  // Special Body
  'dick-nipples',
  'dog-cock',
  'dog-pussy',
  'horse-cock',
  'horse-pussy',
  'multi-cock',
  'nipple-cunts',

  // Character Attributes
  'beautiful',
  'magical',
  'smart',
  'stupid',
  'ugly',
]
