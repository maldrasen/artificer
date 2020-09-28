StoryTeller.CockSegments = (function() {

  // Looking into redoing all of this now that everything is being moved into
  // training.
  //
  // // The player pulls out his cock and beckons the character to come service it.
  // // This is done in several different summon actions, mostly oral scenes where
  // // a bit of cock worship and such is called for. This segment should always
  // // set the player position and the player cock hardness status.
  // async function showCock(storyTeller) {
  //   const outfit = await storyTeller.getPlayerOutfit();
  //   let options = []
  //
  //   // The player is already nude and can just present himself. This is the
  //   // default for now until clothing is implemented. Once it is this function
  //   // will have the player take his clothes off, or just pull his cock out.
  //   // I could also still add these segments after they player has removed his
  //   // clothing or pulled his cock out.
  //   if (outfit == null) {
  //
  //     // The player standing is assumed to be the default position here.
  //     if (storyTeller.mightBe('playerPosition','standing')) {
  //       if (storyTeller.mightBe('playerCock','soft')) {
  //         StoryTeller.addOptionsWith(options,[
  //           `I hold my soft cock by the base of the shaft, letting it swing slowly back and forth.`,
  //           `I take my still soft cock in my hand and start slowly stroking it.`,
  //           `I grab my cock under the balls, bunching up my sack and pushing my cock forward.`,
  //         ],{ playerPosition:'standing', playerCock:'soft' });
  //       }
  //       if (storyTeller.mightBe('playerCock','hard')) {
  //         StoryTeller.addOptionsWith(options,[
  //           `My dick is already hard. I grab it by the base and let it sway in front of me.`,
  //           `I slowly stroke my shaft, rubbing my hand up and down its hard length.`,
  //         ],{ playerPosition:'standing', playerCock:'hard' });
  //       }
  //     }
  //
  //     // Only if the player is explicitly sitting, which they might be if
  //     // startSummoning() indicates that they're waiting in a chair. Could
  //     // probably use a couple more variations on this based on size and cock
  //     // shape.
  //     if (storyTeller.getStatus('playerPosition') == 'sitting') {
  //       if (storyTeller.mightBe('playerCock','soft')) {
  //         StoryTeller.addOptionsWith(options,[
  //           `I lean back and spread my legs slightly, letting my cock and balls lay out heavily in front of me.`,
  //         ],{ playerPosition:'laying', playerCock:'soft' });
  //       }
  //       if (storyTeller.mightBe('playerCock','hard')) {
  //         StoryTeller.addOptionsWith(options,[
  //           `I lean back, thrusting my stiff cock forward, letting it sway in the air in front of me.`,
  //           `I lean back while slowly stroking my already hard cock.`,
  //         ],{ playerPosition:'laying', playerCock:'hard' });
  //       }
  //     }
  //
  //     // Only if the player is explicitly laying, which they might be if
  //     // startSummoning() indicates that they're laying down.
  //     if (storyTeller.getStatus('playerPosition') == 'laying') {
  //       if (storyTeller.mightBe('playerCock','soft')) {
  //         StoryTeller.addOptionsWith(options,[
  //           `My cock is soft and hanging over my left leg slightly.`,
  //           `I'm resting on my side, letting my cock hang down heavily before me.`,
  //         ],{ playerPosition:'laying', playerCock:'soft' });
  //       }
  //       if (storyTeller.mightBe('playerCock','hard')) {
  //         StoryTeller.addOptionsWith(options,[
  //           `My dick is already hard. I grab it by the base and let it sway in the air above me.`,
  //           `I stretch a bit, arching my back and letting my cock rise up in the air; it's hard length resting heavily on my stomach.`
  //         ],{ playerPosition:'laying', playerCock:'hard' });
  //       }
  //     }
  //   }
  //
  //   storyTeller.addSegment(Random.from(options));
  // }
  //
  // return {
  //   showCock,
  // };

})();
