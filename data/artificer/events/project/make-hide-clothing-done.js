Event.build('make-hide-clothing-done', {
  background: '../../resources/backgrounds/bg-great-hall-simple.png',

  stages:[{
    pages:[
      { text:`I pull my hide leggings on, satisfied with their fit.` },
      { text:`Finally after {{game|dayNumber}} days wandering around completely nude I finally have something that could reasonably be called "clothing"` },
      { text:`Not that I'm opposed to nudity.` },
      { text:`My minions certainly aren't.` },
      { text:`Though dressed in hides like I am now, the clothing they wear is more like fetish gear than anything else.` },
      { text:`Having your dick out at all times and having your ass readily available is just part of their culture I suppose.` },
      { text:`These furs and hides though are exactly what I need to keep warm in this harsh climate.` },
    ]
  }],

  onFinish: async () => {
    await Flag.set('player.dressedIn','hide');

    const flag = await Flag.lookup('player.bedsIn');
    if (flag) {
      await EventQueue.enqueueEvent('clothed-and-bedded');
    }
  },

});