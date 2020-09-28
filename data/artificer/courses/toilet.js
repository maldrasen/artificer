Course.build('toilet', {
  name: 'Toilet',
  category: 'sexual',
  requires: 'flag.training-view.course.toilet=Y',
  description: `TODO: Describe piss training when I unlock it.`,
  execute: async plan => { return { story:"Piss Training Story" }},
});
