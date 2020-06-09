global.TrainingPlan = class TrainingPlan {

  constructor(course, style, context) {
    this._course = course;
    this._style = style;
    this._context = context;
  }

  get context() { return this._context; }
  get course() { return this._course; }
  get minion() { return this.context.get('C').character; }
  get player() { return this.context.player.character; }
  get style() { return this._style; }

  // The execute() function is called with the plan data from the view. It
  // needs to build the TrainingPlan object. Execute the training for each
  // minion in the plan. Then return the TrainingPlan to render the report in
  // the view.
  static async execute(data) {
    await Game.setPhase('before-training');

    TrainingResult.startReport();

    await Promise.all(data.courses.map(async coursePlan => {
      const minion = await Character.lookup(coursePlan.id);
      const course = Course.lookup(coursePlan.course);

      const context = new Context();
      await context.addPlayer();
      await context.addCharacter('C',minion);

      const plan = new TrainingPlan(course, coursePlan.style, context);
      const result = await course.execute(plan);

      await TrainingResult.addResult(result);
    }));

    await Composer.render();
  }

  // === Planning View ===

  // Eventually you'll be able to train more than one minion. I'm not sure yet
  // how that number is raised though.
  static maxMinionCount() { return 1; }

  // Get the courses available for the selected minion.
  static async availableCourses(minion) {
    const courses = { physical:[], social:[], sexual:[] };
    const context = new Context();

    await context.addPlayer();
    await context.addCharacter('C',minion);
    const calculator = new ConsentCalculator(context);

    await Promise.all(Course.all().map(async course => {
      if ((await CentralScrutinizer.meetsRequirements(course.requires,context))) {
        courses[course.category].push((await compileCourse(course, calculator)));
      }
    }));

    return courses;
  }
}

// === Private Functions ===
// Used in a static context when compiling the list of courses.

async function compileCourse(course, calculator) {
  let data = {
    code: course.code,
    name: course.name,
    description: (await compileDescription(course.description, calculator.context)),
  };

  if (course.sexAction) {
    data.styleDescriptions = {};
    data.consentLevels = await allConsentLevels(course.sexAction, calculator);

    await Promise.all((Object.keys(course.sexAction.styles)||[]).map(async key => {
      data.styleDescriptions[key] = await compileDescription(course.sexAction.styles[key].description, calculator.context);
    }));
  }
  return data;
}

async function allConsentLevels(action, calculator) {
  let styles = { normal:(await calculator.getConsentDetails(action)) };
  await Promise.all(Object.keys(action.styles).map(async code => {
    styles[code] = await calculator.getConsentDetails(action,code);
  }));
  return styles;
}

// The description here can be a normal template string or it can be an async
// function that returns a template string given the context.
async function compileDescription(description, context) {
  return Weaver.weave((typeof description == 'function' ? (await description(context)) : description), context);
}
