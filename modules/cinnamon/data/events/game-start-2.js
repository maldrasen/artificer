Event.build('game-start-2', {

  stages:[{
    pages: [
      { text:`When I look up from the conflagration I see a small imp, no more than two feet tall, hovering in the
          air just behind my desk waiting for me to acknowledge her presence. Despite the fact that she's only a
          couple of feet tall, she's clearly a woman. She's completely nude, showing off her voluptuous but tiny
          body. "Master!" she cries in a voice filled with both delight and demonic menace.` },
      { text:`Her tits wobble distractingly. Though they're only about the size of lemons they look huge on her tiny
          body and they bounce with every flap of her wings. Her sudden appearance could only mean one thing though;
          my contract with the lords of the Court of Corruption was accepted.` },
      { text:`I have to admit, I wasn't expecting an imp, especially one that calls me master. Looking at her with
          some suspicion I say, "Master? My contract didn't call for an imp servant."`},
      { text:`She grins wickedly and says, "I come with the position. There are a lot of perks that come with being an
          artificer of the court after all, I'm just one of them."`},
      { text:`I nod, pretending to know what she's talking about. Did I do something wrong? This was supposed to be a
          simple trade, my services to a demon lord in return for a portion of his power. A position in the court, an
          imp servent&hellip; that sounds like more than I had bargained for. "I see," I say, "And what is your
          name?"`},
      { text:`The imp laughs a little, "Well, you would need at least two more tongues to be able to pronounce it. You
          can call me Cinnamon though, that's what my last master called me. Or you can call be something different,
          I don't give a fuck."`},

             // - Choice Should I rename my servant?
             //   No, Cinnamon is fine.
             //   Absolutely, what kind of asshole names his imp Cinnamon?

    ]
  }],

  onFinish: async choices => {
  },

});
