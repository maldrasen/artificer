
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
