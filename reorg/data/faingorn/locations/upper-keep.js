Location.build('upper-keep', {
  inTheName: 'in the upper keep',
  toTheName: 'to the upper keep',

  buildName: () => {
    return `Upper Keep`;
  },

  buildDescription: () => {
    return `The keep has a single five story tall tower that I've come to call the upper keep. I don't venture up here
      very often though, and I really don't have much use for this space yet. Because of the tower's collapsed roof,
      the upper keep has seen the most damage from both water and animals and will take quite a lot of work to make
      livable again.`;
  },

  hasBed: () => false,
  hasChair: () => false,
  hasTable: () => false,
});