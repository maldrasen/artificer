global.Equipment = class Equipment extends Form {

  // forClient() is used when building the icon cache for equipment.
  static forClient() {
    let data = {
      empty: { name:'', url:ImageResource.getIcon('equipment','empty').url }
    };

    each(Equipment.instances, (equipment, code) => {
      data[code] = {
        name: equipment.name,
        url: ImageResource.getIcon('equipment',code).url }
    });

    return data;
  }

}
