
Description.buildTits({ d:`{{C::character.firstName}} has {{C::tits.sizeShape}} {{tits}}.` });
Description.buildTits({ d:`{{C::character.firstName's}} {{tits}} are {{C::tits.sizeAndShape}}.` });

// --- Size Specific ---

Description.buildTits({ conditions:['tits-size-zero'],
  d: `{{C::character.firstName's}} chest is washboard flat, with absolutely no {{tits}} to speak of.`,
});

Description.buildTits({ conditions:['tits-size-zero'],
  d: `{{C::character.firstName}} has a completely flat chest. {{C::gender.His}} chest is lean and muscular and could
    easily be mistaken for a man's.`,
});

Description.buildTits({ conditions:['tits-size-zero'],
  d: `{{C::character.firstName}} has a lean muscular chest that could easily be mistaken for a man's.`,
});

Description.buildTits({ conditions:['tits-size-zero'],
  d: `{{C::character.firstName's}} chest is washboard flat, with absolutely no {{tits}} to speak of.`,
});

Description.buildTits({ requirements:['tits-size-tiny'],
  d: `{{C::character.firstName's}} {{C::tits.sizeShape}} {{tits}} are too small to do much more than proudly present
      {{C::gender.his}} {{C::nipples.thickNipples}}.`,
});

// --- Shape Specific ---

Description.buildTits({ requirements:['tits-shape-perky'], conditions:['species-rat'],
  d: `{{C::character.firstName's}} {{tits}} are {{C::tits.sizeAndShape}}, with {{C::nipples.thickNipples}} set high
      on {{C::gender.his}} {{tits}}.`,
});

Description.buildTits({ requirements:['tits-shape-perky'], conditions:['species-rat'],
  d: `{{C::character.firstName}} has very {{C::tits.shape}} {{tits}}. {{C::gender.His}} {{C::nipples.thickNipples}}
      are set high on {{C::gender.his}} {{C::tits.size}} {{tits}}, making them look even more jutting and pinchable.`,
});

Description.buildTits({ requirements:['tits-shape-conical'], conditions:['species-rat'],
  d: `{{C::character.firstName}} has {{C::tits.sizeShape}} {{tits}}. {{C::gender.His}} {{C::tits.size}} {{tits}} are
      wide at the base and come to a narrow tip, then capped with a {{C::nipples.thickNipple}}.`,
});

// =====================
// Rat Tits Descriptions
// =====================

Description.buildTits({ conditions:['species-rat'],
  d: `{{C::character.firstName}} has twelve {{C::tits.sizeShape}} {{tits}}. Each of {{C::gender.his}} {{tits}} are
      {{C::tits.sizeComp}} and capped with a {{C::nipples.thickNipple}}.`,
});

Description.buildTits({ conditions:['species-rat'],
  d: `{{C::character.firstName's}} {{tits}} are {{C::tits.sizeAndShape}}. Each of {{C::gender.his}} {{C::tits.shape}}
      {{tits}} are {{C::tits.sizeComp}} and capped with a {{C::nipples.thickNipple}}.`,
});

Description.buildTits({ conditions:['species-rat'],
  d: `{{C::character.firstName's}} chest is studded with twelve {{C::tits.size}} {{tits}}. Each of {{C::gender.his}}
      {{C::tits.shape}} {{tits}} are {{C::tits.sizeComp}} and capped with a {{C::nipples.thickNipple}}.`,
});

// --- Size Specific ---

Description.buildTits({ conditions:['species-rat','tits-size-zero'],
  d: `{{C::character.firstName}} has a completely flat chest. {{C::gender.His}} chest is lean and muscular and could
    easily be mistaken for a man's if not for {{C::gender.his}} many {{C::nipples.thickNipples}}.`,
});

Description.buildTits({ conditions:['species-rat','tits-size-zero'],
  d: `{{C::character.firstName}} has a lean muscular chest that could easily be mistaken for a man's if not for
      {{C::gender.his}} many {{C::nipples.thickNipples}}.`,
});

Description.buildTits({ requirements:['tits-size-tiny'], conditions:['species-rat'],
  d: `{{C::character.firstName's}} chest is adorned with twelve {{C::tits.size}} {{tits}}. Each of {{C::gender.his}}
      {{C::tits.shape}} {{tits}} are too small to do much more than push {{C::gender.his}} many
      {{C::nipples.thickNipples}} out just a bit further.`,
});

Description.buildTits({ requirements:['tits-size-tiny'], conditions:['species-rat'],
  d: `{{C::character.firstName's}} chest is studded with twelve {{C::tits.sizeShape}} {{tits}}. {{C::gender.His}}
      {{tits}} are too small to do much more than push {{C::gender.his}} many {{C::nipples.thickNipples}} out just
      a bit further.`,
});

Description.buildTits({ requirements:['tits-size-tiny'], conditions:['species-rat'],
  d: `{{C::character.firstName}} has twelve {{C::tits.sizeShape}} {{tits}}. They're each quite small and don't do
      much other than press {{C::gender.his}} many {{C::nipples.thickNipples}} out just a bit further.`,
});

Description.buildTits({ requirements:['tits-size-tiny','nipples-size-huge'], conditions:['species-rat'],
  d: `{{C::character.firstName}} has six rows of {{C::tits.sizeShape}} {{tits}}. Each of {{C::gender.his}} {{tits}} is
      capped with a {{C::nipples.thickNipple}} almost as large as the {{tit}} itself.`,
});

// --- Shape Specific ---

Description.buildTits({ requirements: ['tits-shape-perky'], conditions:['species-rat'],
  d: `{{C::character.firstName's}} {{tits}} are {{C::tits.sizeAndShape}}, with {{C::nipples.thickNipples}} set high
      on each of {{C::gender.his}} {{tits}}.`,
});

Description.buildTits({ requirements: ['tits-shape-perky'], conditions:['species-rat'],
  d: `{{C::character.firstName's}} chest is adorned with twelve {{C::tits.size}} {{tits}}. Each of {{C::gender.his}}
      {{C::tits.shape}} {{tits}} pushes {{C::gender.his}} {{C::nipples.thickNipples}} upward proudly.`,
});

Description.buildTits({ requirements: ['tits-shape-perky'], conditions:['species-rat'],
  d: `{{C::character.firstName}} has six rows of {{C::tits.size}} {{tits}}. {{C::gender.His}} twelve
      {{C::nipples.thickNipples}} are set high on each of {{C::gender.his}} {{C::tits.shape}} {{tits}}, making them
      look even more jutting and pinchable.`,
});

Description.buildTits({ requirements: ['tits-shape-conical'], conditions:['species-rat'],
  d: `{{C::character.firstName's}} chest is studded with twelve {{C::tits.sizeShape}} {{tits}}. {{C::gender.His}}
      {{tits}} are wide at the base and come to a narrow tip, which makes {{C::gender.his}}
      {{C::nipples.thickNipples}} seem to poke out even further.`,
});

Description.buildTits({ requirements: ['tits-shape-conical'], conditions:['species-rat'],
  d: `{{C::character.firstName}} has twelve {{C::tits.sizeShape}} {{tits}}. Each of {{C::gender.his}} {{C::tits.size}}
      {{tits}} are wide at the base and come to a narrow tip, then capped with a {{C::nipples.thickNipple}}.`,
});
