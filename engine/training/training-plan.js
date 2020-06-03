global.TrainingPlan = class TrainingPlan {

  constructor(data) {
    console.log("Build a training plan with ",data);
  }

  // Eventually you'll be able to train more than one minion. I'm not sure yet
  // how that number is raised though.
  static minionCount() { return 1; }

  // Get the courses available for the selected minion.
  static async availableCourses(minion) {
    const courses = { physical:[], social:[], sexual:[] };

    const context = new Context();
    await context.addPlayer();
    await context.addCharacter('C',minion);

    const calculator = new ConsentCalculator(minion);
    await calculator.init();

    await Promise.all(Course.all().map(async course => {
      if ((await CentralScrutinizer.meetsRequirements(course.requires,context))) {



        courses[course.category].push({
          code: course.code,
          name: course.name,
        });
      }
    }));

    return courses;
  }


}
