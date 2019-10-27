
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
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} is longer most other {{C::species.class}} {{C::gender.his}}
      size, at {{C::cock.inchesLongAndWide}}.`
});

// === Huge Cock ===

Description.buildCock({ requirements: ['cock-size-huge'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} takes at least two hands to hold, at
      {{C::cock.inchesLongAndWide}}.`
});

Description.buildCock({ requirements: ['cock-size-huge'],
  d: `At {{C::cock.inchesLongAndWide}} {{C::gender.his}} {{C::cock.big}} {{C::cock.cock}} is far longer and thicker
      than most {{C::species.class}} {{C::gender.his}} size.`
});

Description.buildCock({ requirements: ['cock-size-huge'],
  d: `{{C::gender.His}} {{C::cock.big}} {{C::cock.cock}} is far larger than almost any other {{C::species.class}}
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

// === With Knot ===

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




//   # === Multiple Cocks =================================================================================================
//   # Used to describe a minimum of two cocks of any size and shape.
//
//   def self.seed_multiple_cocks
//     params = { min_count: 2, max_count:2 }
//     batch_create_descriptions params do |tokens|
//       "[Actor's] twin [C|cocks] are #{tokens[:large]}, [C|six inches long and one inch wide] when hard."
//     end
//     batch_create_descriptions params do |tokens|
//       "[Actor] has a pair of #{tokens[:large]} [C|cocks]. Both of [his] [C|cocks] are [C|six inches long and one inch wide]."
//     end
//     batch_create_descriptions params do |tokens|
//       "[Actor] has a pair of #{tokens[:a_large]}, [C|two inch(cock)] wide [C|cocks]. Both grow to [C|six inches] long when hard."
//     end
//
//     params = { min_count: 2, max_count:nil }
//     batch_create_descriptions params do |tokens|
//       "[Actor's] [C|count] [C|cocks] are #{tokens[:large]}, each growing to [C|six inches long and one inch wide] when hard."
//     end
//     batch_create_descriptions params do |tokens|
//       "[Actor] has [C|count] #{tokens[:large]} [C|cocks], each [C|cock] measures [C|six inches long and one inch wide]."
//     end
//     batch_create_descriptions params do |tokens|
//       "[Actor] has [C|count] #{tokens[:large]}, [C|two inch(cock)] wide [C|cocks]. Each of [his] #{tokens[:large]} "+
//       "[C|cocks] grow to [C|six inches] long."
//     end
//
//     params = { min_count: 3, max_count:nil }
//     batch_create_descriptions params do |tokens|
//       "[Actor] has a cluster of #{tokens[:large]} [C|cocks], each of [his] [C|count] [C|cocks] are [C|six inches long "+
//       "and one inch wide]."
//     end
//     batch_create_descriptions params do |tokens|
//       "A cluster of [C|count] #{tokens[:large]} [C|cocks] crowd together between [Actor's] legs. All of [his] cocks are "+
//       "[C|six inches long and one inch wide]."
//     end
//   end
//
//
//
//   # === Dog Cocks ======================================================================================================
//
//
//   def self.seed_multiple_dog_cocks
//     params = { shape:"Dog", min_count: 2, max_count:2 }
//
//     batch_create_descriptions params do |tokens|
//       "Between [Actor's] legs is an extra wide furry sheath holding both of [his] #{tokens[:large]} [C|six inch] long "+
//       "[C|cocks]. [His] #{tokens[:large]} [C|two inch(cock)] wide [C|cocks] both swell into [C|a knot adjective] "+
//       "[C|two inch(knot)] wide knot near the base."
//     end
//
//     params = { shape:"Dog", min_count: 2, max_count:nil }
//     batch_create_descriptions params do |tokens|
//       "[C|Count] #{tokens[:large]} [C|six inch] long [C|cocks] jut proudly forward from [Actor's] stretched furry sheath. At "+
//       "the base of each [C|cock] is a [C|two inch(knot)] wide knot the size of [C|a knot comparator] which tapers down to [his] "+
//       "[C|two inch(cock)] wide cock."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "[C|Count] #{tokens[:large]} [C|two inch(cock)] thick [C|cocks] squeeze out of [Actor's] tightly stretched furry "+
//       "sheath. Each of [his] #{tokens[:large]} [C|cocks] are [C|six inches] long and end in a [C|two inch(knot)] wide knot "+
//       "the size of [C|a knot comparator]."
//     end
//   end
//
//
//
//   # === Horse Cocks ====================================================================================================
//
//   def self.seed_single_horse_cocks
//
//     # Monstrous: 15.0 - 23.9 inches
//     params = SIZE_PARAMETERS[:monstrous][:params].merge(shape:"Horse")
//
//     horse = []
//     horse << "[Actor] has an appropriately horse sized [C|six inch long and one inch wide] [C|cock] extending from [his] [C|huge] "+
//       "wrinkled cocksheath."
//     horse << "[Actor's] [C|huge] [C|six inch] long [C|cock] hangs low out of [his] sheath. The thick shaft of horse flesh is "+
//       "capped with a [C|monstrous] [C|two inch(cock)] wide flared head."
//     horse.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Gigantic: 24.0 - 29.9 inches
//     params = SIZE_PARAMETERS[:gigantic][:params].merge(shape:"Horse")
//
//     horse = []
//     horse << "[Actor's] [C|gigantic] flared horsecock is even bigger than most horses at [C|six inches long and one inch wide]."
//     horse << "[Actor's] [C|gigantic] [C|six inch] long [C|cock] hangs low out of [his] sheath, easily past [his] knees. The "+
//       "incredibly massive shaft of horse flesh is capped with a [C|gigantic] [C|two inch(cock)] wide flared head."
//     horse.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Titanic: > 30 inches
//     params = SIZE_PARAMETERS[:titanic][:params].merge(shape:"Horse")
//
//     horse = []
//     horse << "Extending from [Actor's] [C|titanic] leathery cocksheath is a flared cock even larger than a horse's "+
//       "should be. The towering mass of horse flesh is [C|six inches] long with a [C|two inch(cock)] wide flared head."
//     horse << "Between [Actor's] legs is an absurdly large cocksheath. Even when fully hard [his] [C|titanic] [C|six inch] "+
//       "long [C|cock] is so heavy that it drags on the ground. The incredibly thick shaft is tipped with a [C|titanic] "+
//       "[C|two inch(cock)] wide flared head."
//     horse.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # All Sizes
//
//     batch_create_descriptions params do |tokens|
//       "Sliding free from [his] leathery wrinkled cocksheath, [Actor's] #{tokens[:large]} [C|cock] extends [C|six inches] "+
//       "proudly in front of [him]. [his] #{tokens[:large]} [C|two inches(cock)] wide horsecock is tipped with a wide "+
//       "flat cockhead which is just as thick as the rest of [his] #{tokens[:large]} shaft."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "A wide flat cockhead caps the length of [Actor's] #{tokens[:large]} [C|six inch long and one inch wide] horsecock."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "Extending from [Actor's] leathery cocksheath is #{tokens[:a_large]} [C|six inch long and one inch wide] shaft of "+
//       "flared horse meat."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "[Actor's] #{tokens[:large]} [C|six inch] long shaft of horse flesh extends from [his] wrinkled cocksheath. The "+
//       "#{tokens[:large]} shaft is tipped with a [C|two inch(cock)] wide flare at its end."
//     end
//   end
//
//   def self.seed_multiple_horse_cocks
//
//     # Monstrous: 15.0 - 23.9 inches
//     params = SIZE_PARAMETERS[:monstrous][:params].merge(shape:"Horse", min_count:2, max_count:nil)
//
//     horse = []
//     horse << "[Actor] has [C|count] horse sized [C|six inch long and one inch wide] [C|cocks] extending from [his] [C|huge] "+
//       "leathery cocksheath."
//     horse << "[Actor's] [C|count] [C|huge] [C|six inch] long [C|cocks] hang low out of [his] sheath. The thick shafts of horse "+
//       "flesh are each capped with a [C|monstrous] [C|two inch(cock)] wide flared head."
//     horse.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Gigantic: 24.0 - 29.9 inches
//     params = SIZE_PARAMETERS[:gigantic][:params].merge(shape:"Horse", min_count:2, max_count:nil)
//
//     horse = []
//     horse << "[Actor's] [C|count] [C|gigantic] flared horsecocks are each individually bigger than most horses at "+
//       "[C|six inches long and one inch wide] with a broad flat heads."
//     horse << "[Actor's] [C|count] [C|gigantic] [C|six inch] long [C|cocks] hang low out of [his] widely stretched sheath. The "+
//       "incredibly massive shafts of horse flesh are capped with a [C|gigantic] [C|two inch(cock)] wide flared heads that "+
//       "hang down past [his] knees."
//     horse.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Titanic: > 30 inches
//     params = SIZE_PARAMETERS[:titanic][:params].merge(shape:"Horse", min_count:2, max_count:nil)
//
//     horse = []
//     horse << "Extending from [Actor's] impossibly stretched leathery cocksheath are [C|count] [C|titanic] flared horsecocks. "+
//       "Each towering mass of horse flesh is [C|six inches] long with a [C|two inch(cock)] wide flared head."
//     horse << "Between [Actor's] legs is an absurdly large cocksheath with [C|count] [C|titanic] [C|six inch] long [C|cocks] "+
//       "hanging out of it. Even when fully hard [his] [C|cocks] are so heavy that they drag on the ground. The incredibly "+
//       "thick shafts are tipped with [C|titanic] [C|two inch(cock)] wide flared heads."
//     horse.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # All Sizes
//
//     params = { shape:"Horse", min_count: 2, max_count:2 }
//     batch_create_descriptions params do |tokens|
//       "Between [Actor's] legs is an extra wide leathery sheath holding both of [his] #{tokens[:large]} [C|six inch] long "+
//       "[C|cocks]. [His] twin [C|cocks] are both capped with #{tokens[:large]} [C|two inch(cock)] wide flares at their tips."
//     end
//
//     params = { shape:"Horse", min_count: 2, max_count:nil }
//     batch_create_descriptions params do |tokens|
//       "[C|Count] #{tokens[:large]} [C|six inch] long [C|cocks] extend from [Actor's] widely stretched leathery sheath. Each "+
//       "of [his] #{tokens[:large]} shafts are tipped with #{tokens[:large]} [C|two inch(cock)] wide flares."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "[C|Count] #{tokens[:large]} [C|two inch(cock)] thick [C|cocks] squeeze out of [Actor's] tightly stretched sheath. "+
//       "Each of [his] #{tokens[:large]} [C|cocks] are [C|six inches] long and end in a [C|two inch(cock)] wide flared head."
//     end
//   end
//
//
//
//   # === Snake Cocks ====================================================================================================
//   # Only the Naga naturally have snake cocks, and they are all built having two cocks, so it's safe to assume that most
//   # characters with snake cocks will have more than one. Players may change their cock shapes to snake and may have one
//   # or many cocks, but they will only get the universal cock descriptions then, rather then the snake focuses ones.
//
//   def self.seed_snake_cocks
//     params = { shape:"Snake", min_count: 2, max_count:2 }
//
//     batch_create_descriptions params do |tokens|
//       "[Actor] has a pair of #{tokens[:large]} [C|cocks] emerging from a scaled cockslit near [his] waist. The twin "+
//       "[C|cocks] are [C|six inches long and one inch wide] at the base, but thinner near the tips."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "[Actor's] twin [C|cocks] have slid free from their scaled cockslit. [his] #{tokens[:large]} [C|cocks] are "+
//       "[C|six inches long and one inch wide] at the base, but thinner near the tips."
//     end
//
//     params = { shape:"Snake", min_count: 2, max_count:nil }
//
//     batch_create_descriptions params do |tokens|
//       "Emerging from a scaled cockslit near [Actor's] waist are [C|count] #{tokens[:large]} tapered snake cocks. [His] "+
//       "cocks are each [C|two inches(cock)] wide at the base but are much thinner near the tip of their [C|six inch] length."
//     end
//   end
//
//
//
//   # === Dragon Cocks ===================================================================================================
//
//   def self.seed_single_dragon_cocks
//
//     # Monstrous: 15.0 - 23.9 inches
//     params = SIZE_PARAMETERS[:monstrous][:params].merge(shape:"Dragon")
//
//     cocks = []
//     cocks << "[Actor's] [C|monstrous] [C|six inch] long [C|cock] hangs low out of [his] scaled sheath. The entire thick shaft "+
//       "of dragon meat is ringed with inch thick bony ridges."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Gigantic: 24.0 - 29.9 inches
//     params = SIZE_PARAMETERS[:gigantic][:params].merge(shape:"Dragon")
//
//     cocks = []
//     cocks << "[Actor's] [C|gigantic] [C|six inch] long [C|cock] hangs down low out of [his] scaled cocksheath, hanging down "+
//       "easily past [his] knees. The entire length of [his] [C|two inch(cock)] thick shaft is ringed with huge "+
//       "protruding inch and a half tall ridges."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Titanic: > 30 inches
//     params = SIZE_PARAMETERS[:titanic][:params].merge(shape:"Dragon")
//
//     cocks = []
//     cocks << "[Actor] has an appropriately dragon sized [C|six inch long and one inch wide] cock extending from [his] "+
//       "[C|titanic] scaled cocksheath. The entire length of [his] [C|two inch(cock)] thick shaft is ringed with "+
//       "[C|monstrous] protruding ridges."
//     cocks << "Between [Actor's] legs is an absurdly large cocksheath. Even when fully hard [his] [C|titanic] [C|six inch] "+
//       "long [C|cock] is so heavy that it drags on the ground. A series of thick bony ridges, each the width of a average "+
//       "sized cock, run down the entire [C|gigantic] length of [Actor's] dragoncock."
//
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # All Sizes
//     params = { shape:"Dragon" }
//
//     batch_create_descriptions params do |tokens|
//       "Sliding free from [his] scaled cocksheath, [Actor's] #{tokens[:large]} [C|cock] extends [C|six inches] proudly in "+
//       "front of [him]. [his] #{tokens[:large]} [C|two inches(cock)] wide dragon cock has a series of thick ridges that "+
//       "extend from its thick head all the way down to [his] sheath."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "A series of thick bony ridges run down the entire length of [Actor's] #{tokens[:large]} [C|six inch long and one inch wide] [C|cock]."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "Extending from [Actor's] scaled cocksheath is #{tokens[:a_large]} [C|six inch long and one inch wide] shaft of ridged dragon meat."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "[Actor's] #{tokens[:large]} [C|six inch] long shaft of dragon flesh extends from [his] scaled cocksheath. The entire "+
//       "length of the #{tokens[:large]} shaft is covered with thick bony ridges."
//     end
//   end
//
//   def self.seed_multiple_dragon_cocks
//
//     # Monstrous: 15.0 - 23.9 inches
//     params = SIZE_PARAMETERS[:monstrous][:params].merge(shape:"Dragon", min_count: 2, max_count:nil)
//
//     cocks = []
//     cocks << "[Actor's] [C|count] [C|monstrous] [C|six inch] long [C|cocks] hang low out of [his] [C|gigantic] scaled sheath. "+
//       "The thick shafts of dragon meat are [C|all/both] ringed with inch thick bony ridges."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Gigantic: 24.0 - 29.9 inches
//     params = SIZE_PARAMETERS[:gigantic][:params].merge(shape:"Dragon", min_count: 2, max_count:nil)
//
//     cocks = []
//     cocks << "[Actor's] [C|count] [C|gigantic] [C|six inch] long [C|cocks] hang down low out of [his] [C|titanic] scaled "+
//       "cocksheath, easily past [his] knees. The entire length of [his] [C|two inch(cock)] thick shafts are [C|all/both] "+
//       "ringed with huge protruding inch and a half tall ridges."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Titanic: > 30 inches
//     params = SIZE_PARAMETERS[:titanic][:params].merge(shape:"Dragon", min_count: 2, max_count:nil)
//
//     cocks = []
//     cocks << "[Actor] has [C|count] dragon sized [C|six inch long and one inch wide] cocks extending from [his] tightly "+
//       "stretched [C|titanic] scaled cocksheath. The entire length of [C|all/both] of [his] [C|two inch(cock)] thick shafts "+
//       "are ringed with [C|monstrous] protruding ridges."
//     cocks << "Between [Actor's] legs is an absurdly large, cocksheath. Even when fully hard [his] [C|count] [C|titanic] "+
//       "[C|six inch] long [C|cocks] are so heavy that they drag on the ground. A series of thick bony ridges, each the "+
//       "width of a average sized cock, run down the entire [C|gigantic] length of [Actor's] [C|two inch(cock)] wide dragoncock."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # All Sizes
//     params = { shape:"Dragon", min_count: 2, max_count:nil }
//
//     batch_create_descriptions params do |tokens|
//       "Sliding free from [his] scaled cocksheath, [Actor's] [C|count] #{tokens[:large]} [C|cocks] each jut [C|six inches] "+
//       "proudly in front of [him]. [His] #{tokens[:large]} [C|two inches(cock)] wide dragon cocks [C|all/both] have a "+
//       "series of thick ridges that extend from their thick heads all the way down to [his] sheath."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "A series of thick bony ridges run down the entire length of each of [Actor's] [C|count] #{tokens[:large]} "+
//       "[C|six inch long and one inch wide] [C|cocks]."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "Extending from [Actor's] extra wide cocksheath are [C|count] #{tokens[:a_large]} [C|six inch long and one inch wide] "+
//       "shafts of hard ridged dragon meat."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "[Actor's] [C|count] #{tokens[:large]} [C|six inch] long shafts of dragon flesh extend from [his] tightly stretched "+
//       "scaled cocksheath. The entire length of each of the #{tokens[:large]} shafts are covered with thick bony ridges."
//     end
//   end
//
//   def self.seed_dragon_cock_ridges
//     # Ridges on a single cock
//     ridges = []
//     ridges << "A series of thick bony ridges the size of [C|a ridge comparator] run down the entire length of [Actor's] dragoncock."
//     ridges << "The entire length of [Actor's] dragoncock is covered in thick bony ridges, each as wide as [C|a ridge comparator]."
//     ridges << "A series of bony ridges as thick as [C|a ridge comparator] run from [his] dragoncock's bulbous head down to the base of [his] scaled sheath."
//     ridges.each do |text|
//       CockDescription.manufacture text, shape:"Dragon", kind:"ridge", max_size:119
//     end
//
//     # Ridges on a huge single cock
//     ridges = []
//     ridges << "A series of [C|ridge comparator] thick ridges run down the entire length of [Actor's] dragoncock."
//     ridges << "The entire length of [Actor's] dragoncock is covered in [C|ridge comparator] thick bony ridges."
//     ridges << "A series of [C|ridge comparator] thick ridges run from [his] dragoncock's bulbous head down to the base of [his] scaled sheath."
//     ridges.each do |text|
//       CockDescription.manufacture text, shape:"Dragon", kind:"ridge", min_size:120
//     end
//
//     # Ridges on multiple cocks
//     ridges = []
//     ridges << "A series of thick bony ridges the size of [C|a ridge comparator] adorn [C|all/both] of [Actor's] dragoncocks."
//     ridges << "A series of bony ridges as thick as [C|a ridge comparator] run from [his] dragoncocks' bulbous heads down to the base of their scaled sheath."
//     ridges << "[Actor's] [C|count] dragoncocks are [C|all/both] covered in thick bony ridges, each as wide as [C|a ridge comparator]."
//     ridges.each do |text|
//       CockDescription.manufacture text, shape:"Dragon", kind:"ridge", max_size:119, min_count:2, max_count:nil
//     end
//
//     # Ridges on huge multiple cocks
//     ridges = []
//     ridges << "A series of [C|ridge comparator] thick ridges adorn [C|all/both] of [Actor's] dragoncocks."
//     ridges << "A series of [C|ridge comparator] thick ridges run from [his] dragoncocks' bulbous heads down to the base of their scaled sheath."
//     ridges << "[Actor's] dragoncocks are [C|all/both] covered in [C|ridge comparator] thick bony ridges."
//     ridges.each do |text|
//       CockDescription.manufacture text, shape:"Dragon", kind:"ridge", min_size:120, min_count:2, max_count:nil
//     end
//   end
//
//
//
//
//   # === Demon Cocks ====================================================================================================
//
//   def self.seed_single_demon_cocks
//
//     # Monstrous: 15.0 - 23.9 inches
//     params = SIZE_PARAMETERS[:monstrous][:params].merge(shape:"Demon")
//
//     cocks = []
//     cocks << "[Actor's] [C|monstrous] [C|cock] is even larger than most any other demon's, measuring "+
//       "[C|six inches long and one inch wide], and almost always hard and [C|throbbing]."
//     cocks << "[Actor's] [C|monstrous] [C|six inch] long [C|cock] looks far too large for a creature of [his] size. The "+
//       "[C|two inch(cock)] thick shaft is perpetually hard, [C|throbbing], dripping [unholy] seed, and yarns for release."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Gigantic: 24.0 - 29.9 inches
//     params = SIZE_PARAMETERS[:gigantic][:params].merge(shape:"Demon")
//
//     cocks = []
//     cocks << "[Actor's] [C|gigantic] [C|cock] would easily hang down between [his] knees if it ever got soft enough. "+
//       "As it is the perpetually hard, [C|six inch] long shaft of [unholy] fuckmeat leaves a constant smear of precum "+
//       "on [his] chest."
//     cocks << "[Actor's] [C|cock] is [C|gigantic], measuring a staggering [C|six inches long and one inch wide], making "+
//       "[his] [C|gigantic] [unholy] shaft one of the largest to be found in all the Abyss."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Titanic: > 30 inches
//     params = SIZE_PARAMETERS[:titanic][:params].merge(shape:"Demon")
//
//     cocks = []
//     cocks << "Even when fully hard [Actor's] [C|titanic] [C|six inch] long [C|cock] is so heavy that it drags on the "+
//       "ground. Measuring a staggering [C|two inches(cock)] wide, [his] cock would look [C|massive] on even the largest "+
//       "of pit fiends."
//     cocks << "[Actor's] [C|titanic] [C|six inch long and one inch wide] [C|cock] resembles a third leg the way its "+
//       "[C|titanic] cockhead nearly drags along the ground."
//     cocks << "[Male Demon] himself would be proud to wield the [C|titanic] [C|six inch] long, [C|two inch(cock)] wide "+
//       "[C|cock] that hangs down between [Actor's] legs."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # All Sizes
//     params = { shape:"Demon" }
//
//     batch_create_descriptions params do |tokens|
//       "A small puddle of cum can almost always be found on the ground between [Actor's] feet. [His] [C|six inch] long "+
//       "[C|cock] dripping [unholy] seed ceaselessly from its knobby [C|two inch(cock)] wide tip."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "[Actor's] #{tokens[:large]} [C|cock] is almost always fully hard, [C|throbbing] with [unholy] intent. The "+
//       "#{tokens[:large]} [unholy] shaft of fuckmeat is [C|six inches long and one inch wide]."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "[Actor] has #{tokens[:a_large]}, perpetually hard, [C|six inch long and one inch wide] [C|cock]. [His] "+
//       "#{tokens[:large]} [unholy] shaft continuously drips precum from its tip and looks ready to burst at any moment."
//     end
//   end
//
//   def self.seed_multiple_demon_cocks
//     # Monstrous: 15.0 - 23.9 inches
//     params = SIZE_PARAMETERS[:monstrous][:params].merge(shape:"Demon", min_count: 2, max_count:2)
//
//     cocks = []
//     cocks << "[Actor's] two [C|monstrous] [C|cocks] are even larger than most any other demon's, measuring "+
//       "[C|six inches long and one inch wide], and are almost always hard and [C|throbbing]."
//     cocks << "[Actor's] pair of [C|monstrous] [C|six inch] long [C|cocks] look far too large for a creature of [his] "+
//       "size. The twin [C|two inch(cock)] thick shafts are perpetually hard, [C|throbbing], dripping [unholy] seed, "+
//       "and yarn for release."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Gigantic: 24.0 - 29.9 inches
//     params = SIZE_PARAMETERS[:gigantic][:params].merge(shape:"Demon", min_count: 2, max_count:2)
//
//     cocks = []
//     cocks << "[Actor's] [C|gigantic] [C|cocks] would both easily hang down between [his] knees if they ever got soft "+
//       "enough. As it is the two perpetually hard, [C|six inch] long shafts of [unholy] fuckmeat leave a constant smear "+
//       "of precum on [his] chest."
//     cocks << "[Actor's] twin [C|cocks] are [C|gigantic], measuring a staggering [C|six inches long and one inch wide], "+
//       "making [his] two [C|gigantic] [unholy] shafts some of the largest to be found in all the Abyss."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # Titanic: > 30 inches
//     params = SIZE_PARAMETERS[:titanic][:params].merge(shape:"Demon", min_count: 2, max_count:2)
//
//     cocks = []
//     cocks << "Even when fully hard [Actor's] pair of [C|titanic] [C|six inch] long [C|cocks] are so heavy that they "+
//       "drag on the ground. Measuring a staggering [C|two inches(cock)] wide, [his] cocks would look [C|massive] on "+
//       "even the largest of pit fiends."
//     cocks << "[Male Demon] himself would be proud to wield the pair of [C|titanic] [C|six inch] long, "+
//       "[C|two inch(cock)] wide [C|cocks] that hang down between [Actor's] legs."
//     cocks.each do |text|
//       CockDescription.manufacture text, params
//     end
//
//     # All Sizes
//     params = { shape:"Demon", min_count: 2, max_count:2 }
//
//     batch_create_descriptions params do |tokens|
//       "A small puddle of cum can almost always be found on the ground between [Actor's] feet. [His] pair of "+
//       "[C|six inch] long [C|cocks] drip [unholy] seed ceaselessly from their knobby [C|two inch(cock)] wide cockheads."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "[Actor's] pair of #{tokens[:large]} [C|cocks] are almost always fully hard, and [C|throb] with [unholy] intent. "+
//       "The #{tokens[:large]} [unholy] shafts of fuckmeat are both [C|six inches long and one inch wide]."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "[Actor] has a pair of #{tokens[:a_large]}, perpetually hard, [C|six inch long and one inch wide] [C|cocks]. "+
//       "[His] #{tokens[:large]} [unholy] shafts continuously drip precum from their tips and both look ready to burst "+
//       "at any moment."
//     end
//
//     params = { shape:"Demon", min_count: 3, max_count:nil }
//
//     batch_create_descriptions params do |tokens|
//       "[Actor's] has been blessed with a cluster of [C|count] #{tokens[:a_large]} [C|cocks]. Each of [his] [unholy] "+
//       "shafts are [C|six inches long and one inch wide]. [His] cocks though have been cursed to always remain hard, "+
//       "in a constant state of cum dripping arousal, and can never be completely satisfied."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "[Actor's] cluster of [C|count] #{tokens[:large]} [C|cocks] are almost always fully hard, dripping and [C|throbbing] with "+
//       "[unholy] intent. The #{tokens[:large]} [unholy] shafts of fuckmeat are all [C|six inches long and one inch wide]."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "[Actor] has [C|count] #{tokens[:a_large]}, perpetually hard cocks, crowded between [his] legs. Each of [his] "+
//       "[C|six inch long and one inch wide] [C|cocks] continuously drip precum from their tips and look ready to burst "+
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
//       "Like a dog, [his] [unholy] [C|cock] emerges from #{tokens[:a_large]} leathery sheath with a [C|two inch(knot)] "+
//       "knot the size of [C|a knot comparator] at its base."
//     end
//
//     batch_create_descriptions params do |tokens|
//      "The base of [his] shaft emerges from #{tokens[:a_large]} leathery cocksheath, and like a dog's cock, swells into "+
//      "[C|a knot adjective] [C|two inch(knot)] wide knot."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "Unlike most demon's, [his] cock emerges from #{tokens[:a_large]} leathery cocksheath, and swells into "+
//       "[C|a knot adjective] [C|two inch(knot)] wide knot."
//     end
//
//     # Multiple Knots
//     params = { shape:"Demon", kind:"knot", min_count:2, max_count:nil }
//
//     batch_create_descriptions params do |tokens|
//       "The base of [his] shafts emerge from a widely stretched #{tokens[:large]} leathery cocksheath, and like "+
//       "dog cocks, they [C|all/both] swell into [C|a knot adjective] [C|two inch(knot)] wide knots."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "Like a dog, [his] [unholy] [C|cocks] emerge from a hugely stretched leathery sheath, and have "+
//       "#{tokens[:large]}, [C|two inch(knot)] wide knots the size of [C|a knot comparators]."
//     end
//
//     batch_create_descriptions params do |tokens|
//       "Unlike most demon's, [his] cocks emerge from #{tokens[:a_large]} leathery cocksheath, and swell into "+
//       "[C|knot adjective] [C|two inches(knot)] wide knots."
//     end
//
//     # The cock od Cerebus
//     params = { shape:"Demon", kind:"knot", min_count:3, max_count:3, min_size:200, max_size:nil }
//     text = "Like the cocks of Cerebus himself, [his] three [unholy] [C|cocks] emerge from a tightly stretched "+
//         "[C|titanic] cocksheath. At the base of each cock is a [C|a knot adjective] knot the size of "+
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
//     knobs << "The entire length of [his] cock is textured with gnarled little [C|knob comparator] sized bumps."
//     knobs << "[Actor's] [C|cock] is studded, seemingly at random, with hard little nubs the size of [C|knob comparators]."
//     knobs << "Small, [C|knob comparator] sized bulges, adorn every inch of [Actor's] shaft, the [unholy] protrusions "+
//       "pulse and throb with [his] cock."
//     knobs.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"knob", min_size:0, max_size:0
//     end
//
//     # Tiny knobs on multiple cocks
//     knobs = []
//     knobs << "The [C|count] [C|cocks] are [C|all/both] textured with gnarled little [C|knob comparator] sized bumps."
//     knobs << "[Actor's] [C|cocks] are studded, seemingly at random, with hard little nubs the size of [C|knob comparators]."
//     knobs << "Small, [C|knob comparator] sized bulges, adorn every inch of [Actor's] shafts, the [unholy] protrusions "+
//       "pulse and throb with [his] cock."
//     knobs.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"knob", min_size:0, max_size:0, min_count:2, max_count:nil
//     end
//
//     # Knobs on a single cock
//     knobs = []
//     knobs << "The entire length of [his] cock is textured with gnarled [C|two inch(knobs)] bumps, each the size of "+
//       "[C|a knob comparator]."
//     knobs << "[Actor's] [C|cock] is studded, seemingly at random, with hard [C|two inch(knobs)] wide knobs, each the "+
//       "size of [C|a knob comparator]."
//     knobs << "Thick, [C|knob comparator] sized bulges, adorn every inch of [Actor's] shaft, the [unholy] protrusions "+
//       "pulse and throb with [his] cock."
//     knobs.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"knob", min_size:25
//     end
//
//     # Knobs on multiple cocks
//     knobs = []
//     knobs << "The [C|count] [C|cocks] are [C|all/both] textured with gnarled [C|two inch(knobs)] bumps, each the size "+
//       "of [C|a knob comparator]."
//     knobs << "[Actor's] [C|cocks] are studded, seemingly at random, with hard [C|two inch(knobs)] wide knobs, each the "+
//       "size of [C|a knob comparator]."
//     knobs << "Thick, [C|knob comparator] sized bulges, adorn every inch of [Actor's] shafts, the [unholy] protrusions "+
//       "pulse and throb with [his] cock."
//     knobs.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"knob", min_size:25, min_count:2, max_count:nil
//     end
//   end
//
//   def self.seed_demon_cock_spines
//
//     # Tiny spines on a single cock
//     spines = []
//     spines << "The entire length of [his] cock is covered in sharp little, backward facing spines."
//     spines << "Like a cat, [Actor's] cock is covered in sharp little, backward facing spines"
//     spines << "Small sharp spikes adorn the length of [his] cock, giving it a rough feline texture."
//     spines.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"spine", min_size:0, max_size:0
//     end
//
//     # Tiny spines on multiple cocks
//     spines = []
//     spines << "The entire length of [his] cocks are [C|all/both] covered in sharp little, backward facing spines."
//     spines << "Like a cat, [Actor's] cocks are covered in sharp little, backward facing spines"
//     spines << "Small sharp spikes adorn [C|all/both] of [his] cocks, giving them a rough feline texture."
//     spines.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"spine", min_size:0, max_size:0, min_count:2, max_count:nil
//     end
//
//     # Spines on a single cocks
//     spines = []
//     spines << "The entire length of [his] [unholy] cock is covered in hard, backward facing spines. The spines are "+
//       "[C|two inches(spines)] long around the crown of [his] cockhead, but grow shorter near the base."
//     spines << "Firm [C|two inch(spines)] long spines adorn the length of [his] cock, facing backwards so that they "+
//       "rub painfully at whatever [his] cock is thrust into."
//     spines << "Wicked [C|two inch(spines)] long, backward facing spines completely cover [Actor's] [unholy] cock. "+
//       "The wide, dull spikes are thickest around the crown of [his] cockhead and flatten out near the base."
//     spines.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"spine", min_size:25, max_size:200
//     end
//
//     # Spines on multiple cocks
//     spines = []
//     spines << "[C|All/Both] of [his] [unholy] cocks are covered in hard, backward facing spines. The spines are "+
//       "[C|two inches(spines)] long around the crowns of [his] cocks, but grow shorter near their base."
//     spines << "Firm [C|two inch(spines)] long spines adorn the length of [his] cocks, facing backwards so that they "+
//       "rub painfully at whatever they're thrust into."
//     spines << "Wicked [C|two inch(spines)] long, backward facing spines completely cover [C|all/both] of [Actor's] "+
//       "[unholy] cocks. The thick, dull spikes are thickest around the crowns of [his] cockheads and thin out near "+
//       "their base where they lie flat."
//     spines.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"spine", min_size:25, max_size:200, min_count:2, max_count:nil
//     end
//
//     # Huge spines on a single cock
//     spines = []
//     spines << "Given the sadistic [C|two inch(spines)] long spines that cover [Actor's] cock, the [unholy] shaft's only "+
//       "conceivable use is as a weapon of war, or maybe as a status symbol recognized only in the deepest bowels of "+
//       "the Abyss. The bony spines are thick and dull, but stiff like short fingers protruding backwards from the "+
//       "surface of [his] cock."
//     spines << "[Actor's] [C|cock] is a true cunt destroyer, it's entire surface covered in thick [C|two inch(spines)] "+
//       "long spikes. The spines are firm and dull, like thick fingers made to rake painfully against whatever they're "+
//       "thrust into. The spines are thickest around [his] cockhead, but grow shorter near the base."
//     spines.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"spine", min_size:225, max_size:400
//     end
//
//     # Huge spines on multiple cocks
//     spines = []
//     spines << "Given the sadistic [C|two inch(spines)] long spines that cover [Actor's] cocks, their only "+
//       "conceivable use is as weapons of war, or perhaps as status symbols, recognized only in the deepest bowels of "+
//       "the Abyss. The bony spines are thick and dull, but stiff like short fingers protruding backwards from the "+
//       "surface of [his] cocks."
//     spines << "[Actor's] [C|cocks] are true cunt destroyers, their entire surface covered in thick [C|two inch(spines)] "+
//       "long spikes. The spines are firm and dull, like thick fingers made to rake painfully against whatever they're "+
//       "thrust into. The spines are thickest around [his] cockheads, but grow shorter near their base."
//     spines.each do |text|
//       CockDescription.manufacture text, shape:"Demon", kind:"spine", min_size:225, max_size:400, min_count:2, max_count:nil
//     end
//   end
//
// end
