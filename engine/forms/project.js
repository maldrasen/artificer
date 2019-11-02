global.Project = class Project extends Form {

  // TODO: This function needs to check to see if all of the required materials
  //       and such
  async readyState() {
    if (this.materials == null) {
      return { ready:true };
    }

    // I might as well just get everything and check that, rather then doing
    // a complex async version. There's won't be enough resource types to
    // matter in terms of effeciency.
    let inventory = await Resource.findAll();
    let insufficient = [];

    each(this.materials, (count,code) => {
      if (inventoryContains(count,code,inventory) == false) {
        insufficient.push({ count, code });
      }
    });

    return (insufficient.length == 0) ?
      { ready:true } :
      { ready:false, excuse:makeExcuse(insufficient) };
  }
}

function inventoryContains(count,code,inventory) {
  let resource = inventory.filter(item => { return item.code == code })[0];
  return resource && resource.count >= count;
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
  let form = Item.lookup(item.code);
  return (item.count == 1) ?
    `one ${form.name.toLowerCase()}`:
    `${EnglishUtility.numberInEnglish(item.count)} ${form.plural.toLowerCase()}`;
}
