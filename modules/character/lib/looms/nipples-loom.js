// Weaver.NipplesLoom = (function() {
//
//   // Replaces token placeholders in the form of:
//   //   {{actor::nipples.color}}
//   //
//   function findValue(subject, token, context) {
//     if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }
//
//     let body = context.get(subject).body;
//     let nipples = context.get(subject).nipples;
//
//     if (token == "nipples.color")        { return nippleColor(body,nipples); }
//     if (token == "nipples.grape")        { return nippleComparative(nipples,false); }
//     if (token == "nipples.grapes")       { return nippleComparative(nipples,true); }
//     if (token == "nipples.large")        { return nippleAdjective(nipples); }
//     if (token == "nipples.length")       { return lengthMeasure(nipples); }
//     if (token == "nipples.width")        { return widthMeasure(nipples); }
//     if (token == "nipples.thickNipple")  { return shortDescription(nipples,false); }
//     if (token == "nipples.thickNipples") { return shortDescription(nipples,true); }
//
//     return Weaver.error(`Bad nipples token(${token})`);
//   }
//
//   function lengthMeasure(nipples) {
//     if (Settings.metric()) { return `${nipples.length} millimeters` }
//     return EnglishUtility.inchesInEnglish(ConversionUtility.milliToInches(nipples.length),{or:'an'});
//   }
//
//   function widthMeasure(nipples) {
//     if (Settings.metric()) { return `${nipples.width} millimeters` }
//     return EnglishUtility.inchesInEnglish(ConversionUtility.milliToInches(nipples.width),{or:'an'});
//   }
//
//   // Nipple color also needs to take a body's natural skin color into
//   // consideration, even for furry characters.
//   function nippleColor(body,nipples) {
//     if (body.skinColor == 'human') {
//       return Random.from({
//         1:['black','ebony','mahogany colored','dark brown'],
//         2:['brown','chocolate','rich brown','coffee colored'],
//         3:['light brown','copper colored','amber colored'],
//         4:['pink','rich pink','bright pink','flushed'],
//         5:['light pink','pale pink','pale'],
//       }[nipples.shade])
//     }
//     return Weaver.error(`TODO: Nipple color for people with non-human skin colors`)
//   }
//
//   // Size comparasons consider the size of the nipple, not the areola. We use
//   // the length becuase it's assumed the nipple is as wide as it is long,
//   // except for teats which can be much longer, but teats are not round.
//   function nippleComparative(nipples, plural) {
//     if (plural == false) {
//       if (nipples.length < 5)  { return Random.from(['pea','raisin','peanut','eraser tip']); }
//       if (nipples.length < 10) { return Random.from(['pebble','button','hazelnut','blueberry']); }
//       if (nipples.length < 15) { return Random.from(['acorn','thimble','olive']); }
//       if (nipples.length < 20) { return Random.from(['marble','grape']); }
//       if (nipples.length < 25) { return Random.from(['fingertip','cherry']); }
//       if (nipples.length < 30) { return Random.from(['thumb','walnut']); }
//       if (nipples.length < 40) { return Random.from(['strawberry','peach pit']); }
//     }
//
//     if (nipples.length < 5)  { return Random.from(['peas','raisins','peanuts','eraser tips']); }
//     if (nipples.length < 10) { return Random.from(['pebbles','buttons','hazelnuts','blueberries']); }
//     if (nipples.length < 15) { return Random.from(['acorns','thimbles','olives']); }
//     if (nipples.length < 20) { return Random.from(['marbles','grapes']); }
//     if (nipples.length < 25) { return Random.from(['fingertips','cherries']); }
//     if (nipples.length < 30) { return Random.from(['thumbs','walnuts']); }
//     if (nipples.length < 40) { return Random.from(['strawberries','peach pits']); }
//     return Weaver.error(`TODO: Really big nipples?`)
//   }
//
//   function nippleAdjective(nipples) {
//     if (nipples.length < 2)  { return Random.from(['flat','perfectly flat']); }
//     if (nipples.length < 5)  { return Random.from(['tiny','small','little','cute']); }
//     if (nipples.length < 10) { return Random.from(['plump','pinchable','suckable','lovely','plump and pinchable','plump and suckable']); }
//     if (nipples.length < 15) { return Random.from(['plump','wrinkled','prominent','protruding','plump wrinkled','thick prominent','thick wrinkled']); }
//     if (nipples.length < 20) { return Random.from(['big','bulging','swollen','wrinkled','large','big wrinkled','large wrinkled','big prominent']); }
//     if (nipples.length < 25) { return Random.from(['sizable','very large','thick','long','thing and long','thick prominent']); }
//     if (nipples.length < 30) { return Random.from(['huge','immense','very long','long and thick','huge thick']); }
//     if (nipples.length < 40) { return Random.from(['monstrously huge','massively long and thick','enormously huge','huge']); }
//     return Random.from(['monstrously colossal','massive, titanic','enormous, gigantic','gargantuan']);
//   }
//
//   function shortDescription(nipples, plural) {
//     return `${nippleAdjective(nipples)} ${plural ? "nipples" : "nipple"}`
//   }
//
//   return { findValue };
//
// })();
