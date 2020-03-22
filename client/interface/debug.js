global.Debug = {

  Game:{
    printAvailableEvents: () => { ipcRenderer.send('debug.game.printAvailableEvents'); },
    printEventQueue: () => { ipcRenderer.send('debug.game.printEventQueue'); },
    printFlags: () => { ipcRenderer.send('debug.game.printFlags'); },
  },

  Character:{
    redescribe: id => { ipcRenderer.send('debug.character.redescribe',{ id }); },
    getAttribute: (id,attribute) => { ipcRenderer.send('debug.character.getAttribute',{ id, attribute }); },
    setAttribute: (id,attribute,value) => { ipcRenderer.send('debug.character.setAttribute',{ id, attribute, value }); },
  },

  Anus:{
    getAttribute: (id,attribute) => { ipcRenderer.send('debug.anus.getAttribute',{ id, attribute }); },
    setAttribute: (id,attribute,value) => { ipcRenderer.send('debug.anus.setAttribute',{ id, attribute, value }); },
  },

  Body:{
    getAttribute: (id,attribute) => { ipcRenderer.send('debug.body.getAttribute',{ id, attribute }); },
    setAttribute: (id,attribute,value) => { ipcRenderer.send('debug.body.setAttribute',{ id, attribute, value }); },
  },

  Cock:{
    getAttribute: (id,attribute) => { ipcRenderer.send('debug.cock.getAttribute',{ id, attribute }); },
    setAttribute: (id,attribute,value) => { ipcRenderer.send('debug.cock.setAttribute',{ id, attribute, value }); },
  },

  Mouth:{
    getAttribute: (id,attribute) => { ipcRenderer.send('debug.mouth.getAttribute',{ id, attribute }); },
    setAttribute: (id,attribute,value) => { ipcRenderer.send('debug.mouth.setAttribute',{ id, attribute, value }); },
  },

  Nipples:{
    getAttribute: (id,attribute) => { ipcRenderer.send('debug.nipples.getAttribute',{ id, attribute }); },
    setAttribute: (id,attribute,value) => { ipcRenderer.send('debug.nipples.setAttribute',{ id, attribute, value }); },
  },

  Pussy:{
    getAttribute: (id,attribute) => { ipcRenderer.send('debug.pussy.getAttribute',{ id, attribute }); },
    setAttribute: (id,attribute,value) => { ipcRenderer.send('debug.pussy.setAttribute',{ id, attribute, value }); },
  },

  Tits:{
    getAttribute: (id,attribute) => { ipcRenderer.send('debug.tits.getAttribute',{ id, attribute }); },
    setAttribute: (id,attribute,value) => { ipcRenderer.send('debug.tits.setAttribute',{ id, attribute, value }); },
  },

}
