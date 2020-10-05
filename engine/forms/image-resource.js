global.ImageResource = class ImageResource extends Form {
  static buildBackground(code,options) { ImageResource.build(code,extend(options,{ type:'background' })); }
  static buildPortrait(code,options)   { ImageResource.build(code,extend(options,{ type:'portrait' }));   }
  static buildIcon(code,options)       { ImageResource.build(code,extend(options,{ type:'icon' }));       }

  // Get's a item, flavor, or equipment icon. Unlike mose forms it's fine if the icon isn't found, we just return the
  // unknown icon placeholder, at least while the app is being built, which means probably forever.
  static getIcon(type,code) {
    return ImageResource.instances[`icon-${type}-${code}`] || ImageResource.instances['icon-unknown'];
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
  // TODO: Still just a temp version of this, probably for a long time yet.
  //
  static async portraitFor(character) {
    if (character.title) { return ImageResource.lookup('temp-player'); }
    if (character.speciesCode == 'scaven') { return ImageResource.lookup('temp-scaven'); }

    return ImageResource.lookup('unknown-portrait');
  }

}
