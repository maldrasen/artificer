global.ImageResource = class ImageResource extends Form {
  static buildBackground(code,options) { ImageResource.build(code,extend(options,{ type:'background' })); }
  static buildPortrait(code,options)   { ImageResource.build(code,extend(options,{ type:'portrait' }));   }
  static buildIcon(code,options)       { ImageResource.build(code,extend(options,{ type:'icon' }));       }

  static iconsForClient() {
    let icons = {};
    each(ImageResource.instances, (image, code) => {
      if (image.type == 'icon') { icons[code] = image.url; }
    });
    return icons;
  }

  // I'm getting something, but I have no idea what...
  static async where(options) {
    if (options.code) {
      return ImageResource.lookup(options.code);
    }

    if (options.on == 'background') {
      return await ImageResource.backgroundWhere(options)
    }

    console.log("Error: What do I do with this?",options);
  }

  // type: background
  //     location
  //     locationState
  //     time
  //
  static async backgroundWhere(desires) {
    if (desires.location) {
      // TODO: This will lookup a background based on the location, time, and state of the location.
    }
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
