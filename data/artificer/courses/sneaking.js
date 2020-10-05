Course.build('sneaking', {
  name: 'Sneaking',
  category: 'physical',
  description: `{{C::character.firstName}} and I will train {{his}} stealth skills, practicing staying hidden and
    moving silently.`,
  execute: async plan => { return { story:"Sneaking Story" }},
});
