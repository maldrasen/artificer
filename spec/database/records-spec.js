describe('Records', function() {

  // This is a long ass spec. It fully creates a game, saves the game, loads the game, and deletes the savefile. So
  // yeah, let's just do all that in one deep nest...
  it("saves the current game to a json file given a filename", function(done) {
    GameHelper.setupTestGame().then(game => {
      Records.saveToFile('Big "Crazy"  &  Stuff').then(() => {
        Records.listSaveFiles().then(savefiles => {
          let saveFile = savefiles.find(f => { return f.playerName == 'Testes' });
          expect(saveFile.gameName).to.equal("Big Crazy Stuff");
          Game.clear().then(() => {
            Game.instance().then(game => {
              Player.instance().then(player => {
                expect(game).to.not.exist;
                expect(player).to.not.exist;
                Records.loadFromFile('Testes.Big_Crazy_Stuff').then(game => {
                  Player.instance().then(loadedPlayer => {
                    expect(loadedPlayer.firstName).to.equal('Testes')
                    Records.deleteSaveFile(saveFile.filename).then(() => {
                      Records.listSaveFiles().then(moreFiles => {
                        expect(moreFiles.find(f => { return f.playerName == 'Testes' })).to.not.exist;
                        done();
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
