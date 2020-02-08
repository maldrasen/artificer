Components.EquipmentFrame = (function() {
  let currentCharacter = null;

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
    $(document).on('click','.equipment-frame .equip-icon-button', Elements.buttonAction(openEquipDialog));
  }

  function openEquipDialog() {
    let slot = $(this).closest('.slot');
  }

  // === Construction ===

  function build(character) {
    currentCharacter = character;
    Renderer.sendCommand('character.get-equipment', { id:character.id });
  }

  function showEquipment(event, equipment) {
    let slotList = $('<ul>',{ class:'slot-list' });
    let scrollingPanel = Elements.ScrollingPanel.wrapFixed(slotList);

    each(slotsForGender(), slot => {
      let item = $(`
        <li class='slot ${slot.code}-slot' data-slot='${slot.code}'>
          <div class='button-area'>
            <a href='#' class='button-icon equip-icon-button'></a>
          </div>
          <div class='info-area'>
            <div class='label'>${slot.label}</div>
            <div class='details'>${getDetails(equipment[slot.code])}</div>
          </div>
        </li>
      `);

      item.find('a').append(getIcon(equipment[slot.code]));
      item.addClass(equipment[slot.code] == null ? 'empty' : 'equipped')
      slotList.append(item);
    });

    $('#overlayContent .equipment-frame').empty().append(scrollingPanel);

    Elements.ScrollingPanel.build(scrollingPanel);
  }

  function slotsForGender() {
    return EquipmentSlots.filter(slot => {
      if (slot.gender == 'not-male') { return currentCharacter.gender != 'Male' }
      if (slot.gender == 'not-female') { return currentCharacter.gender != 'Female' }
      return true;
    })
  }

  function getIcon(item) {
    return (item == null) ?
      Elements.ImageResource.iconElement('equipment', 'empty', 1):
      Elements.ImageResource.iconElement('equipment', item.code, 1);
  }

  function getDetails(item) {
    return item ? item.details : ''
  }

  return { init, build, showEquipment };

})();
