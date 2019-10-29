
Description.buildNipples({
  d: `{{C::gender.He}} has {{C::nipples.large}} {{C::nipples.color}} nipples the size of {{C::nipples.grapes}}.`,
});

Description.buildNipples({
  d: `{{C::gender.He}} has {{C::nipples.large}} {{C::nipples.color}} nipples.`,
});

Description.buildNipples({
  d: `{{C::gender.His}} {{C::nipples.large}} {{C::nipples.color}} nipples are about {{C::nipples.width}} wide.`,
});

Description.buildNipples({
  d: `{{C::gender.His}} {{C::nipples.large}} {{C::nipples.color}} nipples are the size of {{C::nipples.grapes}}.`,
});

Description.buildNipples({
  d: `{{C::gender.His}} {{C::nipples.thickNipples}} are about {{C::nipples.width}} wide with tips the size of {{C::nipples.grapes}}.`,
});

// === Furry ===

Description.buildNipples({ requirements:['species-furry','nipples-size-big'],
  d: `{{C::gender.His}} {{C::nipples.large}} {{C::nipples.color}} nipples protrude noticibly from {{C::gender.his}} fur
      covered chest.`
});

Description.buildNipples({ requirements:['species-furry','nipples-size-big'],
  d: `{{C::gender.He}} has {{C::nipples.large}} {{C::nipples.grape}} sized nipples that extend well past
      {{C::gender.his}} chest fur.`,
});

// Shape - Puffy

Description.buildNipples({ requirements:['nipples-shape-puffy'],
  d: `{{C::gender.He}} has {{C::nipples.large}} {{C::nipples.color}} puffy nipples that are nearly as long as they are
      wide.`,
});

Description.buildNipples({ requirements:['nipples-shape-puffy'],
  d: `{{C::gender.He}} has {{C::nipples.large}} puffy nipples the size of {{C::nipples.grapes}}.`,
});


Description.buildNipples({ requirements:['nipples-shape-puffy'],
  d: `{{C::gender.His}} puffy {{C::nipples.color}} nipples are about {{C::nipples.width}} wide, and nearly as long.`,
});

Description.buildNipples({ requirements:['nipples-shape-puffy'],
  d: `{{C::gender.His}} puffy {{C::nipples.color}} nipples are about {{C::nipples.length}} long and are as thick as
      {{C::nipples.grapes}}.`,
});

Description.buildNipples({ requirements:['tits-size-below-average','nipples-shape-puffy'],
  d: `{{C::gender.His}} {{C::nipples.large}} {{C::nipples.color}} puffy nipples prodrude far from the surface of
      {{C::gender.his}} {{tits}}.`,
});
