global.Model = class Model {

  // Actually, flag is not a model...

  // static async createModel() {
  //   await this.buildProxy('flag',{
  //     code: { type:Sequelize.STRING  },
  //     value: { type:Sequelize.STRING  },
  //   },{
  //     timestamps: false,
  //   });
  // }

  // postal.subscribe({ channel:"database", topic:"ready", callback:() => {
  //   Flag.createModel();
  // }});


  static async buildProxy(table, schema, options) {
    this.proxy = Database.instance().define(table, schema, options);
    await Database.instance().sync();
  }

  static async create(options) { return await this.proxy.create(options); }

}
