
// Basic descriptions, should apply to most multi-cock minions. It's very rare
// that a minion will spawn with multiple cocks, but the name adjustments can
// make it happen, so it does need to be handled. This will be extended though
// at a later time once it becomes more common.

Description.buildCock({ conditions:['minion(C).cock.count=2'],
  d:`{{His}} twin {{C::cock.cocks}} are {{C::cock.big}}, {{C::cock.inchesLongAndWide}} when hard.`
});

Description.buildCock({ conditions:['minion(C).cock.count=2'],
  d:`{{He}} has a pair of {{C::cock.big}}, {{C::cock.twoInch}} wide cocks. {{His}} twin {{C::cock.cocks}} are {{C::cock.sixInches}} long when hard.`
});

Description.buildCock({ conditions:['minion(C).cock.count=2'],
  d:`Between {{his}} legs are a pair of {{C::cock.big}}, {{C::cock.twoInch}} wide {{C::cock.cocks}}. Both grow to {{C::cock.sixInches}} long when hard.`
});

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
//       "The thick shafts of dragon meat are {{C::cock.both}} ringed with inch thick bony ridges."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Gigantic: 24.0 - 29.9 inches
//     params = SIZE_PARAMETERS[:gigantic][:params].merge(shape:"Dragon", min_count: 2, max_count:nil)
//
//     cocks = []
//     cocks << "{{C::gender.His}} {{C::cock.count}} {{C::cock.big}} {{C::cock.sixInch}} long {{C::cock.cocks}} hang down low out of {{C::gender.his}} {{C::cock.big}} scaled "+
//       "cocksheath, easily past {{C::gender.his}} knees. The entire length of {{C::gender.his}} {{C::cock.twoInch}} thick shafts are {{C::cock.both}} "+
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
//       "stretched {{C::cock.big}} scaled cocksheath. The entire length of {{C::cock.both}} of {{C::gender.his}} {{C::cock.twoInch}} thick shafts "+
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
//       "proudly in front of {{C::gender.him}}. {{C::gender.his}} {{C::cock.big}} {{C::cock.twoInches}}wide dragon cocks {{C::cock.both}} have a "+
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
//     ridges << "A series of thick bony ridges the size of [C|a ridge comparator] adorn {{C::cock.both}} of {{C::gender.His}} dragoncocks."
//     ridges << "A series of bony ridges as thick as [C|a ridge comparator] run from {{C::gender.his}} dragoncocks' bulbous heads down to the base of their scaled sheath."
//     ridges << "{{C::gender.His}} {{C::cock.count}} dragoncocks are {{C::cock.both}} covered in thick bony ridges, each as wide as [C|a ridge comparator]."
//     ridges.each do |text|
//       CockDescription.manufacture text, shape:"Dragon", kind:"ridge", max_size:119, min_count:2, max_count:nil
//     end
//
//     # Ridges on huge multiple cocks
//     ridges = []
//     ridges << "A series of [C|ridge comparator] thick ridges adorn {{C::cock.both}} of {{C::gender.His}} dragoncocks."
//     ridges << "A series of [C|ridge comparator] thick ridges run from {{C::gender.his}} dragoncocks' bulbous heads down to the base of their scaled sheath."
//     ridges << "{{C::gender.His}} dragoncocks are {{C::cock.both}} covered in [C|ridge comparator] thick bony ridges."
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
//       "dog cocks, they {{C::cock.both}} swell into [C|a knot adjective] [C|two inch(knot)] wide knots."
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
