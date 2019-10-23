global.TitsDescriber = class TitsDescriber {

  constructor(options) {
    if (options.character == null) { throw `The Character must at least be set.` }

    this._character = options.character;
    this._tits = options.tits;
    this._nipples = options.nipples;
    this._previousInjury = null;
  }

  get character() { return this._character; }
  get nipples() { return this._nipples; }
  get tits() { return this._tits; }
  get previousInjury() { return this._previousInjury; }
  set previousInjury(i) { this._previousInjury = i; }

  async updateDescription() {
    if (this.tits == null) { this._tits = await this.character.getTits(); }
    if (this.nipples == null) { this._nipples = await this.character.getNipples(); }

    let description = `
      ${this.describeTits()}
      ${this.describeInjuries()}
      ${this.describeNipples()}
    `.replace(/\n/g,'').replace(/\s+/g,' ');

    this.tits.description = await Weaver.weaveWithCharacter(description,'C',this.character);

    await this.tits.save();
    return this.tits;
  }

  // === Descriptions ===

  describeTits() {
    if (this.tits == null) { return this.d_male_tits(); }
    if (this.character.speciesCode == 'rat') { return this.d_rat_tits(); }
    return this.d_normal();
  }

  describeInjuries() {
    return `
      ${this.d_blight()}
      ${this.d_burn()}
      ${this.d_smash()}
    `;
  }

  describeNipples() {
    if (this.previousInjury != null) { return ''; }
    return `[TODO: Nipples!]`
  }

  d_male_tits() {
    return "[TODO: Male Nipples]"
  }

  d_rat_tits() {
    if (this.tits.shape == 'flat' && this.tits.sizeClass == 'zero') { return Random.from([
      `{{C::character.firstName}} has a completely flat chest. {{C::gender.His}} chest is lean and muscular and could easily be mistaken for a man's if not for {{C::gender.his}} many prominent nipples.`,
      `{{C::character.firstName}} has a lean muscular chest that could easily be mistaken for a man's if not for {{C::gender.his}} many prominent nipples.`,
      `{{C::character.firstName's}} chest is washboard flat, with absolutely no {{tits}} to speak of.`,
    ]); }

    if (this.tits.shape == 'conical' && this.tits.sizeClass == 'tiny') { return Random.from([
      `{{C::character.firstName's}} chest is studded with twelve tiny conical {{tits}}. {{C::gender.his}} {{tits}} are too small to do much more than push {{C::gender.his}} many prominent nipples out just a bit further.`,
      `{{C::character.firstName}} has twelve tiny cone shaped {{tits}}. They're each quite small and don't do much other than press {{C::gender.his}} many prominent nipples out just a bit further.`,
      `{{C::character.firstName}} has six rows of tiny conical {{tits}}. Each of {{C::gender.his}} {{tits}} is capped by a prominent nipple almost as large as the {{tit}} itself.`,
    ]); }

    if (this.tits.shape == 'conical' && this.tits.sizeClass == 'small') { return Random.from([
      `{{C::character.firstName's}} chest is studded with twelve small conical {{tits}}. {{C::gender.his}} {{tits}} are wide at the base and come to a narrow tip, which makes {{C::gender.his}} prominent nipples seem to poke out even further.`,
      `{{C::character.firstName}} has twelve small cone shaped {{tits}}. Each of {{C::gender.his}} small {{tits}} are wide at the base and come to a narrow tip, then capped with a thick and prominent nipple.`,
      `{{C::character.firstName}} has six rows of small conical {{tits}}. Each of {{C::gender.his}} {{tits}} is capped by a prominent nipple almost as large as the {{tit}} itself.`,
    ]); }

    if (this.tits.shape == 'perky' && this.tits.sizeClass == 'tiny') { return Random.from([
      `{{C::character.firstName's}} {{tits}} are tiny and perky, with prominent upturned nipples set high on each of {{C::gender.his}} {{tits}}.`,
      `{{C::character.firstName's}} chest is adorned with twelve tiny {{tits}}. Each of {{C::gender.his}} perky upturned {{tits}} is too small to do much more than push {{C::gender.his}} many prominent nipples out just a bit further.`,
      `{{C::character.firstName}} has six rows of tiny {{tits}}. {{C::gender.His}} twelve prominent nipples are set high on each of {{C::gender.his}} perky tits, making them look even more jutting and pinchable.`
    ]); }

    if (this.tits.shape == 'perky' && this.tits.sizeClass == 'small') { return Random.from([
      `{{C::character.firstName's}} {{tits}} are small and perky, with prominent upturned nipples set high on each of {{C::gender.his}} {{tits}}.`,
      `{{C::character.firstName's}} chest is adorned with twelve small {{tits}}. Each of {{C::gender.his}} perky upturned {{tits}} pushes {{C::gender.his}} prominent nipples upward proudly.`,
      `{{C::character.firstName}} has six rows of small {{tits}}. {{C::gender.His}} twelve prominent nipples are set high on each of {{C::gender.his}} perky tits, making them look even more jutting and pinchable.`
    ]); }

    if (this.tits.shape == 'round' && this.tits.sizeClass == 'tiny') { return Random.from([
      `{{C::character.firstName's}} {{tits}} are round but tiny. Each of {{C::gender.his}} tiny round orbs is slightly smaller than a lemon and capped with a thick prominent nipple.`,
      `{{C::character.firstName's}} chest is studded with twelve tiny {{tits}}. Each of {{C::gender.his}} round {{tits}} are slightly smaller than a lemon and capped with a thick prominent nipple.`,
      `{{C::character.firstName}} has twelve round but tiny {{tits}}. Each of {{C::gender.his}} tits are slightly smaller than a lemon and capped with a thick prominent nipple.`,
    ]); }

    if (this.tits.shape == 'round' && this.tits.sizeClass == 'small') { return Random.from([
      `{{C::character.firstName's}} {{tits}} are small and round. Each of {{C::gender.his}} round {{tits}} is slightly larger than a lemon and capped with a thick prominent nipple.`,
      `{{C::character.firstName's}} chest is studded with twelve small {{tits}}. Each of {{C::gender.his}} round {{tits}} are slightly larger than a lemon and capped with a thick prominent nipple.`,
      `{{C::character.firstName}} has twelve small round {{tits}}. Each of {{C::gender.his}} tits are slightly larger than a lemon and capped with a thick prominent nipple.`,
    ]); }

    return Weaver.error(`TODO: Describe rat tits of larger sizes. Shape:${this.tits.shape} Size:${this.tits.sizeClass}`)
  }

  d_normal() {
    if (Random.upTo(1) == 0) {
      return `{{C::character.firstName}} has big tits.`
    } else {
      return `{{C::character.firstName's}} tits are big.`
    }
  }

  d_blight() {
    if (this.tits.blightLevel == 0) { return ''; }
    let herTitsHaveBeen = this.s_injuryStart(this.tits.smashPlace);

    this.previousInjury = {
      type: 'blight',
      place: this.tits.blightPlace,
    }

    return `TODO: ${herTitsHaveBeen} blighted.`
  }

  d_burn() {
    if (this.tits.burnLevel == 0) { return ''; }
    let herTitsHaveBeen = this.s_injuryStart(this.tits.smashPlace);

    this.previousInjury = {
      type: 'burn',
      place: this.tits.burnPlace,
    }

    return `TODO: ${herTitsHaveBeen} burnt.`
  }

  d_smash() {
    if (this.tits.smashLevel == 0) { return ''; }
    let herTitsHaveBeen = this.s_injuryStart(this.tits.smashPlace);

    this.previousInjury = {
      type: 'smash',
      place: this.tits.smashPlace,
    }

    return `TODO: ${herTitsHaveBeen} smashed.`
  }

  // === Segments ===

  // The injury start segment considers the previous injury described, and
  // notes if this injury was on the same breast as the last.
  s_injuryStart(place) {
    if (this.previousInjury == null) {
      if (place == 'all') { return Random.from([
        '{{C::gender.His}} {{tits}} have been',
        'It looks like {{C::gender.his}} {{tits}} have been',
      ]); }

      return Random.from([
        `{{C::gender.His}} ${place} {{tit}} has been`,
        `One of {{C::gender.his}} {{tits}} has been`,
        `It looks like one of {{C::gender.his}} {{tits}} has been`,
      ]);
    }

    if (place == 'all' && this.previousInjury.place == 'all') { return Random.from([
      `They've also been`,
      `Then, {{C::gender.his}} {{tits}} have also been`
    ]); }

    if (place != 'all' && this.previousInjury.place == 'all') { return Random.from([
      `Then, {{C::gender.his}} ${place} {{tit}} has also been`,
      `One of {{C::gender.his}} {{tits}} has also been`,
    ]); }

    if (place == this.previousInjury.place) { return Random.from([
      `Then, the same {{tit}} has also been`,
      `The same {{tit}} has also been`,
    ]); }

    if (place != this.previousInjury.place) { return Random.from([
      `Then, {{C::gender.his}} other {{tit}} has also been`,
      `{{C::gender.His}} other {{tit}} has also been`,
    ]); }
  }
}





//
//   // Get general nipple descriptions.
//   function describeNipples(character,nipples) {
//     let pile = []
//
//     if (nipples.shape == 'puffy') {
//       ArrayUtility.addAll(pile,[
//         `{{C::gender.He}} has {{C::nipples.large}} {{C::nipples.color}} puffy nipples that are nearly as long as they are wide.`,
//         `{{C::gender.He}} has {{C::nipples.large}} puffy nipples the size of {{C::nipples.grapes}}.`,
//         `{{C::gender.His}} {{C::nipples.large}} {{C::nipples.color}} puffy nipples prodrude far from the surface of {{C::gender.his}} {{tits}}.`,
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
