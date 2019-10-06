global.BodyLoom = (function() {
  "use strict";

  // Replaces token placeholders in the following forms:
  //   {{ actor::body.height(F'I) }}              > The character's height in feet and inches.
  //   {{ actor::body.height(F foot i inch) }}    > An english phrase with foot and inches
  //   {{ actor::body.height(F feet i inch) }}    > An english phrase with feet and inches
  //   {{ actor::body.weight }}                   > Just the weight number alone
  //   {{ body(looks strong) }}                   > A phrase generally describing their body shape based on BMI
  //   {{ body(strong) }}                         > A word generally describing their body shape based on BMI
  //   {{ body(a strong) }}                       > A word prefixed with 'a' describing their body shape
  //   {{ body(skincolor) }}                      > A word describing their skin color
  //   {{ body(a skincolor) }}                    > A word describing their skin color prefixed with a or an
  //   {{ body(furcolor) }}                       > A word describing their fur color
  //   {{ body(a furcolor) }}                     > A word describing their fur color prefixed with a or an
  //   {{ body(scalecolor) }}                     > A word describing their scale color
  //   {{ body(a scalecolor) }}                   > A word describing their scale color prefixed with a or an
  //
  // TODO: We sould probably consider adding a metric version to this as well?
  // TODO: Hair color, and possibly hair descriptions.

  function findValue(subject, token, context) {
    if (context[subject]==null) { return Loom.error(`Subject(${subject}) not in context`); }

    subject = context[subject];

    if (token=="body.height(F'I)") { return heightMeasurement(subject.getBody().height); }
    if (token=="body.height(F foot i inch)") { return englishHeightMeasurement(subject.getBody().height,'foot'); }
    if (token=="body.height(F feet i inch)") { return englishHeightMeasurement(subject.getBody().height,'feet'); }
    if (token=="body.weight") { return `${subject.getBody().convertedWeight}`; }
    if (token=="body.weight_and_unit") { return `${subject.getBody().convertedWeight} ${Configuration.metric ? 'kg' : 'lbs'}`; }
    if (token=="body(looks strong)") { return descriptivePhrase(subject); }
    if (token=="body(strong)") { return descriptiveWord(subject); }
    if (token=="body(a strong)") { return English.a_an(descriptiveWord(subject)); }
    if (token=="body(skincolor)") { return skinColorWord(subject); }
    if (token=="body(a skincolor)") { return English.a_an(skinColorWord(subject)); }
    if (token=="body(furcolor)") { return furColorWord(subject); }
    if (token=="body(a furcolor)") { return English.a_an(furColorWord(subject)); }
    if (token=="body(scalecolor)") { return scaleColorWord(subject); }
    if (token=="body(a scalecolor)") { return English.a_an(scaleColorWord(subject)); }

    return Loom.error(`Bad body token(${token})`);
  }

  // === Height & Weight Descriptions ===

  // The character's height in short form feet and inches. Doesn't really work well for small sizes, because 1'8
  // sounds and looks strange, but '20 inch' doesn't work in every sentence as a substitute. Propably shouldn't be used
  // often.
  function heightMeasurement(height) {
    let inches = Math.round(height/25.4);
    if (inches < 24) { return `${inches} inch` }
    return `${Math.floor(inches/12)}'${inches % 12}`;
  }

  // Build an english phrase with feet and inches. Not sure why in some phrases 'feet' sounds more correct than 'foot'.
  // Either way, sometimes you use one, sometimes you use the other. Curiously it seems that in phrases where "five
  // foot one inch" sounds correct, "five feet" seems correct when there are no inches. Also when there's only one
  // inch you'd think inches should be singular, but "Bob is six foot one inch tall" sounds wrong.
  function englishHeightMeasurement(height, foot) {
    let inches = Math.round(height/25.4);

    let five = English.numberInEnglish(Math.floor(inches / 12));
    let ten = English.numberInEnglish(inches % 12);
    return (ten == 'zero') ? `${five} feet` : `${five} ${foot} ${ten} inches`;
  }

  // Build a phrase based on the subjects BMI to describe how muscular they are. The actual text for this function is
  // seeded by the world when it's loaded.
  function descriptivePhrase(subject) {
    return Random.from(BodyLoom.Language.weightDescriptionPhrases[subject.getBody().weightClass])
  }

  function descriptiveWord(subject) {
    return Random.from(BodyLoom.Language.weightDescriptionWords[subject.getBody().weightClass])
  }

  // === Skin & Hair Descriptions ===

  function skinColorWord(subject) {
    let palette = BodyLoom.Language.skinColorWords[subject.getBody().skinColor];
    return Random.from(palette['1'] ? palette[''+subject.getBody().skinShade] : palette['any']);
  }

  function furColorWord(subject) {
    return Random.from(BodyLoom.Language.furColorWords[subject.getBody().furColor][''+subject.getBody().furShade]);
  }

  function scaleColorWord(subject) {
    return Random.from(BodyLoom.Language.scaleColorWords[subject.getBody().scaleColor]);
  }

  return {
    findValue: findValue
  };

})();
