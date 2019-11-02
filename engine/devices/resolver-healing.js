Resolver.Healing = (function() {

  async function applyHealing(minion) {
    let parts = await minion.getCompleteBody();
    let healed = {};

    await healPart(minion, parts.body, 'smash', healed);

    if (parts.tits) {
      await healPart(minion, parts.tits, 'blight', healed);
      await healPart(minion, parts.tits, 'burn', healed);
      await healPart(minion, parts.tits, 'smash', healed);
    }

    let condition = (minion.roleCode == 'rest') ? 'rest' : 'nothing';
    let message = healingMessage(healed, condition);

    if (message) {
      let woven = await Weaver.weaveWithCharacter(message,'C',minion);
      Resolver.Report.setMinionData(minion,'healed',woven);
    }
  }

  // TODO: May also add extra healing if a minion is working a dedicated nurse
  //       role and healing amount may depend on nurse skill.
  async function healPart(minion, part, type, healed) {
    let level = part[`${type}Level`];
    let healing = part[`${type}Healing`];

    if (level > 0) {
      healing += (minion.roleCode == 'rest') ? 2 : 1;

      if (healing >= requiredHealing(level)) {
        await completeHealing(minion, part, type, healed);
      } else {
        await part.update({ [`${type}Healing`]:healing });
      }
    }
  }

  // Because each damage type has different attributes, each type should
  // probably just have its own reset function.
  async function completeHealing(minion, part, type, healed) {
    let partName = part.constructor.name;

    if (healed[partName] == null) { healed[partName] = []; }
    healed[partName].push(type);

    if (type == 'blight') { await resetBlight(part); }
    if (type == 'burn')   { await resetBurn(part);   }
    if (type == 'smash')  { await resetSmash(part);  }

    await part.save();
  }

  async function resetBlight(part) {
    part.blightLevel = 0;
    part.blightCount = 0;
    part.blightHealing = 0;

    if (part.blightPlace) { part.blightPlace = null; }
  }

  async function resetBurn(part) {
    part.burnLevel = 0;
    part.burnCount = 0;
    part.burnHealing = 0;

    if (part.burnPlace) { part.burnPlace = null; }
  }

  async function resetSmash(part) {
    part.smashLevel = 0;
    part.smashCount = 0;
    part.smashHealing = 0;

    if (part.smashPlace) { part.smashPlace = null; }
    if (part.smashShape) { part.smashShape = null; }
    if (part.smashTeethMissing) { part.smashTeethMissing = 0; }
  }

  function requiredHealing(level) {
    return { 1:2, 2:5, 3:9, 4:14, 5:20 }[level];
  }

  // === Healed Message ===

  // The healed should be an object in this form:
  //     healed -     { head:['smash'], tits:['blight','burn'] };
  //     condition -  nothing, rest, or nurse
  //
  function healingMessage(healed, condition) {
    let message = {
      nothing: '{{C::gender.His}} ',
      rest: 'After resting, {{C::gender.his}} ',
      nurse: 'After receiving treatment from {{nurse}}, {{C::gender.his}} ',
    }[condition];

    let parts = Object.keys(healed);

    if (parts.length == 0) {
      return null;
    }
    if (parts.length == 1) {
      message += `${partPhrase(parts[0], healed[parts[0]])} ${'tits' == parts[0] ? 'have' : 'has'}`;
    }
    if (parts.length == 2) {
      let p1 = partPhrase(parts[0], healed[parts[0]]);
      let p2 = partPhrase(parts[1], healed[parts[1]]);
      message += `${p1} and {{C::gender.his}} ${p2} have`;
    }
    if (parts.length > 2) {
      for (let i=1; i<parts.length; i++) {
        message += `${partPhrase(parts[i], healed[parts[i]])}, `;
      }
      message += `and {{C::gender.his}} ${partPhrase(parts[0], healed[parts[0]])} have all`;
    }

    return `${message} healed naturally.`
  }

  function partPhrase(key, types) {
    if (types.length == 1) {
      return `${typeVerb(types[0])} ${key}`
    }
    if (types.length == 2) {
      return `${typeVerb(types[0])} and ${typeVerb(types[1])} ${key}`
    }
    if (types.length > 2) {
      let mess = ''
      for (let i=1; i<types.length; i++) {
        mess += `${typeVerb(types[i])}, `
      }
      return `${mess}and ${typeVerb(types[0])} ${key}`
    }
    return `[${key}:${types}]`
  }

  function typeVerb(type) {
    return {
      blight: 'blighted',
      burn:   'burnt',
      smash:  'bruised',
    }[type];
  }

  return { applyHealing }

})();
