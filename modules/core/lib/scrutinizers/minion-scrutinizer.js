// global.MinionScrutinizer = (function() {
//
//   async function check(requirement, context) {
//     if (requirement.match(/^minions.working-project/)) { return await checkWorkingMinionCount(requirement, context); }
//     if (requirement == 'minions.will-betray')          { return await checkBetray(context); }
//     if (requirement == 'minions.will-not-betray')      { return await checkBetray(context) == false; }
//     if (requirement == 'minions.will-mutiny')          { return await checkMutiny(context); }
//     if (requirement == 'minions.will-not-mutiny')      { return await checkMutiny(context) == false; }
//
//     // Injuries
//     if (requirement.match(/^minions.injured-count/))            { return await checkInjuredCount(requirement,100); }
//     if (requirement.match(/^minions.badly-injured-count/))      { return await checkInjuredCount(requirement,76);  }
//     if (requirement.match(/^minions.horribly-injured-count/))   { return await checkInjuredCount(requirement,51);  }
//     if (requirement.match(/^minions.critically-injured-count/)) { return await checkInjuredCount(requirement,26);  }
//
//     // Roles
//     if (requirement.match(/minions\.forager-count/)) { return await checkDutyCount(requirement,'forager') }
//     if (requirement.match(/minions\.hunter-count/)) { return await checkDutyCount(requirement,'forager') }
//
//     // Single Minion
//     if (requirement.match(/^minion\(.+\)\./)) { return checkMinion(requirement, context); }
//
//     throw `Unknown Minion Requirement - ${requirement}`;
//   }
//
//   // Checks requirements in the form minion(X). This requirement needs to check an individual minion's attributes, so
//   // pass this off to the CharacterScrutinizer.
//   async function checkMinion(requirement, context) {
//     let match = requirement.match(/^minion\((.+)\)\.(.+)/);
//     let minion = context.get(match[1]);
//
//     if (minion == null) {
//       throw `The minion(${match[1]}) should have been in the context before the scrutinizer was invoked.`
//     }
//
//     return CharacterScrutinizer.check(match[2], minion)
//   }
//
//   // To check how many menions are working on a project. This requirement has the format: "minions.working-project>1"
//   async function checkWorkingMinionCount(requirement, context) {
//     await context.addMinionData();
//     let count = context.get('minionData').workingCount;
//     let match = requirement.match(/project(<|<=|=|>=|>)([^<>=]+)/);
//     return CentralScrutinizer.checkComparisonOperation(count,match[1],match[2]);
//   }
//
//   async function checkInjuredCount(requirement, health) {
//     const match = requirement.match(/count(<|<=|=|>=|>)([^<>=]+)/);
//     const minions = await Character.getNormalMinions();
//
//     const injured = ArrayUtility.compact((await Promise.all(minions.map(async minion => {
//       return (await minion.getHealth()) < health ? minion : null;
//     }))));
//
//     return CentralScrutinizer.checkComparisonOperation(injured.length,match[1],match[2]);
//   }
//
//   async function checkDutyCount(requirement,dutyCode) {
//     const characters = await Character.findAll({ where:{ status:'normal', currentDuty:'role', dutyCode:dutyCode }});
//     const match = requirement.match(/count(<|<=|=|>=|>)([^<>=]+)/);
//     return CentralScrutinizer.checkComparisonOperation(characters.length,match[1],match[2]);
//   }
//
//   async function checkBetray(context) {
//     return (Flag.lookup('minions.traitorous-count') || 0) > 0
//   }
//
//   // You minions will mutiny if you have more rebellious minions than loyal minions. The minimum number of minions that
//   // can mutiny is 4, with 3 rebellious and 1 loyal.
//   async function checkMutiny(context) {
//     let loyal =      Flag.lookup('minions.loyal-count') || 0;
//     let rebellious = Flag.lookup('minions.rebellious-count') || 0;
//     return (loyal + rebellious > 3) && (rebellious > loyal);
//   }
//
//   return { check };
//
// })();
