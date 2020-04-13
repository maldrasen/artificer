
Description.buildCock({
  d: `{{His}} {{C::cock.cock}} is {{C::cock.big}}, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({
  d: `{{He}} has {{C::cock.aBig}}, {{C::cock.twoInch}} {{wide}} {{C::cock.cock}}, that grows to {{C::cock.sixInches}}
      long when hard.`
});

Description.buildCock({
  d: `{{He}} has {{C::cock.aBig}} {{C::cock.cock}}, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({
  d: `{{He}} has {{C::cock.aBig}}, {{C::cock.inchLongAndWide}} {{C::cock.cock}}.`
});

Description.buildCock({
  d: `{{His}} {{C::cock.cock}} is {{C::cock.big}} for {{his}} size, at {{C::cock.inchesLongAndWide}}.`
});

// === Small Cock ===

Description.buildCock({ requires:['cock-size-small'],
  d: `{{His}} {{C::cock.cock}} is {{C::cock.big}}, only {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requires:['cock-size-small'],
  d: `{{His}} {{C::cock.cock}} is a little small, only {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requires:['cock-size-small'],
  d: `{{His}} {{C::cock.cock}} is on the small side, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requires:['cock-size-small'],
  d: `{{He}} has a smaller than average {{C::cock.cock}}, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requires:['cock-size-small'],
  d: `{{He}} has {{C::cock.aBig}} {{C::cock.cock}} measuring at most {{C::cock.sixInches}} in length.`
});

Description.buildCock({ requires:['cock-size-small'],
  d: `{{He}} has {{C::cock.aBig}} {{C::cock.cock}}, measuring {{C::cock.sixInches}} in length when hard.`
});

Description.buildCock({ requires:['cock-size-small'],
  d: `{{He}} has {{C::cock.aBig}} {{C::cock.cock}}. Even when hard it's only {{C::cock.sixInches}} long.`
});

Description.buildCock({ requires:['cock-size-small'],
  d: `{{He}} has a small, {{C::cock.sixInch}} long, little {{C::cock.cock}}.`
});

// === Average Cock ===

Description.buildCock({ requires:['cock-size-average'],
  d: `{{His}} {{C::cock.cock}} a nice weighty handful, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requires:['cock-size-average'],
  d: `{{His}} {{C::cock.cock}} is about average at {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requires:['cock-size-average'],
  d: `{{He}} has {{C::cock.aBig}}, {{C::cock.inchLongAndWide}} {{C::cock.cock}}.`
});

Description.buildCock({ requires:['cock-size-average'],
  d: `{{He}} has {{C::cock.aBig}} {{C::cock.sixInch}} long {{C::cock.cock}}.`
});

// === Big Cock ===

Description.buildCock({ requires:['cock-size-big'],
  d: `{{His}} {{C::cock.big}} {{C::cock.cock}} is longer than most other {{C::species.elves}} {{his}} size, at
      {{C::cock.inchesLongAndWide}}.`
});

// === Huge Cock ===

Description.buildCock({ requires:['cock-size-huge'],
  d: `{{His}} {{C::cock.big}} {{C::cock.cock}} takes at least two hands to hold, at {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requires:['cock-size-huge'],
  d: `At {{C::cock.inchesLongAndWide}} {{his}} {{C::cock.big}} {{C::cock.cock}} is far longer and thicker than most
      other {{C::species.elves}} {{his}} size.`
});

Description.buildCock({ requires:['cock-size-huge'],
  d: `{{His}} {{C::cock.big}} {{C::cock.cock}} is far larger than almost any other {{C::species.elf}} {{his}} size,
      at {{C::cock.inchesLongAndWide}}.`
});

// === Monster Cock ===

Description.buildCock({ requires:['cock-size-monster'],
  d: `At {{C::cock.inchesLongAndWide}}, {{his}} {{C::cock.big}} {{C::cock.cock}} hangs down nearly to {{his}} knees.`
});

Description.buildCock({ requires:['cock-size-monster'],
  d: `{{His}} {{C::cock.big}} {{C::cock.cock}} would look large on a horse, at {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requires:['cock-size-monster'],
  d: `At {{C::cock.inchesLongAndWide}}, {{his}} {{C::cock.big}} {{C::cock.cock}} would look large on a creature twice
      {{his}} size.`
});

// === Dog Cocks, With Knot ===

Description.buildCock({ includes:['knot','sheath'],
  d: `{{He}} has a dog shaped cock, hidden in {{C::cock.aBig}} furry cocksheath when soft. When hard though, {{his}}
      {{C::cock.big}} cock grows to {{C::cock.inchesLongAndWide}} with {{C::cock.aHuge(knot)}}
      {{C::cock.twoInch(knot)}} {{wide}} knot at its base.`
});

Description.buildCock({ includes:['knot','sheath'],
  d: `{{He}} has {{C::cock.aBig}} furry sheath nestled between {{his}} legs, holding {{his}} {{C::cock.big}},
      {{C::cock.twoInch}} {{wide}} {{C::cock.cock}}. {{His}} {{C::cock.cock}} is {{C::cock.sixInches}} long when hard
      and has {{C::cock.aHuge(knot)}} knot at its base that can swell up to {{C::cock.twoInches(knot)}} wide.`
});


// === Horse Cocks ===

Description.buildCock({ requires:['cock-shape-horse'],
  d: `{{His}} {{C::cock.big}} {{C::cock.twoInch}} {{wide}} {{C::cock.cock}} is tipped with a wide flat cockhead which
      is just as thick as the rest of {{his}} {{C::cock.big}} shaft.`
});

Description.buildCock({ requires:['cock-shape-horse'],
  d: `A {{wide}} flat cockhead caps the length of {{his}} {{C::cock.big}} {{C::cock.inchLongAndWide}} horsecock.`
});

Description.buildCock({ requires:['cock-shape-horse'], includes:['sheath'],
  d: `Sliding free from {{his}} leathery wrinkled cocksheath, {{his}} {{C::cock.big}} {{C::cock.cock}} extends
      {{C::cock.sixInches}} proudly in front of {{him}}.`
});

Description.buildCock({ requires:['cock-shape-horse'], includes:['sheath'],
  d: `Extending from {{his}} leathery cocksheath is {{C::cock.aBig}} {{C::cock.inchLongAndWide}} shaft of flared horse
      meat.`
});

Description.buildCock({ requires:['cock-shape-horse'], includes:['sheath'],
  d: `{{His}} {{C::cock.big}} {{C::cock.sixInch}} long shaft of horse flesh extends from {{his}} wrinkled cocksheath.
      The {{C::cock.big}} shaft is tipped with a {{C::cock.twoInch}} wide flare at its end.`
});

Description.buildCock({ requires:['cock-shape-horse','cock-size-monster'], includes:['sheath'],
  d: `{{His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} hangs low out of {{his}} sheath. The thick
      shaft of horse flesh is capped with {{C::cock.aBig}} {{C::cock.twoInch}} {{wide}} flared head.`
});

Description.buildCock({ requires:['cock-shape-horse','cock-size-gigantic'], includes:['sheath'],
  d: `{{He}} has an appropriately horse sized {{C::cock.inchLongAndWide}} {{C::cock.cock}} extending from {{his}}
      {{C::cock.big}} wrinkled cocksheath.`
});

Description.buildCock({ requires:['cock-shape-horse','cock-size-gigantic'], includes:['sheath'],
  d: `{{His}} {{C::cock.big}} flared horsecock is even bigger than most horses at {{C::cock.inchesLongAndWide}}`
});

Description.buildCock({ requires:['cock-shape-horse','cock-size-gigantic'], includes:['sheath'],
  d: `{{His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} hangs low out of {{his}} sheath, dangling near
      {{his}} knees. The incredibly massive shaft of horse flesh is capped with {{C::cock.aBig}} {{C::cock.twoInch}}
      {{wide}} flared head.`
});

Description.buildCock({ requires:['cock-shape-horse','cock-size-titanic'], includes:['sheath'],
  d: `Extending from {{his}} {{C::cock.big}} leathery cocksheath is a flared {{C::cock.cock}} even larger than a
      horse's should be. The towering mass of horse flesh is {{C::cock.sixInches}} long with a {{C::cock.twoInch}}
      {{wide}} flared head.`
});

Description.buildCock({ requires:['cock-shape-horse','cock-size-titanic'], includes:['sheath'],
  d: `Between {{his}} legs is an absurdly large cocksheath. Even when fully hard {{his}} {{C::cock.big}}
      {{C::cock.sixInch}} long {{C::cock.cock}} is so heavy that it drags on the ground. The incredibly thick shaft is
      tipped with {{C::cock.aBig}} {{C::cock.twoInch}} {{wide}} flared head.`
});

// === Snake Cocks ===
// Only the Naga naturally have snake cocks, and they are all built having two cocks, so it's safe to assume that most
// characters with snake cocks will have more than one. Players may change their cock shapes to snake and may have one
// or many cocks, but they will only get the universal cock descriptions then, rather then the snake focuses ones.

Description.buildCock({ requires:['cock-shape-snake'], conditions:['cock-count-2'],
  d: `{{He}} has a pair of {{C::cock.big}} {{C::cock.cocks}} emerging from a scaled cockslit near {{his}} waist. The
      twin {{C::cock.cocks}} are {{C::cock.inchesLongAndWide}} at the base, but are thinner near the tips.`
});

Description.buildCock({ requires:['cock-shape-snake'], conditions:['cock-count-2'],
  d: `{{His}} twin {{C::cock.cocks}} have slid free from their scaled cockslit. {{His}} {{C::cock.big}}
      {{C::cock.cocks}} are {{C::cock.inchesLongAndWide}} at the base, but are thinner near the tips.`
});

Description.buildCock({ requires:['cock-shape-snake'], conditions:['cock-count-2'],
  d: `Emerging from a scaled cockslit near {{his}} waist are {{C::cock.count}} {{C::cock.big}} tapered snake cocks.
      {{His}} cocks are each {{C::cock.twoInches}} {{wide}} at the base but are much thinner near the tip of their
      {{C::cock.sixInch}} length.`
});

// === Dragon Cocks ===

Description.buildCock({ requires:['cock-shape-dragon'], includes:['ridges'],
  d: `A series of {{C::cock.twoInch(ridge)}} thick bony ridges run down the entire length of {{his}} {{C::cock.big}}
      {{C::cock.inchLongAndWide}} {{C::cock.cock}}.`
});

Description.buildCock({ requires:['cock-shape-dragon'], includes:['sheath'],
  d: `Sliding free from {{his}} scaled cocksheath, {{his}} {{C::cock.big}} {{C::cock.cock}} extends
      {{C::cock.sixInches}} proudly in front of {{him}}.`
});

Description.buildCock({ requires:['cock-shape-dragon'], includes:['sheath','ridges'],
  d: `{{his}} {{C::cock.big}} {{C::cock.twoInch}} wide dragon cock has a series of thick ridges that extend from its
      thick head all the way down to {{his}} scaled sheath.`
});

Description.buildCock({ requires:['cock-shape-dragon'], includes:['sheath'],
  d: `Extending from {{his}} scaled cocksheath is {{C::cock.aBig}} {{C::cock.inchLongAndWide}} shaft of dragon meat.`
});

Description.buildCock({ requires:['cock-shape-dragon'], includes:['sheath','ridges'],
  d: `{{His}} {{C::cock.big}} {{C::cock.sixInch}} long shaft of dragon flesh extends from {{his}} scaled cocksheath.
      The entire length of the {{C::cock.big}} shaft is covered with {{C::cock.twoInch(ridge)}} thick bony ridges.`
});

Description.buildCock({ requires:['cock-shape-dragon','cock-size-monster'], includes:['sheath','ridges'],
  d: `{{His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} hangs low out of {{his}} scaled sheath. The
      entire thick shaft of dragon meat is ringed with {{C::cock.twoInch(ridge)}} thick bony ridges.`
});

Description.buildCock({ requires:['cock-shape-dragon','cock-size-gigantic'], includes:['sheath','ridges'],
  d: `{{His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} hangs down low out of {{his}} scaled
      cocksheath, hanging easily down to {{his}} knees. The entire length of {{his}} {{C::cock.twoInch}} {{wide}} shaft
      is ringed with huge protruding {{C::cock.twoInch(ridge)}} tall ridges.`
});

Description.buildCock({ requires:['cock-shape-dragon','cock-size-titanic'], includes:['sheath','ridges'],
  d: `{{He}} has an appropriately dragon sized {{C::cock.inchLongAndWide}} cock extending from {{his}} {{C::cock.big}}
      scaled cocksheath. The entire length of {{his}} {{C::cock.twoInch}} thick shaft is ringed with {{C::cock.big}}
      protruding {{C::cock.twoInch(ridge)}} ridges.`
});

Description.buildCock({ requires:['cock-shape-dragon','cock-size-titanic'], includes:['sheath'],
  d: `Jutting out from between {{his}} legs is an absurdly large cocksheath. Even when fully hard {{his}}
      {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} is so heavy that it drags on the ground. A series of
      cunt destroying, {{C::cock.twoInch(ridge)}} thick, bony ridges run down the entire astounding length of {{his}}
      {{C::cock.big}} dragoncock.`
});

// === Demon Cocks ===

Description.buildCock({ requires:['species-demon'],
  d: `A small puddle of cum can almost always be found on the ground between {{his}} feet; {{his}} {{C::cock.sixInch}}
      long {{C::cock.cock}} dripping {{unholy}} seed ceaselessly from its {{C::cock.twoInch}} wide tip.`
});

Description.buildCock({ requires:['species-demon'],
  d: `{{His}} {{C::cock.big}} {{C::cock.cock}} is almost always fully hard, {{throbbing}} with {{unholy}} intent. The
      {{C::cock.big}} {{unholy}} shaft of fuckmeat is {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requires:['species-demon'],
  d: `{{He}} has {{C::cock.aBig}}, perpetually hard, {{C::cock.inchLongAndWide}} {{C::cock.cock}}. {{His}}
      {{C::cock.big}} {{unholy}} shaft continuously drips precum from its tip and looks ready to burst at any moment.`
});

Description.buildCock({ requires:['species-demon','cock-size-monster'],
  d: `{{His}} {{C::cock.big}} {{C::cock.cock}} is even larger than most other demon's, measuring
      {{C::cock.inchesLongAndWide}}, and is almost always hard and {{throbbing}}.`
});

Description.buildCock({ requires:['species-demon','cock-size-monster'],
  d: `{{His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} looks far too large for a creature of {{his}}
      size. The {{C::cock.twoInch}} thick shaft is perpetually hard, {{throbbing}}, dripping {{unholy}} seed, and
      yarns for release.`
});

Description.buildCock({ requires:['species-demon','cock-size-gigantic'],
  d: `{{His}} {{C::cock.big}} {{C::cock.cock}} would easily hang down between {{his}} knees if it ever got soft enough.
      As it is the perpetually hard, {{C::cock.sixInch}} long shaft of {{unholy}} fuckmeat leaves a constant smear of
      precum on {{his}} chest.`
});

Description.buildCock({ requires:['species-demon','cock-size-gigantic'],
  d: `{{His}} {{C::cock.cock}} is {{C::cock.big}}, measuring a staggering {{C::cock.inchesLongAndWide}}, making {{his}}
      {{C::cock.big}} {{unholy}} shaft one of the largest to be found in all the Abyss.`
});

Description.buildCock({ requires:['species-demon','cock-size-titanic'],
  d: `Even when fully hard {{his}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} is so heavy that it drags
      on the ground. Measuring a staggering {{C::cock.twoInches}} wide, {{his}} cock would look massive on even the
      largest of pit fiends.`
});

Description.buildCock({ requires:['species-demon','cock-size-titanic'],
  d: `{{maleDemon}} himself would be proud to wield the {{C::cock.big}} {{C::cock.sixInch}} long, {{C::cock.twoInch}}
      wide {{C::cock.cock}} that hangs down between {{his}} legs.`
});
