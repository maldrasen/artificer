
Elements.Chooser.OnAcceptFunctions['game-start.gender-choice'] = code => {
  Components.EventView.setStage(code == 'custom' ? 'custom-gender-page' : 'after-gender-page');
}
