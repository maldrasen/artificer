// Weaver.SpeciesLoom = (function() {
//
//   // Replaces token placeholders in the form of:
//   //   {{actor::species.elf}}     Specific species name, like elf, gnome, or lupin
//   //   {{actor::species.anElf}}   Singular species name, like an elf or a gnome.
//   //   {{actor::species.elven}}   Species adjective, like elven or canine.
//   //   {{actor::species.elves}}   Plural species name, like elves or succubi.
//   //   {{actor::species.elf}}     Species class name like elves, or fae, or demons
//   //   {{actor::species.elves}}   Plural species class name like elves, or fae, or demons
//   //
//   function findValue(subject, token, context) {
//     if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }
//
//     let species = context.get(subject).character.species;
//
//     if (token == "species.elf")      { return species.name.toLowerCase(); }
//     if (token == "species.anElf")   { return EnglishUtility.a_an(species.name.toLowerCase()); }
//     if (token == "species.elven")    { return species.adjective; }
//     if (token == "species.elves")    { return species.pluralName.toLowerCase(); }
//     if (token == "species.demon")    { return species.classname; }
//     if (token == "species.demons")   { return species.pluralClassname; }
//
//     return Weaver.error(`Bad species token(${token})`);
//   }
//
//   return { findValue };
//
// })();
