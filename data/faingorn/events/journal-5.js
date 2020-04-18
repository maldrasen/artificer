Event.build('journal-5', {
  background: { code:'journal' },
  time:'afternoon',

  stages:[{
    pages:[
      { text:`Again, I decide to spend what's left of the evening reading the journal.` },
      { text:`Malcolm spent the next several entries detailing the progress he was making on the carvings. Some of
          these he painstakingly reproduced in this journal.` },
      { text:`I too find them strange; chaotic and yet ordered in a way. Some areas are strangely empty, while others
          are crammed with such detail that Malcolm couldn't capture it with his pen alone. Seemingly random motifs
          appear in multiple locations, scaled or rotated.` },
      { text:`They're like fractals that have been stripped of their mathematical purity; self-similar not like a fern
          or a tree, but like a cancer.` },
      { text:`After having reproduced a dozen or so of these carvings into the journal though he started to recognize a
          few common patterns. He's circled several regions of one of his renderings; areas that look like nothing more
          than tangled vines to me, and declares that this must be writing.` },
      { text:`He lays out his analysis convincingly, though if he's correct it's a staggeringly complex language with
          thousands of different letter forms. The shape of the letters are transformed by both the proceeding and the
          succeeding characters.` },
      { text:`This is done to such a degree that a character that appears two or three places ahead or behind the
          current character can completely alter its shape. And these ligature operations as he calls them have to be
          applied both retroactively and recursively so that the addition of a single letter could conceivably alter
          the entire structure.` },
      { text:`It's almost as though someone designed a language that was impossible to write.` },
      { text:`Having determined that this was a type of script brought him no closer to deciphering it though. For that
          he would need resources he didn't have access to.` },
      { text:`He did however think he knew where they could be found.` },
      { text:`To that end he decided that Wren must return to Dennevar. There she could enlist the help of another of
          his colleagues, either a linguist or another person familiar with ancient scripts. Barring that, she might be
          able find samples of similar writing, found in places where its meaning was more or less understood.` },
      { text:`It would be a risk of course, sending her back through the wilderness alone. Ravingari objected strongly,
          saying it was far too dangerous and they would risk being discovered. Having come this far though, Malcolm
          couldn't bear to leave the keep unoccupied.` },
      { text:`He insisted that the woodsman remain while Wren left as soon it grew warm enough to travel. It was a
          bitter fight. Wren was perfectly willing to go, and even looked forward to returning to the city, but she and
          Ravingari had been lovers for months and he had grown overprotective of her in Malcolm's view.` },
      { text:`In the end though, Malcolm was the noble lord and Ravingari his servant, and thus bound to do his lord's
          bidding.` },
      { text:`Out of curiosity I flip forward in the journal and see that only a couple dozen or so entries remain.
          Whatever happened here looks to have happened sometime soon after his assistant's departure. It's getting
          late though, so I decide to put the book away for tonight.` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.add('journal-6');
  },

});
