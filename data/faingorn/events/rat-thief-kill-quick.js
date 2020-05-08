Event.build('rat-thief-kill-quick', {

  actors: {
    C: 'flag=character.rat-thief',
    R: 'flag=character.first-scaven',
  },

  stages:[{
    pages:[
      { text:`No. There's no need to draw this out. I put my hands around {{his}} neck and squeeze, strangling {{him}}
          before {{he}} ever gets a chance to wake back up.` },
      { text:`I hold {{him}} like that for a long while, then once I'm sure {{he}}'s well and truly dead and {{his}}
          heart has stopped beating I throw the corpse over my shoulder and head down into the cellars.` },
      { text:`The rats must be entering from down here. Perhaps they'll think twice about entering {{game|keepName}} if
          they have to walk by {{his}} body to do so.` },
      { text:`I've noticed metal hooks, inset into the walls here and there throughout the cellars. I'm not really sure
          what use they served in the past, but they look like they'd make fine meat hooks. I find two hooks neat the
          cellar stairs and hang the body between them, hooking them into the flesh between the bones of {{his}}
          wrists.` },
      { text:`I order for this to work as a warning though I need to get dramatic.` },
      { text:`I strip off {{his}} clothes first, reveling {{his}} small, malnourished frame. Then, like I was field
          dressing an animal, I slice into {{his}} gut with that old skinning knife.` },
      { text:`The knife is dull and rusty, making my cuts look rushed and savage. All the better I suppose.` },
      { text:`Once I have {{him}} opened up I begin to gut {{him}}, pulling out {{his}} insides and scattering them
          around the room, and really trying to make as big of a mess out of {{him}} as possible. It's rather amazing
          how much surface area you can cover with a single corpse if you're really trying.` },
      { text:`I leave {{his}} face intact though. I want them to know who this was.` },
      { text:`Finally, now that blood and guts are strewn about on every conceivable surface I return upstairs. As I
          reach the stairs though I think I hear the soft sound of small quiet feet running away.` },
      { text:`{{R::character.firstName}} was probably watching. Well, that's fine. {{He}} should understand too what
          happens to those who cross me.` },
    ]
  }],

  onFinish: async choices => {
    Flag.set('character.rat-thief',null);

    const rat = await Character.lookup(choices.event.actorIDs.C);
    await rat.completelyRemove();
  },

});
