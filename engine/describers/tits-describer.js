global.TitsDescriber = (function() {

  async function fullDescription(character) {
    const parts = await character.getCompleteBody();
    const injuries = await character.getAllInjuries();
    return syncFullDescription(character, parts, injuries);
  }

  function syncFullDescription(character, parts, injuries) {
    const blighted = injuries.filter(injury => { return injury.location == 'tits' && injury.damageType == 'blight' })[0];
    const wounds = injuryDescriptions(injuries);

    // The blighted description supercedes the normal tits description, though
    // other injury descriptions are still tacked on at the end.
    if (blighted) { return `${blighted.description} ${wounds}`; }

    if (parts.tits == null) { return `${maleDescription(character, parts)} ${wounds}` }
    if (character.speciesCode == 'rat') { return `${ratTits(character,parts)} ${ratNipples(character,parts)} ${wounds}` }

    return Weaver.error('Needs more tits!')
  }

  function maleDescription(character, parts) {
    return "[TODO: Male Nipples]"
  }

  // Rats are unique among the characters because they have 12 tits, arranged
  // in two rows. They're usually flat chested, but can have prominent nipples.
  function ratTits(character, parts) {
    let tits = parts.tits;

    if (tits.shape == 'flat' && tits.sizeClass == 'zero') { return Random.from([
      `{{C::character.firstName}} has a completely flat chest. {{C::gender.His}} chest is lean and muscular and could easily be mistaken for a man's if not for {{C::gender.his}} many prominent nipples.`,
      `{{C::character.firstName}} has a lean muscular chest that could easily be mistaken for a man's if not for {{C::gender.his}} many prominent nipples.`,
      `{{C::character.firstName's}} chest is washboard flat, with absolutely no ${_tits()} to speak of.`,
    ]); }

    if (tits.shape == 'conical' && tits.sizeClass == 'tiny') { return Random.from([
      `{{C::character.firstName's}} chest is studded with twelve tiny conical ${_tits()}. {{C::gender.his}} ${_tits()} are too small to do much more than push {{C::gender.his}} many prominent nipples out just a bit further.`,
      `{{C::character.firstName}} has twelve tiny cone shaped ${_tits()}. They're each quite small and don't do much other than press {{C::gender.his}} many prominent nipples out just a bit further.`,
      `{{C::character.firstName}} has six rows of tiny conical ${_tits()}. Each of {{C::gender.his}} ${_tits()} is capped by a prominent nipple almost as large as the ${_tit()} itself.`,
    ]); }

    if (tits.shape == 'conical' && tits.sizeClass == 'small') { return Random.from([
      `{{C::character.firstName's}} chest is studded with twelve small conical ${_tits()}. {{C::gender.his}} ${_tits()} are wide at the base and come to a narrow tip, which makes {{C::gender.his}} prominent nipples seem to poke out even further.`,
      `{{C::character.firstName}} has twelve small cone shaped ${_tits()}. Each of {{C::gender.his}} small ${_tits()} are wide at the base and come to a narrow tip, then capped with a thick and prominent nipple.`,
      `{{C::character.firstName}} has six rows of small conical ${_tits()}. Each of {{C::gender.his}} ${_tits()} is capped by a prominent nipple almost as large as the ${_tit()} itself.`,
    ]); }

    if (tits.shape == 'perky' && tits.sizeClass == 'tiny') { return Random.from([
      `{{C::character.firstName's}} ${_tits()} are tiny and perky, with prominent upturned nipples set high on each of {{C::gender.his}} ${_tits()}.`,
      `{{C::character.firstName's}} chest is adorned with twelve tiny ${_tits()}. Each of {{C::gender.his}} perky upturned ${_tits()} is too small to do much more than push {{C::gender.his}} many prominent nipples out just a bit further.`,
      `{{C::character.firstName}} has six rows of tiny ${_tits()}. {{C::gender.His}} twelve prominent nipples are set high on each of {{C::gender.his}} perky tits, making them look even more jutting and pinchable.`
    ]); }

    if (tits.shape == 'perky' && tits.sizeClass == 'small') { return Random.from([
      `{{C::character.firstName's}} ${_tits()} are small and perky, with prominent upturned nipples set high on each of {{C::gender.his}} ${_tits()}.`,
      `{{C::character.firstName's}} chest is adorned with twelve small ${_tits()}. Each of {{C::gender.his}} perky upturned ${_tits()} pushes {{C::gender.his}} prominent nipples upward proudly.`,
      `{{C::character.firstName}} has six rows of small ${_tits()}. {{C::gender.His}} twelve prominent nipples are set high on each of {{C::gender.his}} perky tits, making them look even more jutting and pinchable.`
    ]); }

    if (tits.shape == 'round' && tits.sizeClass == 'tiny') { return Random.from([
      `{{C::character.firstName's}} ${_tits()} are round but tiny. Each of {{C::gender.his}} tiny round orbs is slightly smaller than a lemon and capped with a thick prominent nipple.`,
      `{{C::character.firstName's}} chest is studded with twelve tiny ${_tits()}. Each of {{C::gender.his}} round ${_tits()} are slightly smaller than a lemon and capped with a thick prominent nipple.`,
      `{{C::character.firstName}} has twelve round but tiny ${_tits()}. Each of {{C::gender.his}} tits are slightly smaller than a lemon and capped with a thick prominent nipple.`,
    ]); }

    if (tits.shape == 'round' && tits.sizeClass == 'small') { return Random.from([
      `{{C::character.firstName's}} ${_tits()} are small and round. Each of {{C::gender.his}} round ${_tits()} is slightly larger than a lemon and capped with a thick prominent nipple.`,
      `{{C::character.firstName's}} chest is studded with twelve small ${_tits()}. Each of {{C::gender.his}} round ${_tits()} are slightly larger than a lemon and capped with a thick prominent nipple.`,
      `{{C::character.firstName}} has twelve small round ${_tits()}. Each of {{C::gender.his}} tits are slightly larger than a lemon and capped with a thick prominent nipple.`,
    ]); }

    return Weaver.error(`TODO: Describe rat tits of larger sizes.`)
  }

  function ratNipples(character,parts) {
    return "[TODO: Rat Nipples]"
  }

  // Collect all of the injury descriptions, except for the blight description.
  function injuryDescriptions(injuries) {
    return injuries.filter(injury => {
      return injury.location == 'tits' && injury.damageType != 'blight'
    }).map(injury => {
      return ` ${injury.description}`;
    });
  }

  // Synonym Generators
  function _tits() {
    return Random.fromFrequencyMap({ breasts:10, tits:10, boobs:1, knockers:1 });
  }

  function _tit() {
    return Random.fromFrequencyMap({ breast:3, tit:4, boob:1 });
  }

  return { fullDescription, syncFullDescription }

})();


//   def describe_multiple_breasts
//
//     bottom_size = @breast_size / 2
//     row_count = number_to_english(@breast_count / 2)
//     size_top = breast_size_comparative_singular
//     size_bottom = breast_size_comparative_singular(@breast_size / 2)
//     roll = Roll.random 1,2
//
//     if roll == 1
//       return "#{@first_name} has #{row_count} rows of "+
//         "#{word_for_breasts}. The top row of #{word_for_breasts} are the "+
//         "largest, about #{size_top} sized, and get progressively smaller "+
//         "until they're about as big as #{a_an size_bottom}. #{@his.titlecase} "+
//         "#{breast_size_adjective} #{word_for_breasts} are all tipped with "+
//         "#{describe_nipples_short}."
//     end
//
//     if roll == 2
//       return "#{@first_name} has a total of "+
//         "#{number_to_english(@breast_count)} #{word_for_breasts}, arranged on "+
//         "#{@his} chest in #{row_count} rows. "+
//         "#{@his.titlecase} top row of #{word_for_breasts} are the "+
//         "largest, easily #{size_top} sized. They grow smaller down "+
//         "#{@his} chest until they're each as large as "+
//         "#{a_an size_bottom}. #{@his.titlecase} #{breast_size_adjective} "+
//         "#{word_for_breasts} are tipped with #{describe_nipples_short}."
//     end
//   end
//
//
//   def describe_flat_breasts
//
//     she = @he.titlecase
//     her = @his.titlecase
//     furry = skin_adjective
//     phrases = []
//
//     if @body.bmi <= 20
//       phrases << "#{her} #{furry} chest is completely flat"
//       phrases << "#{her} #{furry} chest is almost completely flat"
//       phrases << "#{her} #{furry} chest is flat and boy-like"
//       phrases << "#{she} has a flat, boy-like chest"
//       phrases << "#{she} has a slender, boyish chest"
//     end
//
//     if @body.bmi <= 28 && @body.bmi > 20
//       phrases << "#{her} #{furry} lean, muscular chest is flat and boy-like"
//       phrases << "#{her} #{furry} chest is muscular and completely flat"
//       phrases << "#{her} muscular chest is completely flat"
//       phrases << "#{she} has a flat muscular chest"
//       phrases << "#{she} has a lean flat chest"
//     end
//
//     "#{Roll.random_from(phrases)}, with #{describe_nipples_short}."
//   end
//
//
//   def breast_size_comparative_singular size=nil
//     size = @breast_size if size.nil?
//
//     Roll.random_from case size
//       when 0..5    then ["golf ball","half a lemon"]
//       when 6..15   then ['avacado',"lemon","tennis ball","half an apple","half an orange"]
//       when 16..25  then ["baseball","orange","peach","apple","fist"]
//       when 26..40  then ["grapefruit","softball","small melon"]
//       when 41..60  then ["melon","large melon","half a watermelon","pumpkin"]
//       when 61..80  then ["bowling ball","basketball"]
//       when 81..100 then ["watermelon","beachball"]
//       else ["[TODO: Breasts are too big > #{size}]"]
//     end
//   end
//
//   def breast_size_adjective
//     Roll.random_from case @breast_size
//       when 0..5    then ["flat","miniature","boyish","undeveloped"]
//       when 6..15   then ["tiny","little","very small","petite"]
//       when 16..25  then ["little","small","cute","modest"]
//       when 26..40  then ["average","plump","shapely","full"]
//       when 41..60  then ["large","big","fat"]
//       when 61..80  then ["very large","huge","very big"]
//       when 81..90  then ["gigantic","immense","giant","enormous","massive"]
//       when 91..100 then ["titanic","colossal","gargantuan","monstrous","tremendous"]
//       else ["[TODO: Breasts are too big > #{size}]"]
//     end
//   end
//
// end


//
//   # --- Nipples ----------------------------------------------------------------
//
//   # The short nipple description is a phrase describing the character's nipples
//   # that can be included in another description or used by itself. The phrase
//   # will be in a form like:
//   #
//   #   large nipples
//   #   long black nipples
//   #   pale nipples the size of her thumbs
//
//   def describe_nipples_short
//
//     color = nipple_shade_string
//
//     # If the character is human sized with nornal nipples then the description
//     # sometimes return a comparative size.
//     if @nipple_shape == "Normal" && @body.human_sized? && @nipple_size > 2
//       roll = Roll.random 1, 12
//
//       return "#{nipple_size_comparative_singular} sized nipples" if roll == 1
//       return "#{color}, #{nipple_size_comparative_singular} sized nipples"  if roll == 2
//       return "nipples the size of #{nipple_size_comparative_plural}" if roll == 3
//       return "#{color} nipples the size of #{nipple_size_comparative_plural}"if roll == 4
//     end
//
//     case Roll.random 1,10
//       when 1..5  then "#{nipple_size_adjective} nipples"
//       when 6..7  then "#{nipple_shade_string} nipples"
//       when 8..10 then "#{nipple_size_adjective} #{nipple_shade_string} nipples"
//     end
//   end
//
//
//   # ---------------------------------------------------------------------
//   # These three nipple size methods only apply to normally shaped nipples
//   # ---------------------------------------------------------------------
//
//   def nipple_size_comparative_singular
//     Roll.random_from case @nipple_size
//       when 2 then ["pea","BB"]
//       when 3 then ["raisin","peanut","eraser tip"]
//       when 4 then ["pebble","button","good"]
//       when 5 then ["acorn","thimble","olive"]
//       when 6 then ["dime","marble","grape","penny"]
//       when 7 then ["fingertip","cherry"]
//       when 8 then ["thumb","quarter","walnut"]
//       when 9 then ["strawberry","half dollar","marshmallow","golf ball"]
//       else ["[TODO: Nipples bigger than #{@nipple_size}]"]
//     end
//   end
//
//   def nipple_size_comparative_plural
//     Roll.random_from case @nipple_size
//       when 2 then ["peas","BBs"]
//       when 3 then ["raisins","peanuts","eraser tips"]
//       when 4 then ["pebbles","buttons"]
//       when 5 then ["acorns","hazelnuts","thimbles","olives"]
//       when 6 then ["dimes","marbles","grapes"]
//       when 7 then ["#{@his} fingertips","cherries","nickels"]
//       when 8 then ["#{@his} thumbs","quarters","walnuts"]
//       when 9 then ["strawberries","half dollars","marshmallows","D batteries","shot glasses","golf balls"]
//       else ["[TODO: Nipples bigger than #{@nipple_size}]"]
//     end
//   end
//
//   def nipple_size_adjective
//     Roll.random_from case @nipple_size
//       when 0 then ["flat","perfectly flat"]
//       when 1 then ["tiny","small, cute","miniature","very small"]
//       when 2 then ["small","little"]
//       when 3 then ["smaller than average sized","smallish"]
//       when 4 then ["average sized","wrinkled"]
//       when 5 then ["larger than average sized","plump","swollen","wrinkled"]
//       when 6 then ["much larger than average sized","sizable","large","plump","big","full","long"]
//       when 7 then ["huge","thick","immense","tremendous","very long","long and thick"]
//       when 8 then ["monstrously huge","massively long and thick","enormously huge","huge, towering"]
//       else ["monstrously colossal","massive, titanic","enormous, gigantic","gargantuan"]
//     end
//   end
//
//   def nipple_shade_string
//     Roll.random_from case @nipple_shade
//       when 0 then ["black","dark ebony","extremely dark"]
//       when 1 then ["very dark","ebony","nearly black","deep mahogany colored"]
//       when 2 then ["dark brown","dark","chocolate colored","rich brown"]
//       when 3 then ["brown","bronze colored","copper colored","dark amber"]
//       when 4 then ["light brown","deeply flushed","amber"]
//       when 5 then ["dark pink","rose colored","flushed","light amber"]
//       when 6 then ["pink","lightly flushed","pale amber"]
//       when 7 then ["light pink","pale","pale pink","lightly colored"]
//       when 8 then ["very pale","nearly completely pale"]
//       else ["totally pale","completely pale","extremely pale"]
//     end
//   end
//
// end
