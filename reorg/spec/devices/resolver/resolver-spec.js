describe('Resolver', function() {

  // Need to fix this slowly, piece by piece.

  // it("assigns roles to characters", function(done) {
  //   GameHelper.setupTestGame().then(() => {
  //     Character.findAll({ where:{ type:'minion' }}).then(allMinions => {
  //       let id_1 = allMinions[0].id;
  //       let id_2 = allMinions[1].id;
  //
  //       let planData = { assignedRoles:[
  //         { id:id_1, role:'forager' },
  //         { id:id_2, role:'rest', options:{ nude:'of-course' }},
  //       ]};
  //
  //       Resolver.startWork(planData).then(() => {
  //         Character.findAll({ where:{ id:[id_1,id_2] }}).then(minions => {
  //           expect(minions[0].role.code).to.equal('forager');
  //           expect(minions[1].dutyCode).to.equal('rest');
  //           expect(minions[1].dutyOptions.nude).to.equal('of-course');
  //           done();
  //         });
  //       });
  //     });
  //   });
  // });

  // TODO: Re need a project that allows minions before this spec can be fixed
  // it('sets the current project', function(done) {
  //   GameHelper.setupTestGame().then(() => {
  //     Character.findAll({ where:{ type:'minion' }}).then(allMinions => {
  //       let id_1 = allMinions[0].id;
  //       let id_2 = allMinions[1].id;
  //
  //       let planData = {
  //         assignedRoles:[],
  //         projectWork:{ code:'clear-great-hall', minions:[id_1,id_2] }
  //       };
  //
  //       Resolver.startWork(planData).then(() => {
  //         Game.instance().then(game => {
  //           Character.findAll({ where:{ id:[id_1,id_2] }}).then(minions => {
  //             AvailableEvent.findOne({ where:{ code:'great-hall-talk-to-rat-chief' }}).then(event => {
  //               expect(game.currentProject).to.equal('clear-great-hall');
  //               expect(game.currentProjectProgress).to.equal(20);
  //               expect(game.time).to.equal('afternoon');
  //               expect(minions[0].currentDuty).to.equal('project');
  //               expect(minions[1].currentDuty).to.equal('project');
  //               expect(event.requires).to.equal('game.dayNumber=4')
  //               done();
  //             });
  //           });
  //         });
  //       });
  //
  //     });
  //   });
  // });

});