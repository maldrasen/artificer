
NipplesDescription.build({
  d: `{{He}} has {{C::nipples.large}} {{C::nipples.color}} nipples the size of {{C::nipples.grapes}}.`,
});

NipplesDescription.build({
  d: `{{He}} has {{C::nipples.large}} {{C::nipples.color}} nipples.`,
});

NipplesDescription.build({
  d: `{{His}} {{C::nipples.large}} {{C::nipples.color}} nipples are about {{C::nipples.width}} wide.`,
});

NipplesDescription.build({
  d: `{{His}} {{C::nipples.large}} {{C::nipples.color}} nipples are the size of {{C::nipples.grapes}}.`,
});

NipplesDescription.build({
  d: `{{His}} {{C::nipples.thickNipples}} are about {{C::nipples.width}} wide with tips the size of {{C::nipples.grapes}}.`,
});

// === Furry ===

NipplesDescription.build({ requires:['minion(C).furry','minion(C).nipples.big'],
  d: `{{His}} {{C::nipples.large}} {{C::nipples.color}} nipples protrude noticibly from {{his}} fur covered chest.`
});

NipplesDescription.build({ requires:['minion(C).furry','minion(C).nipples.big'],
  d: `{{He}} has {{C::nipples.large}} {{C::nipples.grape}} sized nipples that extend well past {{his}} chest fur.`,
});

// Shape - Puffy

NipplesDescription.build({ requires:['minion(C).nipples.puffy'],
  d: `{{He}} has {{C::nipples.large}} {{C::nipples.color}} puffy nipples that are nearly as long as they are wide.`,
});

NipplesDescription.build({ requires:['minion(C).nipples.puffy'],
  d: `{{He}} has {{C::nipples.large}} puffy nipples the size of {{C::nipples.grapes}}.`,
});


NipplesDescription.build({ requires:['minion(C).nipples.puffy'],
  d: `{{His}} puffy {{C::nipples.color}} nipples are about {{C::nipples.width}} wide, and nearly as long.`,
});

NipplesDescription.build({ requires:['minion(C).nipples.puffy'],
  d: `{{His}} puffy {{C::nipples.color}} nipples are about {{C::nipples.length}} long and are as thick as {{C::nipples.grapes}}.`,
});

NipplesDescription.build({ requires:['minion(C).tits.smaller-than-average','minion(C).nipples.puffy'],
  d: `{{His}} {{C::nipples.large}} {{C::nipples.color}} puffy nipples prodrude far from the surface of {{his}} {{tits}}.`,
});
