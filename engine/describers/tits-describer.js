global.TitsDescriber = class TitsDescriber {

  constructor(character, tits) {
    this._character = character;
    this._tits = tits;
  }

  get tits() { return this._tits; }
  get character() { return this._character; }

  async updateDescription() {
    let mask = `
      ${this.tits.blightLevel > 0 ? 1 : 0}
      ${this.tits.burnLevel > 0 ? 1 : 0}
      ${this.tits.smashLevel > 0 ? 1 : 0}
    `.replace(/\s+/g,'');

    this.tits.description = null;
    if (mask == '000') { this.tits.description = `${this.d_normal('init')}`; }
    if (mask == '001') { this.tits.description = `${this.d_normal('init')} ${this.d_smashed('firstInjury')}`; }

    if (this.tits.description != null) { await this.tits.save(); } else {
      throw `Unable to describe tits with bit mask [${mask}]`
    }
  }

  // === Descriptions ===

  d_normal(position) {
    if (Random.upTo(1) == 0) {
      return `${this.c_objective(position)} has big tits.`
    } else {
      return `${this.c_possessive(position)} tits are big.`
    }
  }

  d_smashed(position) {
    return `${this.s_injuryStart(position,this.tits.smashPlace)} smashed.`
  }

  // === Segments ===

  c_objective(position) {
    return (position == 'init') ? '{{C::character.firstName}}' : '{{C::gender.He}}'
  }
  c_possessive(position) {
    return (position == 'init') ? `{{C::character.firstName's}}` : '{{C::gender.His}}'
  }

  s_injuryStart(position,place,previous) {
    if (position == 'firstInjury') {
      if (place == 'all') { return Random.from([
        '{{C::gender.His}} {{tits}} have been',
        'It looks like {{C::gender.his}} {{tits}} have been',
      ]); }

      return Random.from([
        `One of {{C::gender.his}} {{tits}} has been`,
        `It looks like one of {{C::gender.his}} {{tits}} has been`,
      ]);
    }
    if (position == 'nextInjury') {
      // 'The same tit has also been'
      // 'Her other tit has also been'
      // "They've also been"
      // "Then, her tits have also been"
    }
  }
}


// let key = `smash.${tits.smashLevel}`
//
// let description = Random.from(Description.where(desc => {
//   if (tits.count > 2)      { return false; } // TODO: Handle smashed multi breasts.
//   if (desc.type != 'tits') { return false; }
//   if (desc.injury != key)  { return false; }
//   if (desc.count == 'one'    && tits.smashCount != 1)     { return false; }
//   if (desc.place == 'single' && tits.smashPlace == 'all') { return false; }
//   if (desc.place == 'all'    && tits.smashPlace != 'all') { return false; }
//   return true;
// }));
//
// console.log("GOT Desc: ",description.properties);
//
// return description.template;


// global.TitsDescriber = (function() {
//
//   // The updateDescription() function takes all of the attributes on the tits
//   // and builds a description, which it then caches on the tits model itself.
//
//
//
//   function syncFullDescription(character, parts) {
//     // const blighted = injuries.filter(injury => { return injury.location == 'tits' && injury.damageType == 'blight' })[0];
//     // const wounds = injuryDescriptions(injuries);
//
//     // The blighted description supercedes the normal tits description, though
//     // other injury descriptions are still tacked on at the end.
//     // if (blighted) { return `${blighted.description} ${wounds}`; }
//
//     if (parts.tits == null) { return `${maleDescription(character, parts)}` }
//     if (character.speciesCode == 'rat') { return `${ratTits(character, parts.tits)} ${describeNipples(character, parts.nipples)}` }
//
//     return Weaver.error('Needs more tits!')
//   }
//
//   function maleDescription(character, parts) {
//     return "[TODO: Male Nipples]"
//   }
//
//   // Rats are unique among the characters because they have 12 tits, arranged
//   // in two rows. They're usually flat chested, but can have prominent nipples.
//   function ratTits(character, tits) {
//     if (tits.shape == 'flat' && tits.sizeClass == 'zero') { return Random.from([
//       `{{C::character.firstName}} has a completely flat chest. {{C::gender.His}} chest is lean and muscular and could easily be mistaken for a man's if not for {{C::gender.his}} many prominent nipples.`,
//       `{{C::character.firstName}} has a lean muscular chest that could easily be mistaken for a man's if not for {{C::gender.his}} many prominent nipples.`,
//       `{{C::character.firstName's}} chest is washboard flat, with absolutely no ${_tits()} to speak of.`,
//     ]); }
//
//     if (tits.shape == 'conical' && tits.sizeClass == 'tiny') { return Random.from([
//       `{{C::character.firstName's}} chest is studded with twelve tiny conical ${_tits()}. {{C::gender.his}} ${_tits()} are too small to do much more than push {{C::gender.his}} many prominent nipples out just a bit further.`,
//       `{{C::character.firstName}} has twelve tiny cone shaped ${_tits()}. They're each quite small and don't do much other than press {{C::gender.his}} many prominent nipples out just a bit further.`,
//       `{{C::character.firstName}} has six rows of tiny conical ${_tits()}. Each of {{C::gender.his}} ${_tits()} is capped by a prominent nipple almost as large as the ${_tit()} itself.`,
//     ]); }
//
//     if (tits.shape == 'conical' && tits.sizeClass == 'small') { return Random.from([
//       `{{C::character.firstName's}} chest is studded with twelve small conical ${_tits()}. {{C::gender.his}} ${_tits()} are wide at the base and come to a narrow tip, which makes {{C::gender.his}} prominent nipples seem to poke out even further.`,
//       `{{C::character.firstName}} has twelve small cone shaped ${_tits()}. Each of {{C::gender.his}} small ${_tits()} are wide at the base and come to a narrow tip, then capped with a thick and prominent nipple.`,
//       `{{C::character.firstName}} has six rows of small conical ${_tits()}. Each of {{C::gender.his}} ${_tits()} is capped by a prominent nipple almost as large as the ${_tit()} itself.`,
//     ]); }
//
//     if (tits.shape == 'perky' && tits.sizeClass == 'tiny') { return Random.from([
//       `{{C::character.firstName's}} ${_tits()} are tiny and perky, with prominent upturned nipples set high on each of {{C::gender.his}} ${_tits()}.`,
//       `{{C::character.firstName's}} chest is adorned with twelve tiny ${_tits()}. Each of {{C::gender.his}} perky upturned ${_tits()} is too small to do much more than push {{C::gender.his}} many prominent nipples out just a bit further.`,
//       `{{C::character.firstName}} has six rows of tiny ${_tits()}. {{C::gender.His}} twelve prominent nipples are set high on each of {{C::gender.his}} perky tits, making them look even more jutting and pinchable.`
//     ]); }
//
//     if (tits.shape == 'perky' && tits.sizeClass == 'small') { return Random.from([
//       `{{C::character.firstName's}} ${_tits()} are small and perky, with prominent upturned nipples set high on each of {{C::gender.his}} ${_tits()}.`,
//       `{{C::character.firstName's}} chest is adorned with twelve small ${_tits()}. Each of {{C::gender.his}} perky upturned ${_tits()} pushes {{C::gender.his}} prominent nipples upward proudly.`,
//       `{{C::character.firstName}} has six rows of small ${_tits()}. {{C::gender.His}} twelve prominent nipples are set high on each of {{C::gender.his}} perky tits, making them look even more jutting and pinchable.`
//     ]); }
//
//     if (tits.shape == 'round' && tits.sizeClass == 'tiny') { return Random.from([
//       `{{C::character.firstName's}} ${_tits()} are round but tiny. Each of {{C::gender.his}} tiny round orbs is slightly smaller than a lemon and capped with a thick prominent nipple.`,
//       `{{C::character.firstName's}} chest is studded with twelve tiny ${_tits()}. Each of {{C::gender.his}} round ${_tits()} are slightly smaller than a lemon and capped with a thick prominent nipple.`,
//       `{{C::character.firstName}} has twelve round but tiny ${_tits()}. Each of {{C::gender.his}} tits are slightly smaller than a lemon and capped with a thick prominent nipple.`,
//     ]); }
//
//     if (tits.shape == 'round' && tits.sizeClass == 'small') { return Random.from([
//       `{{C::character.firstName's}} ${_tits()} are small and round. Each of {{C::gender.his}} round ${_tits()} is slightly larger than a lemon and capped with a thick prominent nipple.`,
//       `{{C::character.firstName's}} chest is studded with twelve small ${_tits()}. Each of {{C::gender.his}} round ${_tits()} are slightly larger than a lemon and capped with a thick prominent nipple.`,
//       `{{C::character.firstName}} has twelve small round ${_tits()}. Each of {{C::gender.his}} tits are slightly larger than a lemon and capped with a thick prominent nipple.`,
//     ]); }
//
//     return Weaver.error(`TODO: Describe rat tits of larger sizes. Shape:${tits.shape} Size:${tits.sizeClass}`)
//   }
//
//   // Get general nipple descriptions.
//   function describeNipples(character,nipples) {
//     let pile = []
//
//     if (nipples.shape == 'puffy') {
//       ArrayUtility.addAll(pile,[
//         `{{C::gender.He}} has {{C::nipples.large}} {{C::nipples.color}} puffy nipples that are nearly as long as they are wide.`,
//         `{{C::gender.He}} has {{C::nipples.large}} puffy nipples the size of {{C::nipples.grapes}}.`,
//         `{{C::gender.His}} {{C::nipples.large}} {{C::nipples.color}} puffy nipples prodrude far from the surface of {{C::gender.his}} ${_tits()}.`,
//         `{{C::gender.His}} puffy {{C::nipples.color}} nipples are about {{C::nipples.width}} wide, and nearly as long.`,
//         `{{C::gender.His}} puffy {{C::nipples.color}} nipples are about {{C::nipples.length}} long and are as thick as {{C::nipples.grapes}}.`,
//       ]);
//
//       if (character.species.isFurry) { ArrayUtility.addAll(pile,[
//         `{{C::gender.His}} {{C::nipples.large}} {{C::nipples.color}} nipples protrude noticibly from {{C::gender.his}} fur covered chest.`,
//         `{{C::gender.He}} has {{C::nipples.large}} {{C::nipples.grape}} sized nipples that extend well past {{C::gender.his}} chest fur.`,
//       ]); }
//     }
//
//     return (pile.length > 0) ?
//       Random.from(pile):
//       Weaver.error(`TODO: Needs more nipples!`);
//   }
//
//   // Synonym Generators
//   function _tits() { return Random.fromFrequencyMap({ breasts:10, tits:10, boobs:1, knockers:1 }); }
//   function _tit() { return Random.fromFrequencyMap({ breast:3, tit:4, boob:1 }); }
//
//   return {
//     updateDescription,
//   }
//
// })();



// function injuryDescriptions(injuries) {
//   return injuries.filter(injury => {
//     return injury.location == 'tits' && injury.damageType != 'blight'
//   }).map(injury => {
//     return ` ${injury.description}`;
//   });
// }

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
