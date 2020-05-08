Components.EquipmentFrame = (function() {
  let currentCharacter = null;
  let currentSlot = null;

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
    $(document).on('click','.equipment-frame .equip-icon-button', Elements.buttonAction(getAvailableEquipment));
    $(document).on('click','.available-equipment-item', Elements.buttonAction(equipItem));
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
      let item = equipment[slot.code];
      let name = (item == null) ? slot.label : item.name;

      let listItem = $(`
        <li class='slot ${slot.code}-slot' data-slot='${slot.code}'>
          <div class='button-area'>
            <a href='#' class='button-icon equip-icon-button'></a>
          </div>
          <div class='info-area'>
            <div class='label'>${name}</div>
            <div class='details'></div>
          </div>
        </li>
      `);

      if (item && item.condition != null) {
        listItem.find('.details').append(conditionElement(item.condition));
      }

      listItem.find('a').append(getIcon(item));
      listItem.addClass(item == null ? 'empty' : 'equipped')
      slotList.append(listItem);
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
      Elements.ImageResource.iconElement('equipment', 'empty', 1, false):
      Elements.ImageResource.iconElement('equipment', item.code, 1, false);
  }

  // === Available Items Floating Frame ===

  function getAvailableEquipment() {
    currentSlot = $(this).closest('.slot');
    Renderer.sendCommand('equipment.get-available', { slot:currentSlot.data('slot') });
  }

  function showAvailableEquipment(event, equipment) {
    let list = $('<ul>',{ class:'available-equipment-list' });
    let panel = Elements.ScrollingPanel.wrapFixed(list);

    list.append(buildAvailableListItem({
      name: 'Nothing',
      code: 'empty'
    }));

    each(equipment, item => {
      list.append(buildAvailableListItem(item));
    });

    Elements.FloatingFrame.open({
      content: panel,
      position: {
        bottom: 100,
        right: 200,
        height: 500,
        width: 300,
      }
    });

    Elements.ScrollingPanel.build(panel);
  }

  function buildAvailableListItem(item) {
    let nameArea = $('<div>',{ class:'name-area' }).append($('<div>').append(item.name));

    if (item.condition) {
      nameArea.append(conditionElement(item.condition));
    }

    let listItem = $('<li>',{ class:'available-equipment-item' });
        listItem.data('id',item.id);
        listItem.append(Elements.ImageResource.iconElement('equipment', item.code, 1, false));
        listItem.append(nameArea);

    return listItem;
  }

  function conditionElement(condition) {
    let span = $('<span>',{ class:'condition' });

    if (condition > 90) { return span.addClass('condition-excellent').append(`Excellent Condition (100%)`); }
    if (condition > 60) { return span.addClass('condition-good').append(`Good Condition (${condition}%)`); }
    if (condition > 30) { return span.addClass('condition-fair').append(`Fair Condition (${condition}%)`); }
    if (condition > 0) { return span.addClass('condition-bad').append(`Poor Condition (${condition}%)`); }

    return span.addClass('condition-broken').append('Broken');
  }

  // === Equipping Items ===

  function equipItem() {
    Renderer.sendCommand('character.equip', {
      character_id: currentCharacter.id,
      equipment_id: $(this).data('id'),
      slot: currentSlot.data('slot'),
    });

    Elements.FloatingFrame.close();
  }

  return {
    init,
    build,
    showEquipment,
    showAvailableEquipment
  };

})();
