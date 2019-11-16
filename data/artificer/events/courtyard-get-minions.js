Event.build('courtyard-get-minions', {
  location: 'courtyard',
  background: '../../resources/backgrounds/bg-courtyard-ruined-night.png',
  darkenBackground: 80,

  stages:[{
    pages: [
      { text:"I bolt upright with a startled gasp." },
      { text:"I can't say exactly how long I was out for, but it looks like the dead of night now." },
      { text:"Something woke me up." },
      { text:"Something near by..." },
      { text:"I let off a flash of bright light that illuminates the entire courtyard in a harsh white glare.", darkenBackground:0 },
      { text:"I'm surrounded by small, rat-like creatures." },
      { text:"Well, surrounded is not quite the right word..." },
      { text:"The rats cower away from me, clearly terrified that I might incinerate or otherwise magically assault them in some way." },
      { text:"They have a fairly humanoid shape, though their faces remain very rat-like, with short muzzles and twitching whiskers." },
      { text:describeRats() },
      { text:`The boldest of these rats crawls towards me.` },
      { minionSpeaker:'Rat', text:`<span class='minion-quote'>"No! No! Don't kill! Please."</span>` },
      { minionSpeaker:'Rat', text:`<span class='minion-quote'>"We serve you. Yes, will be yours."</span>` },
      { minionSpeaker:'Rat', text:`<span class='minion-quote'>"Steal for you. Bring you meats."</span>` },
      { text:`I slowly lower my hands and allow the light enveloping them to fade once again.` },
      { text:`They seem harmless enough, and certainly more welcoming than the creatures that chased me here.` },
      { text:`I take a moment to consider their offer...` },
      { text:`Given my situation having some minions, even ones as meager as these, would be useful.` },
      { text:`...at least until I get a better grasp on this land.` },
      { text:`I'll establish a foothold first then decide what to do from there.` },
      { text:`I nod to the rats gathered around me.` },
      { playerSpeaker:true, text:`<span class='player-quote'>"Very well, if that's what you want..."</span>` },
      { text:`And, just like that, I find myself with both minions and place to live.` },
    ]}
  ],

  onFinish: async choices => {
    await Flag.set('locationMenu.minions','unlocked');
    await EventQueue.enqueueEvent('courtyard-walk-on-walls');
    await AvailableMission.addAll([
      { code:'mission.explore-hinterlands' },
      { code:'mission.gather-stone' },
      { code:'mission.gather-timber' },
    ]);
  }
});

function describeRats() {
  return `${Configuration.metric ? "They're a little over a meter tall or so," :
                                   "They range from about three to four feet tall,"}
  and their bodies are covered in thick brown or black fur and wear clothing made from various animal hides.`
}
