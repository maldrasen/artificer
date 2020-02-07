
// === Body ===

Hazard.buildHazard('forage-body-cut-001', { activity:'foraging-hinterlands', location:'body', type:'cut', level:1,
  details: { place:'left-arm' },
  story: `{{C::gender.He}} got a nasty scrape along {{C::gender.his}} left arm when {{C::gender.he}} tripped and fell
          against a jagged rock.`
});

// === Cock ===

Hazard.buildHazard('forage-cock-blight-001', { activity:'foraging-hinterlands', location:'cock', type:'blight', level:1,
  details: { place:'balls' },
  requires: ['flag.item.blight-spider'],
  story: `{{C::gender.He}} was crawling through some underbrush when {{C::gender.he}} suddenly felt an intense stinging
          pain in {{C::gender.his}} {{ballsack}}. Somehow a harry bag blight spider had crept into {{C::gender.his}}
          pants and went straight after {{C::gender.his}} balls, which had swollen to twice their normal size by the
          time {{C::gender.he}} made it back to the keep.`
});

// === Tits ===

Hazard.buildHazard('forage-tit-smash-001', { activity:'foraging-hinterlands', location:'tits', type:'smash', level:1,
  story: `{{C::gender.He}} was on the way home when {{C::gender.he}} tripped and fell chest
          first onto a large flat rock, bruising {{C::gender.his}} {{tit}}.`
});

Hazard.buildHazard('forage-tit-smash-002', { activity:'foraging-hinterlands', location:'tits', type:'smash', level:1,
  place: 'all',
  story: `{{C::gender.He}} had spent some time searching the nearby ravines for some goat nuts that grow there when
          {{C::gender.he}} felt that something was watching {{C::gender.him}}. Not wanting to take a chance on running
          into an abomination or worse, {{C::gender.he}} started climbing up the side of the ravine. {{C::gender.He}}
          lost {{C::gender.his}} grip though and fell flat on {{C::gender.his}} chest, badly bruising {{C::gender.his}}
          tits on the jagged rock below. It turns out that it was just a rabbit, scared off by {{C::gender.his}} fall.`
});

Hazard.buildHazard('forage-tit-smash-003', { activity:'foraging-hinterlands', location:'tits', type:'smash', level:1,
  place: 'left',
  story: `{{C::gender.He}} was gathering juice berries from a bush when {{C::gender.he}} spotted an addercock hiding in
          the leaves. {{C::gender.He}} lept away just in time to avoid the snake's strike but fell hard on
          {{C::gender.his}} chest. When {{C::gender.he}} landed he crushed a pinecone with {{C::gender.his}} left tit,
          leaving a painful bruise.`
});

Hazard.buildHazard('forage-tit-smash-004', { activity:'foraging-hinterlands', location:'tits', type:'smash', level:2,
  place: 'right',
  shape: 'hoof',
  story: `While making {{C::gender.his}} way through a narrow ravine {{C::gender.he}} suddenly came across a deer.
          Before {{C::gender.he}} could do anything the startled animal reared back and kicked {{C::gender.him}} right
          in the tit before running off, leaving {{C::gender.him}} with a hoof shaped bruise on {{C::gender.his}} right
          breast.`
});
