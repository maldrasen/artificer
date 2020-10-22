
Weaver.registerLoom('simple', 'master', () => {
  return Flag.lookup('player.title');
});

Weaver.registerLoom('simple', 'Master', () => {
  return TextUtility.titlecase(Flag.lookup('player.title'));
});
