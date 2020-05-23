
// A lot of these hunting hazards are disabled because we no longer have the
// abuser that was used for them, or they're just stupid. Over time I'll rework
// them as more injury types are added.

// --- Anus : Cut ---

// Hazard.buildHazard('hunt-anus-cut-001', { activity:'hunting-hinterlands', location:'anus', type:'cut', level:2,
//   requires: ['tier-0','success'],
//   story: `{{C::gender.He}} has already finished hunting and was on {{C::gender.his}} way back to the keep
//           when {{C::gender.he}} decided to take a short break. {{C::gender.He}} plopped down onto a comfortable looking
//           log but carelessly sat down on the sharp rock {{C::gender.he}}'d been using as a hunting knife. The makeshift
//           knife opened a nasty, ragged looking gash right along {{C::gender.his}} anus.`
// });

// Hazard.buildHazard({ activity:'hunting-hinterlands', location:'anus', type:'cut', level:5,
//   requires: ['tier-0','failure'],
//   story: `{{C::gender.He}} was climbing up a tree, chasing a squirrel, when the branch {{C::gender.he}} was
//           on snapped. {{C::gender.He}} fell directly onto a small sapling and somehow managed to get the entire young
//           tree lodged in {{C::gender.his}} ass. The tree's thorny branches severely scraped and tore {{C::gender.his}}
//           colon and asshole as {{C::gender.he}} pulled himself off of the tree impaling {{C::gender.him}}.`
// });

// --- Anus : Pierce ---

// Hazard.buildHazard({ activity:'hunting-hinterlands', location:'anus', type:'pierce', level:1,
//   requires: ['tier-0'],
//   story: `While {{C::gender.he}} was hiding in a bush, a pixie snuck  up behind {{C::gender.him}} and jabbed a
//           sharpened stick right up {{C::gender.his}} exposed ass and flew away laughing.`
// });

// --- Anus : Rip ---

// Hazard.buildHazard({ activity:'hunting-hinterlands', location:'anus', type:'rip', level:2,
//   requires: ['failure','species-scaven'],
//   story: `{{C::gender.He}} was found and captured by a group of Kobolds who were also out hunting. They tied
//           {{C::gender.him}} to a tree and made a game out of guessing how many pine cones they could fit into
//           {{C::gender.his}} ass at once. (The answer was {{randomEng|3-6}}.) The ordeal though left {{C::gender.him}}
//           with a stretched and bleeding asshole.`
// });

// Hazard.buildHazard({ activity:'hunting-hinterlands', location:'anus', type:'rip', level:3,
//   requires: ['failure'],
//   story: `As {{C::gender.he}} was stalking {{C::gender.his}} prey {{C::gender.he}} was attacked by a
//           ferocious Dick Wolf. The beast spent most of the afternoon anally raping {{C::gender.him}} until
//           {{C::gender.he}} was finally able to escape.`
// });

// Hazard.buildHazard({ activity:'hunting-hinterlands', location:'anus', type:'rip', level:4,
//   requires: ['tier-0','failure'],
//   story: `{{C::gender.He}} was chasing a rabbit and tried to follow it into its burrow, but got
//           {{C::gender.his}} head stuck in the tight hole. {{C::gender.He}} struggled there for quite a while with
//           {{C::gender.his}} wiggling ass lifted high in the air. It was late in the evening by the time
//           {{C::gender.he}} managed to free himself, but only almost every every animal within a mile radius had a
//           chance to rape {{C::gender.his}} exposed asshole. Even the rabbit {{C::gender.he}} was chasing took a turn.`
// });


// --- Tits : Blight ---

// Hazard.buildHazard('hunt-tits-blight-001',{ activity:'hunting-hinterlands', location:'tits', type:'blight', level:2,
//   details: { nipples:'single' },
//   story: `While {{C::gender.he}} was stalking {{C::gender.his}} prey through some deep brush {{C::gender.he}}
//           felt a sudden stabbing pain in his chest. A spider had attached itself to one of {{C::gender.his}} nipples
//           and was pumping it full of venom. {{C::gender.He}} managed to brush it off, but not until {{C::gender.his}}
//           nipple had swollen up to twice its normal size.`
// });

// --- Cock : Blight ---

Hazard.buildHazard('hunt-cock-blight-001', { activity:'hunting-hinterlands', location:'cock', type:'blight', level:1,
  requires: ['minion(C).cock.external-balls'],
  details: { place:'balls' },
  story: `{{He}} was hiding in a bush, sqatting down in a position that allowed {{his}} plump {{ballsack}} to hang down
          below {{him}}. {{He}} failed to notice a scorpian crawling towards {{him}} until it stabbed {{him}} right in
          {{his}} dangling {{ballsack}}.`
});

// Hazard.buildHazard('hunt-cock-blight-004', { activity:'hunting-hinterlands', location:'cock', type:'blight', level:4,
//   requires: ['minion(C).species-scaven'],
//   details: { place:'cock' },
//   story: `{{C::gender.He}} was chasing a fox through the nearby woods when {{C::gender.he}} ran face first
//           into a massive spiderweb, becoming immediately entangled. One of the local dryads, tired of your rats
//           hunting her animal friends, set the trap in order to spend the afternoon teaching {{C::gender.him}} a lesson
//           by tormenting {{C::gender.his}} {{C::cock.cock}}. {{C::gender.He}} was finally able to limp home that
//           evening, but only after having spent the last several hours getting {{C::gender.his}} {{C::cock.big}}
//           {{C::cock.cock}} stung and chewed on by centipedes, spiders, and wasps.`
// });

// --- Pussy : Pierce ---
//
// Hazard.buildHazard({ activity:'hunting-hinterlands', location:'pussy', type:'pierce', level:3,
//   requires: ['tier-0'],
//   story: `While {{C::gender.he}} was hiding in a bush, a pixie snuck up behind {{C::gender.him}} and jabbed a
//           sharpened stick completely through one of {{C::gender.his}} exposed labia and flew away laughing.`
// });

// --- Pussy : Rip ---

// Hazard.buildHazard({ activity:'hunting-hinterlands', location:'pussy', type:'rip', level:2,
//   requires: ['failure','species-scaven'],
//   story: `{{C::gender.He}} was found and captured by a group of Kobolds who were also out hunting. They tied
//           {{C::gender.him}} to a tree and made a game out of guessing how many river stones they could fit into
//           {{C::gender.his}} pussy at once. (The answer was {{randomEng|8-16}}.) The ordeal though left {{C::gender.him}}
//           with a stretched and bleeding cunt.`
// });

// Hazard.buildHazard({ activity:'hunting-hinterlands', location:'pussy', type:'rip', level:4,
//   story: `While out hunting, {{C::gender.he}} was taken captive by a lupin hunting band. They agreed to let
//           {{C::gender.him}} go only if {{C::gender.he}} would fuck them all. Their large knotted cocks left
//           {{C::gender.his}} pussy ripped asunder.`
// });

// --- Tits : Smash ---

Hazard.buildHazard('hunt-tit-smash-001', { activity:'hunting-hinterlands', location:'tits', type:'smash', level:1,
  story: `{{He}} was on the way home from hunting when {{he}} tripped and fell chest first onto a large flat rock,
          bruising {{his}} {{tit}}.`
});

Hazard.buildHazard('hunt-tit-smash-002', { activity:'hunting-hinterlands', location:'tits', type:'smash', level:2,
  details: { place:'all' },
  story: `{{He}} had a wild boar cornered and was going in for the kill when it suddenly charged. {{He}} tried to
          dodge to the side, but the boar crashed into {{his}} chest, crushing {{his}} tits with its tusks.`
});

Hazard.buildHazard('hunt-tit-smash-003', { activity:'hunting-hinterlands', location:'tits', type:'smash', level:3,
  requires: ['minion(C).equipment.unarmed','minion(C).biter'],
  details: { shape:'hoof' },
  story: `{{He}} had carefully stalked a deer into a secluded glade. Even though {{he}} didn't have any weapons on
          {{him}}, {{he}} thought that perhaps {{he}} could jump onto the deer's back and bite its throat. The deer
          noticed {{him}} though before {{he}} could attack and kicked {{him}} hard, right in one of {{his}}
          {{C::tits.size}} {{tits}}, leaving {{him}} clutching {{his}} crushed {{tit}} and gasping for air as the deer
          leapt away.`
});

// Hazard.buildHazard('hunt-tit-smash-004', { activity:'hunting-hinterlands', location:'tits', type:'smash', level:3,
//   requires: ['success'],
//   details: { place:'all' },
//   story: `One of your other hunters saw {{C::character.firstName}} returning home from the hunt as was jelous of
//           {{C::gender.his}} success. He managed to get the jump on {{C::gender.him}}, knocked {{C::gender.him}} out,
//           stripped {{C::gender.him}} naked, and tied {{C::gender.him}} to a tree. When {{C::gender.he}} woke up this
//           other hunter was savagly beating {{C::gender.his}} {{C::tits.sizeShape}} {{tits}} with a fallen tree branch.
//           {{C::gender.He}} was able to free {{C::gender.him}}self before {{C::gender.his}} {{C::tits.size}} {{tits}}
//           were completely maimed, but was in no condition to chase this other hunter down after he ran off.`
// });

Hazard.buildHazard('hunt-tit-smash-005', { activity:'hunting-hinterlands', location:'tits', type:'smash', level:5,
  requires: ['minion(C).equipment.unarmed','minion(C).biter'],
  details: { shape:'hoof', place:'all' },
  story: `{{He}} had carefully stalked a buck into a secluded glade. Even though {{he}} didn't have any weapons on
          {{him}}, {{he}} thought that perhaps {{he}} could jump onto the deer's back and bite its throat. The buck
          noticed {{him}} though before {{he}} could attack and charged {{him}}, throwing {{him}} to the ground with a
          sweep of his antlers. The buck then jumped on top of {{C::character.firstName}} and started trampling
          {{him}}, stomping his hooves down onto {{his}} {{C::tits.size}} {{tits}}, crushing them completely before
          bounding off into the wood again.`
});

// --- Body : Blight ---

// Hazard.buildHazard({ activity:'hunting-hinterlands', location:'body', type:'blight', level:1,
//   story: `While out hunting, {{C::gender.he}} came across a patch of edible looking mushrooms. Within an hour
//           of eating the strange mushrooms though {{C::gender.he}} became violently ill, uncontrollably vomiting and
//           shitting all the way home.`
// });

// --- Head : Smash ---

Hazard.buildHazard('hunt-head-smash-001', { activity:'hunting-hinterlands', location:'head', type:'smash', level:1,
  story: `{{He}} was stalking {{his}} prey through a deep ravine, when a loose rock fell from the cliffs above,
          striking {{him}} in the head.`
});

Hazard.buildHazard('hunt-head-smash-002', { activity:'hunting-hinterlands', location:'head', type:'smash', level:2,
  story: `As {{he}} was returning from {{his}} hunt {{he}} noticed that {{he}} {{him}}self was being hunted by an
          abomination. {{He}} ran and although {{he}} managed to get away, {{he}} had to jump down into a deep ravine
          and hit {{his}} head in the fall.`
});
