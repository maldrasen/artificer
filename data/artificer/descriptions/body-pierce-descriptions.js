
Description.buildBodyInjury({ damageType:'pierce', level:3, requires:['minion(C).body.pierce-count=1'],
  d: `It looks like {{he}}'s been stabbed in the gut. A painful, ragged looking wound is visible on {{his}} lower abdomen.`,
});

Description.buildBodyInjury({ damageType:'pierce', level:3, requires:['minion(C).body.pierce-count=2'],
  d: `It looks like {{he}}'s been stabbed in the gut. A pair of painful, ragged looking wounds are visible on {{his}} lower abdomen.`,
});

Description.buildBodyInjury({ damageType:'pierce', level:3, requires:['minion(C).body.pierce-count>2'],
  d: `It looks like {{he}}'s been stabbed several times in the gut. Painful, ragged looking wounds are visible on {{his}} lower abdomen.`,
});
