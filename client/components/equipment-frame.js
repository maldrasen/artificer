Components.EquipmentFrame = (function() {

  const EquipmentSlots = [
    { code:'weapon', label: 'Weapon', },
    { code:'tool-1', label: 'Tool',   },
    { code:'tool-2', label: 'Tool',   },
    { code:'head',   label: 'Head',   },
    { code:'outfit', label: 'Outfit', },
    { code:'ass',    label: 'Ass',    },
    { code:'pussy',  label: 'Pussy', gender:'not-male' },
    { code:'cock',   label: 'Cock',  gender:'not-female'},
    { code:'tits',   label: 'Tits',  gender:'not-male' },
  ];

  function init() {

  }

  function build(character) {
    console.log("Build Frame - ",character);
    Renderer.sendCommand('character.get-equipment', { id:character.id });
  }

  function showEquipment(event, equipment) {
    console.log("Show:",equipment);

    let slotList = $('<ul>',{ class:'slot-list' });

    each(EquipmentSlots, slot => {
      console.log("Slot:",slot)
      let item = $(`
        <li class='slot ${slot.code}-slot' data-slot='${slot.code}'>
          <div class='button-area'>
            ${getIcon(equipment[slot.code]).html()}
          </div>
          <div class='info-area'>
            <div class='label'>${slot.label}</div>
            <div class='details'>${getDetails(equipment[slot.code])}</div>
          </div>
        </li>
      `);

      slotList.append(item);
    });

    $('#overlayContent .equipment-frame').empty().append(slotList);
  }

  function getIcon(item) {
    return (item == null) ?
      Elements.ImageResource.iconElement('equipment', 'empty', 1):
      Elements.ImageResource.iconElement('equipment', item.code, 1);
  }

  function getDetails(item) {
    return item ? item.details : ''
  }

  // <h3>Equipment</h3>
  // <ul>
  //   <li class='slot tool-2-slot' data-slot='tool-2'>
  //     <div class='button-area'>
  //     </div>
  //     <div class='info-area'>
  //     <label>Tool</label>
  //   </li>
  //   <li class='slot outfit-slot' data-slot='outfit'>
  //     <div class='button-area'>
  //     </div>
  //     <div class='info-area'>
  //       <label>Outfit</label>
  //       <div>Description</div>
  //     </div>
  //   </li>
  // </ul>


  return { init, build, showEquipment };

})();
