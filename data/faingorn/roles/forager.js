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

  // The first time a character goes foraging they need to bring back at least
  // one of each available item, because they'll be mentioned in the event.
  async function firstResult(character) {
    await EventQueue.enqueueEvent('found-fruits-and-nuts',{ actors:{ C:character.id }});

    await Flag.setAll({
      'item.bitter-fruits':'unlocked',
      'item.goat-nuts':'unlocked',
      'item.juice-berries':'unlocked',
      'item.sweet-fruits':'unlocked',
    });

    const flavors = {
      'bitter-fruits': 2,
      'goat-nuts': 3,
      'juice-berries': 2,
      'sweet-fruits': 1,
    };

    return {
      story: await Weaver.weaveWithCharacter(Role.Forager.Stories.tell('healthy',false,4), 'C', character),
      notifications: await Role.Forager.getNotifications(character, flavors),
      flavors: flavors,
    };
  }

  // The event where you find the blight spider is strange because you don't
  // bring the spider back or anything. Plus, I want to use a canned hazard
  // here, but the injury the minion gets depends on their gender.
  async function blightSpider(character) {
    const context = new WeaverContext();
    await context.addCharacter('C',character);

    await EventQueue.enqueueEvent('found-blight-spider',{ actors:{ C:character.id }});
    await Flag.set('item.blight-spider','unlocked');

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
