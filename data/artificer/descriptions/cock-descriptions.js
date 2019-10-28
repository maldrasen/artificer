
Description.buildCock({ requirements:[],
  d: `{{C::gender.His}} {{C::cock.cock}} is {{C::cock.big}}, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements:[],
  d: `{{C::gender.He}} has {{C::cock.aBig}}, {{C::cock.twoInch}} {{wide}} {{C::cock.cock}}, that grows to
      {{C::cock.sixInches}} long when hard.`
});

Description.buildCock({ requirements:[],
  d: `{{C::gender.He}} has {{C::cock.aBig}} {{C::cock.cock}}, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements:[],
  d: `{{C::gender.He}} has {{C::cock.aBig}}, {{C::cock.inchLongAndWide}} {{C::cock.cock}}.`
});

Description.buildCock({ requirements:[],
  d: `{{C::gender.His}} {{C::cock.cock}} is {{C::cock.big}} for {{C::gender.his}} size, at
      {{C::cock.inchesLongAndWide}}.`
});

// === Small Cock ===

Description.buildCock({ requirements:['cock-size-small'],
  d: `{{C::gender.His}} {{C::cock.cock}} is {{C::cock.big}}, only {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements:['cock-size-small'],
  d: `{{C::gender.His}} {{C::cock.cock}} is a little small, only {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements:['cock-size-small'],
  d: `{{C::gender.His}} {{C::cock.cock}} is on the small side, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements:['cock-size-small'],
  d: `{{C::gender.He}} has a smaller than average {{C::cock.cock}}, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements:['cock-size-small'],
  d: `{{C::gender.He}} has {{C::cock.aBig}} {{C::cock.cock}} measuring at most {{C::cock.sixInches}} in length.`
});

Description.buildCock({ requirements:['cock-size-small'],
  d: `{{C::gender.He}} has {{C::cock.aBig}} {{C::cock.cock}}, measuring {{C::cock.sixInches}} in length when hard.`
});

Description.buildCock({ requirements:['cock-size-small'],
  d: `{{C::gender.He}} has {{C::cock.aBig}} {{C::cock.cock}}. Even when hard it's only {{C::cock.sixInches}} long.`
});

Description.buildCock({ requirements:['cock-size-small'],
  d: `{{C::gender.He}} has a small, {{C::cock.sixInch}} long, little {{C::cock.cock}}.`
});

// === Average Cock ===

Description.buildCock({ requirements:['cock-size-average'],
  d: `{{C::gender.His}} {{C::cock.cock}} a nice weighty handful, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements:['cock-size-average'],
  d: `{{C::gender.His}} {{C::cock.cock}} is about average at {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements:['cock-size-average'],
  d: `{{C::gender.He}} has {{C::cock.aBig}}, {{C::cock.inchLongAndWide}} {{C::cock.cock}}.`
});

Description.buildCock({ requirements:['cock-size-average'],
  d: `{{C::gender.He}} has {{C::cock.aBig}} {{C::cock.sixInch}} long {{C::cock.cock}}.`
});

// === Big Cock ===

Description.buildCock({ requirements:['cock-size-big'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} is longer than most other {{C::species.elves}}
      {{C::gender.his}} size, at {{C::cock.inchesLongAndWide}}.`
});

// === Huge Cock ===

Description.buildCock({ requirements:['cock-size-huge'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} takes at least two hands to hold, at
      {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements:['cock-size-huge'],
  d: `At {{C::cock.inchesLongAndWide}} {{C::gender.his}} {{C::cock.big}} {{C::cock.cock}} is far longer and thicker
      than most other {{C::species.elves}} {{C::gender.his}} size.`
});

Description.buildCock({ requirements:['cock-size-huge'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} is far larger than almost any other {{C::species.elf}}
      {{C::gender.his}} size, at {{C::cock.inchesLongAndWide}}.`
});

// === Monster Cock ===

Description.buildCock({ requirements:['cock-size-monster'],
  d: `At {{C::cock.inchesLongAndWide}}, {{C::gender.his}} {{C::cock.big}} {{C::cock.cock}} hangs down nearly to
      {{C::gender.his}} knees.`
});

Description.buildCock({ requirements:['cock-size-monster'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} would look large on a horse, at {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements:['cock-size-monster'],
  d: `At {{C::cock.inchesLongAndWide}}, {{C::gender.his}} {{C::cock.big}} {{C::cock.cock}} would look large on a
      creature twice {{C::gender.his}} size.`
});

// === Dog Cocks, With Knot ===

Description.buildCock({ includes:['knot','sheath'],
  d: `{{C::gender.He}} has a dog shaped cock, hidden in {{C::cock.aBig}} furry cocksheath when soft. When hard though,
      {{C::gender.his}} {{C::cock.big}} cock grows to {{C::cock.inchesLongAndWide}} with {{C::cock.aHuge(knot)}}
      {{C::cock.twoInch(knot)}} {{wide}} knot at its base.`
});

Description.buildCock({ includes:['knot','sheath'],
  d: `{{C::gender.He}} has {{C::cock.aBig}} furry sheath nestled between {{C::gender.his}} legs, holding
      {{C::gender.his}} {{C::cock.big}}, {{C::cock.twoInch}} {{wide}} {{C::cock.cock}}. {{C::gender.His}}
      {{C::cock.cock}} is {{C::cock.sixInches}} long when hard and has {{C::cock.aHuge(knot)}} knot at its base that
      can swell up to {{C::cock.twoInches(knot)}} wide.`
});


// === Horse Cocks ===

Description.buildCock({ requirements:['cock-shape-horse'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.twoInch}} {{wide}} {{C::cock.cock}} is tipped with a wide flat
      cockhead which is just as thick as the rest of {{C::gender.his}} {{C::cock.big}} shaft.`
});

Description.buildCock({ requirements:['cock-shape-horse'],
  d: `A {{wide}} flat cockhead caps the length of {{C::gender.his}} {{C::cock.big}} {{C::cock.inchLongAndWide}}
      horsecock.`
});

Description.buildCock({ requirements:['cock-shape-horse'], includes:['sheath'],
  d: `Sliding free from {{C::gender.his}} leathery wrinkled cocksheath, {{C::gender.his}} {{C::cock.big}}
      {{C::cock.cock}} extends {{C::cock.sixInches}} proudly in front of {{C::gender.him}}.`
});

Description.buildCock({ requirements:['cock-shape-horse'], includes:['sheath'],
  d: `Extending from {{C::gender.his}} leathery cocksheath is {{C::cock.aBig}} {{C::cock.inchLongAndWide}} shaft of
      flared horse meat.`
});

Description.buildCock({ requirements:['cock-shape-horse'], includes:['sheath'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long shaft of horse flesh extends from {{C::gender.his}}
      wrinkled cocksheath. The {{C::cock.big}} shaft is tipped with a {{C::cock.twoInch}} wide flare at its end.`
});

Description.buildCock({ requirements:['cock-shape-horse','cock-size-monster'], includes:['sheath'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} hangs low out of {{C::gender.his}}
      sheath. The thick shaft of horse flesh is capped with {{C::cock.aBig}} {{C::cock.twoInch}} {{wide}} flared head.`
});

Description.buildCock({ requirements:['cock-shape-horse','cock-size-gigantic'], includes:['sheath'],
  d: `{{C::gender.He}} has an appropriately horse sized {{C::cock.inchLongAndWide}} {{C::cock.cock}} extending from
      {{C::gender.his}} {{C::cock.big}} wrinkled cocksheath.`
});

Description.buildCock({ requirements:['cock-shape-horse','cock-size-gigantic'], includes:['sheath'],
  d: `{{C::gender.His}} {{C::cock.big}} flared horsecock is even bigger than most horses at
      {{C::cock.inchesLongAndWide}}`
});

Description.buildCock({ requirements:['cock-shape-horse','cock-size-gigantic'], includes:['sheath'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} hangs low out of {{C::gender.his}}
      sheath, dangling near {{C::gender.his}} knees. The incredibly massive shaft of horse flesh is capped with
      {{C::cock.aBig}} {{C::cock.twoInch}} {{wide}} flared head.`
});

Description.buildCock({ requirements:['cock-shape-horse','cock-size-titanic'], includes:['sheath'],
  d: `Extending from {{C::gender.his}} {{C::cock.big}} leathery cocksheath is a flared {{C::cock.cock}} even larger
      than a horse's should be. The towering mass of horse flesh is {{C::cock.sixInches}} long with a
      {{C::cock.twoInch}} {{wide}} flared head.`
});

Description.buildCock({ requirements:['cock-shape-horse','cock-size-titanic'], includes:['sheath'],
  d: `Between {{C::gender.his}} legs is an absurdly large cocksheath. Even when fully hard {{C::gender.his}}
      {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} is so heavy that it drags on the ground. The incredibly
      thick shaft is tipped with {{C::cock.aBig}} {{C::cock.twoInch}} {{wide}} flared head.`
});

// === Snake Cocks ===
// Only the Naga naturally have snake cocks, and they are all built having two cocks, so it's safe to assume that most
// characters with snake cocks will have more than one. Players may change their cock shapes to snake and may have one
// or many cocks, but they will only get the universal cock descriptions then, rather then the snake focuses ones.

Description.buildCock({ requirements:['cock-shape-snake'], conditions:['cock-count-2'],
  d: `{{C::gender.He}} has a pair of {{C::cock.big}} {{C::cock.cocks}} emerging from a scaled cockslit near
      {{C::gender.his}} waist. The twin {{C::cock.cocks}} are {{C::cock.inchesLongAndWide}} at the base, but are
      thinner near the tips.`
});

Description.buildCock({ requirements:['cock-shape-snake'], conditions:['cock-count-2'],
  d: `{{C::gender.His}} twin {{C::cock.cocks}} have slid free from their scaled cockslit. {{C::gender.His}}
    {{C::cock.big}} {{C::cock.cocks}} are {{C::cock.inchesLongAndWide}} at the base, but are thinner near the tips.`
});

Description.buildCock({ requirements:['cock-shape-snake'], conditions:['cock-count-2'],
  d: `Emerging from a scaled cockslit near {{C::gender.his}} waist are {{C::cock.count}} {{C::cock.big}} tapered
      snake cocks. {{C::gender.His}} cocks are each {{C::cock.twoInches}} {{wide}} at the base but are much thinner
      near the tip of their {{C::cock.sixInch}} length.`
});

// === Dragon Cocks ===

Description.buildCock({ requirements:['cock-shape-dragon'], includes:['ridges'],
  d: `A series of {{C::cock.twoInch(ridge)}} thick bony ridges run down the entire length of {{C::gender.his}}
      {{C::cock.big}} {{C::cock.inchLongAndWide}} {{C::cock.cock}}.`
});

Description.buildCock({ requirements:['cock-shape-dragon'], includes:['sheath'],
  d: `Sliding free from {{C::gender.his}} scaled cocksheath, {{C::gender.his}} {{C::cock.big}} {{C::cock.cock}} extends
      {{C::cock.sixInches}} proudly in front of {{C::gender.him}}.`
});

Description.buildCock({ requirements:['cock-shape-dragon'], includes:['sheath','ridges'],
  d: `{{C::gender.his}} {{C::cock.big}} {{C::cock.twoInch}} wide dragon cock has a series of thick ridges that extend
      from its thick head all the way down to {{C::gender.his}} scaled sheath.`
});

Description.buildCock({ requirements:['cock-shape-dragon'], includes:['sheath'],
  d: `Extending from {{C::gender.his}} scaled cocksheath is {{C::cock.aBig}} {{C::cock.inchLongAndWide}} shaft of
      dragon meat.`
});

Description.buildCock({ requirements:['cock-shape-dragon'], includes:['sheath','ridges'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long shaft of dragon flesh extends from {{C::gender.his}}
      scaled cocksheath. The entire length of the {{C::cock.big}} shaft is covered with {{C::cock.twoInch(ridge)}}
      thick bony ridges.`
});

Description.buildCock({ requirements:['cock-shape-dragon','cock-size-monster'], includes:['sheath','ridges'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} hangs low out of {{C::gender.his}}
      scaled sheath. The entire thick shaft of dragon meat is ringed with {{C::cock.twoInch(ridge)}} thick bony ridges.`
});

Description.buildCock({ requirements:['cock-shape-dragon','cock-size-gigantic'], includes:['sheath','ridges'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} hangs down low out of
      {{C::gender.his}} scaled cocksheath, hanging easily down to {{C::gender.his}} knees. The entire length of
      {{C::gender.his}} {{C::cock.twoInch}} {{wide}} shaft is ringed with huge protruding {{C::cock.twoInch(ridge)}}
      tall ridges.`
});

Description.buildCock({ requirements:['cock-shape-dragon','cock-size-titanic'], includes:['sheath','ridges'],
  d: `{{C::gender.He}} has an appropriately dragon sized {{C::cock.inchLongAndWide}} cock extending from
      {{C::gender.his}} {{C::cock.big}} scaled cocksheath. The entire length of {{C::gender.his}} {{C::cock.twoInch}}
      thick shaft is ringed with {{C::cock.big}} protruding {{C::cock.twoInch(ridge)}} ridges.`
});

Description.buildCock({ requirements:['cock-shape-dragon','cock-size-titanic'], includes:['sheath'],
  d: `Jutting out from between {{C::gender.his}} legs is an absurdly large cocksheath. Even when fully hard
      {{C::gender.his}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} is so heavy that it drags on the
      ground. A series of cunt destroying, {{C::cock.twoInch(ridge)}} thick, bony ridges run down the entire
      astounding length of {{C::gender.his}} {{C::cock.big}} dragoncock.`
});

// === Demon Cocks ===

Description.buildCock({ requirements:['species-demon'],
  d: `A small puddle of cum can almost always be found on the ground between {{C::gender.his}} feet; {{C::gender.his}}
      {{C::cock.sixInch}} long {{C::cock.cock}} dripping {{unholy}} seed ceaselessly from its {{C::cock.twoInch}} wide
      tip.`
});

Description.buildCock({ requirements:['species-demon'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} is almost always fully hard, {{throbbing}} with {{unholy}}
      intent. The {{C::cock.big}} {{unholy}} shaft of fuckmeat is {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements:['species-demon'],
  d: `{{C::gender.He}} has {{C::cock.aBig}}, perpetually hard, {{C::cock.inchLongAndWide}} {{C::cock.cock}}.
      {{C::gender.His}} {{C::cock.big}} {{unholy}} shaft continuously drips precum from its tip and looks ready to
      burst at any moment.`
});

Description.buildCock({ requirements:['species-demon','cock-size-monster'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} is even larger than most other demon's, measuring
      {{C::cock.inchesLongAndWide}}, and is almost always hard and {{throbbing}}.`
});

Description.buildCock({ requirements:['species-demon','cock-size-monster'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} looks far too large for a creature
      of {{C::gender.his}} size. The {{C::cock.twoInch}} thick shaft is perpetually hard, {{throbbing}}, dripping
      {{unholy}} seed, and yarns for release.`
});

Description.buildCock({ requirements:['species-demon','cock-size-gigantic'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} would easily hang down between {{C::gender.his}} knees if it
      ever got soft enough. As it is the perpetually hard, {{C::cock.sixInch}} long shaft of {{unholy}} fuckmeat leaves
      a constant smear of precum on {{C::gender.his}} chest.`
});

Description.buildCock({ requirements:['species-demon','cock-size-gigantic'],
  d: `{{C::gender.His}} {{C::cock.cock}} is {{C::cock.big}}, measuring a staggering {{C::cock.inchesLongAndWide}},
      making {{C::gender.his}} {{C::cock.big}} {{unholy}} shaft one of the largest to be found in all the Abyss.`
});

Description.buildCock({ requirements:['species-demon','cock-size-titanic'],
  d: `Even when fully hard {{C::gender.his}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} is so heavy that
      it drags on the ground. Measuring a staggering {{C::cock.twoInches}} wide, {{C::gender.his}} cock would look
      massive on even the largest of pit fiends.`
});

Description.buildCock({ requirements:['species-demon','cock-size-titanic'],
  d: `{{maleDemon}} himself would be proud to wield the {{C::cock.big}} {{C::cock.sixInch}} long, {{C::cock.twoInch}}
      wide {{C::cock.cock}} that hangs down between {{C::gender.his}} legs.`
});
