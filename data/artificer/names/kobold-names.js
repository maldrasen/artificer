let names = [
 { name:"After-Dinner-Mint", aspects:['pussy-slut','lascivious'], restriction:'has-pussy'},
 { name:"After-It-Rains", aspects:['passive']},
 { name:"Always-In-Heat", aspects:['pussy-slut','breeder.3','lascivious'], restriction:'has-pussy'},
 { name:"Always-Screaming", aspects:['violent','masochist.3']},
 { name:"Amber-Eyes", triggers:['amber-eyes','beautiful']},
 { name:"Angry-At-Everything", restriction:'male', aspects:['violent.2']},
 { name:"Any-Hole-Will-Do", aspects:['cock-slut.3','lascivious.3'], restriction:'has-cock'},
 { name:"Appears-Out-Of-Nowhere" },
 { name:"Argues-With-Frogs", triggers:['stupid']},
 { name:"Arrives-Too-Late", triggers:['stupid']},
 { name:"Asks-A-Question", triggers:['smart']},
 { name:"Badass-Motherfucker", restriction:'male', triggers:['strong','smart']},
 { name:"Bares-His-Fangs", restriction:'male', aspects:['violent']},
 { name:"Basks-In-The-Sun", aspects:['passive.2','lascivious'], triggers:['beautiful']},
 { name:"Bathes-In-Blood", aspects:['violent'], triggers:['strong']},
 { name:"Bathes-In-The-Moonlight", aspects:['passive.2'], triggers:['beautiful']},
 { name:"Begins-The-Chant", triggers:['magical']},
 { name:"Bites-A-Dog", aspects:['violent','beast-lover']},
 { name:"Bites-A-Leg", aspects:['violent']},
 { name:"Black-Silk-Earth", restriction:'has-pussy', triggers:['beautiful']},
 { name:"Breaks-An-Arm", aspects:['violent']},
 { name:"Breezes-Whisper", aspects:['passive']},
 { name:"Builds-A-Nest", aspects:['breeder'], restriction:'has-pussy'},
 { name:"Burns-The-Village", aspects:['violent.2'], triggers:['magical']},
 { name:"Calls-The-Flames", triggers:['magical']},
 { name:"Calls-The-Storm", triggers:['magical']},
 { name:"Carries-Water", aspects:['passive']},
 { name:"Carves-A-Statue", aspects:['passive']},
 { name:"Catches-A-Bird" },
 { name:"Catches-A-Fish" },
 { name:"Catches-A-Rat", aspects:['beast-lover']},
 { name:"Chases-A-Tail", aspects:['lascivious.3','pussy-lover.2','gynephilic.3'], restriction:'has-cock' },
 { name:"Chews-On-Moss" },
 { name:"Chews-The-Marrow", aspects:['violent.2'], triggers:['strong']},
 { name:"Chops-Wood", triggers:['strong']},
 { name:"Circles-The-Marsh" },
 { name:"Claws-At-The-Ghosts" },
 { name:"Claws-The-Eyes", aspects:['violent.2']},
 { name:"Cleans-A-Fish" },
 { name:"Climbs-A-Mountain", triggers:['strong']},
 { name:"Climbs-A-Tree" },
 { name:"Climbs-A-Wall" },
 { name:"Comes-From-The-North" },
 { name:"Complains-About-Names" },
 { name:"Counts-The-Clouds", aspects:['passive.3']},
 { name:"Crosses-A-Road" },
 { name:"Cuts-Deeply", aspects:['violent'], triggers:['strong']},
 { name:"Cuts-Like-A-Dagger", triggers:['strong']},
 { name:"Cuts-With-Words", triggers:['smart'], restriction:'female' },
 { name:"Dances-In-The-Fire" },
 { name:"Dances-Naked", aspects:['lascivious.2','pussy-slut','anal-slut'], restriction:'has-pussy' },
 { name:"Dances-With-A-Knife", restriction:'has-pussy' },
 { name:"Dances-With-The-Moon", restriction:'has-pussy' },
 { name:"Dances-With-Wolves", aspects:['beast-lover']},
 { name:"Delves-Deeply", triggers:['smart']},
 { name:"Dies-Horribly", restriction:'male' },
 { name:"Dives-From-Below" },
 { name:"Dodges-An-Attack" },
 { name:"Doubts-The-Moon", triggers:['smart']},
 { name:"Draws-A-Map", triggers:['smart']},
 { name:"Dreams-In-Daylight" },
 { name:"Dreams-Of-Blood", aspects:['violent.3']},
 { name:"Dreams-Of-Honey-And-Gold", aspects:['pussy-lover.3','passive','lascivious.2','golden.3']},
 { name:"Drifts-On-Wind", aspects:['passive']},
 { name:"Drinks-Down-The-Moon" },
 { name:"Drinks-From-The-River" },
 { name:"Drinks-Too-Much" },
 { name:"Drops-Of-Blood", aspects:['violent']},
 { name:"Eats-A-Bug" },
 { name:"Eats-A-Face", aspects:['violent.3']},
 { name:"Eats-An-Ass", aspects:['ass-obsessed.3']},
 { name:"Eats-Loves-Kills", aspects:['violent.2','lascivious.2']},
 { name:"Eats-Many-Hearts", aspects:['violent.3']},
 { name:"Eats-Too-Much", restriction:'male' },
 { name:"Echos-From-The-Depths", triggers:['smart']},
 { name:"Evening-Star-Rising" },
 { name:"Eyes-Like-Night", triggers:['smart','black-eyes']},
 { name:"Eyes-Of-Steel", triggers:['smart','gray-eyes']},
 { name:"Falls-In-The-River", triggers:['stupid']},
 { name:"Fangs-Like-Ice", aspects:['violent'], triggers:['smart']},
 { name:"Feeds-A-Rat" },
 { name:"Feels-The-Wind" },
 { name:"Fills-A-Cup", aspects:['golden.2']},
 { name:"Finds-A-Cave" },
 { name:"Finds-A-Secret" },
 { name:"Fire-Under-His-Tongue", triggers:['smart','magical'], restriction:'male' },
 { name:"Fires-An-Arrow" },
 { name:"Flicks-His-Tongue", restriction:'male' },
 { name:"Follows-After" },
 { name:"Follows-The-Road" },
 { name:"Footfalls-In-Snow", aspects:['passive.2'], triggers:['beautiful']},
 { name:"Friends-With-The-Moon", aspects:['passive']},
 { name:"Frog-Swallows-Frog" },
 { name:"From-Deepest-Fathoms" },
 { name:"Fucks-His-Mother", aspects:['perverted.3','lascivious.3'], restriction:'male' },
 { name:"Furl-Of-Fresh-Leaves", aspects:['passive.2'], triggers:['beautiful']},
 { name:"Gives-A-Beating", aspects:['violent.2'], restriction:'male' },
 { name:"Gives-A-Hand", aspects:['passive']},
 { name:"Goes-All-The-Way", aspects:['lascivious.2','pussy-slut','anal-slut'], restriction:'female' },
 { name:"Goes-By-The-River", aspects:['passive']},
 { name:"Goes-To-Sleep", aspects:['passive']},
 { name:"Goes-To-The-Mountain" },
 { name:"Green-Venom-Tongue", triggers:['smart']},
 { name:"Grows-A-Beard", restriction:'male' },
 { name:"Grows-A-Tail", aspects:['revolting.2']},
 { name:"Grows-Long", triggers:['big-cock'], restriction:'has-cock' },
 { name:"Grows-Mushrooms", aspects:['passive']},
 { name:"Hard-As-A-Rock", triggers:['big-cock'], restriction:'has-cock' },
 { name:"Has-A-Bucket", triggers:['stupid']},
 { name:"Has-No-Regrets" },
 { name:"Has-Trouble-Acting-Normal", aspects:['perverted.3'], triggers:['stupid'], restriction:'male' },
 { name:"He-Cuts-The-Flesh", aspects:['violent.2'], restriction:'male' },
 { name:"Hears-A-Whisper" },
 { name:"Hears-The-Stone", triggers:['magical']},
 { name:"Hears-Voices-From-The-Deep", triggers:['magical']},
 { name:"Hears-Voices-In-The-Air", triggers:['magical']},
 { name:"Hides-A-Card" },
 { name:"Hides-His-Eyes", restriction:'male' },
 { name:"Hides-In-Shadows" },
 { name:"His-Tongue-Is-A-Dick", triggers:['cock-tongue'], restriction:'male' },
 { name:"Holds-A-Torch" },
 { name:"Hops-Over-Fires" },
 { name:"Hunts-A-Deer", aspects:['violent']},
 { name:"Hunts-An-Elf", aspects:['violent.3']},
 { name:"Hunts-The-Deep", aspects:['violent']},
 { name:"Imagines-Dragons", aspects:['passive']},
 { name:"Inside-Out-Ass", restriction:'female', triggers:['anal-prolapse']},
 { name:"Jacks-Off-A-Horse", aspects:['beast-lover.3','cock-lover.3','cum-lover'], restriction:'female' },
 { name:"Juggles-Scorpions" },
 { name:"Keeps-On-Keeping-On", aspects:['passive.2']},
 { name:"Kills-A-Crow" },
 { name:"Knocks-Down-A-Wall" },
 { name:"Knows-The-Time" },
 { name:"Knows-The-Way", triggers:['smart']},
 { name:"Laughs-Loudly" },
 { name:"Leads-The-Charge", aspects:['violent.2'], triggers:['strong']},
 { name:"Leads-The-Hunt", aspects:['violent']},
 { name:"Leaps-Over-Thistle" },
 { name:"Learns-Through-Pain", aspects:['masochist'], triggers:['smart']},
 { name:"Leaves-No-Tracks", triggers:['smart']},
 { name:"Licks-A-Mushroom", aspects:['passive'], triggers:['stupid']},
 { name:"Lies-In-Wait" },
 { name:"Lifts-A-Rock", triggers:['strong']},
 { name:"Lifts-Her-Tail", aspects:['lascivious.3','pussy-slut.2','anal-slut','perverted'], restriction:'female' },
 { name:"Listens-By-Smell" },
 { name:"Looks-Across-The-Ocean" },
 { name:"Looks-At-The-Sun", triggers:['stupid']},
 { name:"Looks-To-The-Skies", aspects:['passive']},
 { name:"Lost-In-The-Woods", triggers:['stupid']},
 { name:"Lurks-Behind-You" },
 { name:"Lurks-In-Shadow" },
 { name:"Makes-A-Poison", triggers:['smart']},
 { name:"Makes-A-Pot", aspects:['passive.2']},
 { name:"Makes-An-Arrow" },
 { name:"Makes-Honey", aspects:['passive.2','pussy-slut.3','golden.2'], restriction:'not-male' },
 { name:"Marks-The-Prey", aspects:['violent'], triggers:['smart']},
 { name:"Meat-Stick", triggers:['big-cock'], restriction:'has-cock' },
 { name:"Milks-A-Goat", aspects:['beast-lover','tit-lover.2','milky.2']},
 { name:"Misses-The-Target", triggers:['stupid']},
 { name:"Moist-For-No-Reason" },
 { name:"Morning-Star-Steals-Away-Clouds", triggers:['beautiful'], restriction:'not-male' },
 { name:"Mother-Of-The-Moon", aspects:['breeder.2'], restriction:'female' },
 { name:"Mounts-A-Boar", aspects:['beast-lover.3'], restriction:'has-cock' },
 { name:"Moves-Like-Water" },
 { name:"Moves-Many-Rocks", triggers:['strong']},
 { name:"Names-The-Leaves", triggers:['smart','beautiful']},
 { name:"Narrows-His-Eyes", restriction:'male' },
 { name:"Only-He-Stands-There", restriction:'male' },
 { name:"Opens-His-Eyes", restriction:'male' },
 { name:"Paints-With-Dreams", aspects:['passive.2'], triggers:['magical'], restriction:'female' },
 { name:"Picks-A-Flower", aspects:['passive.3'], restriction:'female' },
 { name:"Pisses-In-The-Wind", restriction:'has-cock' },
 { name:"Plays-A-Flute" },
 { name:"Plays-A-Game" },
 { name:"Plays-With-Himself", aspects:['masterbator'], restriction:'male' },
 { name:"Poisons-A-Well" },
 { name:"Poor-Impulse-Control", aspects:['perverted','violent','masterbator'], restriction:'male' },
 { name:"Pours-A-Glass" },
 { name:"Punches-A-Goat", aspects:['violent']},
 { name:"Punches-A-Horse", aspects:['violent']},
 { name:"Punches-A-Tree", aspects:['violent']},
 { name:"Races-The-River" },
 { name:"Races-The-Wind" },
 { name:"Rat-On-A-Stick", triggers:['stupid']},
 { name:"Reads-A-Book", triggers:['smart']},
 { name:"Rides-All-Night", aspects:['lascivious']},
 { name:"Runs-Away" },
 { name:"Runs-Through-The-Wood" },
 { name:"Runs-To-The-Moon" },
 { name:"Runs-To-The-Shitter", aspects:['revolting'], restriction:'male' },
 { name:"Runs-With-Wolves", aspects:['beast-lover']},
 { name:"Scattered-Leaves", triggers:['beautiful'] },
 { name:"Scent-Of-Graves" },
 { name:"Screams-Of-Fire-And-Damnation", aspects:['chaste','violent'], triggers:['magical'], restriction:'male' },
 { name:"Searches-For-Gold" },
 { name:"Sees-In-The-Dark" },
 { name:"Serves-On-Her-Knees", aspects:['androphilic','cock-lover.2','oral-slut.3'], restriction:'female' },
 { name:"Sets-A-Trap" },
 { name:"Sharpens-A-Blade" },
 { name:"Shouts-At-The-Sky", aspects:['violent'], triggers:['magical','stupid']},
 { name:"Shows-His-Teeth", aspects:['violent'], restriction:'male' },
 { name:"Shows-The-Way" },
 { name:"Silver-Scales", triggers:['white-scales']},
 { name:"Sings-Her-Sorrows", aspects:['passive'], restriction:'female' },
 { name:"Sings-In-The-Rain" },
 { name:"Sings-Like-Thunder", triggers:['magical']},
 { name:"Sings-To-The-Deep", aspects:['passive']},
 { name:"Sings-To-The-Sun", aspects:['passive']},
 { name:"Sinks-Like-A-Rock" },
 { name:"Sister-Of-The-Wind", restriction:'female' },
 { name:"Skins-A-Deer" },
 { name:"Slap-Her-Ass", aspects:['masochist.2','anal-slut'], restriction:'female' },
 { name:"Sleeps-All-Day", aspects:['passive']},
 { name:"Slim-Pickins" },
 { name:"Slips-Through-Fingers" },
 { name:"Smells-Like-Shit", aspects:['golden.2','revolting.3'], restriction:'male' },
 { name:"Smiles-With-Knife", aspects:['violent']},
 { name:"Smokes-A-Pipe", aspects:['passive.3']},
 { name:"Smokes-The-Weeds", aspects:['passive.3']},
 { name:"Smooth-As-Wind", aspects:['passive.2']},
 { name:"Sneaks-Across-A-Wall" },
 { name:"So-And-So" },
 { name:"Solves-The-Riddle", triggers:['smart']},
 { name:"Sorry-He's-Here", triggers:['ugly','weak','stupid'], restriction:'male' },
 { name:"Speaks-In-Riddles", triggers:['smart']},
 { name:"Speaks-In-Whispers", triggers:['smart']},
 { name:"Speaks-To-The-Fire", triggers:['smart','magical']},
 { name:"Speaks-With-Her-Sword", aspects:['violent.2'], restriction:'female' },
 { name:"Speaks-With-Leaves", aspects:['passive.3']},
 { name:"Spreads-Her-Legs", aspects:['pussy-slut.3','breeder.3'], restriction:'female' },
 { name:"Stands-Alone" },
 { name:"Stands-At-The-Edge" },
 { name:"Stands-In-Silence" },
 { name:"Stands-In-Still-Water", aspects:['passive.2']},
 { name:"Stands-In-The-River" },
 { name:"Stands-On-A-Rock" },
 { name:"Starts-A-Fire" },
 { name:"Steals-A-Goat" },
 { name:"Steals-A-Jewel" },
 { name:"Steals-An-Egg" },
 { name:"Steps-On-A-Trap", triggers:['stupid']},
 { name:"Steps-On-Tails", triggers:['stupid']},
 { name:"Strange-Doings", aspects:['perverted.2']},
 { name:"Strikes-True", triggers:['strong']},
 { name:"Strives-For-Power" },
 { name:"Studies-In-The-Dark", triggers:['smart']},
 { name:"Studies-The-Secrets", triggers:['smart']},
 { name:"Studies-Under-A-Tree", triggers:['smart']},
 { name:"Stupid-Name-That-Takes-Too-Long-To-Say" },
 { name:"Sun-In-Shadow" },
 { name:"Swims-Across-A-River" },
 { name:"Swims-At-Night" },
 { name:"Swims-In-The-Deep" },
 { name:"Swims-In-The-Sky", aspects:['passive'], triggers:['magical']},
 { name:"Swings-A-Sword", aspects:['violent']},
 { name:"Takes-A-Rabbit" },
 { name:"Takes-Her-Time", aspects:['passive'], restriction:'female' },
 { name:"Takes-In-Light", aspects:['passive']},
 { name:"Takes-The-Shot" },
 { name:"Talks-To-Himself", restriction:'male' },
 { name:"Talks-To-Shadows" },
 { name:"Talks-To-Trees", aspects:['passive']},
 { name:"Talks-Too-Much" },
 { name:"Tames-A-Fox", aspects:['passive']},
 { name:"Tans-A-Hide" },
 { name:"Tastes-Like-Honey", aspects:['pussy-slut.2','oral-lover.3'], restriction:'has-pussy' },
 { name:"Teaches-The-Stars", triggers:['smart']},
 { name:"Teeth-Like-Stars" },
 { name:"Tells-A-Story", triggers:['smart']},
 { name:"Tells-The-Future", triggers:['smart','magical']},
 { name:"The-Color-Of-A-Dream", aspects:['passive.2'], restriction:'female' },
 { name:"The-Glitter-Of-Gold" },
 { name:"The-Ugly-One", triggers:['ugly']},
 { name:"Thinks-Like-A-Knife", triggers:['smart']},
 { name:"Thinks-Of-Traps", aspects:['violent'], triggers:['smart']},
 { name:"Thoughts-Of-The-Wind", aspects:['passive'], triggers:['smart']},
 { name:"Through-The-Fire-And-The-Flames", aspects:['violent'], triggers:['magical']},
 { name:"Throws-A-Rock", aspects:['violent']},
 { name:"Thrusts-A-Spear", aspects:['violent']},
 { name:"Ties-A-Knot", aspects:['binder.3']},
 { name:"Tight-Like-Tiger", aspects:['anal-slut'], triggers:['strong'], restriction:'male' },
 { name:"Too-Small", triggers:['short','weak'], restriction:'female' },
 { name:"Tricks-A-Man" },
 { name:"Trips-Over-Dirt", triggers:['stupid']},
 { name:"Unlocks-A-Door" },
 { name:"Waits-For-Spring", aspects:['passive.2']},
 { name:"Walks-In-Rain" },
 { name:"Walks-In-Shadow" },
 { name:"Walks-In-The-Deep", aspects:['passive']},
 { name:"Walks-In-The-Forest", aspects:['passive']},
 { name:"Walks-On-A-Cloud", aspects:['passive.2'], triggers:['magical']},
 { name:"Walks-On-Thin-Ice" },
 { name:"Walks-On-Water", triggers:['magical']},
 { name:"Walks-Through-Fog", aspects:['passive']},
 { name:"Wants-A-Pony", aspects:['beast-lover.3'], restriction:'female' },
 { name:"Watches-From-Afar" },
 { name:"Watches-From-The-Dark" },
 { name:"Watches-The-Cave" },
 { name:"Watches-The-Flames", aspects:['passive']},
 { name:"Watches-The-Stars", aspects:['passive'], triggers:['smart']},
 { name:"Waves-In-The-Water", aspects:['passive.2']},
 { name:"Weaves-A-Basket", aspects:['passive']},
 { name:"Whats-Her-Face", restriction:'female' },
 { name:"Whats-His-Face", restriction:'male' },
 { name:"Wind-On-Her-Scales", aspects:['passive'], triggers:['beautiful'], restriction:'female' },
 { name:"Writes-On-Walls" },
];

each(names, (name)=>{
  Name.add(name, { species:'kobold' });
});
