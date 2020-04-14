
Description.buildHeadInjury({ damageType:'cut', level:1, requires:['minion(C).head.cut-count=1'],
  d: `A small scrape is cut into the side of {{his}} face.`,
});

Description.buildHeadInjury({ damageType:'cut', level:1, requires:['minion(C).head.cut-count=2'],
  d: `A couple of small scrapes are cut into the side of {{his}} face.`,
});

Description.buildHeadInjury({ damageType:'cut', level:1, requires:['minion(C).head.cut-count>2'],
  d: `A few small scrapes are cut into the side of {{his}} face.`,
});

Description.buildHeadInjury({ damageType:'cut', level:2, requires:['minion(C).head.cut-count=1'],
  d: `A fresh cut runs across {{his}} face.`,
});

Description.buildHeadInjury({ damageType:'cut', level:2, requires:['minion(C).head.cut-count=2'],
  d: `A couple of fresh cuts run across {{his}} face.`,
});

Description.buildHeadInjury({ damageType:'cut', level:2, requires:['minion(C).head.cut-count>2'],
  d: `A few cuts run across {{his}} face.`,
});
