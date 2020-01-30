Task.build('craft', {
  name: 'Craft',
  description: 'I will build something.',
  requires: ['flag.plan-view.tasks.craft'],
  control: 'craft-dialog',
});
