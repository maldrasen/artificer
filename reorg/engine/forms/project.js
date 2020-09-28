global.Project = class Project extends Form {

  async readyState() {
    let insufficient = this.checkMaterials({
      resources: (await Resource.counts()),
      equipment: (await CharacterEquipment.availableCounts()),
    });

    return (insufficient.length == 0) ?
      { ready:true } :
      { ready:false, excuse:makeExcuse(insufficient) };
  }

  // This function checks to see if all of the required materials are available
  // for the project to use. If not it returns an array with the materials
  // that are currently lacking.
  checkMaterials(inventory) {
    const insufficient = [];

    each((this.materials||{}), (count,code) => {
      if (inventoryContains(count,code,inventory) == false) {
        insufficient.push({ count, code });
      }
    });

    return insufficient;
  }
}

// The inventoryContains() function needs to check both resouece and equipment
// there may be other types of items that need to be checked at some point as
// well.
function inventoryContains(count,code,inventory) {
  if (inventory.resources[code]) { return inventory.resources[code] >= count; }
  if (inventory.equipment[code]) { return inventory.equipment[code] >= count; }
  return false;
}

function makeExcuse(insufficient) {
  if (insufficient.length == 1) {
    return `I don't have ${twoHides(insufficient[0])}.`;
  }
  if (insufficient.length == 2) {
    return `I don't have ${twoHides(insufficient[0])} or ${twoHides(insufficient[1])}.`;
  }

  let excuse = `I don't have `;
  for (let i=1; i<insufficient.length; i++) {
    excuse += `${twoHides(insufficient[i])}, `
  }

  return `${excuse}or ${twoHides(insufficient[0])}`;
}

function twoHides(item) {
  let form = Item.instances[item.code] || Equipment.instances[item.code];
  return (item.count == 1) ?
    `one ${form.name.toLowerCase()}`:
    `${EnglishUtility.numberInEnglish(item.count)} ${form.plural.toLowerCase()}`;
}
