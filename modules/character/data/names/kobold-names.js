let names = [
 { name:"After-Dinner-Mint", adjustments:['pussy-slut','slut'], requires:'minion(C).has-pussy' },
 { name:"After-It-Rains", adjustments:['passive']},
 { name:"Always-In-Heat", adjustments:['pussy-slut','breeder.3','slut'], requires:'minion(C).has-pussy' },
 { name:"Always-Screaming", adjustments:['violent','masochist.3']},
 { name:"Amber-Eyes", adjustments:['amber-eyes','beautiful']},
 { name:"Angry-At-Everything", adjustments:['violent.2'], requires:'minion(C).is-male' },
 { name:"Any-Hole-Will-Do", adjustments:['ass-obsessed.2','pussy-lover.2','oral-lover.2','slut.3'], requires:'minion(C).has-cock' },
 { name:"Appears-Out-Of-Nowhere" },
 { name:"Argues-With-Frogs", adjustments:['stupid']},
 { name:"Arrives-Too-Late", adjustments:['stupid']},
 { name:"Asks-A-Question", adjustments:['smart']},
 { name:"Badass-Motherfucker", adjustments:['strong','smart'], requires:'minion(C).is-male' },
 { name:"Bares-His-Fangs", adjustments:['violent'], requires:'minion(C).is-male' },
 { name:"Basks-In-The-Sun", adjustments:['passive.2','slut','beautiful']},
 { name:"Bathes-In-Blood", adjustments:['violent','strong']},
 { name:"Bathes-In-The-Moonlight", adjustments:['passive.2','beautiful']},
 { name:"Begins-The-Chant", adjustments:['magical']},
 { name:"Bites-A-Dog", adjustments:['violent','beast-lover']},
 { name:"Bites-A-Leg", adjustments:['violent']},
 { name:"Black-Silk-Earth", adjustments:['beautiful'], requires:'minion(C).has-pussy' },
 { name:"Breaks-An-Arm", adjustments:['violent']},
 { name:"Breezes-Whisper", adjustments:['passive']},
 { name:"Builds-A-Nest", adjustments:['breeder'], requires:'minion(C).has-pussy' },
 { name:"Burns-The-Village", adjustments:['violent.2','magical']},
 { name:"Calls-The-Flames", adjustments:['magical']},
 { name:"Calls-The-Storm", adjustments:['magical']},
 { name:"Carries-Water", adjustments:['passive']},
 { name:"Carves-A-Statue", adjustments:['passive']},
 { name:"Catches-A-Bird" },
 { name:"Catches-A-Fish" },
 { name:"Catches-A-Rat", adjustments:['beast-lover']},
 { name:"Chases-A-Tail", adjustments:['slut.3','pussy-lover.2','gynephilic.3'], requires:'minion(C).has-cock' },
 { name:"Chews-On-Moss" },
 { name:"Chews-The-Marrow", adjustments:['violent.2','strong']},
 { name:"Chops-Wood", adjustments:['strong']},
 { name:"Circles-The-Marsh" },
 { name:"Claws-At-The-Ghosts" },
 { name:"Claws-The-Eyes", adjustments:['violent.2']},
 { name:"Cleans-A-Fish" },
 { name:"Climbs-A-Mountain", adjustments:['strong']},
 { name:"Climbs-A-Tree" },
 { name:"Climbs-A-Wall" },
 { name:"Comes-From-The-North" },
 { name:"Complains-About-Names" },
 { name:"Counts-The-Clouds", adjustments:['passive.3']},
 { name:"Crosses-A-Road" },
 { name:"Cuts-Deeply", adjustments:['violent','strong']},
 { name:"Cuts-Like-A-Dagger", adjustments:['strong']},
 { name:"Cuts-With-Words", adjustments:['smart'], requires:'minion(C).is-female' },
 { name:"Dances-In-The-Fire" },
 { name:"Dances-Naked", adjustments:['slut.2','pussy-slut','anal-slut'], requires:'minion(C).has-pussy' },
 { name:"Dances-With-A-Knife", requires:'minion(C).has-pussy' },
 { name:"Dances-With-The-Moon", requires:'minion(C).has-pussy' },
 { name:"Dances-With-Wolves", adjustments:['beast-lover']},
 { name:"Delves-Deeply", adjustments:['smart']},
 { name:"Dies-Horribly", requires:'minion(C).is-male' },
 { name:"Dives-From-Below" },
 { name:"Dodges-An-Attack" },
 { name:"Doubts-The-Moon", adjustments:['smart']},
 { name:"Draws-A-Map", adjustments:['smart']},
 { name:"Dreams-In-Daylight" },
 { name:"Dreams-Of-Blood", adjustments:['violent.3']},
 { name:"Dreams-Of-Honey-And-Gold", adjustments:['pussy-lover.3','passive','slut.2','golden.3']},
 { name:"Drifts-On-Wind", adjustments:['passive']},
 { name:"Drinks-Down-The-Moon" },
 { name:"Drinks-From-The-River" },
 { name:"Drinks-Too-Much" },
 { name:"Drops-Of-Blood", adjustments:['violent']},
 { name:"Eats-A-Bug" },
 { name:"Eats-A-Face", adjustments:['violent.3']},
 { name:"Eats-An-Ass", adjustments:['ass-obsessed.3']},
 { name:"Eats-Loves-Kills", adjustments:['violent.2','slut.2']},
 { name:"Eats-Many-Hearts", adjustments:['violent.3']},
 { name:"Eats-Too-Much", requires:'minion(C).is-male' },
 { name:"Echos-From-The-Depths", adjustments:['smart']},
 { name:"Evening-Star-Rising" },
 { name:"Eyes-Like-Night", adjustments:['smart','black-eyes']},
 { name:"Eyes-Of-Steel", adjustments:['smart','gray-eyes']},
 { name:"Falls-In-The-River", adjustments:['stupid']},
 { name:"Fangs-Like-Ice", adjustments:['violent','smart']},
 { name:"Feeds-A-Rat" },
 { name:"Feels-The-Wind" },
 { name:"Fills-A-Cup", adjustments:['golden.2']},
 { name:"Finds-A-Cave" },
 { name:"Finds-A-Secret" },
 { name:"Fire-Under-His-Tongue", adjustments:['smart','magical'], requires:'minion(C).is-male' },
 { name:"Fires-An-Arrow" },
 { name:"Flicks-His-Tongue", requires:'minion(C).is-male' },
 { name:"Follows-After" },
 { name:"Follows-The-Road" },
 { name:"Footfalls-In-Snow", adjustments:['passive.2','beautiful']},
 { name:"Friends-With-The-Moon", adjustments:['passive']},
 { name:"Frog-Swallows-Frog" },
 { name:"From-Deepest-Fathoms" },
 { name:"Fucks-His-Mother", adjustments:['perverted.3','slut.3'], requires:'minion(C).is-male' },
 { name:"Furl-Of-Fresh-Leaves", adjustments:['passive.2','beautiful']},
 { name:"Gives-A-Beating", adjustments:['violent.2'], requires:'minion(C).is-male' },
 { name:"Gives-A-Hand", adjustments:['passive']},
 { name:"Goes-All-The-Way", adjustments:['slut.2','pussy-slut','anal-slut'], requires:'minion(C).is-female' },
 { name:"Goes-By-The-River", adjustments:['passive']},
 { name:"Goes-To-Sleep", adjustments:['passive']},
 { name:"Goes-To-The-Mountain" },
 { name:"Green-Venom-Tongue", adjustments:['smart']},
 { name:"Grows-A-Beard", requires:'minion(C).is-male' },
 { name:"Grows-A-Tail", adjustments:['revolting.2']},
 { name:"Grows-Long", adjustments:['big-cock'], requires:'minion(C).has-cock' },
 { name:"Grows-Mushrooms", adjustments:['passive']},
 { name:"Hard-As-A-Rock", adjustments:['big-cock'], requires:'minion(C).has-cock' },
 { name:"Has-A-Bucket", adjustments:['stupid']},
 { name:"Has-No-Regrets" },
 { name:"Has-Trouble-Acting-Normal", adjustments:['perverted.3','stupid'], requires:'minion(C).is-male' },
 { name:"He-Cuts-The-Flesh", adjustments:['violent.2'], requires:'minion(C).is-male' },
 { name:"Hears-A-Whisper" },
 { name:"Hears-The-Stone", adjustments:['magical']},
 { name:"Hears-Voices-From-The-Deep", adjustments:['magical']},
 { name:"Hears-Voices-In-The-Air", adjustments:['magical']},
 { name:"Hides-A-Card" },
 { name:"Hides-His-Eyes", requires:'minion(C).is-male' },
 { name:"Hides-In-Shadows" },
 { name:"His-Tongue-Is-A-Dick", adjustments:['cock-tongue'], requires:'minion(C).is-male' },
 { name:"Holds-A-Torch" },
 { name:"Hops-Over-Fires" },
 { name:"Hunts-A-Deer", adjustments:['violent']},
 { name:"Hunts-An-Elf", adjustments:['violent.3']},
 { name:"Hunts-The-Deep", adjustments:['violent']},
 { name:"Imagines-Dragons", adjustments:['passive']},
 { name:"Inside-Out-Ass", adjustments:['anal-prolapse'], requires:'minion(C).is-female' },
 { name:"Jacks-Off-A-Horse", adjustments:['beast-lover.3','cock-lover.3','cum-lover'], requires:'minion(C).is-female' },
 { name:"Juggles-Scorpions" },
 { name:"Keeps-On-Keeping-On", adjustments:['passive.2']},
 { name:"Kills-A-Crow" },
 { name:"Knocks-Down-A-Wall" },
 { name:"Knows-The-Time" },
 { name:"Knows-The-Way", adjustments:['smart']},
 { name:"Laughs-Loudly" },
 { name:"Leads-The-Charge", adjustments:['violent.2','strong']},
 { name:"Leads-The-Hunt", adjustments:['violent']},
 { name:"Leaps-Over-Thistle" },
 { name:"Learns-Through-Pain", adjustments:['masochist','smart']},
 { name:"Leaves-No-Tracks", adjustments:['smart']},
 { name:"Licks-A-Mushroom", adjustments:['passive','stupid']},
 { name:"Lies-In-Wait" },
 { name:"Lifts-A-Rock", adjustments:['strong']},
 { name:"Lifts-Her-Tail", adjustments:['slut.3','pussy-slut.2','anal-slut','perverted'], requires:'minion(C).is-female' },
 { name:"Listens-By-Smell" },
 { name:"Looks-Across-The-Ocean" },
 { name:"Looks-At-The-Sun", adjustments:['stupid']},
 { name:"Looks-To-The-Skies", adjustments:['passive']},
 { name:"Lost-In-The-Woods", adjustments:['stupid']},
 { name:"Lurks-Behind-You" },
 { name:"Lurks-In-Shadow" },
 { name:"Makes-A-Poison", adjustments:['smart']},
 { name:"Makes-A-Pot", adjustments:['passive.2']},
 { name:"Makes-An-Arrow" },
 { name:"Makes-Honey", adjustments:['passive.2','pussy-slut.3','golden.2'], requires:'minion(C).is-not-male' },
 { name:"Marks-The-Prey", adjustments:['violent','smart']},
 { name:"Meat-Stick", adjustments:['big-cock'], requires:'minion(C).has-cock' },
 { name:"Milks-A-Goat", adjustments:['beast-lover','tit-lover.2','milky.2']},
 { name:"Misses-The-Target", adjustments:['stupid']},
 { name:"Moist-For-No-Reason" },
 { name:"Morning-Star-Steals-Away-Clouds", adjustments:['beautiful'], requires:'minion(C).is-not-male' },
 { name:"Mother-Of-The-Moon", adjustments:['breeder.2'], requires:'minion(C).is-female' },
 { name:"Mounts-A-Boar", adjustments:['beast-lover.3'], requires:'minion(C).has-cock' },
 { name:"Moves-Like-Water" },
 { name:"Moves-Many-Rocks", adjustments:['strong']},
 { name:"Names-The-Leaves", adjustments:['smart','beautiful']},
 { name:"Narrows-His-Eyes", requires:'minion(C).is-male' },
 { name:"Only-He-Stands-There", requires:'minion(C).is-male' },
 { name:"Opens-His-Eyes", requires:'minion(C).is-male' },
 { name:"Paints-With-Dreams", adjustments:['passive.2','magical'], requires:'minion(C).is-female' },
 { name:"Picks-A-Flower", adjustments:['passive.3'], requires:'minion(C).is-female' },
 { name:"Pisses-In-The-Wind", requires:'minion(C).has-cock' },
 { name:"Plays-A-Flute" },
 { name:"Plays-A-Game" },
 { name:"Plays-With-Himself", adjustments:['masterbator'], requires:'minion(C).is-male' },
 { name:"Poisons-A-Well" },
 { name:"Poor-Impulse-Control", adjustments:['perverted','violent','masterbator'], requires:'minion(C).is-male' },
 { name:"Pours-A-Glass" },
 { name:"Punches-A-Goat", adjustments:['violent']},
 { name:"Punches-A-Horse", adjustments:['violent']},
 { name:"Punches-A-Tree", adjustments:['violent']},
 { name:"Races-The-River" },
 { name:"Races-The-Wind" },
 { name:"Rat-On-A-Stick", adjustments:['stupid']},
 { name:"Reads-A-Book", adjustments:['smart']},
 { name:"Rides-All-Night", adjustments:['slut']},
 { name:"Runs-Away" },
 { name:"Runs-Through-The-Wood" },
 { name:"Runs-To-The-Moon" },
 { name:"Runs-To-The-Shitter", adjustments:['revolting'], requires:'minion(C).is-male' },
 { name:"Runs-With-Wolves", adjustments:['beast-lover']},
 { name:"Scattered-Leaves", adjustments:['beautiful'] },
 { name:"Scent-Of-Graves" },
 { name:"Screams-Of-Fire-And-Damnation", adjustments:['chaste','violent','magical'], requires:'minion(C).is-male' },
 { name:"Searches-For-Gold" },
 { name:"Sees-In-The-Dark" },
 { name:"Serves-On-Her-Knees", adjustments:['androphilic','cock-lover.2','oral-slut.3'], requires:'minion(C).is-female' },
 { name:"Sets-A-Trap" },
 { name:"Sharpens-A-Blade" },
 { name:"Shouts-At-The-Sky", adjustments:['violent','magical','stupid']},
 { name:"Shows-His-Teeth", adjustments:['violent'], requires:'minion(C).is-male' },
 { name:"Shows-The-Way" },
 { name:"Silver-Scales", adjustments:['white-scales']},
 { name:"Sings-Her-Sorrows", adjustments:['passive'], requires:'minion(C).is-female' },
 { name:"Sings-In-The-Rain" },
 { name:"Sings-Like-Thunder", adjustments:['magical']},
 { name:"Sings-To-The-Deep", adjustments:['passive']},
 { name:"Sings-To-The-Sun", adjustments:['passive']},
 { name:"Sinks-Like-A-Rock" },
 { name:"Sister-Of-The-Wind", requires:'minion(C).is-female' },
 { name:"Skins-A-Deer" },
 { name:"Slap-Her-Ass", adjustments:['masochist.2','anal-slut'], requires:'minion(C).is-female' },
 { name:"Sleeps-All-Day", adjustments:['passive']},
 { name:"Slim-Pickins" },
 { name:"Slips-Through-Fingers" },
 { name:"Smells-Like-Shit", adjustments:['golden.2','revolting.3'], requires:'minion(C).is-male' },
 { name:"Smiles-With-Knife", adjustments:['violent']},
 { name:"Smokes-A-Pipe", adjustments:['passive.3']},
 { name:"Smokes-The-Weeds", adjustments:['passive.3']},
 { name:"Smooth-As-Wind", adjustments:['passive.2']},
 { name:"Sneaks-Across-A-Wall" },
 { name:"So-And-So" },
 { name:"Solves-The-Riddle", adjustments:['smart']},
 { name:"Sorry-He's-Here", adjustments:['ugly','weak','stupid'], requires:'minion(C).is-male' },
 { name:"Speaks-In-Riddles", adjustments:['smart']},
 { name:"Speaks-In-Whispers", adjustments:['smart']},
 { name:"Speaks-To-The-Fire", adjustments:['smart','magical']},
 { name:"Speaks-With-Her-Sword", adjustments:['violent.2'], requires:'minion(C).is-female' },
 { name:"Speaks-With-Leaves", adjustments:['passive.3']},
 { name:"Spreads-Her-Legs", adjustments:['pussy-slut.3','breeder.3'], requires:'minion(C).is-female' },
 { name:"Stands-Alone" },
 { name:"Stands-At-The-Edge" },
 { name:"Stands-In-Silence" },
 { name:"Stands-In-Still-Water", adjustments:['passive.2']},
 { name:"Stands-In-The-River" },
 { name:"Stands-On-A-Rock" },
 { name:"Starts-A-Fire" },
 { name:"Steals-A-Goat" },
 { name:"Steals-A-Jewel" },
 { name:"Steals-An-Egg" },
 { name:"Steps-On-A-Trap", adjustments:['stupid']},
 { name:"Steps-On-Tails", adjustments:['stupid']},
 { name:"Strange-Doings", adjustments:['perverted.2']},
 { name:"Strikes-True", adjustments:['strong']},
 { name:"Strives-For-Power" },
 { name:"Studies-In-The-Dark", adjustments:['smart']},
 { name:"Studies-The-Secrets", adjustments:['smart']},
 { name:"Studies-Under-A-Tree", adjustments:['smart']},
 { name:"Stupid-Name-That-Takes-Too-Long-To-Say" },
 { name:"Sun-In-Shadow" },
 { name:"Swims-Across-A-River" },
 { name:"Swims-At-Night" },
 { name:"Swims-In-The-Deep" },
 { name:"Swims-In-The-Sky", adjustments:['passive','magical']},
 { name:"Swings-A-Sword", adjustments:['violent']},
 { name:"Takes-A-Rabbit" },
 { name:"Takes-Her-Time", adjustments:['passive'], requires:'minion(C).is-female' },
 { name:"Takes-In-Light", adjustments:['passive']},
 { name:"Takes-The-Shot" },
 { name:"Talks-To-Himself", requires:'minion(C).is-male' },
 { name:"Talks-To-Shadows" },
 { name:"Talks-To-Trees", adjustments:['passive']},
 { name:"Talks-Too-Much" },
 { name:"Tames-A-Fox", adjustments:['passive']},
 { name:"Tans-A-Hide" },
 { name:"Tastes-Like-Honey", adjustments:['pussy-slut.2','oral-lover.3'], requires:'minion(C).has-pussy' },
 { name:"Teaches-The-Stars", adjustments:['smart']},
 { name:"Teeth-Like-Stars" },
 { name:"Tells-A-Story", adjustments:['smart']},
 { name:"Tells-The-Future", adjustments:['smart','magical']},
 { name:"The-Color-Of-A-Dream", adjustments:['passive.2'], requires:'minion(C).is-female' },
 { name:"The-Glitter-Of-Gold" },
 { name:"The-Ugly-One", adjustments:['ugly']},
 { name:"Thinks-Like-A-Knife", adjustments:['smart']},
 { name:"Thinks-Of-Traps", adjustments:['violent','smart']},
 { name:"Thoughts-Of-The-Wind", adjustments:['passive','smart']},
 { name:"Through-The-Fire-And-The-Flames", adjustments:['violent','magical']},
 { name:"Throws-A-Rock", adjustments:['violent']},
 { name:"Thrusts-A-Spear", adjustments:['violent']},
 { name:"Ties-A-Knot", adjustments:['dominant.3']},
 { name:"Tight-Like-Tiger", adjustments:['anal-slut','strong'], requires:'minion(C).is-male' },
 { name:"Too-Small", adjustments:['short','weak'], requires:'minion(C).is-female' },
 { name:"Tricks-A-Man" },
 { name:"Trips-Over-Dirt", adjustments:['stupid']},
 { name:"Unlocks-A-Door" },
 { name:"Waits-For-Spring", adjustments:['passive.2']},
 { name:"Walks-In-Rain" },
 { name:"Walks-In-Shadow" },
 { name:"Walks-In-The-Deep", adjustments:['passive']},
 { name:"Walks-In-The-Forest", adjustments:['passive']},
 { name:"Walks-On-A-Cloud", adjustments:['passive.2','magical']},
 { name:"Walks-On-Thin-Ice" },
 { name:"Walks-On-Water", adjustments:['magical']},
 { name:"Walks-Through-Fog", adjustments:['passive']},
 { name:"Wants-A-Pony", adjustments:['beast-lover.3'], requires:'minion(C).is-female' },
 { name:"Watches-From-Afar" },
 { name:"Watches-From-The-Dark" },
 { name:"Watches-The-Cave" },
 { name:"Watches-The-Flames", adjustments:['passive']},
 { name:"Watches-The-Stars", adjustments:['passive','smart']},
 { name:"Waves-In-The-Water", adjustments:['passive.2']},
 { name:"Weaves-A-Basket", adjustments:['passive']},
 { name:"Whats-Her-Face", requires:'minion(C).is-female' },
 { name:"Whats-His-Face", requires:'minion(C).is-male' },
 { name:"Wind-On-Her-Scales", adjustments:['passive','beautiful'], requires:'minion(C).is-female' },
 { name:"Writes-On-Walls" },
];

postal.subscribe({ channel:"database", topic:"load.Name", callback:() => {
  each(names, (name)=>{
    Name.add(name, { species:'kobold' });
  });
}});
