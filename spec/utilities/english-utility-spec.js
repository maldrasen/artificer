describe("EnglishUtility", function() {

  describe('numberInEnglish()', function() {
    it('five', function() {
      expect(EnglishUtility.numberInEnglish(5)).to.equal('five');
    });

    it('thirteen', function() {
      expect(EnglishUtility.numberInEnglish(13)).to.equal('thirteen');
    });

    it('sixty-nine', function() {
      expect(EnglishUtility.numberInEnglish(69)).to.equal('sixty-nine');
    });

    it('one hundred sixty-nine', function() {
      expect(EnglishUtility.numberInEnglish(169)).to.equal('one hundred sixty-nine');
    });

    it('one thousand four hundred ninty-nine', function() {
      expect(EnglishUtility.numberInEnglish(1499)).to.equal('one thousand four hundred ninety-nine');
    });

    it('Seventy', function() {
      expect(EnglishUtility.NumberInEnglish(70)).to.equal('Seventy');
    });

    it("A big black cock", function() {
      expect(EnglishUtility.NumberInEnglish(1,{ whenOne:'a' })).to.equal('A');
    });

    it("And no tits", function() {
      expect(EnglishUtility.numberInEnglish(0,{ whenZero:'no' })).to.equal('no');
    });
  });

});
