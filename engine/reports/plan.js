global.Plan = class Plan {

  constructor(data) {
    this.logger = new Logger('Plan', 'rgb(97, 107, 67)');
  }



  buildReport() {
    return new Promise(resolve => {
      global.preparedReport = new Report(this)
      global.preparedReport.buildReport().then(resolve);
    });
  }

}
