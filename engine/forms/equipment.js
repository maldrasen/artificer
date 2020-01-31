global.Equipment = class Equipment extends Form {

  static forClient() {
    let data = {};
    each(Equipment.instances, (equipment, code) => {
      data[code] = {
        name: equipment.name,
        url: ImageResource.getIcon('equipment',this.code).url }
    });
    return data;
  }

}
