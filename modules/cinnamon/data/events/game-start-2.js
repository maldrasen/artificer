Event.build('game-start-2', {

  background: 'office',
  setting: {
    phase: 'early',
    place: 'My Office'
  },

  stages:[{
    pages: [
      { text:`I carefully set the raven feathered quill back onto its stand and start to carefully read over the
          infernal contract once again. A careless mistake at this point could be fatal after all. Everything is as
          it should be though. The complex geometric sigils that make up the demonic language are compact enough that
          an entire contract, even one of this complexity, can fit on a single page. ` },
      { text:`Everything is as it should be. The paper is vellum, made from human skin, perfect and free from any
          blemishes. The red black ink is rendered from the same woman's blood and applied to the page without smudge
          or dribble. Finally satisfied I pick up the pen and sign the contract with a flourish.` },
      { text:`The black ink begins to glow a dull red, but steadily increases in brightness until the page is almost
          blinding to look at. Heat rises up off of the page as it starts to smolder and turn black, then finally
          completely bursts into flame. The hot flash of fire leaves nothing but a small pile of ashes on the desk.`},
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
