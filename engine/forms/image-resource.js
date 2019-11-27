global.ImageResource = class ImageResource extends Form {

  // I'm getting something, but I have no idea what...
  static async where(options) {
    if (options.code) {
      return ImageResource.lookup(options.code);
    }

    console.log("Error: What do I do with this?",options);
  }

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
