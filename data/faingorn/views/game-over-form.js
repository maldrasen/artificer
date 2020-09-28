
Components.EventView.FormPage.register('game-over', {
  view: 'data/faingorn/views/game-over-form.html',
  onLoad: page => {
    setTimeout(function() {
      $('#gameOver .you-died').css({
        opacity: 1,
        transform: 'scale(1,1)'
      });
    },500);
  },
});
