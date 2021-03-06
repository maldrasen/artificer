
// Replaces template tokens in the form: {{actor::character.name}}
Weaver.registerLoom('actor', /^character/, (subject, token, context) => {
  if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }

  let character = context.get(subject).character;

  if (token == "character.name")        { return `${character.name}`; }
  if (token == "character.firstName")   { return `${character.singleName}`; }
  if (token == "character.firstName's") { return `${EnglishUtility.possessive(character.singleName)}`; }
  if (token == "character.preName")     { return `${character.preName}`; }
  if (token == "character.lastName")    { return `${character.lastName}`; }

  return Weaver.error(`Bad character token(${token})`);
});
