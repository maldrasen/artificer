const MassiveList = ['massive','massively huge','enormous','mammoth','immense','monstrous','monstrously huge',
                     'titanic','giant','gigantic']

Weaver.registerLoom('simple', /^maleDemon/, () => {
  return Random.from(['Abaddon','Baal','Baphomet','Behemoth','Lucifer','Maldrasen','Mephistopheles','Satan','Slaanesh']);
});

Weaver.registerLoom('simple', /^unholy/, () => {
  return Random.from(['unholy','demonic','infernal','satanic','corrupt','blasphemous','cursed','accursed']);
});

Weaver.registerLoom('simple', /^massive/,  () => { return Random.from(MassiveList); });
Weaver.registerLoom('simple', /^aMassive/, () => { return EnglishUtility.a_an(Random.from(MassiveList)); });

// It's generally fine to assume meters and yards are equal. Use the
// measurement loom though to get something in feet.
Weaver.registerLoom('simple', /^threeFeet/, () => { return Settings.metric() ? 'a meter' : 'three feet' });
Weaver.registerLoom('simple', /^meters/,    () => { return Settings.metric() ? 'meters' : 'yards' });
Weaver.registerLoom('simple', /^meter/,     () => { return Settings.metric() ? 'meter' : 'yard' });

// Just for phrases like "every inch of his cock" where there's no actual length value
Weaver.registerLoom('simple', /^inch/,      () => { return Settings.metric() ? 'centimeter' : 'inch' });

// Esentially a thesaurus here.
Weaver.registerLoom('simple', /^ballsack/,  () => { return Random.from(['ballsack','ballsack','scrotum']); });
Weaver.registerLoom('simple', /^cock/,      () => { return Random.from(['cock','cock','dick']); });
Weaver.registerLoom('simple', /^pussy/,     () => { return Random.from(['pussy','pussy','cunt']); });
Weaver.registerLoom('simple', /^sheath/,    () => { return Random.from(['sheath','cocksheath']); });
Weaver.registerLoom('simple', /^testicles/, () => { return Random.from(['testicles','balls']); });
Weaver.registerLoom('simple', /^tit/,       () => { return Random.from(['breast','tit']); });
Weaver.registerLoom('simple', /^tits/,      () => { return Random.from(['breasts','tits']); });
Weaver.registerLoom('simple', /^throb/,     () => { return Random.from(['throb','pulse']); });
Weaver.registerLoom('simple', /^throbbing/, () => { return Random.from(['throbbing','pulsing']); });
Weaver.registerLoom('simple', /^wide/,      () => { return Random.from(['wide','thick']); });
