global.Plan = class Plan {

  constructor(data) {
    this.data = data;
  }

  async execute() {
    console.log("=== Execute Plan ===")
    console.log("Plan:",this.data)
  }

}
