global.StoryTeller = (function() {

  // The way all the summon events start is pretty similar, so rather than
  // repeating this pretty boring part of the scene over and over again, I'm
  // using the startSummoning() function to generate the initial sentence or
  // two of the summoning scene.
  //
  // Future Options: For once I have an assistant or there are other flags
  //    I ask my assistant to bring a minion to me.
  //    I have my assistant tie a minion up so they'll be ready for me. (bondage scene)
  //    A male minion is being fluffed in preperation for my arrival.
  //    An orgy is already in progress when I arrive. (orgy scene)
  //
  async function startSummoning(scene) {
    const game = await Game.instance();
    const location = Location.lookup(game.location);
    const player = await Player.instance();
    const playerOutfit = await player.getEquipment('outfit');

    let start = Random.fromFrequencyMap({
      waiting: 10,
      meeting: 10,
      already: 3,
    });

    if (start == 'already') {
      let joinMe = `I glance over at {{C::character.firstName}} who's here ${location.inTheName} with me.`;
      let options = [
        `I smile at {{C::gender.him}} and beckon {{C::gender.him}} to approach me.`
      ]

      return joinMe + Random.from(options);
    }

    // === Otherwise the player arranges the meeting ===

    let joinMe = [
      `I ask for {{C::character.firstName}} to join me ${location.inTheName}. `,
      `I tell {{C::character.firstName}} to meet me ${location.inTheName}. `,
    ];
    let heArrives = [];

    if (start == 'waiting') {
      heArrives.push(`{{C::gender.He}} arrives not too long after myself.`);

      if (playerOutfit == null) {
        let cock = player.genderCode == 'female' ? 'pussy' : 'cock'

        heArrives.push(`I'm standing nude up against a wall when {{C::gender.he}} arrives.`);
        heArrives.push(`I'm standing nude, up against a wall, ideally stroking my ${cock}, when {{C::gender.he}} arrives.`);

        if (await location.hasChair()) {
          heArrives.push(`I arrive before {{C::gender.him}} and when {{C::gender.he}} arrives I'm sitting in a chair, ideally stroking my ${cock}.`);
          heArrives.push(`I sitting nude, legs spread wide with one leg hooked over the arm of the chair, when {{C::gender.he}} arrives.`);
        }
        if (await location.hasBed()) {
          heArrives.push(`I'm lying nude in bed when {{C::gender.he}} arrives.`)
          heArrives.push(`I'm nude in bed waiting for {{C::gender.him}} to arrive, and when {{C::gender.he}} does he finds me there ideally stroking my ${cock}.`)
        }
      }
    }

    if (start == 'meeting') {
      joinMe.push(`I tell {{C::character.firstName}} to wait for me ${location.inTheName}.`);
      joinMe.push(`I tell {{C::character.firstName}} to go ${location.toTheName}.`);

      heArrives.push(`{{C::gender.He}}'s there waiting for me when I arrive.`);
      heArrives.push(`Like a good pet, {{C::gender.he}}'s waiting there for me when I arrive.`);
    }

    return Random.from(joinMe) + Random.from(heArrives);
  }


  // // TODO: Implement clothing.
  // if (playerOutfit == null) {
  //   story += ` I'm nude, waiting for {{C::gender.him}} to arrive ${location.inTheName}.`;
  // }


  return {
    startSummoning,
  };

})();
