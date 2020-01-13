global.FlagInfo = class FlagInfo extends Form {

  static getFlagGroups() {
    let groups = new Set();

    each(FlagInfo.instances, info => {
      if (info.flagGroup) {
        groups.add(info.flagGroup);
      }
    });

    return Array.from(groups);
  }

  static getFlagGroup(code) {
    return FlagInfo.where(info => {
      return info.flagGroup == code;
    });
  }

  static async setFlagGroup(code) {
    let flags = {};

    each(FlagInfo.getFlagGroup(code), info => {
      flags[info.code] = info.setTo;
    });

    return await Flag.setAll(flags);
  }

}
