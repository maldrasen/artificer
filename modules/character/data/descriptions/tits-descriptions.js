
TitsDescription.build({ d:`{{C::character.firstName}} has {{C::tits.sizeShape}} {{tits}}.` });
TitsDescription.build({ d:`{{C::character.firstName's}} {{tits}} are {{C::tits.sizeAndShape}}.` });

// --- Size Specific ---

TitsDescription.build({ conditions:['minion(C).tits.zero'],
  d: `{{C::character.firstName's}} chest is washboard flat, with absolutely no {{tits}} to speak of.`,
});

TitsDescription.build({ conditions:['minion(C).tits.zero'],
  d: `{{C::character.firstName}} has a completely flat chest. {{His}} chest is lean and muscular and could
    easily be mistaken for a man's.`,
});

TitsDescription.build({ conditions:['minion(C).tits.zero'],
  d: `{{C::character.firstName}} has a lean muscular chest that could easily be mistaken for a man's.`,
});

TitsDescription.build({ conditions:['minion(C).tits.zero'],
  d: `{{C::character.firstName's}} chest is washboard flat, with absolutely no {{tits}} to speak of.`,
});

TitsDescription.build({ requires:['minion(C).tits.tiny'],
  d: `{{C::character.firstName's}} {{C::tits.sizeShape}} {{tits}} are too small to do much more than proudly present
      {{his}} {{C::nipples.thickNipples}}.`,
});

// --- Shape Specific ---

TitsDescription.build({ requires:['minion(C).tits.perky'], conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName's}} {{tits}} are {{C::tits.sizeAndShape}}, with {{C::nipples.thickNipples}} set high
      on {{his}} {{tits}}.`,
});

TitsDescription.build({ requires:['minion(C).tits.perky'], conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName}} has very {{C::tits.shape}} {{tits}}. {{His}} {{C::nipples.thickNipples}} are set high
      on {{his}} {{C::tits.size}} {{tits}}, making them look even more jutting and pinchable.`,
});

TitsDescription.build({ requires:['minion(C).tits.conical'], conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName}} has {{C::tits.sizeShape}} {{tits}}. {{His}} {{C::tits.size}} {{tits}} are wide at the
      base and come to a narrow tip, then capped with a {{C::nipples.thickNipple}}.`,
});

// =====================
// Rat Tits Descriptions
// =====================

TitsDescription.build({ conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName}} has twelve {{C::tits.sizeShape}} {{tits}}. Each of {{his}} {{tits}} are
      {{C::tits.sizeComp}} and capped with a {{C::nipples.thickNipple}}.`,
});

TitsDescription.build({ conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName's}} {{tits}} are {{C::tits.sizeAndShape}}. Each of {{his}} {{C::tits.shape}}
      {{tits}} are {{C::tits.sizeComp}} and capped with a {{C::nipples.thickNipple}}.`,
});

TitsDescription.build({ conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName's}} chest is studded with twelve {{C::tits.size}} {{tits}}. Each of {{his}}
      {{C::tits.shape}} {{tits}} are {{C::tits.sizeComp}} and capped with a {{C::nipples.thickNipple}}.`,
});

// --- Size Specific ---

TitsDescription.build({ conditions:['minion(C).is-scaven','minion(C).tits.zero'],
  d: `{{C::character.firstName}} has a completely flat chest. {{His}} chest is lean and muscular and could easily be
      mistaken for a man's if not for {{his}} many {{C::nipples.thickNipples}}.`,
});

TitsDescription.build({ conditions:['minion(C).is-scaven','minion(C).tits.zero'],
  d: `{{C::character.firstName}} has a lean muscular chest that could easily be mistaken for a man's if not for
      {{his}} many {{C::nipples.thickNipples}}.`,
});

TitsDescription.build({ requires:['minion(C).tits.tiny'], conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName's}} chest is adorned with twelve {{C::tits.size}} {{tits}}. Each of {{his}}
      {{C::tits.shape}} {{tits}} are too small to do much more than push {{his}} many {{C::nipples.thickNipples}} out
      just a bit further.`,
});

TitsDescription.build({ requires:['minion(C).tits.tiny'], conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName's}} chest is studded with twelve {{C::tits.sizeShape}} {{tits}}. {{His}} {{tits}} are
      too small to do much more than push {{his}} many {{C::nipples.thickNipples}} out just a bit further.`,
});

TitsDescription.build({ requires:['minion(C).tits.tiny'], conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName}} has twelve {{C::tits.sizeShape}} {{tits}}. They're each quite small and don't do
      much other than press {{his}} many {{C::nipples.thickNipples}} out just a bit further.`,
});

TitsDescription.build({ requires:['minion(C).tits.tiny','minion(C).nipples.huge'], conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName}} has six rows of {{C::tits.sizeShape}} {{tits}}. Each of {{his}} {{tits}} is capped
      with a {{C::nipples.thickNipple}} almost as large as the {{tit}} itself.`,
});

// --- Shape Specific ---

TitsDescription.build({ requires: ['minion(C).tits.perky'], conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName's}} {{tits}} are {{C::tits.sizeAndShape}}, with {{C::nipples.thickNipples}} set high
      on each of {{his}} {{tits}}.`,
});

TitsDescription.build({ requires: ['minion(C).tits.perky'], conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName's}} chest is adorned with twelve {{C::tits.size}} {{tits}}. Each of {{his}}
      {{C::tits.shape}} {{tits}} pushes {{his}} {{C::nipples.thickNipples}} upward proudly.`,
});

TitsDescription.build({ requires: ['minion(C).tits.perky'], conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName}} has six rows of {{C::tits.size}} {{tits}}. {{His}} twelve {{C::nipples.thickNipples}}
      are set high on each of {{his}} {{C::tits.shape}} {{tits}}, making them look even more jutting and pinchable.`,
});

TitsDescription.build({ requires: ['minion(C).tits.conical'], conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName's}} chest is studded with twelve {{C::tits.sizeShape}} {{tits}}. {{His}} {{tits}} are
      wide at the base and come to a narrow tip, which makes {{his}} {{C::nipples.thickNipples}} seem to poke out
      even further.`,
});

TitsDescription.build({ requires: ['minion(C).tits.conical'], conditions:['minion(C).is-scaven'],
  d: `{{C::character.firstName}} has twelve {{C::tits.sizeShape}} {{tits}}. Each of {{his}} {{C::tits.size}}
      {{tits}} are wide at the base and come to a narrow tip, then capped with a {{C::nipples.thickNipple}}.`,
});
