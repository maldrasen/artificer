describe('Messenger', function() {

  afterEach(function() {
    Messenger.unsubscribeAll('test.channel');
  })

  it("subscribes and publishes to a channel", function(done) {
    Messenger.subscribe('test.channel', data => {
      expect(data.horse).to.equal('cock');
      done();
    });

    Messenger.publish('test.channel', { horse:'cock' });
  });

  it("requests and responds to a channel", function(done) {
    Messenger.subscribe('test.channel', data => {
      expect(data.horse).to.equal('cock');
      return { horse:'pussy' };
    });

    Messenger.request('test.channel', { horse:'cock' }, response => {
      expect(response.horse).to.equal('pussy');
      done();
    });
  });

  it("sends a request and gets multiple responses on a channel.", function(done) {
    Messenger.subscribe('test.channel', () => { return 'smashed-tits' });
    Messenger.subscribe('test.channel', () => { return 'crushed-balls' });
    Messenger.subscribe('test.channel', () => { return 'anal-prolapse' });

    Messenger.request('test.channel', response => {
      expect(response).to.eql(['smashed-tits','crushed-balls','anal-prolapse']);
      done();
    });
  });

  it("can unsubscribe a channel", function(done) {
    let tits_id = Messenger.subscribe('test.channel', () => { return 'smashed-tits' });
    let balls_id = Messenger.subscribe('test.channel', () => { return 'crushed-balls' });
    let anus_id = Messenger.subscribe('test.channel', () => { return 'anal-prolapse' });

    Messenger.unsubscribe('test.channel',balls_id);

    Messenger.request('test.channel', response => {
      expect(response).to.eql(['smashed-tits','anal-prolapse']);
      done();
    });
  });

});
