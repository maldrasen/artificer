global.Debug = {

  Game:{
    printFlags: () => { ipcRenderer.send('debug.game.printFlags'); }
  },

}
