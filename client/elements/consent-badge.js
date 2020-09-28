Elements.ConsentBadge = (function() {

  function build(consent) {
    const badge = $('<span>',{ class:'badge consent-badge' }).
      addClass(`consent-level-${consent.level}`).
      append(consent.level);

    Elements.Tooltip.add(badge, {
      content: buildTooltip(consent)
    });

    return badge;
  }

  function buildTooltip(details) {
    let total = Math.round(details.desire * details.overallFactor * 100) / 100;

    return $(`<div class='consent-details padding' style='min-width:300px'>
      <div class='margin-bottom'>${details.explanation}</div>
      <dl class='fs-small small-padding-bottom small-margin-bottom border-light-bottom attributes'>
        <dt class='lust'>Desire</dt>
        <dd class='lust'>${details.desire}</dd>
        <dt class='fear'>Fear</dt>
        <dd class='fear'>${details.fear}</dd>
      </dl>
      <dl class='fs-small small-padding-bottom small-margin-bottom border-light-bottom'>
        <dt class='fg-weak'>Difficulty Factor</dt>
        <dd class='fg-weak'>${details.difficultyFactor}</dd>
        <dt class='fg-weak'>Gender Factor</dt>
        <dd class='fg-weak'>${details.genderFactor}</dd>
        <dt class='fg-weak'>Injury Factor</dt>
        <dd class='fg-weak'>${details.injuryFactor}</dd>
        <dt class='fg-weak'>Aspect Factor</dt>
        <dd class='fg-weak'>${details.aspectFactor}</dd>
        <dt>Overall Factor</dt>
        <dd>${details.overallFactor}</dd>
      </dl>
      <dl class='fs-small'>
        <dt class='fg-strong'>Total Desire</dt>
        <dd class='consent-level-${details.level}'>${total}</dd>
      </dl>
    </div>`);
  }

  return { build };

})();
