Weaver.registerLoom('utility', /^game/, (utility, argument, context) => {
  if (argument == 'dayNumber') { return EnglishUtility.numberInEnglish(Game.getDayNumber()); }
  if (argument == 'fullDate')  { return Calendar.fullDate(Game.getDayNumber()); }

  return Weaver.error(`Bad game token(${token})`);
})
