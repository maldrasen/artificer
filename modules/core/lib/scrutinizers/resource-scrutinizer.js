
// TODO: Reimplement this. Resources will probably end up in a different module.

// if (requirement.match(/^resource/))        { return await checkResource(requirement); }

// Check to see if a resource or a number of resources are in the inventory.
// The requirement can be formatted in one of two ways:
//    resource.ITEM       checks for > 0
//    resource.ITEM=N     checks for N items, any operator can be used.

//   async function checkResource(requirement) {
//     let match = requirement.match(/^resource\.([^<>=]+)(<|<=|=|>=|>)([^<>=]+)/);
//     if (match) {
//       let resource = await Resource.lookup(match[1]);
//       let count = (resource == null) ? 0 : resource.count;
//       return CentralScrutinizer.checkComparisonOperation(count,match[2],match[3]);
//     } else {
//       let code = requirement.match(/^resource\.(.+)/)[1];
//       return (await Resource.lookup(code)) != null
//     }
//   }
