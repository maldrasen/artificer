global.ImageResource = class ImageResource extends Form {

  // type: background
  //     location
  //     locationState
  //     time
  //
  static async backgroundWhere(desires) {
    return ImageResource.lookup('unknown-background');
  }

  // type: portrait
  //    species
  //    gender
  //
  static async portraitFor(character) {
    return ImageResource.lookup('unknown-portrait');
  }

}
