let names = [
  { name:"Ceree" },
  { name:"Cereet" },
  { name:"Ceriit" },
  { name:"Cerap" },
  { name:"Cic" },
  { name:"Cicrap" },
  { name:"Ciici" },
  { name:"Ciirat" },
  { name:"Ciireep" },
  { name:"Ciiree" },
  { name:"Ciireet" },
  { name:"Ciirit" },
  { name:"Ciiki" },
  { name:"Eek" },
  { name:"Eeki" },
  { name:"Eerip" },
  { name:"Eerit" },
  { name:"Eree" },
  { name:"Ereep" },
  { name:"Ereet" },
  { name:"Eeereekii" },
  { name:"Erk" },
  { name:"Erp" },
  { name:"Erf" },
  { name:"Erkeerii" },
  { name:"Ick" },
  { name:"Ickiit" },
  { name:"Ickeerii" },
  { name:"Ickee" },
  { name:"Kark" },
  { name:"Karkeriree" },
  { name:"Karii" },
  { name:"Keree" },
  { name:"Kip" },
  { name:"Kipree" },
  { name:"Kipri" },
  { name:"Kii" },
  { name:"Kiirp" },
  { name:"Kiirii" },
  { name:"Kiiree" },
  { name:"Kiki" },
  { name:"Kirt" },
  { name:"Kit" },
  { name:"Preeee" },
  { name:"Prekii" },
  { name:"Rek" },
  { name:"Reki" },
  { name:"Ree" },
  { name:"Reek" },
  { name:"Reekiikit" },
  { name:"Reeki" },
  { name:"Reekipp" },
  { name:"Reekiri" },
  { name:"Skee" },
  { name:"Skeep" },
  { name:"Skeekii" },
  { name:"Skeek" },
  { name:"Skeep" },
  { name:"Skeki" },
  { name:"Skirrit" },
  { name:"Skiriipt" },
  { name:"Skirt" },
  { name:"Skirk" },
  { name:"Skirp" },
  { name:"Skrit" },
  { name:"Skreeki" },
  { name:"Skree" },
  { name:"Skreep" },
  { name:"Skreen" },
  { name:"Skii" },
  { name:"Skirii" },
  { name:"Skiirp" },
  { name:"Skiieerpt" },
  { name:"Yee" },
  { name:"Yeep" },
  { name:"Yeekii" },
  { name:"Yeekiirpt" },
  { name:"Yeekeri" },
  { name:"Yeerii" },
  { name:"Yeeriki" },
  { name:"Yip" },
  { name:"Yipyip" },
  { name:"Yipiiriki" },
  { name:"Yipee" },
  { name:"Yipe" },
  { name:"Yiffi" },
  { name:"Yiffee" },
  { name:"Yiff" },
  { name:"Yiffiikiri" },
  { name:"Wip" },
  { name:"Wipee" },
  { name:"Wipiip" },
  { name:"Wiri" },
  { name:"Wiriip" },
  { name:"Wiriikiri" },
  { name:"Wree" },
  { name:"Wreeeee" },
  { name:"Wreeeeeeeee" },
  { name:"Wripee" },
  { name:"Writ" },
];

Messenger.subscribe("database.load.Name", () => {
  each(names, (name)=>{
    Name.add(name, { species:'scaven' });
  });
});
