// === Adjustment Flags ===


//       // Like the CockFactory, the nipple factory will create random desecrated
//       // nipples on succubus characters unless the no-random-features flag is set.
//       if (character.race.code == 'succubus' && options['no-random-features'] == null) {
//         desecrateNipples(nipples, options);
//       }

//   function desecrateNipples(nipples, options) {
//     if (nipples.shape == null) {
//       nipples.setShape(Random.fromFrequencyMap({
//         normal: 100,
//         puffy: 30,
//         inverted: 30,
//         star: 20,
//         heart: 20,
//         teat: 10,
//         cock: 10,
//         pussy: 10,
//         mouth: 10,
//       }));
//     }
//     if (options.count == null && Random.upTo(10)== 0) {
//       nipples.setCount(Random.upTo(2)+2);
//     }
//   }





static adjustmentFlags() {
  return [
    'big-nipples',
    'long-nipples',
    'dick-nipples',
    'nipple-cunts'
  ];
}

static canApplyFlag(flag) {
  return Nipples.adjustmentFlags().indexOf(flag) >= 0;
}

applyFlag(flag) {
  if (flag == 'big-nipples')  { this.applyBigNipples();  }
  if (flag == 'long-nipples') { this.applyLongNipples(); }
  if (flag == 'dick-nipples') { this.applyDickNipples(); }
  if (flag == 'nipple-cunts') { this.applyNippleCunts(); }
}

applyBigNipples()  {
  let width = this._width * (1.5+Math.random());
  this.setWidth((width > 5) ? width : 5); // Min width is 5cm
}

applyLongNipples() {
  let length = this._length * (1.5+Math.random());
  this.setLength((length > 2) ? length : 2); // Min length is 2cm
}

applyDickNipples() {
  this.setShape('cock');
  this.getCharacter().addCock({ placement:'nipple' });
}

applyNippleCunts() {
  this.setShape('pussy');
  this.getCharacter().addPussy({ placement:'nipple' });
}
