global.Weaver = (function() {

  function updateEvent(queuedEvent) {
    return new Promise(resolve => {
      let event = Event.lookup(queuedEvent.code).properties;
      updateEventPages(event, {});
      resolve(event);
    });
  }

  function updateEventPages(event, context) {
    for (let s=0; s<event.stages.length; s++) {
      let stage = event.stages[s];
      if (stage.pages) {
        for (let p=0; p<stage.pages.length; p++) {
          let page = stage.pages[p];
          if (page.text) {
            stage.pages[p].text = weave(page.text, context);
          }
        }
      }
    }
  }

  // The weave function takes a string and recursivly itterates over it,
  // looking for {{ templates }} to replace with actual values. The context
  // defines things like which actors are in which position and so forth. If
  // for instance you're having a conversation between three prople the player
  // may be {{P}}, while the other two actors might be {{1}} and {{2}}.
  //
  // I should try to put everything that will need to be looked up into the
  // context beforehand, that way this function can remain synchronous.
  function weave(text, context) {
    var working = true;

    while(working) {
      var match = text.match(/{{([^}]+)::([^}]+)}}/)
      if (match) {
        text = text.replace(match[0], findValue(match[1].trim(), match[2].trim(), context));
      }
      else {
        working = false;
      }
    }

    return text;
  }

  // Find the correct loom and delegate replacement.
  function findValue(subject, token, context) {
    // if (token.startsWith('body')) { return BodyLoom.findValue(subject, token, context); }
    // if (token.startsWith('character')) { return CharacterLoom.findValue(subject, token, context); }
    // if (token.startsWith('equipment')) { return EquipmentLoom.findValue(subject, token, context); }
    // if (token.startsWith('gender')) { return GenderLoom.findValue(subject, token, context); }
    // if (token.startsWith('race')) { return RaceLoom.findValue(subject, token, context); }
    // return Loom.error(`BadToken(${subject}::${token})`);
  }

  function error(message) {
    return `<span class='loom-error error'>[LoomError > ${message}]</span>`;
  }


  return {
    updateEvent: updateEvent,
    weave: weave,
  };

})();
