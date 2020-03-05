let names = [
  { name:"Aadon" },
  { name:"Abalam" },
  { name:"Abel" },
  { name:"Abelard" },
  { name:"Abezethibou" },
  { name:"Abraxas" },
  { name:"Abyzou" },
  { name:"Acheron" },
  { name:"Ackartorrak" },
  { name:"Addison" },
  { name:"Adonis" },
  { name:"Adramelech" },
  { name:"Aegipan" },
  { name:"Ægyptus" },
  { name:"Ælfred" },
  { name:"Aeon" },
  { name:"Aeshma" },
  { name:"Æthelred" },
  { name:"Æther" },
  { name:"Agaliarept" },
  { name:"Agalloch" },
  { name:"Agamax" },
  { name:"Agares" },
  { name:"Aggramar" },
  { name:"Agiel" },
  { name:"Agrat" },
  { name:"Ahmen" },
  { name:"Ahriman" },
  { name:"Aidan" },
  { name:"Aithon" },
  { name:"Akakos" },
  { name:"Alastair" },
  { name:"Alastor" },
  { name:"Albin" },
  { name:"Albrecht" },
  { name:"Aldebrand" },
  { name:"Aldhelm" },
  { name:"Aldred" },
  { name:"Alegorn" },
  { name:"Alenndaar" },
  { name:"Alistair" },
  { name:"Alligator", triggers:['ugly','strong']},
  { name:"Alloces" },
  { name:"Alrik" },
  { name:"Altair" },
  { name:"Altairus" },
  { name:"Amaymon" },
  { name:"Amdusias" },
  { name:"Ampelos" },
  { name:"Anamalech" },
  { name:"Andras" },
  { name:"Andrealphus" },
  { name:"Andromalius" },
  { name:"Andrus" },
  { name:"Angband" },
  { name:"Angus", aspects:['beast-lover'], triggers:['red-hair']},
  { name:"Apollyon" },
  { name:"Apotheosis", triggers:['strong','smart','beautiful','magical']},
  { name:"Aran" },
  { name:"Archimonde" },
  { name:"Ardan" },
  { name:"Argo" },
  { name:"Argos" },
  { name:"Arlang" },
  { name:"Armand" },
  { name:"Armaros" },
  { name:"Armondo" },
  { name:"Arnald" },
  { name:"Arnott" },
  { name:"Arshavir" },
  { name:"Asakku" },
  { name:"Ash" },
  { name:"Ashmet" },
  { name:"Asterion" },
  { name:"Astigar" },
  { name:"Athramanis" },
  { name:"Athridas" },
  { name:"Atlas" },
  { name:"Augustine" },
  { name:"Aylmer" },
  { name:"Bacchus" },
  { name:"Badger" },
  { name:"Bael" },
  { name:"Bæl" },
  { name:"Baelog" },
  { name:"Baldric" },
  { name:"Balgor" },
  { name:"Balnazzar" },
  { name:"Balren" },
  { name:"Baltasar" },
  { name:"Balthule" },
  { name:"Barbas " },
  { name:"Barbatos" },
  { name:"Bardolf" },
  { name:"Baron" },
  { name:"Bartholomew" },
  { name:"Basil" },
  { name:"Bastian" },
  { name:"Bathym" },
  { name:"Bayard" },
  { name:"Bazil" },
  { name:"Beleth" },
  { name:"Belias" },
  { name:"Benedict" },
  { name:"Beneger" },
  { name:"Beowülf" },
  { name:"Berg" },
  { name:"Berith" },
  { name:"Bernard" },
  { name:"Bertram" },
  { name:"Bertrand" },
  { name:"Bethan" },
  { name:"Blackcock", triggers:['dark-skin','monster-cock']},
  { name:"Blackmore" },
  { name:"Blavier" },
  { name:"Bogdashka" },
  { name:"Borgosh" },
  { name:"Boris" },
  { name:"Bormos" },
  { name:"Bran" },
  { name:"Brangwine" },
  { name:"Brannock" },
  { name:"Brannol" },
  { name:"Briallan" },
  { name:"Brilliant", triggers:['smart']},
  { name:"Brontes" },
  { name:"Bryce" },
  { name:"Bulldog" },
  { name:"Bulrug" },
  { name:"Byrtwold" },
  { name:"Cædmon" },
  { name:"Cædmos" },
  { name:"Caelyb" },
  { name:"Caelyb" },
  { name:"Cælyb" },
  { name:"Caerbannog", aspects:['violent.3']},
  { name:"Caim" },
  { name:"Cain" },
  { name:"Cameron" },
  { name:"Canio" },
  { name:"Cantwalk", triggers:['monster-cock','monster-balls']},
  { name:"Caraway" },
  { name:"Carnivean" },
  { name:"Carreau" },
  { name:"Cassius" },
  { name:"Cassowary" },
  { name:"Cenarius" },
  { name:"Cerberus", triggers:['dog-cock','multi-cock']},
  { name:"Cerdic" },
  { name:"Cerellean" },
  { name:"Chaos", triggers:['magical']},
  { name:"Chernobog" },
  { name:"Christofen" },
  { name:"Cilantro" },
  { name:"Cimeies" },
  { name:"Cinder" },
  { name:"Cloud" },
  { name:"Corand" },
  { name:"Corbin" },
  { name:"Cormorant" },
  { name:"Cornell" },
  { name:"Corvine" },
  { name:"Cotter" },
  { name:"Coyote", triggers:['dog-cock']},
  { name:"Crag" },
  { name:"Craig" },
  { name:"Crimson", triggers:['red-hair']},
  { name:"Crocell" },
  { name:"Cromush" },
  { name:"Cummings", triggers:['big-balls']},
  { name:"Curlew" },
  { name:"Cuthbert" },
  { name:"Cyprian" },
  { name:"Cyriac" },
  { name:"Cyridan" },
  { name:"Cyrus" },
  { name:"Dædal" },
  { name:"Dafydd" },
  { name:"Dagen" },
  { name:"Dagon" },
  { name:"Daimbert" },
  { name:"Dalmas" },
  { name:"Dalmond" },
  { name:"Damaris" },
  { name:"Damian" },
  { name:"Dantalion" },
  { name:"Danyell" },
  { name:"Darald" },
  { name:"Darildack" },
  { name:"Darius" },
  { name:"Daros" },
  { name:"Davyd" },
  { name:"Dawson" },
  { name:"Deitrich" },
  { name:"Dem" },
  { name:"Denatharion" },
  { name:"Denston" },
  { name:"Derwin" },
  { name:"Deryk" },
  { name:"Destin" },
  { name:"Devlin" },
  { name:"Devlyn" },
  { name:"Diddy" },
  { name:"Diego" },
  { name:"Dimitri" },
  { name:"Dominus" },
  { name:"Donger", triggers:['big-cock']},
  { name:"Donner" },
  { name:"Drake" },
  { name:"Dramorgo" },
  { name:"Drew" },
  { name:"Dropkick" },
  { name:"Drum" },
  { name:"Drystan" },
  { name:"Drystan" },
  { name:"Dungo" },
  { name:"Dwyvaer" },
  { name:"Eadbert" },
  { name:"Ealdwine" },
  { name:"Edmund" },
  { name:"Edric" },
  { name:"Edris" },
  { name:"Edwyn" },
  { name:"Eldred" },
  { name:"Eleazar" },
  { name:"Emanuel" },
  { name:"Emerick" },
  { name:"Endolar" },
  { name:"Erasmus" },
  { name:"Erik" },
  { name:"Ethelbert" },
  { name:"Ethelred" },
  { name:"Ewan" },
  { name:"Fahlestad" },
  { name:"Faldron" },
  { name:"Falfindel" },
  { name:"Faralorn" },
  { name:"Fawkes" },
  { name:"Felros" },
  { name:"Fennel" },
  { name:"Feyden" },
  { name:"Finch" },
  { name:"Fister", aspects:['stretcher.3']},
  { name:"Flambard" },
  { name:"Flame" },
  { name:"Flamingo" },
  { name:"Flotsam" },
  { name:"Forneus" },
  { name:"Forthwith", triggers:['smart']},
  { name:"Fox", triggers:['dog-cock']},
  { name:"Francis" },
  { name:"Francisco" },
  { name:"Francolin" },
  { name:"Fredek" },
  { name:"Frederick" },
  { name:"Frederyk" },
  { name:"Fulke" },
  { name:"Furcas" },
  { name:"Furl" },
  { name:"Gaerwn" },
  { name:"Galangal" },
  { name:"Galfrid" },
  { name:"Galgar" },
  { name:"Gandalf" },
  { name:"Ganelon" },
  { name:"Gared" },
  { name:"Gareth" },
  { name:"Gargoth" },
  { name:"Gari" },
  { name:"Gary" },
  { name:"Gator" },
  { name:"Gauwyn" },
  { name:"Gay", aspects:['androphilic.2','gynephobic.2']},
  { name:"Gaywin" },
  { name:"Gelbin" },
  { name:"Gembert" },
  { name:"Geobaldi" },
  { name:"Geoffrey" },
  { name:"Gerald" },
  { name:"Gerbold" },
  { name:"Gerhardt" },
  { name:"Gerland" },
  { name:"Giuseppe" },
  { name:"Gnarl" },
  { name:"Goddard" },
  { name:"Godebert" },
  { name:"Godfrey" },
  { name:"Godric" },
  { name:"Golothas" },
  { name:"Goshawk" },
  { name:"Greg" },
  { name:"Gregory" },
  { name:"Gremory" },
  { name:"Gressil" },
  { name:"Griffin" },
  { name:"Griffith" },
  { name:"Grim" },
  { name:"Grimbald" },
  { name:"Grimbold" },
  { name:"Grond" },
  { name:"Grondal" },
  { name:"Gryffen" },
  { name:"Guston" },
  { name:"Gwayne" },
  { name:"Gylbart" },
  { name:"Gyles" },
  { name:"Haagenti" },
  { name:"Haborym" },
  { name:"Habreham" },
  { name:"Hadrian" },
  { name:"Hadriel" },
  { name:"Haimirich" },
  { name:"Halphas" },
  { name:"Halstein" },
  { name:"Halvard" },
  { name:"Hammer", triggers:['strong','big-cock']},
  { name:"Hamon" },
  { name:"Hannibal" },
  { name:"Hans" },
  { name:"Haris" },
  { name:"Haures" },
  { name:"Heinlein" },
  { name:"Heron" },
  { name:"Hesperos" },
  { name:"Hewrey" },
  { name:"Hieronymus" },
  { name:"Honest" },
  { name:"Hotspur", triggers:['red-hair']},
  { name:"Ibanion" },
  { name:"Ibium" },
  { name:"Ignatius" },
  { name:"Inferno", triggers:['magical']},
  { name:"Infernum" },
  { name:"Ingham" },
  { name:"Ingram" },
  { name:"Inigo" },
  { name:"Isengard" },
  { name:"Isleton" },
  { name:"Ivan" },
  { name:"Ivar" },
  { name:"Javad" },
  { name:"Jeger" },
  { name:"Jethro" },
  { name:"Jetsam" },
  { name:"Johannes" },
  { name:"Johnny" },
  { name:"Jonathas" },
  { name:"Joseph" },
  { name:"Josias" },
  { name:"Joyce" },
  { name:"Juggernaut", triggers:['strong','monster-cock']},
  { name:"Kaerbrus" },
  { name:"Kahn" },
  { name:"Kain" },
  { name:"Kal" },
  { name:"Kalarin" },
  { name:"Kalen" },
  { name:"Kalum" },
  { name:"Kato" },
  { name:"Keldamyr" },
  { name:"Kennard" },
  { name:"Kenric" },
  { name:"Kenrick" },
  { name:"Korbin" },
  { name:"Kore" },
  { name:"Krampus" },
  { name:"Kranos" },
  { name:"Krump" },
  { name:"Krumpus" },
  { name:"Kuma" },
  { name:"Kurtz" },
  { name:"Labolas" },
  { name:"Ladislas" },
  { name:"Lambert" },
  { name:"Larry" },
  { name:"Lars" },
  { name:"Laurence" },
  { name:"Leavold" },
  { name:"Leeroy" },
  { name:"Lefwyne" },
  { name:"Lennard" },
  { name:"Lenny" },
  { name:"Leonardo" },
  { name:"Leopold" },
  { name:"Lloyd" },
  { name:"Lodwicke" },
  { name:"Long", triggers:['big-cock']},
  { name:"Longshanks", triggers:['tall']},
  { name:"Lowell" },
  { name:"Luvart" },
  { name:"Lyros" },
  { name:"Mace" },
  { name:"Machette", triggers:['strong','ugly']},
  { name:"Mad" },
  { name:"Maddog", triggers:['dog-cock']},
  { name:"Maim" },
  { name:"Malfurion", triggers:['magical']},
  { name:"Malin" },
  { name:"Mallentus" },
  { name:"Malorne" },
  { name:"Maluressian" },
  { name:"Malygen" },
  { name:"Mandindo", triggers:['dark-skin','monster-cock']},
  { name:"Mansel" },
  { name:"Marbas" },
  { name:"Mardant" },
  { name:"Mardrack" },
  { name:"Margry" },
  { name:"Marilyn" },
  { name:"Marius" },
  { name:"Marthim " },
  { name:"Mastodon" },
  { name:"Mathieu" },
  { name:"Melandrus" },
  { name:"Melarith" },
  { name:"Meledor" },
  { name:"Melithar" },
  { name:"Memphis" },
  { name:"Merihem" },
  { name:"Mirvedon" },
  { name:"Morgant" },
  { name:"Morpheus" },
  { name:"Morys" },
  { name:"Mudungus" },
  { name:"Mulligin" },
  { name:"Munroe" },
  { name:"Munstrum" },
  { name:"Murdok" },
  { name:"Murmur" },
  { name:"Mustang", triggers:['horse-cock']},
  { name:"Myles" },
  { name:"Myrkgrav" },
  { name:"Myrkskog" },
  { name:"Naberius" },
  { name:"Nantar" },
  { name:"Naron" },
  { name:"Nathaniel" },
  { name:"Natheril" },
  { name:"Nazgrim" },
  { name:"Nefastus" },
  { name:"Nero" },
  { name:"Oben" },
  { name:"Obsidius" },
  { name:"Œthelwald" },
  { name:"Ogmund" },
  { name:"Olaf" },
  { name:"Olyver" },
  { name:"Onu" },
  { name:"Orion" },
  { name:"Orrick" },
  { name:"Orris" },
  { name:"Orwen" },
  { name:"Osric" },
  { name:"Oswyn" },
  { name:"Outlaw" },
  { name:"Owyne" },
  { name:"Pádraigín" },
  { name:"Parnell" },
  { name:"Patrick" },
  { name:"Percival" },
  { name:"Perrin" },
  { name:"Perseus" },
  { name:"Philippe" },
  { name:"Phteven" },
  { name:"Piers" },
  { name:"Ponder" },
  { name:"Powle" },
  { name:"Quentin" },
  { name:"Radcliffe" },
  { name:"Radolf" },
  { name:"Raffe" },
  { name:"Ragnar" },
  { name:"Ragnarok" },
  { name:"Ralen" },
  { name:"Randall" },
  { name:"Randwulf" },
  { name:"Raphael" },
  { name:"Raphæl" },
  { name:"Rauffe" },
  { name:"Raulin" },
  { name:"Ravan" },
  { name:"Raven" },
  { name:"Reaver" },
  { name:"Redwald" },
  { name:"Reeme" },
  { name:"Reeve" },
  { name:"Reginald" },
  { name:"Reinholdt" },
  { name:"Rembar" },
  { name:"Remus" },
  { name:"Rendow" },
  { name:"René" },
  { name:"Renfeld" },
  { name:"Renfrew" },
  { name:"Reynard" },
  { name:"Reyner" },
  { name:"Reynfred" },
  { name:"Rhapsody" },
  { name:"Rhydderch" },
  { name:"Rickeman" },
  { name:"Ridel" },
  { name:"Robyn" },
  { name:"Rocco", triggers:['big-cock']},
  { name:"Rodrigo" },
  { name:"Rolfe" },
  { name:"Rommath" },
  { name:"Roundelph" },
  { name:"Rowland" },
  { name:"Ryosh" },
  { name:"Salaran" },
  { name:"Salustred" },
  { name:"Salvador" },
  { name:"Salvin" },
  { name:"Samson" },
  { name:"Santiago" },
  { name:"Saren" },
  { name:"Sarin" },
  { name:"Sarlic" },
  { name:"Sarophas" },
  { name:"Satyros" },
  { name:"Saurfang" },
  { name:"Savage" },
  { name:"Scorp" },
  { name:"Scorpio" },
  { name:"Scur" },
  { name:"Sebastian" },
  { name:"Seere" },
  { name:"Selwyn" },
  { name:"Seraphim" },
  { name:"Serian" },
  { name:"Seth" },
  { name:"Séverin" },
  { name:"Severus" },
  { name:"Sevrin" },
  { name:"Seymour" },
  { name:"Shando" },
  { name:"Shindrell" },
  { name:"Siebenbürgen" },
  { name:"Sigfried" },
  { name:"Sighard" },
  { name:"Sigmund" },
  { name:"Siguard" },
  { name:"Silver", triggers:['white-hair']},
  { name:"Simond" },
  { name:"Singleton" },
  { name:"Sinthar" },
  { name:"Sirius" },
  { name:"Sisyphos" },
  { name:"Smoke" },
  { name:"Solanar" },
  { name:"Sólstafir" },
  { name:"Sonneillon" },
  { name:"Spider" },
  { name:"Stallion", triggers:['horse-cock']},
  { name:"Stanislov" },
  { name:"Steeleye" },
  { name:"Steinthor" },
  { name:"Stolas" },
  { name:"Strang" },
  { name:"Sweeney" },
  { name:"Symond" },
  { name:"Taladan" },
  { name:"Taldan" },
  { name:"Taldar" },
  { name:"Talen" },
  { name:"Tallisin" },
  { name:"Talmar" },
  { name:"Tam" },
  { name:"Tamlin" },
  { name:"Tamlyn" },
  { name:"Tannin" },
  { name:"Taran" },
  { name:"Tarantula" },
  { name:"Tavish" },
  { name:"Tearlach" },
  { name:"Thammuz" },
  { name:"Thanatos" },
  { name:"Thaniel" },
  { name:"Thrydwulf" },
  { name:"Thyrfing" },
  { name:"Tobin" },
  { name:"Todger", triggers:['big-cock']},
  { name:"Torian" },
  { name:"Torin" },
  { name:"Trafyer" },
  { name:"Tragopan" },
  { name:"Tristan" },
  { name:"Turstin" },
  { name:"Ukobach" },
  { name:"Ulric" },
  { name:"Ulthir" },
  { name:"Valac" },
  { name:"Valdurian" },
  { name:"Valefar" },
  { name:"Valen" },
  { name:"Valentyne" },
  { name:"Vandrad" },
  { name:"Vannes" },
  { name:"Varas" },
  { name:"Varin" },
  { name:"Vector" },
  { name:"Ven" },
  { name:"Venom" },
  { name:"Viccer" },
  { name:"Viktor" },
  { name:"Volde" },
  { name:"Voyce" },
  { name:"Vyncent" },
  { name:"Wadard" },
  { name:"Warden" },
  { name:"Warhorse", aspects:['violent.1'], triggers:['horse-cock']},
  { name:"Warian" },
  { name:"Warin" },
  { name:"Warlock", triggers:['magical']},
  { name:"Warren" },
  { name:"Wauter" },
  { name:"Weasel" },
  { name:"Werner" },
  { name:"Wilfrid" },
  { name:"Wilham" },
  { name:"Willielmus" },
  { name:"Wineburg" },
  { name:"Witley" },
  { name:"Wolf", triggers:['dog-cock']},
  { name:"Wolfgang" },
  { name:"Wolfstan" },
  { name:"Wolgemut" },
  { name:"Wooster" },
  { name:"Wormwood" },
  { name:"Wrathchild" },
  { name:"Wyatt" },
  { name:"Wymon" },
  { name:"Wymond" },
  { name:"Wystan" },
  { name:"Xanth" },
  { name:"Xanthus" },
  { name:"Xenu" },
  { name:"Yanni" },
  { name:"Yngvar" },
  { name:"Yngwie" },
  { name:"Zalgo" },
  { name:"Zarek" },
  { name:"Zen", aspects:['passive.3']},
  { name:"Zephyr" },
  { name:"Zerig" },
];

each(names, (name)=>{
  Name.add(name, { species:'elf', position:'first', restriction:'male' });
});
