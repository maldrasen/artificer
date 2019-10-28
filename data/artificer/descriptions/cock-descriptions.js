
Description.buildCock({ requirements: [],
  d: `{{C::gender.His}} {{C::cock.cock}} is {{C::cock.big}}, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements: [],
  d: `{{C::gender.He}} has {{C::cock.aBig}}, {{C::cock.twoInch}} {{wide}} {{C::cock.cock}}, that grows to
      {{C::cock.sixInches}} long when hard.`
});

Description.buildCock({ requirements: [],
  d: `{{C::gender.He}} has {{C::cock.aBig}} {{C::cock.cock}}, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements: [],
  d: `{{C::gender.He}} has {{C::cock.aBig}}, {{C::cock.inchLongAndWide}} {{C::cock.cock}}.`
});

Description.buildCock({ requirements: [],
  d: `{{C::gender.His}} {{C::cock.cock}} is {{C::cock.big}} for {{C::gender.his}} size, at
      {{C::cock.inchesLongAndWide}}.`
});

// === Small Cock ===

Description.buildCock({ requirements: ['cock-size-small'],
  d: `{{C::gender.His}} {{C::cock.cock}} is {{C::cock.big}}, only {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements: ['cock-size-small'],
  d: `{{C::gender.His}} {{C::cock.cock}} is a little small, only {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements: ['cock-size-small'],
  d: `{{C::gender.His}} {{C::cock.cock}} is on the small side, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements: ['cock-size-small'],
  d: `{{C::gender.He}} has a smaller than average {{C::cock.cock}}, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements: ['cock-size-small'],
  d: `{{C::gender.He}} has {{C::cock.aBig}} {{C::cock.cock}} measuring at most {{C::cock.sixInches}} in length.`
});

Description.buildCock({ requirements: ['cock-size-small'],
  d: `{{C::gender.He}} has {{C::cock.aBig}} {{C::cock.cock}}, measuring {{C::cock.sixInches}} in length when hard.`
});

Description.buildCock({ requirements: ['cock-size-small'],
  d: `{{C::gender.He}} has {{C::cock.aBig}} {{C::cock.cock}}. Even when hard it's only {{C::cock.sixInches}} long.`
});

Description.buildCock({ requirements: ['cock-size-small'],
  d: `{{C::gender.He}} has a small, {{C::cock.sixInch}} long, little {{C::cock.cock}}.`
});

// === Average Cock ===

Description.buildCock({ requirements: ['cock-size-average'],
  d: `{{C::gender.His}} {{C::cock.cock}} a nice weighty handful, {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements: ['cock-size-average'],
  d: `{{C::gender.His}} {{C::cock.cock}} is about average at {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements: ['cock-size-average'],
  d: `{{C::gender.He}} has {{C::cock.aBig}}, {{C::cock.inchLongAndWide}} {{C::cock.cock}}.`
});

Description.buildCock({ requirements: ['cock-size-average'],
  d: `{{C::gender.He}} has {{C::cock.aBig}} {{C::cock.sixInch}} long {{C::cock.cock}}.`
});

// === Big Cock ===

Description.buildCock({ requirements: ['cock-size-big'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} is longer than most other {{C::species.elves}}
      {{C::gender.his}} size, at {{C::cock.inchesLongAndWide}}.`
});

// === Huge Cock ===

Description.buildCock({ requirements: ['cock-size-huge'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} takes at least two hands to hold, at
      {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements: ['cock-size-huge'],
  d: `At {{C::cock.inchesLongAndWide}} {{C::gender.his}} {{C::cock.big}} {{C::cock.cock}} is far longer and thicker
      than most other {{C::species.elves}} {{C::gender.his}} size.`
});

Description.buildCock({ requirements: ['cock-size-huge'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} is far larger than almost any other {{C::species.elf}}
      {{C::gender.his}} size, at {{C::cock.inchesLongAndWide}}.`
});

// === Monster Cock ===

Description.buildCock({ requirements: ['cock-size-monster'],
  d: `At {{C::cock.inchesLongAndWide}}, {{C::gender.his}} {{C::cock.big}} {{C::cock.cock}} hangs down nearly to
      {{C::gender.his}} knees.`
});

Description.buildCock({ requirements: ['cock-size-monster'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} would look large on a horse, at {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements: ['cock-size-monster'],
  d: `At {{C::cock.inchesLongAndWide}}, {{C::gender.his}} {{C::cock.big}} {{C::cock.cock}} would look large on a
      creature twice {{C::gender.his}} size.`
});

// === Dog Cocks, With Knot ===

Description.buildCock({ requirements: [], includes:['knot'],
  d: `{{C::gender.He}} has a dog shaped cock, hidden in a {{C::cock.aBig}} furry cocksheath when soft. When hard
      though, {{C::gender.his}} {{C::cock.big}} cock grows to {{C::cock.inchesLongAndWide}} with
      {{C::cock.aHuge(knot)}} {{C::cock.twoInch(knot)}} {{wide}} knot at its base.`
});

Description.buildCock({ requirements: [], includes:['knot'],
  d: `{{C::gender.He}} has {{C::cock.aBig}} furry sheath nestled between {{C::gender.his}} legs, holding
      {{C::gender.his}} {{C::cock.big}}, {{C::cock.twoInch}} {{wide}} {{C::cock.cock}}. {{C::gender.His}}
      {{C::cock.cock}} is {{C::cock.sixInches}} long when hard and has {{C::cock.aHuge(knot)}} knot at its base that
      can swell up to {{C::cock.twoInches(knot)}} wide.`
});


// === Horse Cocks ===

Description.buildCock({ requirements: ['cock-shape-horse'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.twoInch}} {{wide}} {{C::cock.cock}} is tipped with a wide flat
      cockhead which is just as thick as the rest of {{C::gender.his}} {{C::cock.big}} shaft.`
});

Description.buildCock({ requirements: ['cock-shape-horse'],
  d: `A {{wide}} flat cockhead caps the length of {{C::gender.his}} {{C::cock.big}} {{C::cock.inchLongAndWide}}
      horsecock.`
});

Description.buildCock({ requirements: ['cock-shape-horse'], includes:['sheath'],
  d: `Sliding free from {{C::gender.his}} leathery wrinkled cocksheath, {{C::gender.his}} {{C::cock.big}}
      {{C::cock.cock}} extends {{C::cock.sixInches}} proudly in front of {{C::gender.him}}.`
});

Description.buildCock({ requirements: ['cock-shape-horse'], includes:['sheath'],
  d: `Extending from {{C::gender.his}} leathery cocksheath is {{C::cock.aBig}} {{C::cock.inchLongAndWide}} shaft of
      flared horse meat.`
});

Description.buildCock({ requirements: ['cock-shape-horse'], includes:['sheath'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long shaft of horse flesh extends from {{C::gender.his}}
      wrinkled cocksheath. The {{C::cock.big}} shaft is tipped with a {{C::cock.twoInch}} wide flare at its end.`
});

Description.buildCock({ requirements: ['cock-shape-horse','cock-size-monster'], includes:['sheath'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} hangs low out of {{C::gender.his}}
      sheath. The thick shaft of horse flesh is capped with {{C::cock.aBig}} {{C::cock.twoInch}} {{wide}} flared head.`
});

Description.buildCock({ requirements: ['cock-shape-horse','cock-size-gigantic'], includes:['sheath'],
  d: `{{C::gender.He}} has an appropriately horse sized {{C::cock.inchLongAndWide}} {{C::cock.cock}} extending from
      {{C::gender.his}} {{C::cock.big}} wrinkled cocksheath.`
});

Description.buildCock({ requirements: ['cock-shape-horse','cock-size-gigantic'], includes:['sheath'],
  d: `{{C::gender.His}} {{C::cock.big}} flared horsecock is even bigger than most horses at
      {{C::cock.inchesLongAndWide}}`
});

Description.buildCock({ requirements: ['cock-shape-horse','cock-size-gigantic'], includes:['sheath'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} hangs low out of {{C::gender.his}}
      sheath, dangling near {{C::gender.his}} knees. The incredibly massive shaft of horse flesh is capped with
      {{C::cock.aBig}} {{C::cock.twoInch}} {{wide}} flared head.`
});

Description.buildCock({ requirements: ['cock-shape-horse','cock-size-titanic'], includes:['sheath'],
  d: `Extending from {{C::gender.his}} {{C::cock.big}} leathery cocksheath is a flared {{C::cock.cock}} even larger
      than a horse's should be. The towering mass of horse flesh is {{C::cock.sixInches}} long with a
      {{C::cock.twoInch}} {{wide}} flared head.`
});

Description.buildCock({ requirements: ['cock-shape-horse','cock-size-titanic'], includes:['sheath'],
  d: `Between {{C::gender.his}} legs is an absurdly large cocksheath. Even when fully hard {{C::gender.his}}
      {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} is so heavy that it drags on the ground. The incredibly
      thick shaft is tipped with {{C::cock.aBig}} {{C::cock.twoInch}} {{wide}} flared head.`
});

// === Snake Cocks ===
// Only the Naga naturally have snake cocks, and they are all built having two cocks, so it's safe to assume that most
// characters with snake cocks will have more than one. Players may change their cock shapes to snake and may have one
// or many cocks, but they will only get the universal cock descriptions then, rather then the snake focuses ones.

Description.buildCock({ requirements: ['cock-shape-snake','cock-count-2'],
  d: `{{C::gender.He}} has a pair of {{C::cock.big}} {{C::cock.cocks}} emerging from a scaled cockslit near
      {{C::gender.his}} waist. The twin {{C::cock.cocks}} are {{C::cock.inchesLongAndWide}} at the base, but are
      thinner near the tips.`
});

Description.buildCock({ requirements: ['cock-shape-snake','cock-count-2'],
  d: `{{C::gender.His}} twin {{C::cock.cocks}} have slid free from their scaled cockslit. {{C::gender.His}}
    {{C::cock.big}} {{C::cock.cocks}} are {{C::cock.inchesLongAndWide}} at the base, but are thinner near the tips.`
});

Description.buildCock({ requirements: ['cock-shape-snake','cock-count-2'],
  d: `Emerging from a scaled cockslit near {{C::gender.his}} waist are {{C::cock.count}} {{C::cock.big}} tapered
      snake cocks. {{C::gender.His}} cocks are each {{C::cock.twoInches}} {{wide}} at the base but are much thinner
      near the tip of their {{C::cock.sixInch}} length.`
});

// === Dragon Cocks ===

Description.buildCock({ requirements: ['cock-shape-dragon'], includes:['ridges'],
  d: `A series of {{C::cock.twoInch(ridge)}} thick bony ridges run down the entire length of {{C::gender.his}}
      {{C::cock.big}} {{C::cock.inchLongAndWide}} {{C::cock.cock}}.`
});

Description.buildCock({ requirements: ['cock-shape-dragon'], includes:['sheath'],
  d: `Sliding free from {{C::gender.his}} scaled cocksheath, {{C::gender.his}} {{C::cock.big}} {{C::cock.cock}} extends
      {{C::cock.sixInches}} proudly in front of {{C::gender.him}}.`
});

Description.buildCock({ requirements: ['cock-shape-dragon'], includes:['sheath','ridges'],
  d: `{{C::gender.his}} {{C::cock.big}} {{C::cock.twoInch}} wide dragon cock has a series of thick ridges that extend
      from its thick head all the way down to {{C::gender.his}} scaled sheath.`
});

Description.buildCock({ requirements: ['cock-shape-dragon'], includes:['sheath'],
  d: `Extending from {{C::gender.his}} scaled cocksheath is {{C::cock.aBig}} {{C::cock.inchLongAndWide}} shaft of
      dragon meat.`
});

Description.buildCock({ requirements: ['cock-shape-dragon'], includes:['sheath','ridges'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long shaft of dragon flesh extends from {{C::gender.his}}
      scaled cocksheath. The entire length of the {{C::cock.big}} shaft is covered with {{C::cock.twoInch(ridge)}}
      thick bony ridges.`
});

Description.buildCock({ requirements: ['cock-shape-dragon','cock-size-monster'], includes:['sheath','ridges'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} hangs low out of {{C::gender.his}}
      scaled sheath. The entire thick shaft of dragon meat is ringed with {{C::cock.twoInch(ridge)}} thick bony ridges.`
});

Description.buildCock({ requirements: ['cock-shape-dragon','cock-size-gigantic'], includes:['sheath','ridges'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} hangs down low out of
      {{C::gender.his}} scaled cocksheath, hanging easily down to {{C::gender.his}} knees. The entire length of
      {{C::gender.his}} {{C::cock.twoInch}} {{wide}} shaft is ringed with huge protruding {{C::cock.twoInch(ridge)}}
      tall ridges.`
});

Description.buildCock({ requirements: ['cock-shape-dragon','cock-size-titanic'], includes:['sheath','ridges'],
  d: `{{C::gender.He}} has an appropriately dragon sized {{C::cock.inchLongAndWide}} cock extending from
      {{C::gender.his}} {{C::cock.big}} scaled cocksheath. The entire length of {{C::gender.his}} {{C::cock.twoInch}}
      thick shaft is ringed with {{C::cock.big}} protruding {{C::cock.twoInch(ridge)}} ridges.`
});

Description.buildCock({ requirements: ['cock-shape-dragon','cock-size-titanic'], includes:['sheath'],
  d: `Jutting out from between {{C::gender.his}} legs is an absurdly large cocksheath. Even when fully hard
      {{C::gender.his}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} is so heavy that it drags on the
      ground. A series of cunt destroying, {{C::cock.twoInch(ridge)}} thick, bony ridges run down the entire
      astounding length of {{C::gender.his}} {{C::cock.big}} dragoncock.`
});

// === Demon Cocks ===

Description.buildCock({ requirements: ['species-demon'],
  d: `A small puddle of cum can almost always be found on the ground between {{C::gender.his}} feet; {{C::gender.his}}
      {{C::cock.sixInch}} long {{C::cock.cock}} dripping {{unholy}} seed ceaselessly from its {{C::cock.twoInch}} wide
      tip.`
});

Description.buildCock({ requirements: ['species-demon'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} is almost always fully hard, {{throbbing}} with {{unholy}}
      intent. The {{C::cock.big}} {{unholy}} shaft of fuckmeat is {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements: ['species-demon'],
  d: `{{C::gender.He}} has {{C::cock.aBig}}, perpetually hard, {{C::cock.inchLongAndWide}} {{C::cock.cock}}.
      {{C::gender.His}} {{C::cock.big}} {{unholy}} shaft continuously drips precum from its tip and looks ready to
      burst at any moment.`
});

Description.buildCock({ requirements: ['species-demon','cock-size-monster'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} is even larger than most other demon's, measuring
      {{C::cock.inchesLongAndWide}}, and is almost always hard and {{throbbing}}.`
});

Description.buildCock({ requirements: ['species-demon','cock-size-monster'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} looks far too large for a creature
      of {{C::gender.his}} size. The {{C::cock.twoInch}} thick shaft is perpetually hard, {{throbbing}}, dripping
      {{unholy}} seed, and yarns for release.`
});

Description.buildCock({ requirements: ['species-demon','cock-size-gigantic'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} would easily hang down between {{C::gender.his}} knees if it
      ever got soft enough. As it is the perpetually hard, {{C::cock.sixInch}} long shaft of {{unholy}} fuckmeat leaves
      a constant smear of precum on {{C::gender.his}} chest.`
});

Description.buildCock({ requirements: ['species-demon','cock-size-gigantic'],
  d: `{{C::gender.His}} {{C::cock.cock}} is {{C::cock.big}}, measuring a staggering {{C::cock.inchesLongAndWide}},
      making {{C::gender.his}} {{C::cock.big}} {{unholy}} shaft one of the largest to be found in all the Abyss.`
});

Description.buildCock({ requirements: ['species-demon','cock-size-titanic'],
  d: `Even when fully hard {{C::gender.his}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cock}} is so heavy that
      it drags on the ground. Measuring a staggering {{C::cock.twoInches}} wide, {{C::gender.his}} cock would look
      massive on even the largest of pit fiends.`
});

Description.buildCock({ requirements: ['species-demon','cock-size-titanic'],
  d: `{{maleDemon}} himself would be proud to wield the {{C::cock.big}} {{C::cock.sixInch}} long, {{C::cock.twoInch}}
      wide {{C::cock.cock}} that hangs down between {{C::gender.his}} legs.`
});
























//   # === Multiple Cocks ===
//   # Used to describe a minimum of two cocks of any size and shape.
//
//   def self.seed_multiple_cocks
//     params = { min_count: 2, max_count:2 }
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.His}} twin {{C::cock.cocks}} are {{C::cock.big}}, {{C::cock.inchesLongAndWide}} when hard."
//     end
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.He}} has a pair of {{C::cock.big}} {{C::cock.cocks}}. Both of {{C::gender.his}} {{C::cock.cocks}} are {{C::cock.inchesLongAndWide}}."
//     end
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.He}} has a pair of {{C::cock.aBig}}, {{C::cock.twoInch}} wide {{C::cock.cocks}}. Both grow to {{C::cock.sixInches}} long when hard."
//     end
//
//     params = { min_count: 2, max_count:nil }
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.His}} {{C::cock.count}} {{C::cock.cocks}} are {{C::cock.big}}, each growing to {{C::cock.inchesLongAndWide}} when hard."
//     end
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.He}} has {{C::cock.count}} {{C::cock.big}} {{C::cock.cocks}}, each {{C::cock.cock}} measures {{C::cock.inchesLongAndWide}}."
//     end
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.He}} has {{C::cock.count}} {{C::cock.big}}, {{C::cock.twoInch}} wide {{C::cock.cocks}}. Each of {{C::gender.his}} {{C::cock.big}} "+
//       "{{C::cock.cocks}} grow to {{C::cock.sixInches}} long."
//     end
//
//     params = { min_count: 3, max_count:nil }
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.He}} has a cluster of {{C::cock.big}} {{C::cock.cocks}}, each of {{C::gender.his}} {{C::cock.count}} {{C::cock.cocks}} are [C|six inches long "+
//       "and one inch wide]."
//     end
//     batch_create_descriptions params do |tokens|
//       "A cluster of {{C::cock.count}} {{C::cock.big}} {{C::cock.cocks}} crowd together between {{C::gender.His}} legs. All of {{C::gender.his}} cocks are "+
//       "{{C::cock.inchesLongAndWide}}."
//     end
//   end
//
//   # === Multiple Dog Cocks ===
//
//   def self.seed_multiple_dog_cocks
//     params = { shape:"Dog", min_count: 2, max_count:2 }
//
//     batch_create_descriptions params do |tokens|
//       "Between {{C::gender.His}} legs is an extra wide furry sheath holding both of {{C::gender.his}} {{C::cock.big}} {{C::cock.sixInch}} long "+
//       "{{C::cock.cocks}}. {{C::gender.his}} {{C::cock.big}} {{C::cock.twoInch}} wide {{C::cock.cocks}} both swell into [C|a knot adjective] "+
//       "[C|two inch(knot)] wide knot near the base."
//     end
//
//     params = { shape:"Dog", min_count: 2, max_count:nil }
//     batch_create_descriptions params do |tokens|
//       "{{C::cock.count}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cocks}} jut proudly forward from {{C::gender.His}} stretched furry sheath. At "+
//       "the base of each {{C::cock.cock}} is a [C|two inch(knot)] wide knot the size of [C|a knot comparator] which tapers down to {{C::gender.his}} "+
//       "{{C::cock.twoInch}} wide cock."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "{{C::cock.count}} {{C::cock.big}} {{C::cock.twoInch}} thick {{C::cock.cocks}} squeeze out of {{C::gender.His}} tightly stretched furry "+
//       "sheath. Each of {{C::gender.his}} {{C::cock.big}} {{C::cock.cocks}} are {{C::cock.sixInches}} long and end in a [C|two inch(knot)] wide knot "+
//       "the size of [C|a knot comparator]."
//     end
//   end
//
//   # === Multiple Horse Cocks ===
//
//   def self.seed_multiple_horse_cocks
//
//     # Monstrous: 15.0 - 23.9 inches
//     params = SIZE_PARAMETERS[:monstrous][:params].merge(shape:"Horse", min_count:2, max_count:nil)
//
//     horse = []
//     horse << "{{C::gender.He}} has {{C::cock.count}} horse sized {{C::cock.inchLongAndWide}} {{C::cock.cocks}} extending from {{C::gender.his}} [C|huge] "+
//       "leathery cocksheath."
//     horse << "{{C::gender.His}} {{C::cock.count}} [C|huge] {{C::cock.sixInch}} long {{C::cock.cocks}} hang low out of {{C::gender.his}} sheath. The thick shafts of horse "+
//       "flesh are each capped with a {{C::cock.big}} {{C::cock.twoInch}} wide flared head."
//     horse.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Gigantic: 24.0 - 29.9 inches
//     params = SIZE_PARAMETERS[:gigantic][:params].merge(shape:"Horse", min_count:2, max_count:nil)
//
//     horse = []
//     horse << "{{C::gender.His}} {{C::cock.count}} {{C::cock.big}} flared horsecocks are each individually bigger than most horses at "+
//       "{{C::cock.inchesLongAndWide}} with a broad flat heads."
//     horse << "{{C::gender.His}} {{C::cock.count}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cocks}} hang low out of {{C::gender.his}} widely stretched sheath. The "+
//       "incredibly massive shafts of horse flesh are capped with a {{C::cock.big}} {{C::cock.twoInch}} wide flared heads that "+
//       "hang down past {{C::gender.his}} knees."
//     horse.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Titanic: > 30 inches
//     params = SIZE_PARAMETERS[:titanic][:params].merge(shape:"Horse", min_count:2, max_count:nil)
//
//     horse = []
//     horse << "Extending from {{C::gender.His}} impossibly stretched leathery cocksheath are {{C::cock.count}} {{C::cock.big}} flared horsecocks. "+
//       "Each towering mass of horse flesh is {{C::cock.sixInches}} long with a {{C::cock.twoInch}} wide flared head."
//     horse << "Between {{C::gender.His}} legs is an absurdly large cocksheath with {{C::cock.count}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cocks}} "+
//       "hanging out of it. Even when fully hard {{C::gender.his}} {{C::cock.cocks}} are so heavy that they drag on the ground. The incredibly "+
//       "thick shafts are tipped with {{C::cock.big}} {{C::cock.twoInch}} wide flared heads."
//     horse.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # All Sizes
//
//     params = { shape:"Horse", min_count: 2, max_count:2 }
//     batch_create_descriptions params do |tokens|
//       "Between {{C::gender.His}} legs is an extra wide leathery sheath holding both of {{C::gender.his}} {{C::cock.big}} {{C::cock.sixInch}} long "+
//       "{{C::cock.cocks}}. {{C::gender.his}} twin {{C::cock.cocks}} are both capped with {{C::cock.big}} {{C::cock.twoInch}} wide flares at their tips."
//     end
//
//     params = { shape:"Horse", min_count: 2, max_count:nil }
//     batch_create_descriptions params do |tokens|
//       "{{C::cock.count}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cocks}} extend from {{C::gender.His}} widely stretched leathery sheath. Each "+
//       "of {{C::gender.his}} {{C::cock.big}} shafts are tipped with {{C::cock.big}} {{C::cock.twoInch}} wide flares."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "{{C::cock.count}} {{C::cock.big}} {{C::cock.twoInch}} thick {{C::cock.cocks}} squeeze out of {{C::gender.His}} tightly stretched sheath. "+
//       "Each of {{C::gender.his}} {{C::cock.big}} {{C::cock.cocks}} are {{C::cock.sixInches}} long and end in a {{C::cock.twoInch}} wide flared head."
//     end
//   end
//
//   # === Multiple Dragon Cocks ===
//
//   def self.seed_multiple_dragon_cocks
//
//     # Monstrous: 15.0 - 23.9 inches
//     params = SIZE_PARAMETERS[:monstrous][:params].merge(shape:"Dragon", min_count: 2, max_count:nil)
//
//     cocks = []
//     cocks << "{{C::gender.His}} {{C::cock.count}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cocks}} hang low out of {{C::gender.his}} {{C::cock.big}} scaled sheath. "+
//       "The thick shafts of dragon meat are [C|all/both] ringed with inch thick bony ridges."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Gigantic: 24.0 - 29.9 inches
//     params = SIZE_PARAMETERS[:gigantic][:params].merge(shape:"Dragon", min_count: 2, max_count:nil)
//
//     cocks = []
//     cocks << "{{C::gender.His}} {{C::cock.count}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cocks}} hang down low out of {{C::gender.his}} {{C::cock.big}} scaled "+
//       "cocksheath, easily past {{C::gender.his}} knees. The entire length of {{C::gender.his}} {{C::cock.twoInch}} thick shafts are [C|all/both] "+
//       "ringed with huge protruding inch and a half tall ridges."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Titanic: > 30 inches
//     params = SIZE_PARAMETERS[:titanic][:params].merge(shape:"Dragon", min_count: 2, max_count:nil)
//
//     cocks = []
//     cocks << "{{C::gender.He}} has {{C::cock.count}} dragon sized {{C::cock.inchLongAndWide}} cocks extending from {{C::gender.his}} tightly "+
//       "stretched {{C::cock.big}} scaled cocksheath. The entire length of [C|all/both] of {{C::gender.his}} {{C::cock.twoInch}} thick shafts "+
//       "are ringed with {{C::cock.big}} protruding ridges."
//     cocks << "Between {{C::gender.His}} legs is an absurdly large, cocksheath. Even when fully hard {{C::gender.his}} {{C::cock.count}} {{C::cock.big}} "+
//       "{{C::cock.sixInch}} long {{C::cock.cocks}} are so heavy that they drag on the ground. A series of thick bony ridges, each the "+
//       "width of a average sized cock, run down the entire {{C::cock.big}} length of {{C::gender.His}} {{C::cock.twoInch}} wide dragoncock."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # All Sizes
//     params = { shape:"Dragon", min_count: 2, max_count:nil }
//
//     batch_create_descriptions params do |tokens|
//       "Sliding free from {{C::gender.his}} scaled cocksheath, {{C::gender.His}} {{C::cock.count}} {{C::cock.big}} {{C::cock.cocks}} each jut {{C::cock.sixInches}} "+
//       "proudly in front of {{C::gender.him}}. {{C::gender.his}} {{C::cock.big}} {{C::cock.twoInches}}wide dragon cocks [C|all/both] have a "+
//       "series of thick ridges that extend from their thick heads all the way down to {{C::gender.his}} sheath."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "A series of thick bony ridges run down the entire length of each of {{C::gender.His}} {{C::cock.count}} {{C::cock.big}} "+
//       "{{C::cock.inchLongAndWide}} {{C::cock.cocks}}."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "Extending from {{C::gender.His}} extra wide cocksheath are {{C::cock.count}} {{C::cock.aBig}} {{C::cock.inchLongAndWide}} "+
//       "shafts of hard ridged dragon meat."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.His}} {{C::cock.count}} {{C::cock.big}} {{C::cock.sixInch}} long shafts of dragon flesh extend from {{C::gender.his}} tightly stretched "+
//       "scaled cocksheath. The entire length of each of the {{C::cock.big}} shafts are covered with thick bony ridges."
//     end
//   end
//
//   def self.seed_dragon_cock_ridges
//     # Ridges on a single cock
//     ridges = []
//     ridges << "A series of thick bony ridges the size of [C|a ridge comparator] run down the entire length of {{C::gender.His}} dragoncock."
//     ridges << "The entire length of {{C::gender.His}} dragoncock is covered in thick bony ridges, each as wide as [C|a ridge comparator]."
//     ridges << "A series of bony ridges as thick as [C|a ridge comparator] run from {{C::gender.his}} dragoncock's bulbous head down to the base of {{C::gender.his}} scaled sheath."
//     ridges.each do |text|
//       CockDescription.manufacture text, shape:"Dragon", kind:"ridge", max_size:119
//     end
//
//     # Ridges on a huge single cock
//     ridges = []
//     ridges << "A series of [C|ridge comparator] thick ridges run down the entire length of {{C::gender.His}} dragoncock."
//     ridges << "The entire length of {{C::gender.His}} dragoncock is covered in [C|ridge comparator] thick bony ridges."
//     ridges << "A series of [C|ridge comparator] thick ridges run from {{C::gender.his}} dragoncock's bulbous head down to the base of {{C::gender.his}} scaled sheath."
//     ridges.each do |text|
//       CockDescription.manufacture text, shape:"Dragon", kind:"ridge", min_size:120
//     end
//
//     # Ridges on multiple cocks
//     ridges = []
//     ridges << "A series of thick bony ridges the size of [C|a ridge comparator] adorn [C|all/both] of {{C::gender.His}} dragoncocks."
//     ridges << "A series of bony ridges as thick as [C|a ridge comparator] run from {{C::gender.his}} dragoncocks' bulbous heads down to the base of their scaled sheath."
//     ridges << "{{C::gender.His}} {{C::cock.count}} dragoncocks are [C|all/both] covered in thick bony ridges, each as wide as [C|a ridge comparator]."
//     ridges.each do |text|
//       CockDescription.manufacture text, shape:"Dragon", kind:"ridge", max_size:119, min_count:2, max_count:nil
//     end
//
//     # Ridges on huge multiple cocks
//     ridges = []
//     ridges << "A series of [C|ridge comparator] thick ridges adorn [C|all/both] of {{C::gender.His}} dragoncocks."
//     ridges << "A series of [C|ridge comparator] thick ridges run from {{C::gender.his}} dragoncocks' bulbous heads down to the base of their scaled sheath."
//     ridges << "{{C::gender.His}} dragoncocks are [C|all/both] covered in [C|ridge comparator] thick bony ridges."
//     ridges.each do |text|
//       CockDescription.manufacture text, shape:"Dragon", kind:"ridge", min_size:120, min_count:2, max_count:nil
//     end
//   end
//
//   # === Demon Cocks ===
//
//   def self.seed_multiple_demon_cocks
//     # Monstrous: 15.0 - 23.9 inches
//     params = SIZE_PARAMETERS[:monstrous][:params].merge(shape:"Demon", min_count: 2, max_count:2)
//
//     cocks = []
//     cocks << "{{C::gender.His}} two {{C::cock.big}} {{C::cock.cocks}} are even larger than most any other demon's, measuring "+
//       "{{C::cock.inchesLongAndWide}}, and are almost always hard and [C|throbbing]."
//     cocks << "{{C::gender.His}} pair of {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cocks}} look far too large for a creature of {{C::gender.his}} "+
//       "size. The twin {{C::cock.twoInch}} thick shafts are perpetually hard, [C|throbbing], dripping {{unholy}} seed, "+
//       "and yarn for release."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Gigantic: 24.0 - 29.9 inches
//     params = SIZE_PARAMETERS[:gigantic][:params].merge(shape:"Demon", min_count: 2, max_count:2)
//
//     cocks = []
//     cocks << "{{C::gender.His}} {{C::cock.big}} {{C::cock.cocks}} would both easily hang down between {{C::gender.his}} knees if they ever got soft "+
//       "enough. As it is the two perpetually hard, {{C::cock.sixInch}} long shafts of {{unholy}} fuckmeat leave a constant smear "+
//       "of precum on {{C::gender.his}} chest."
//     cocks << "{{C::gender.His}} twin {{C::cock.cocks}} are {{C::cock.big}}, measuring a staggering {{C::cock.inchesLongAndWide}}, "+
//       "making {{C::gender.his}} two {{C::cock.big}} {{unholy}} shafts some of the largest to be found in all the Abyss."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Titanic: > 30 inches
//     params = SIZE_PARAMETERS[:titanic][:params].merge(shape:"Demon", min_count: 2, max_count:2)
//
//     cocks = []
//     cocks << "Even when fully hard {{C::gender.His}} pair of {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cocks}} are so heavy that they "+
//       "drag on the ground. Measuring a staggering {{C::cock.twoInches}}wide, {{C::gender.his}} cocks would look [C|massive] on "+
//       "even the largest of pit fiends."
//     cocks << "[Male Demon] himself would be proud to wield the pair of {{C::cock.big}} {{C::cock.sixInch}} long, "+
//       "{{C::cock.twoInch}} wide {{C::cock.cocks}} that hang down between {{C::gender.His}} legs."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # All Sizes
//     params = { shape:"Demon", min_count: 2, max_count:2 }
//
//     batch_create_descriptions params do |tokens|
//       "A small puddle of cum can almost always be found on the ground between {{C::gender.His}} feet. {{C::gender.his}} pair of "+
//       "{{C::cock.sixInch}} long {{C::cock.cocks}} drip {{unholy}} seed ceaselessly from their knobby {{C::cock.twoInch}} wide cockheads."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.His}} pair of {{C::cock.big}} {{C::cock.cocks}} are almost always fully hard, and [C|throb] with {{unholy}} intent. "+
//       "The {{C::cock.big}} {{unholy}} shafts of fuckmeat are both {{C::cock.inchesLongAndWide}}."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.He}} has a pair of {{C::cock.aBig}}, perpetually hard, {{C::cock.inchLongAndWide}} {{C::cock.cocks}}. "+
//       "{{C::gender.his}} {{C::cock.big}} {{unholy}} shafts continuously drip precum from their tips and both look ready to burst "+
//       "at any moment."
//     end
//
//     params = { shape:"Demon", min_count: 3, max_count:nil }
//
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.His}} has been blessed with a cluster of {{C::cock.count}} {{C::cock.aBig}} {{C::cock.cocks}}. Each of {{C::gender.his}} {{unholy}} "+
//       "shafts are {{C::cock.inchesLongAndWide}}. {{C::gender.his}} cocks though have been cursed to always remain hard, "+
//       "in a constant state of cum dripping arousal, and can never be completely satisfied."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.His}} cluster of {{C::cock.count}} {{C::cock.big}} {{C::cock.cocks}} are almost always fully hard, dripping and [C|throbbing] with "+
//       "{{unholy}} intent. The {{C::cock.big}} {{unholy}} shafts of fuckmeat are all {{C::cock.inchesLongAndWide}}."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "{{C::gender.He}} has {{C::cock.count}} {{C::cock.aBig}}, perpetually hard cocks, crowded between {{C::gender.his}} legs. Each of {{C::gender.his}} "+
//       "{{C::cock.inchLongAndWide}} {{C::cock.cocks}} continuously drip precum from their tips and look ready to burst "+
//       "at any moment."
//     end
//
//   end
//
//   def self.seed_demon_cock_knots
//
//     # Single Knots
//     params = { shape:"Demon", kind:"knot" }
//
//     batch_create_descriptions params do |tokens|
//       "Like a dog, {{C::gender.his}} {{unholy}} {{C::cock.cock}} emerges from {{C::cock.aBig}} leathery sheath with a [C|two inch(knot)] "+
//       "knot the size of [C|a knot comparator] at its base."
//     end
//
//     batch_create_descriptions params do |tokens|
//      "The base of {{C::gender.his}} shaft emerges from {{C::cock.aBig}} leathery cocksheath, and like a dog's cock, swells into "+
//      "[C|a knot adjective] [C|two inch(knot)] wide knot."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "Unlike most demon's, {{C::gender.his}} cock emerges from {{C::cock.aBig}} leathery cocksheath, and swells into "+
//       "[C|a knot adjective] [C|two inch(knot)] wide knot."
//     end
//
//     # Multiple Knots
//     params = { shape:"Demon", kind:"knot", min_count:2, max_count:nil }
//
//     batch_create_descriptions params do |tokens|
//       "The base of {{C::gender.his}} shafts emerge from a widely stretched {{C::cock.big}} leathery cocksheath, and like "+
//       "dog cocks, they [C|all/both] swell into [C|a knot adjective] [C|two inch(knot)] wide knots."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "Like a dog, {{C::gender.his}} {{unholy}} {{C::cock.cocks}} emerge from a hugely stretched leathery sheath, and have "+
//       "{{C::cock.big}}, [C|two inch(knot)] wide knots the size of [C|a knot comparators]."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "Unlike most demon's, {{C::gender.his}} cocks emerge from {{C::cock.aBig}} leathery cocksheath, and swell into "+
//       "[C|knot adjective] [C|two inches(knot)] wide knots."
//     end
//
//     # The cock od Cerebus
//     params = { shape:"Demon", kind:"knot", min_count:3, max_count:3, min_size:200, max_size:nil }
//     text = "Like the cocks of Cerebus himself, {{C::gender.his}} three {{unholy}} {{C::cock.cocks}} emerge from a tightly stretched "+
//         "{{C::cock.big}} cocksheath. At the base of each cock is a [C|a knot adjective] knot the size of "+
//         "[C|a knot comparator], at [C|two inches(knot)] wide."
//
//     CockDescription.manufacture text, params
//   end
//
//   # Note: The size values for the knobs and spines are integers in 1/100 of an inch. They can only increase in quarter
//   # inch steps (25), so 100, in and inch and 350 is three and a half inches.
//
//   def self.seed_demon_cock_knobs
//
//     # Tiny knobs on a single cock
//     knobs = []
//     knobs << "The entire length of {{C::gender.his}} cock is textured with gnarled little [C|knob comparator] sized bumps."
//     knobs << "{{C::gender.His}} {{C::cock.cock}} is studded, seemingly at random, with hard little nubs the size of [C|knob comparators]."
//     knobs << "Small, [C|knob comparator] sized bulges, adorn every inch of {{C::gender.His}} shaft, the {{unholy}} protrusions "+
//       "pulse and throb with {{C::gender.his}} cock."
//     knobs.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"knob", min_size:0, max_size:0
//     end
//
//     # Tiny knobs on multiple cocks
//     knobs = []
//     knobs << "The {{C::cock.count}} {{C::cock.cocks}} are [C|all/both] textured with gnarled little [C|knob comparator] sized bumps."
//     knobs << "{{C::gender.His}} {{C::cock.cocks}} are studded, seemingly at random, with hard little nubs the size of [C|knob comparators]."
//     knobs << "Small, [C|knob comparator] sized bulges, adorn every inch of {{C::gender.His}} shafts, the {{unholy}} protrusions "+
//       "pulse and throb with {{C::gender.his}} cock."
//     knobs.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"knob", min_size:0, max_size:0, min_count:2, max_count:nil
//     end
//
//     # Knobs on a single cock
//     knobs = []
//     knobs << "The entire length of {{C::gender.his}} cock is textured with gnarled [C|two inch(knobs)] bumps, each the size of "+
//       "[C|a knob comparator]."
//     knobs << "{{C::gender.His}} {{C::cock.cock}} is studded, seemingly at random, with hard [C|two inch(knobs)] wide knobs, each the "+
//       "size of [C|a knob comparator]."
//     knobs << "Thick, [C|knob comparator] sized bulges, adorn every inch of {{C::gender.His}} shaft, the {{unholy}} protrusions "+
//       "pulse and throb with {{C::gender.his}} cock."
//     knobs.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"knob", min_size:25
//     end
//
//     # Knobs on multiple cocks
//     knobs = []
//     knobs << "The {{C::cock.count}} {{C::cock.cocks}} are [C|all/both] textured with gnarled [C|two inch(knobs)] bumps, each the size "+
//       "of [C|a knob comparator]."
//     knobs << "{{C::gender.His}} {{C::cock.cocks}} are studded, seemingly at random, with hard [C|two inch(knobs)] wide knobs, each the "+
//       "size of [C|a knob comparator]."
//     knobs << "Thick, [C|knob comparator] sized bulges, adorn every inch of {{C::gender.His}} shafts, the {{unholy}} protrusions "+
//       "pulse and throb with {{C::gender.his}} cock."
//     knobs.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"knob", min_size:25, min_count:2, max_count:nil
//     end
//   end
//
//   def self.seed_demon_cock_spines
//
//     # Tiny spines on a single cock
//     spines = []
//     spines << "The entire length of {{C::gender.his}} cock is covered in sharp little, backward facing spines."
//     spines << "Like a cat, {{C::gender.His}} cock is covered in sharp little, backward facing spines"
//     spines << "Small sharp spikes adorn the length of {{C::gender.his}} cock, giving it a rough feline texture."
//     spines.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"spine", min_size:0, max_size:0
//     end
//
//     # Tiny spines on multiple cocks
//     spines = []
//     spines << "The entire length of {{C::gender.his}} cocks are [C|all/both] covered in sharp little, backward facing spines."
//     spines << "Like a cat, {{C::gender.His}} cocks are covered in sharp little, backward facing spines"
//     spines << "Small sharp spikes adorn [C|all/both] of {{C::gender.his}} cocks, giving them a rough feline texture."
//     spines.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"spine", min_size:0, max_size:0, min_count:2, max_count:nil
//     end
//
//     # Spines on a single cocks
//     spines = []
//     spines << "The entire length of {{C::gender.his}} {{unholy}} cock is covered in hard, backward facing spines. The spines are "+
//       "[C|two inches(spines)] long around the crown of {{C::gender.his}} cockhead, but grow shorter near the base."
//     spines << "Firm [C|two inch(spines)] long spines adorn the length of {{C::gender.his}} cock, facing backwards so that they "+
//       "rub painfully at whatever {{C::gender.his}} cock is thrust into."
//     spines << "Wicked [C|two inch(spines)] long, backward facing spines completely cover {{C::gender.His}} {{unholy}} cock. "+
//       "The wide, dull spikes are thickest around the crown of {{C::gender.his}} cockhead and flatten out near the base."
//     spines.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"spine", min_size:25, max_size:200
//     end
//
//     # Spines on multiple cocks
//     spines = []
//     spines << "[C|All/Both] of {{C::gender.his}} {{unholy}} cocks are covered in hard, backward facing spines. The spines are "+
//       "[C|two inches(spines)] long around the crowns of {{C::gender.his}} cocks, but grow shorter near their base."
//     spines << "Firm [C|two inch(spines)] long spines adorn the length of {{C::gender.his}} cocks, facing backwards so that they "+
//       "rub painfully at whatever they're thrust into."
//     spines << "Wicked [C|two inch(spines)] long, backward facing spines completely cover [C|all/both] of {{C::gender.His}} "+
//       "{{unholy}} cocks. The thick, dull spikes are thickest around the crowns of {{C::gender.his}} cockheads and thin out near "+
//       "their base where they lie flat."
//     spines.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"spine", min_size:25, max_size:200, min_count:2, max_count:nil
//     end
//
//     # Huge spines on a single cock
//     spines = []
//     spines << "Given the sadistic [C|two inch(spines)] long spines that cover {{C::gender.His}} cock, the {{unholy}} shaft's only "+
//       "conceivable use is as a weapon of war, or maybe as a status symbol recognized only in the deepest bowels of "+
//       "the Abyss. The bony spines are thick and dull, but stiff like short fingers protruding backwards from the "+
//       "surface of {{C::gender.his}} cock."
//     spines << "{{C::gender.His}} {{C::cock.cock}} is a true cunt destroyer, it's entire surface covered in thick [C|two inch(spines)] "+
//       "long spikes. The spines are firm and dull, like thick fingers made to rake painfully against whatever they're "+
//       "thrust into. The spines are thickest around {{C::gender.his}} cockhead, but grow shorter near the base."
//     spines.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"spine", min_size:225, max_size:400
//     end
//
//     # Huge spines on multiple cocks
//     spines = []
//     spines << "Given the sadistic [C|two inch(spines)] long spines that cover {{C::gender.His}} cocks, their only "+
//       "conceivable use is as weapons of war, or perhaps as status symbols, recognized only in the deepest bowels of "+
//       "the Abyss. The bony spines are thick and dull, but stiff like short fingers protruding backwards from the "+
//       "surface of {{C::gender.his}} cocks."
//     spines << "{{C::gender.His}} {{C::cock.cocks}} are true cunt destroyers, their entire surface covered in thick [C|two inch(spines)] "+
//       "long spikes. The spines are firm and dull, like thick fingers made to rake painfully against whatever they're "+
//       "thrust into. The spines are thickest around {{C::gender.his}} cockheads, but grow shorter near their base."
//     spines.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"spine", min_size:225, max_size:400, min_count:2, max_count:nil
//     end
//   end
//
// end
