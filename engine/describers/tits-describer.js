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
    return Random.from(Description.validForTits({
      character: this.character,
      tits: this.tits,
      nipples: this.nipples
    })).d;
  }

  describeNipples() {
    if (this.previousInjury != null) { return ''; }

    return Random.from(Description.validForNipples({
      character: this.character,
      tits: this.tits,
      nipples: this.nipples
    })).d;
  }

  describeInjuries() {
    return `
      ${this.d_blight()}
      ${this.d_burn()}
      ${this.d_smash()}
    `;
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
// end
