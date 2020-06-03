global.TrainingPlan = class TrainingPlan {

  constructor(data) {
    console.log("Build a training plan with ",data);
  }

  static async availableCourses() {
    const courses = { physical:[], social:[], sexual:[] };

    await Promise.all(Course.all().map(async course => {
      if ((await CentralScrutinizer.meetsRequirements(course.requires))) {
        courses[course.category].push(course.properties);
      }
    }));

    return courses
  }


}
