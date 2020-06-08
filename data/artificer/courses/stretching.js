Course.build('stretching', {
  name: 'Stretching',
  category: 'sexual',
  requires: 'flag.training-view.course.stretching=Y',
  description: `TODO: Describe stretching training when I unlock it.`,
  execute: async plan => { return { story:"Stretching Story" }},
});
