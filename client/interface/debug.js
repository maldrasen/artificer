global.Debug = {

  Game:{
    printAvailableEvents: () => { ipcRenderer.send('debug.game.printAvailableEvents'); },
    printEventQueue: () => { ipcRenderer.send('debug.game.printEventQueue'); },
    printFlags: () => { ipcRenderer.send('debug.game.printFlags'); },
  },

  Character:{
    redescribe: id => { ipcRenderer.send('debug.character.redescribe',{ id }); },
    setAttribute: (id,attribute,value) => { ipcRenderer.send('debug.character.setAttribute',{ id, attribute, value }); }
  }

}
