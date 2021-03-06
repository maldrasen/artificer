
// Shortcut function for when you want to do some token replacement on a
// single string and you only have a single character to put in the context.
// Don't do this in a loop, adding a character looks up all of their body
// parts and shit after all.

Weaver.weaveWithCharacter = async function(text, key, character) {
  const context = new Context();
  await context.addCharacter(key, character);
  return this.weave(text, context);
}
