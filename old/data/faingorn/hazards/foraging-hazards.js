
// === Body ===

Hazard.buildHazard('forage-body-pierce-001', { activity:'foraging-hinterlands', location:'body', type:'pierce', level:3,
  requires: ['minion(C).is-scaven'],
  story: `{{He}} was foraging deep in the woods when {{he}} was spotted by an elven hunter. The elf shot an arrow at
          your minion right into {{his}} gut. Despite {{his}} injury {{he}} was able to escape by crawling through a
          thicket the elf was too tall to pass through.`
});

// === Head ===

Hazard.buildHazard('forage-head-cut-001', { activity:'foraging-hinterlands', location:'head', type:'cut', level:1,
  story: `{{He}} got a nasty scrape along {{his}} cheek when {{he}} tripped and fell against a jagged rock.`
});

Hazard.buildHazard('forage-head-cut-002', { activity:'foraging-hinterlands', location:'head', type:'cut', level:2,
  requires: ['minion(C).is-scaven'],
  story: `{{He}} was foraging deep in the woods when {{he}} was spotted by an elven hunter. The elf shot an arrow at
          your minion, but {{he}} lept into some thick brambles dodging the shot. The thick thorny vines left a cut
          across {{his}} face, but at least {{he}} was able to escape.`
});

// === Cock ===

Hazard.buildHazard('forage-cock-blight-001', { activity:'foraging-hinterlands', location:'cock', type:'blight', level:1,
  details: { place:'balls' },
  requires: ['flag.item.blight-spider'],
  story: `{{He}} was crawling through some underbrush when {{he}} suddenly felt an intense stinging pain in {{his}}
          {{ballsack}}. Somehow a harry bag blight spider had crept into {{his}} pants and went straight after {{his}}
          balls, which had swollen to twice their normal size by the time {{he}} made it back to the keep.`
});

// === Tits ===

Hazard.buildHazard('forage-tit-smash-001', { activity:'foraging-hinterlands', location:'tits', type:'smash', level:1,
  story: `{{He}} was on the way home when {{he}} tripped and fell chest first onto a large flat rock, bruising {{his}}
          {{tit}}.`
});

Hazard.buildHazard('forage-tit-smash-002', { activity:'foraging-hinterlands', location:'tits', type:'smash', level:1,
  place: 'all',
  story: `{{He}} had spent some time searching the nearby ravines for some goat nuts that grow there when {{he}} felt
          that something was watching {{him}}. Not wanting to take a chance on running into an abomination or worse,
          {{he}} started climbing up the side of the ravine. {{He}} lost {{his}} grip though and fell flat on
          {{his}} chest, badly bruising {{his}} tits on the jagged rock below. It turns out that it was just a rabbit.`
});

Hazard.buildHazard('forage-tit-smash-003', { activity:'foraging-hinterlands', location:'tits', type:'smash', level:1,
  place: 'left',
  story: `{{He}} was gathering juice berries from a bush when {{he}} spotted an addercock hiding in the leaves. {{He}}
          lept away just in time to avoid the snake's strike but fell hard on {{his}} chest. When {{he}} landed {{he}}
          crushed a pinecone with {{his}} left tit, leaving a painful bruise.`
});

Hazard.buildHazard('forage-tit-smash-004', { activity:'foraging-hinterlands', location:'tits', type:'smash', level:2,
  place: 'right',
  shape: 'hoof',
  story: `While making {{his}} way through a narrow ravine {{he}} suddenly came across a deer. Before {{he}} could do
          anything the startled animal reared back and kicked {{him}} right in the tit before running off, leaving
          {{him}} with a hoof shaped bruise on {{his}} right breast.`
});
