Event.build('game-start-2', {
  background:{ code:'field' },

  stages:[{
    pages: [
      { text:"I open my eyes for the first time." },
      { text:"It's unbearably bright." },
      { text:"And loud." },
      { text:"It's loud because I'm screaming." },
      { text:"I stop screaming and stagger to my feet, blinking rapidly as my new eyes adjust to the light." },
      { text:"Where the hell am I?" },
      { text:"It's no place that I recognize." },
      { text:"Of course I don't think I could recognize any place right now." },
      { text:"I shake my head." },
      { text:"Thinking." },
      { text:"But no." },
      { text:"I can't remember anything." },
      { text:"All I have is a name." },
      { text:"My Name" },
      { text:"{{P::character.firstName}} {{P::character.lastName}}" },
      { text:"That's not a lot to go on, but it's a start at least." },
      { text:"I shiver and wrap my arms around myself." },
      { text:"This land is bleak and bitterly cold." },
      { text:"A few sparse looking trees dot the landscape." },
      { text:"Brown leaves mark the season as sometime in the late fall I think." },
      { text:"That or everything is just dying." },
      { text:"Another shiver runs through me and I look down at my newly formed body." },
      { text:"It's close to what I had in mind." },
      { text:"Given the weather I'm glad I choose something with fur.", requires:"player.furry" },
      { text:"Given the weather I wish I had choosen something with fur.", requires:"player.not-furry" },
    ]
  },{
    requires:['player.has-tits','player.tits.smaller-than-average'],
    pages: [
      { text:"Looking down I see that my new body has small, perfectly formed tits." },
      { text:"The cool autumn breeze blowing over my bare chest though has made my nipples hard enough to cut glass." },
    ]
  },{
    requires:['player.has-tits','player.tits.average'],
    pages: [
      { text:"Looking down I see that my new body has reasonably sized breasts." },
      { text:"Not too large, not too small..." },
      { text:"Just perfectly sized to hold in your hands." },
      { text:"The cool autumn breeze blowing over my bare chest though has made my nipples hard enough to cut glass." },
    ]
  },{
    requires:['player.has-tits','player.tits.bigger-than-average'],
    pages: [
      { text:"Looking down I see that my new body has impressivly large breasts." },
      { text:"I give a little shake and smile at the way the jiggle." },
      { text:"The cool autumn breeze blowing over my bare chest though has made my nipples hard enough to cut glass." },
    ]
  },{
    requires:'player.has-cock',
    pages: [
      { text:"I reach down and take a hold of my cock, feeling it's heft." },
      { text:"It's a good dick, shrunken a bit though now in the cold autumn air." },
    ]
  },{
    requires:['player.no-cock','player.no-tits'],
    pages: [
      { text:"I look down at my slender, androgynous body." },
      { text:"My chest is slightly muscular and completely flat." },
      { text:"My fingers trail down between my legs to find the tiny slit of my pussy." },
      { text:"Just to make sure everything was formed as I had intended." },
      { text:"I shudder slightly when I find my clit." },
      { text:"Yes, everything seems to be in order." },
    ]
  },{
    pages: [
      { text:"I need to find shelter soon though, unless I want this lovely new body of mine to freeze to death." },
      { text:"I turn around slowly, taking in the entire landscape around me.", background:{ code:'keep-in-distance' }},
      { text:"In the close distance, maybe a mile or so away, a forlorn looking keep sits atop a rocky looking hill." },
      { text:"I see movement too." },
      { text:"Figures off in the distance..." },
      { text:"They're running." },
      { text:"They're running towards me." },
      { text:"Oh shit." },
      { text:"I don't know who they are, but I start running too, and it looks like the keep is my only option." },
      { text:"I see one of my pursuers off to the left." },
      { text:"Even from this distance I can see that its gait is wrong." },
      { text:"It's impossibly fast for something that ought to either be running on two or four legs but is using three." },
      { text:"It's a misshapen thing, twisted and asymmetrical with too many teeth and horns and claws and too little skin, as though it had forgotten that bone and muscle should have something covering it." },
      { text:"It leaves a trail of blood as it runs, and with every movement it seems to injure itself further." },
      { text:"It doesn't seem to mind though." },
      { text:"Either it doesn't feel the pain or the pain is what drives it." },
      { text:"All this I know at a glance." },
      { text:"That this is a creature of rage and pain and that the only thing it longs for is murder." },
      { text:"I sprint as fast as I'm able, but I can already tell that I'm not going to make it." },
      { text:"It's behind me now." },
      { text:"I can hear its wet sticky footfalls getting closer." },
      { text:"In a split decision I turn on it, determined to go down fighting, wondering what kind of body I should make for myself next time." },
      { text:"As it charges it opens it's maw impossibly wide, tearing it's own flesh in the process, seemingly intent on swallowing me whole." },
      { text:"Just before the charging creature crashes into me though I throw my arms out." },
      { text:"A wave of concussive force hits it, tossing it away from me." },
      { text:"Instinctively I follow that up with a quick horizontal slash, severing it's legs at the knees with nothing but a blade of compressed air." },
      { text:"It lands on it's back, kicking and vomiting bile." },
      { text:"The concussive blast was enough to burst its guts, its entrails tangling loosely around its remaining limbs as it thrashes wildly." },
      { text:"I look down at my hands in wonder." },
      { text:"Holy Shit." },
      { text:"I'm a wizard?" },
      { text:"I feel faint though." },
      { text:"Whatever it was I just did took far more effort than simply running." },
      { text:"And there are more of them coming." },
      { text:"Again I take off running towards the keep, trying to come up with some manner of strategy." },
      { text:"If I stop I'll die." },
      { text:"They'll overwhelm me." },
      { text:"I might be able to kill another." },
      { text:"If I do though, I'll probably pass out." },
      { text:"If that happens I'll die." },
      { text:"Getting inside of that fortress is the only option I can see." },
      { text:"It's getting closer." },
      { text:"It looks abandoned." },
      { text:"The roof of its single central tower has collapsed, but the door looks intact." },
      { text:"It also looks closed." },
      { text:"Shit." },
      { text:"I need a way inside." },
      { text:"The two other abominations are getting closer." },
      { text:"How the fuck are they able to run this fast?" },
      { text:"An idea comes to me, as through from a half remembered dream." },
      { text:"With a defiant scream I jump raising my arms and willing myself into the air." },
      { text:"And suddenly I'm flying." },
      { text:"I hear their gurgling roars growing distant under me, and the high walls of the keep are suddenly a lot closer." },
      { text:"I throw everything I have into it, pushing myself up above the walls by shear force of will." },
      { text:"I can feel the thread of consciousness slipping away though." },
      { text:"I can see the keep's courtyard below." },
      { text:"Well, at least I won't be awake when I land." },
      { text:"...", darkenBackground:50 },
      { text:"..", darkenBackground:75 },
      { text:".", darkenBackground:100 },
    ]
  },{
    formPage: 'splash-screen'
  }]
});
