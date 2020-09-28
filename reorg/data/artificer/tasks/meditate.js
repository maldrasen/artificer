Task.build('meditate', {
  name: 'Meditate',
  description: 'I will spend a couple of hours in meditation.',
  requires: ['flag.plan-view.tasks.meditate'],
  time: 1,
  limit: 1,

  execute: async work => {
    Flag.set('player.meditate-count', Flag.lookup('player.meditate-count') + 1);

    const player = await Player.instance();
    const maelstrom = Flag.lookup('player.maelstrom');
    const adamant =   Flag.lookup('player.adamant');
    const gaea =      Flag.lookup('player.gaea');
    const morpheus =  Flag.lookup('player.morpheus');
    const abyss =     Flag.lookup('player.abyss');

    // Meditation only increases your magical attribute up to 50 points.
    // TODO: The player should still meditate while Abyss remains unlocked.
    //       I'll need to update this message accordingly.
    if (player.magical > 50) {
      return {
        title:`Meditation`,
        text:`I spent a couple hours meditating this morning. It left me feeling more relaxed, but no more powerful.`
      };
    }

    // We want the player's magical skill to build slowly, however there are
    // only 50 levels of magical that can be gained through meditation, less
    // really because the player already starts out with some. Because we want
    // the player to have to meditate more than fifty times in total we
    // need to randomize their skill gain. The more magical a player has, the
    // harder it is to increase.
    let occurance = Random.from([
      { bonus:  0,  story:`I'm feeling more relaxed.` },
      { bonus:  0,  story:`I have become more self aware.` },
      { bonus:  0,  story:`I feel like I understand myself a bit better now.` },
      { bonus:  0,  story:`I am more focused now.` },
      { bonus:  10, story:`I feel more in tune with the universe.` },
      { bonus:  15, story:`I feel a strong connection with the universe.` },
      { bonus:  20, story:`I feel my connection to the source of all magic has strengthened.` },
    ]);

    let chance = occurance.bonus;
    if (player.magical < 30) { chance += 5;  }
    if (player.magical < 20) { chance += 20; }
    if (player.magical < 10) { chance += 50; }

    if (maelstrom == null && player.magical >= 20) { chance = 1; }
    if (adamant == null   && player.magical >= 30) { chance = 1; }
    if (gaea == null      && player.magical >= 40) { chance = 1; }

    if (Random.upTo(100) < chance) {
      await player.update({ magical: player.magical + 1 });
    }

    return {
      title:`Meditation`,
      text:`I spent a couple of hours meditating. ${occurance.story}`
    };
  }


});
