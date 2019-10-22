global.Description = class Description extends Form {

  static buildTits(data) {
    return super.build(null,extend(data,{ type:'tits' }));
  }

}
