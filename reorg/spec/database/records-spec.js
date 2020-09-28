describe('Records', function() {

  async function setupAndSave() {
    await GameHelper.setupTestGame();
    await Records.saveToFile('Big "Crazy"  &  Stuff');
    return (await Records.listSaveFiles()).find(f => { return f.playerName == 'Gary' });
  }

  async function cleanup(filename) {
    await Records.deleteSaveFile(filename);
    return (await Records.listSaveFiles()).find(f => { return f.playerName == 'Gary' });
  }

  // This is a long ass spec. It fully creates a game, saves the game, loads the game, and deletes the savefile. So
  // yeah, let's just do all that in one deep nest...
  it("saves the current game to a json file given a filename", function(done) {
    setupAndSave().then(savefile => {
      expect(savefile.gameName).to.equal("Big Crazy Stuff");
      Game.clear().then(() => {
        Player.instance().then(player => {
          expect(Game.instance()).to.not.exist;
          expect(player).to.not.exist;
          Records.loadFromFile('Gary.Big_Crazy_Stuff').then(() => {
            Player.instance().then(loadedPlayer => {
              expect(loadedPlayer.firstName).to.equal('Gary');
              cleanup(savefile.filename).then(deletedFile => {
                expect(deletedFile).to.not.exist;
                done();
              });
            });
          });
        });
      });
    });
  });

});
