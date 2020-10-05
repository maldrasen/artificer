
Description.buildNipples({
  d: `{{He}} has {{C::nipples.large}} {{C::nipples.color}} nipples the size of {{C::nipples.grapes}}.`,
});

Description.buildNipples({
  d: `{{He}} has {{C::nipples.large}} {{C::nipples.color}} nipples.`,
});

Description.buildNipples({
  d: `{{His}} {{C::nipples.large}} {{C::nipples.color}} nipples are about {{C::nipples.width}} wide.`,
});

Description.buildNipples({
  d: `{{His}} {{C::nipples.large}} {{C::nipples.color}} nipples are the size of {{C::nipples.grapes}}.`,
});

Description.buildNipples({
  d: `{{His}} {{C::nipples.thickNipples}} are about {{C::nipples.width}} wide with tips the size of {{C::nipples.grapes}}.`,
});

// === Furry ===

Description.buildNipples({ requires:['minion(C).furry','minion(C).nipples.big'],
  d: `{{His}} {{C::nipples.large}} {{C::nipples.color}} nipples protrude noticibly from {{his}} fur covered chest.`
});

Description.buildNipples({ requires:['minion(C).furry','minion(C).nipples.big'],
  d: `{{He}} has {{C::nipples.large}} {{C::nipples.grape}} sized nipples that extend well past {{his}} chest fur.`,
});

// Shape - Puffy

Description.buildNipples({ requires:['minion(C).nipples.puffy'],
  d: `{{He}} has {{C::nipples.large}} {{C::nipples.color}} puffy nipples that are nearly as long as they are wide.`,
});

Description.buildNipples({ requires:['minion(C).nipples.puffy'],
  d: `{{He}} has {{C::nipples.large}} puffy nipples the size of {{C::nipples.grapes}}.`,
});


Description.buildNipples({ requires:['minion(C).nipples.puffy'],
  d: `{{His}} puffy {{C::nipples.color}} nipples are about {{C::nipples.width}} wide, and nearly as long.`,
});

Description.buildNipples({ requires:['minion(C).nipples.puffy'],
  d: `{{His}} puffy {{C::nipples.color}} nipples are about {{C::nipples.length}} long and are as thick as {{C::nipples.grapes}}.`,
});

Description.buildNipples({ requires:['minion(C).tits.smaller-than-average','minion(C).nipples.puffy'],
  d: `{{His}} {{C::nipples.large}} {{C::nipples.color}} puffy nipples prodrude far from the surface of {{his}} {{tits}}.`,
});
