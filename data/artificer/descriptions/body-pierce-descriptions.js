
Description.buildBodyInjury({ damageType:'pierce', level:3,
  requires:['minion(C).body.pierce-count=1'],
  d: `[TODO: Body Pierce 3, Single]`,
});

Description.buildBodyInjury({ damageType:'pierce', level:3,
  requires:['minion(C).body.pierce-count>1'],
  d: `[TODO: Body Pierce 3, More than one]`,
});
