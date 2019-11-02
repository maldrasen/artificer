Resolver.Game = (function() {

  function becomeAfternoon() {
    return new Promise(resolve => {
      Game.instance().then(game => {
        game.time = 'afternoon';
        game.save().then(resolve);
      });
    });
  }

  function becomeMorning() {
    return new Promise(resolve => {
      Game.instance().then(game => {
        game.time = 'morning';
        game.dayNumber += 1;
        game.save().then(resolve);
      });
    });
  }

  return {
    becomeAfternoon: becomeAfternoon,
    becomeMorning: becomeMorning,
  }

})();
