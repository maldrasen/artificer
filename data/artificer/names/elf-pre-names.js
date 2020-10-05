
// --- Both Pre Names ---

let names = [
  { name:'Blighter' },
  { name:"Clever", adjustments:['smart']},
  { name:"Crazy", adjustments:['stupid']},
  { name:'Grovetender' },
  { name:'Reveler' },
  { name:'Sleepwatcher' },
  { name:'Stony' },
];

each(names, (name)=>{
  Name.add(name, { species:'elf', position:'pre' });
});

// --- Female Pre Names ---

names = [
  { name:'Silken' },
  { name:"Fair", adjustments:['beautiful','light-skin']},
  { name:"Foxy", adjustments:['beautiful','dark-skin']},
  { name:"Lil'", adjustments:['short','thin','small-tits']},
  { name:"Little", adjustments:['short','thin','small-tits']},
  { name:"Lovely", adjustments:['beautiful']},
  { name:"Milky", adjustments:['milky','big-tits']},
  { name:"Ridiculous", adjustments:['stupid']},
  { name:"Splendid", adjustments:['beautiful']},
  { name:"Tiny", adjustments:['short','thin','small-tits']},
];

each(names, (name)=>{
  Name.add(name, { species:'elf', position:'pre', restriction:'not-male' });
});

// --- Male Pre Names ---
names = [
  { name:"Balls", adjustments:['monster-balls']},
  { name:"Big", adjustments:['tall','strong','thicc','big-cock']},
  { name:"Black", adjustments:['dark-skin','big-cock']},
  { name:"Clever", adjustments:['smart']},
  { name:"Cocks", adjustments:['multi-cock']},
  { name:"Colt", adjustments:['horse-cock']},
  { name:"Crafty", adjustments:['smart']},
  { name:"Cunning", adjustments:['smart']},
  { name:"Dapper", adjustments:['smart','beautiful']},
  { name:"Dicks", adjustments:['multi-cock']},
  { name:"Dim", adjustments:['stupid']},
  { name:"Drillbit", adjustments:['strong','big-cock']},
  { name:"Flaming", adjustments:['androphilic','red-hair','big-cock']},
  { name:"Gorgeous", adjustments:['beautiful']},
  { name:"Hacksaw", adjustments:['strong']},
  { name:"Handsome", adjustments:['beautiful']},
  { name:"Hideous", adjustments:['ugly']},
  { name:"Horse", adjustments:['tall','strong','big-cock','horse-cock','big-balls']},
  { name:"Jackhammer", adjustments:['strong','big-cock']},
  { name:"Loathsome", adjustments:['ugly']},
  { name:"Misshapen", adjustments:['ugly']},
  { name:"Nasty", adjustments:['ugly']},
  { name:"Scrotum", adjustments:['monster-balls']},
  { name:"Tall", adjustments:['tall']},
  { name:"Thirdleg", adjustments:['monster-cock']},
  { name:"Wise Old", adjustments:['smart','ugly']},
]

each(names, (name)=>{
  Name.add(name, { species:'elf', position:'pre', restriction:'male' });
});
