Task.build('exercise', {
  name: 'Exercise',
  description: 'I will spend a couple of hours exercising.',
  requires: ['flag.plan-view.tasks.exercise'],
  time: 1,
  limit: 1,

  execute: async work => {
    Flag.set('player.exercise-count', Flag.lookup('player.exercise-count') + 1);
    Flag.set('player.exercised-last', Game.dayNumber());

    const player = await Player.instance();

    // Like meditation, exercise only increases your physical attribute up to
    // 50 points. Something else, probably magical is required to increase the
    // player's physical above that. If a player hasn't exercised in a week
    // though it's possible to lose a point, but only once their physical is
    // above 30. That happens in the resolver though.

    if (player.physical >= 50) {
      return {
        title:`Exercise`,
        text:`I spend a couple hours exercising this morning. I don't feel like I'm getting and stronger, but working
          out like this is necessary to maintain my physique.`
      };
    }

    // Like meditation, we want the player's physical attribute to build
    // slowly, however there are only 50 levels of physical that can be gained
    // through exercise, less really because the player already starts out with
    // some. Because we want the player to have to exercise more than fifty
    // times in total we need to randomize their skill gain. The more physical
    // a player has, the harder it is to increase.
    const occurrences = [
      { bonus:0,  story:`, doing pushups and situps mostly. I feel like I'm getting stronger.` },
      { bonus:0,  story:`, running up and down the tower stairs, building my speed and stamina.` },
      { bonus:10, story:`. I had a decent workout. I was able to run up the tower stairs a bit faster than usual.` },
      { bonus:15, story:`. It was a good workout. I was able to do more pushups and situps than I'm normally able to.` },
      { bonus:20, story:`. It was a good workout. I'm feeling stronger and faster.` },
    ];

    // TODO: When the workshop is built, we should change this to a flag. These
    //       are early game workouts only. Add some workshop specific workouts,
    //       lifting crates of iron, that sort of thing.
    if (true) {
      ArrayUtility.addAll(occurrences, [
        { bonus:0,  story:`, lifting heavy rocks and carrying them from one side of the courtyard to the other.` },
        { bonus:0,  story:`, running laps around the keep's courtyard.` },
      ]);
    }

    let occurrence = Random.from(occurrences);
    let chance = occurrence.bonus;

    if (player.physical < 30) { chance += 5;  }
    if (player.physical < 20) { chance += 20; }
    if (player.physical < 10) { chance += 50; }

    if (Random.upTo(100) < chance) {
      await player.update({ physical: player.physical + 1 });
    }

    return {
      title:`Exercise`,
      text:`I spent a couple hours exercising${occurrence.story}`
    };
  }


});
