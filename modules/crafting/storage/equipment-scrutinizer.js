
// TODO: Eventually we will have the crafting module and it will need this scrutinizer.

// the base equipment check just operates over either all equipment or on
// unequipped equipment. The MinionScrutinizer is used to check equipped
// equipment (or it will once that's implemented)
//
//    equipment.available.CODE      checks for > 0 available (unequipped)
//    equipment.available.CODE=N    checks for N available
//    equipment.all.CODE            checks for >0 total
//    equipment.all.CODE=N          checks for N total
async function checkEquipment(requirement) {
  let presenceMatch = requirement.match(/^equipment\.(available|all)\.([^<>=]+)/);
  let operationMatch = requirement.match(/^equipment\.(available|all)\.([^<>=]+)(<|<=|=|>=|>)([^<>=]+)/);

  let type = presenceMatch[1];
  let code = presenceMatch[2];

  let count = ((type == 'all') ?
    (await CharacterEquipment.findAll({ where:{ code }})) :
    (await CharacterEquipment.notEquipped(code))).length;

  return (operationMatch == null) ? (count > 0) :
    CentralScrutinizer.checkComparisonOperation(count,operationMatch[3],operationMatch[4]);
}


// Also for checking an individual minion's equipment:
if (operation == 'equipment.unarmed') { return await checkWeaponSlot(null, data.character); }

async function checkWeaponSlot(code, character) {
  const weapon = await character.getEquipment('weapon');
  return (weapon == null) ? (code == null) : (weapon.code == code);
}
