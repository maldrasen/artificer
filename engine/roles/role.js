global.Role = (function() {

  async function work(character) {
    const context = new Context();
    await context.addCharacter('C',character);
    const result = new RoleResult(context);

    if (character.role == 'forager') { await Role.Forager.work(character,result); }
    if (character.role == 'hunter')  { await Role.Hunter.work(character,result); }
    if (character.role == 'rest')    { await Role.Rest.work(character,result); }

    return result;
  }

  async function getAvailableRoles(character) {
    const roles = [];
    if (Flag.lookup('plan-view.roles.forager') == 'Y') { roles.push({ code:'forager', name:'Forager' }); }
    if (Flag.lookup('plan-view.roles.hunter') == 'Y')  { roles.push({ code:'hunter',  name:'Hunter' });  }
    if (Flag.lookup('plan-view.roles.rest') == 'Y')    { roles.push({ code:'rest',    name:'Rest'   });  }
    return roles;
  }

  return {
    work,
    getAvailableRoles,
  }

})();

// New minions are created with the forager role, until resting is unlocked,
// then they are created with the rest role. This is true for missions as well.
Role.defaultRole = function() {
  return Flag.lookup('plan-view.roles.rest') == 'Y' ? 'rest' : 'forager'
}


// Role.Injuries = (function() {
//
//   async function applyInjury(character, context, hazardFunction) {
//     let injury = await getInjury(context, hazardFunction);
//     await character.addInjury(injury);
//     return Weaver.weave(injury.story, context);
//   }
//
//   async function getInjury(context, hazardFunction) {
//     return Random.from(ArrayUtility.compact(
//       await Promise.all(hazardFunction().map(async hazard => {
//         if (await CentralScrutinizer.meetsRequirements(hazard.requires, context)) { return hazard; }
//       }))
//     ));
//   }
//
//   return { applyInjury, getInjury };
//
// })();

// Role.Skills = (function() {
//
//   // Get the skill level for the aspect associated with this role.
//   async function skillLevel(character, skill) {
//     let aspect = await character.getCharacterAspect(skill);
//     return (aspect == null) ? 0 : aspect.level;
//   }
//
//   // This should be the standard way that a minion earns experience when
//   // performing their role. Every worker gets a minimum of 5xp. If this is a
//   // role where the minion returns with items, such as with huntinf and
//   // foraging, they get experience for each item that they return with. Each
//   // item flavor has it's own XP value. Other roles will probably have their
//   // own ways of determining experience.
//   //
//   // Options:
//   //   character   * The character
//   //   skill       * The code of the associated skill aspect
//   //   flavors       A map of item flavors in the form: { code:count }
//   //
//   // This function returns an object that the report uses to build the
//   // experience badges. This function can return null though if the character's
//   // skill has been capped.
//   async function addExperience(options) {
//     let character = options.character;
//
//     let experience = Object.keys(options.flavors||{}).reduce((total, code) => {
//       return total + (options.flavors[code] * (ItemFlavor.lookup(code).xp || 0));
//     },0) + 5;
//
//     let aspect = await character.getCharacterAspect(options.skill);
//     if (aspect != null) {
//       return await addExperienceToAspect(character, aspect, experience);
//     }
//
//     await character.addAspect(options.skill, { strength:experience });
//     return { code:options.skill, name:Aspect.lookup(options.skill).name, experience:experience };
//   }
//
//   async function addExperienceToAspect(character, aspect, experience) {
//     let currentLevel = aspect.level;
//     let currentStrength = aspect.strength;
//
//     await aspect.adjustStrength(experience);
//
//     if (currentStrength == aspect.strength) { return null; }
//
//     return (currentLevel == aspect.level) ?
//       { code:aspect.code, name:aspect.name, experience:experience }:
//       { code:aspect.code, name:aspect.name, experience:experience, gainedLevel:aspect.level };
//   }
//
//   return { skillLevel, addExperience }
//
// })();
