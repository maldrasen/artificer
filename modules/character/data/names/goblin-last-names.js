let names = [
  { name:"Arseface", adjustments:['ugly']},
  { name:"Assbiter", adjustments:['violent']},
  { name:"Assfister", adjustments:['ass-obsessed.2','stretcher.2']},
  { name:"Assfucker", adjustments:['ass-obsessed.3']},
  { name:"Asskicker", adjustments:['violent']},
  { name:"Asskisser", adjustments:['violent']},
  { name:"Asspacker", adjustments:['ass-obsessed.3']},
  { name:"Assripper", adjustments:['ass-obsessed.3','stretcher.2','monster-cock'], requires:'minion(C).has-cock'},
  { name:"Asswiper", adjustments:['ass-obsessed.2','revolting']},
  { name:"Asswipper", adjustments:['violent','dominant']},
  { name:"Axechopper", adjustments:['violent']},
  { name:"Axefucker", adjustments:['violent']},
  { name:"Battlepounder", adjustments:['violent']},
  { name:"Battlestabber", adjustments:['violent']},
  { name:"Bitchfister", adjustments:['gynephilic','stretcher.2']},
  { name:"Bitchfucker", adjustments:['gynephilic']},
  { name:"Bitchslapper", adjustments:['gynephilic','violent','dominant']},
  { name:"Bitchspanker", adjustments:['gynephilic','violent','dominant']},
  { name:"Blooddrinker", adjustments:['violent']},
  { name:"Bloodfucker", adjustments:['violent']},
  { name:"Bloodshitter", adjustments:['violent']},
  { name:"Bloodstabber", adjustments:['violent']},
  { name:"Bonefucker" },
  { name:"Bonegrinder" },
  { name:"Boneshitter" },
  { name:"Bulldozer", adjustments:['violent']},
  { name:"Butsecks", adjustments:['ass-obsessed.3']},
  { name:"Clitcock", adjustments:['monster-clit'], requires:'minion(C).has-pussy'},
  { name:"Cockfister", adjustments:['androphilic','stretcher.3']},
  { name:"Cockfucker", adjustments:['androphilic']},
  { name:"Cockgrinder", adjustments:['androphilic','violent']},
  { name:"Cockhammer", adjustments:['androphilic','violent']},
  { name:"Cockpounder", adjustments:['androphilic','violent']},
  { name:"Cockslapper", adjustments:['androphilic','violent','dominant']},
  { name:"Cockslobber", adjustments:['androphilic','cum-lover']},
  { name:"Cockstabber", adjustments:['androphilic','violent']},
  { name:"Cumdrinker", adjustments:['androphilic','cum-lover.3']},
  { name:"Cumdripper", adjustments:['big-balls'], requires:'minion(C).has-cock'},
  { name:"Cumdumpster", adjustments:['androphilic','cum-lover.3']},
  { name:"Cumriver", adjustments:['monster-balls'], requires:'minion(C).has-cock'},
  { name:"Cumshitter", adjustments:['androphilic','cum-lover.3','ass-obsessed.3','revolting']},
  { name:"Cumtoilet", adjustments:['androphilic','cum-lover.3','golden.2']},
  { name:"Cuntdestroyer", adjustments:['gynephilic','pussy-lover.2','stretcher.2','violent','monster-cock'], requires:'minion(C).has-cock'},
  { name:"Cuntfister", adjustments:['gynephilic','stretcher.3']},
  { name:"Cuntfucker", adjustments:['gynephilic']},
  { name:"Cuntkicker", adjustments:['gynephilic','violent']},
  { name:"Cuntpounder", adjustments:['gynephilic']},
  { name:"Cuntslapper", adjustments:['gynephilic','violent']},
  { name:"Cuntslobber", adjustments:['gynephilic']},
  { name:"Cuntspanker", adjustments:['gynephilic','violent']},
  { name:"Deathdigger", adjustments:['violent']},
  { name:"Deathfucker", adjustments:['violent']},
  { name:"Deathkiller", adjustments:['violent']},
  { name:"Deathshitter", adjustments:['violent','revolting']},
  { name:"Dickbiter", adjustments:['androphilic','cum-lover','violent']},
  { name:"Dickfister", adjustments:['androphilic','stretcher.2']},
  { name:"Dickfucker", adjustments:['androphilic']},
  { name:"Dicknipples", adjustments:['dick-nipples']},
  { name:"Dickshitter", adjustments:['androphilic','revolting']},
  { name:"Dickslapper", adjustments:['androphilic','violent']},
  { name:"Dies Horribly", adjustments:['stupid','magical']},
  { name:"Dogfister", adjustments:['beast-lover','stretcher.2']},
  { name:"Dogfucker", adjustments:['beast-lover.2']},
  { name:"Dogthrower", adjustments:['beast-lover','violent']},
  { name:"Donkeyfister", adjustments:['beast-lover','stretcher.2']},
  { name:"Donkeyfucker", adjustments:['beast-lover.2']},
  { name:"Donkeypunch", adjustments:['beast-lover','violent']},
  { name:"Doombringer", adjustments:['violent']},
  { name:"Doomfister", adjustments:['violent','stretcher.2']},
  { name:"Doomfucker", adjustments:['violent']},
  { name:"Doomhammer", adjustments:['violent']},
  { name:"Doomshitter", adjustments:['violent','revolting']},
  { name:"Fatcock", adjustments:['big-cock'], requires:'minion(C).has-cock'},
  { name:"Fatcocks", adjustments:['big-cock','multi-cock'], requires:'minion(C).has-cock'},
  { name:"Flavored" },
  { name:"Fuckass", adjustments:['ass-obsessed.3']},
  { name:"Fuckfucker" },
  { name:"Fuckitall" },
  { name:"Fuckkiller", adjustments:['violent']},
  { name:"Fustylugs", adjustments:['ugly']},
  { name:"Gangbanger", adjustments:['orgy-lover.2'] },
  { name:"Gloryhole", adjustments:['androphilic','cum-lover.3']},
  { name:"Gubblesmucks", adjustments:['ugly']},
  { name:"Hatecopter", adjustments:['violent']},
  { name:"Helldozer", adjustments:['violent']},
  { name:"Hellhammer", adjustments:['violent']},
  { name:"Horsecock", adjustments:['horse-cock'], requires:'minion(C).has-cock'},
  { name:"Horsecocks", adjustments:['horse-cock','multi-cock'], requires:'minion(C).has-cock'},
  { name:"Horsefister", adjustments:['beast-lover.2','stretcher.2']},
  { name:"Horsefucker", adjustments:['beast-lover.3']},
  { name:"Horseshits", adjustments:['beast-lover.2','revolting']},
  { name:"Killfucker", adjustments:['violent']},
  { name:"Manglefucker", adjustments:['violent']},
  { name:"Manglestabber", adjustments:['violent']},
  { name:"Motherfister", adjustments:['stretcher.3']},
  { name:"Motherfucker" },
  { name:"Murderface", adjustments:['violent']},
  { name:"Nickelback" },
  { name:"Nipplebitter", adjustments:['gynephilic','violent','tit-lover']},
  { name:"Nipplefucker", adjustments:['gynephilic','stretcher','tit-lover']},
  { name:"Nippleyanks", adjustments:['gynephilic','violent','tit-lover']},
  { name:"Rateater" },
  { name:"Ratfister", adjustments:['beast-lover','stretcher']},
  { name:"Ratfucker", adjustments:['beast-lover.2']},
  { name:"Ratkicker", adjustments:['beast-lover','violent']},
  { name:"Ratkiller", adjustments:['beast-lover','violent']},
  { name:"Ratpounder", adjustments:['beast-lover.2']},
  { name:"Ratstabber", adjustments:['beast-lover','violent']},
  { name:"Rattosser", adjustments:['beast-lover']},
  { name:"Sex Machine", adjustments:['pussy-lover.3','ass-obsessed.3']},
  { name:"Shitbucket", adjustments:['revolting']},
  { name:"Shitfister", adjustments:['stretcher.3','revolting']},
  { name:"Shitfucker", adjustments:['revolting']},
  { name:"Shitgrinder", adjustments:['violent','revolting']},
  { name:"Shithammer", adjustments:['violent','revolting']},
  { name:"Shitkicker", adjustments:['violent','revolting']},
  { name:"Shitpounder", adjustments:['violent','revolting']},
  { name:"Shitshitter", adjustments:['revolting']},
  { name:"Shitsniffer", adjustments:['revolting']},
  { name:"Shitthrower", adjustments:['violent','revolting']},
  { name:"Shittingdicknipples", adjustments:['revolting','dick-nipples'], requires:'minion(C).has-pussy'},
  { name:"Shittingnipplecunts", adjustments:['revolting','nipple-cunts'], requires:'minion(C).has-pussy'},
  { name:"the Bloodsoaked", adjustments:['violent']},
  { name:"the Fucking Shit", adjustments:['smart','beautiful','magical']},
  { name:"the Horsefucked", adjustments:['beast-lover']},
  { name:"the Pussyhammer", adjustments:['gynephilic']},
  { name:"the Shit", adjustments:['smart','beautiful']},
  { name:"the Tosser", adjustments:['violent']},
  { name:"Threecocks", adjustments:['multi-cock','multi-cock'], requires:'minion(C).has-cock'},
  { name:"Throatfister", adjustments:['stretcher.2']},
  { name:"Throatfucker" },
  { name:"Throatstabber", adjustments:['violent']},
  { name:"Titfucker", adjustments:['gynephilic','tit-lover']},
  { name:"Titgrinder", adjustments:['gynephilic','tit-lover','violent']},
  { name:"Titpounder", adjustments:['gynephilic','tit-lover','violent']},
  { name:"Titpuncher", adjustments:['gynephilic','tit-lover','violent']},
  { name:"Titslapper", adjustments:['gynephilic','tit-lover','violent']},
  { name:"Titspanker", adjustments:['gynephilic','tit-lover','violent']},
  { name:"Titstabber", adjustments:['gynephilic','tit-lover','violent']},
  { name:"Titwhipper", adjustments:['gynephilic','tit-lover','violent']},
  { name:"Twatbanger", adjustments:['gynephilic']},
  { name:"Twatfister", adjustments:['gynephilic','stretcher.2']},
  { name:"Twatfucker", adjustments:['gynephilic']},
  { name:"Twatgrinder", adjustments:['gynephilic','violent']},
  { name:"Twathammer", adjustments:['gynephilic','violent']},
  { name:"Twatpounder", adjustments:['gynephilic','violent']},
  { name:"Twatslapper", adjustments:['gynephilic','violent']},
  { name:"Twatwhipper", adjustments:['gynephilic','violent']},
  { name:"Weaseleater", adjustments:['beast-lover','violent']},
  { name:"Weaselfister", adjustments:['beast-lover','stretcher']},
  { name:"Weaselfucker", adjustments:['beast-lover.2']},
  { name:"Weaselpounder", adjustments:['beast-lover','violent']},
  { name:"Weaseltosser", adjustments:['beast-lover','violent']},
  { name:"Weaseltrainer", adjustments:['beast-lover']},
];

postal.subscribe({ channel:"database", topic:"load.Name", callback:() => {
  each(names, (name)=>{
    Name.add(name, { species:'goblin', position:'last' });
  });
}});
