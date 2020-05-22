(function() {

  // The items that characters find when they go foaraging are governed by
  // these two schedules.

  Role.Forager.FailureSchedule = {
    'F.1': { special:blightSpider },
  };

  Role.Forager.SuccessSchedule = {
    'S.1': { special:firstResult },
    'S.2': { unlock:'willow-branches', event:'found-willow-branches' },
    'S.7': { unlock:'blood-berries', event:'found-blood-berries' },
  };

  Role.Forager.FrequencyMaps = {
    Hinterlands:{

      // Resources
      'willow-branches': 30,

      // Food
      'bitter-fruits':   20,
      'goat-nuts':       55,
      'juice-berries':   40,
      'sweet-fruits':    15,

      // Herbs
      'blood-berries':   25,
      'creeping-moss':   13,
      'firewasp':        7,
      'itchweed':        20,
      'milkweed':        8,
      'purple-mushroom': 2,

      // Insects
      'blight-spider':   4,
    }
  }

  // The first time a character goes foraging they need to bring back at least
  // one of each available item, because they'll be mentioned in the event.
  async function firstResult(character, result) {
    await Game.addEvent('found-fruits-and-nuts',{ actors:{ C:character.id }});

    Flag.setAll({
      'item.bitter-fruits':'Y',
      'item.goat-nuts':'Y',
      'item.juice-berries':'Y',
      'item.sweet-fruits':'Y',
    });

    result.flavors = {
      'bitter-fruits': 2,
      'goat-nuts': 3,
      'juice-berries': 2,
      'sweet-fruits': 1,
    };

    result.story = Role.Forager.Stories.tell('healthy',false,4);
  }

  // The event where you find the blight spider is strange because you don't
  // bring the spider back or anything. Plus, I want to use a canned hazard
  // here, but the injury the minion gets depends on their gender.
  async function blightSpider(character) {
    const context = new Context();
    await context.addCharacter('C',character);

    await Game.addEvent('found-blight-spider',{ actors:{ C:character.id }});
    Flag.set('item.blight-spider','Y');

    let story = Role.Forager.Stories.tell(await character.getHealthClass(), true, 0);
    let injury =`{{C::gender.He}} was bent over, searching through a thicket of brambles for something to eat, when a
      harry bag spider dropped into {{C::gender.his}} loincloth and bit {{C::gender.him}} right on the
      ${character.gender.cock ? 'balls' : 'cunt'}.`;

    return {
      story: Weaver.weave(story,context),
      injury: Weaver.weave(injury, context),
      notifications: await Role.Forager.getNotifications(character,[]),
      flavors:[],
    };
  }

})();
