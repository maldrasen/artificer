global.HasEquipment = (function() {

  // Equip an item on a character given the character equipment instance and a
  // slot to put it in. A character can only have one piece of equipment in a
  // slot at a time so if a piece of equipment is already in that slot it needs
  // to be unequipped.
  async function equip(equipment, slot) {
    await this.unequipSlot(slot);
    await equipment.update({ character_id:this.id, slot:slot });
  }

  // Remove the piece of equipment in the given slot of there is one.
  async function unequipSlot(slot) {
    const current = await CharacterEquipment.findOne({ where:{ character_id:this.id, slot:slot }});
    if (current) {
      await this.unequip(current);
    }
  }

  // Unequipping just sets the character and slot back to null.
  async function unequip(equipment) {
    await equipment.update({ character_id:null, slot:null });
  }

  // Get all the character equipment equipped on this character.
  async function getAllEquipment() {
    return await CharacterEquipment.findAll({ where:{ character_id:this.id }});
  }

  // Get all of the equipment as a map for the view. The equipment is put into
  // a map where the equipment slots are the map keys.
  async function getAllEquipmentForView() {
    let detailed = await Promise.all((await this.getAllEquipment()).map(async item => {
      return {
        code: item.code,
        slot: item.slot,
        name: Equipment.lookup(item.code).name,
        details: (await item.buildDetails()),
      }
    }));

    let forView = {};
    each(detailed, item => {
      forView[item.slot] = item;
    })

    return forView;
  }

  return { isAppliedTo:function(model) {
    model.prototype.equip = equip;
    model.prototype.unequipSlot = unequipSlot;
    model.prototype.unequip = unequip;
    model.prototype.getAllEquipment = getAllEquipment;
    model.prototype.getAllEquipmentForView = getAllEquipmentForView;
  }};

})();
