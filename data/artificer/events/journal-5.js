Event.build('journal-5', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',
  time:'afternoon',

  stages:[{
    pages:[
      { text:`Again, I decide to spend what's left of the evening reading the journal.` },
      { text:`Malcolm spent the next several entries detailing the progress he was making on the carvings.` },
      { text:`Some of these he painstakingly reproduced in this very journal.` },
      { text:`I too find them strange; chaotic and yet ordered in a way.` },
      { text:`Some areas are strangely empty, while others are crammed with such detail that Malcolm couldn't capture it with his pen alone.` },
      { text:`Seemingly random motifs appear in multiple locations, scaled or rotated.` },
      { text:`They're like fractals that have been stripped of their mathematical purity; self-similar not like a fern or a tree, but like a cancer.` },
      { text:`After having reproduced a dozen or so of these carvings into the journal though he started to recognize a few common patterns.` },
      { text:`He's circled several regions of one of his renderings; areas that look like nothing more than tangled vines, and declares that this must be writing.` },
      { text:`He lays out his analysis convincingly, though if he's correct it's a staggeringly complex language with thousands of different letter forms.` },
      { text:`The shape of the letters are transformed by both the proceeding and the succeeding characters.` },
      { text:`This is done to such a degree that a character that appears two or three places ahead or behind the current character can completely alter its shape.` },
      { text:`These ligature operations as he calls them have to be applied both retroactively and recursively so that
              the addition of a single letter could conceivably alter the entire structure.` },
      { text:`It's almost as though someone designed a language that was impossible to write.` },
      { text:`Having determined that this was a type of script brought him no closer to deciphering it though.` },
      { text:`For that he would need resources he didn't have access to.` },
      { text:`He did however think he knew where they could be found.` },
      { text:`To that end he decided that Wren must return to Dennevar.` },
      { text:`There she could enlist the help of another of his colleagues, either a linguist or another person familiar with ancient scripts.` },
      { text:`Barring that she might be able find samples of similar writing, found in places where its meaning was more or less understood.` },
      { text:`It would be a risk of course, sending her back through the wilderness alone.` },
      { text:`Having come this far though, Malcolm himself couldn't bear to leave the keep unoccupied.` },
      { text:`...` },
      { text:`..` },
      { text:`.` },
      { text:`I set the book aside a little earlier tonight.` },
      { text:`Malcolm's style of writing is precise, analytical, but also dry and tedious.` },
      { text:`He tries to keep his emotions to himself, but they're there roiling in the subtext.` },
      { text:`Is it excitement?` },
      { text:`Obsession?` },
      { text:`I suppose the only way to find out will be to see how his story ends.` },
    ]
  }],

  onFinish: async () => {
    AvailableEvent.addAll([{ code:'journal-6' }]);
  },

});
