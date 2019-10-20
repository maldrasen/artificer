global.Debug = {

  Injuries:{
    redescribe: () => { ipcRenderer.send('debug.injuries.redescribe'); },
  }

}
