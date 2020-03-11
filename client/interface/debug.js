global.Debug = {

  Game:{
    printAvailableEvents: () => { ipcRenderer.send('debug.game.printAvailableEvents'); },
    printEventQueue: () => { ipcRenderer.send('debug.game.printEventQueue'); },
    printFlags: () => { ipcRenderer.send('debug.game.printFlags'); },
  },

  Character:{
    redescribe: id => { ipcRenderer.send('debug.character.redescribe'); }
  }

}
