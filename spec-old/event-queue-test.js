// describe('EventQueue', function() {
//
//   before(function() {
//     DataUtility.insertAll('Event', {
//       'test.event.1':{ view:`test-view-1` },
//     });
//   });
//
//   after(function() {
//     picoDB.deleteOne({ view:`test-view-1` });
//   });
//
//   beforeEach(function() {
//     global.counter = 0;
//   });
//
//   afterEach(function() {
//     EventQueue.deleteAll();
//   })
//
//   it('can add events', function() {
//     EventQueue.addEvent('test.event.1', { stuff:'thing' });
//     expect(EventQueue.getEventCode()).to.equal('test.event.1');
//     expect(EventQueue.getEventState().stuff).to.equal('thing');
//     expect(EventQueue.getEvent().view).to.equal('test-view-1')
//   });
//
//   it('adds events in order', function() {
//     EventQueue.addEvent('e.3');
//     EventQueue.addEvent('e.1');
//     EventQueue.addEvent('e.2');
//     expect(EventQueue.getQueue().map(event => event.code)).to.have.ordered.members(['e.3','e.1','e.2']);
//   });
//
//   it('removes first in queue', function() {
//     EventQueue.addEvent('e.3',{ herp:'derp' });
//     EventQueue.addEvent('e.1');
//     EventQueue.addEvent('e.2');
//     expect(EventQueue.removeEvent().herp).to.equal('derp');
//     expect(EventQueue.getQueue().map(event => event.code)).to.have.ordered.members(['e.1','e.2']);
//   });
//
//   it('executes callback function strings', function() {
//     EventQueue.addEvent('e.1', {
//       onEnd:'global.counter++'
//     });
//     EventQueue.endEvent();
//     expect(global.counter).to.equal(1);
//   });
//
//   it('executes callback function arrays', function() {
//     EventQueue.addEvent('e.1', { onEnd:[
//       'global.counter++',
//       'global.counter++'
//     ]});
//     EventQueue.endEvent();
//     expect(global.counter).to.equal(2);
//   });
//
// });
