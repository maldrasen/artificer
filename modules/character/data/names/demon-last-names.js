let names = [
  { name:"Cannibalcorpse" },
  { name:"Corpserape" },
  { name:"Deadgod" },
  { name:"Des'Rhysh" },
  { name:"Des'Tempre" },
  { name:"Fleshcrawl" },
  { name:"Fleshfeast" },
  { name:"Fleshgod" },
  { name:"Fleshgore" },
  { name:"Goatlord" },
  { name:"Godkiller" },
  { name:"Godrape" },
  { name:"Gorerotted" },
  { name:"Graveworm" },
  { name:"Hatewhisper" },
  { name:"Hellcock", adjustments:['monster-cock'], requires:'minion(C).has-cock'},
  { name:"Hellcunt", adjustments:['monster-pussy'], requires:'minion(C).has-pussy'},
  { name:"Hellfyre" },
  { name:"Hellscream" },
  { name:"Hellspawned" },
  { name:"Hellspawner", adjustments:['breeder.3'], requires:'minion(C).has-pussy'},
  { name:"Moonblood" },
  { name:"Moonforest" },
  { name:"Moonsorrow" },
  { name:"Moonspell" },
  { name:"Morningstar" },
  { name:"Mourningstar" },
  { name:"Murdercock", adjustments:['big-cock'], requires:'minion(C).has-cock'},
  { name:"Murdercunt", adjustments:['big-clit'], requires:'minion(C).has-pussy'},
  { name:"Murderfuck" },
  { name:"Necroflesh" },
  { name:"Necromonger" },
  { name:"Nifelheim" },
  { name:"Nightrage" },
  { name:"Nordafrost" },
  { name:"Ribspreader" },
  { name:"Rotflesh" },
  { name:"Runemagick" },
  { name:"Slaughtercock", adjustments:['big-cock'], requires:'minion(C).has-cock'},
  { name:"Slaughtercult" },
  { name:"Slaughtercunt", adjustments:['big-clit'], requires:'minion(C).has-pussy'},
  { name:"Slaughterfuck" },
  { name:"the Cunt Destroyer", adjustments:['monster-cock'], requires:'minion(C).has-cock'},
  { name:"the Defiled" },
  { name:"the Festering" },
  { name:"the Pelvis Splitter", adjustments:['monster-cock'], requires:'minion(C).has-cock'},
  { name:"the Unclean" },
  { name:"Thirdmoon" },
  { name:"Todestriebe" },
  { name:"Tristwood" },
  { name:"Wolfchant" },
];

Messenger.subscribe("database.load.Name", () => {
  each(names, (name)=>{
    Name.add(name, { species:'demon', position:'last' });
  });
});
