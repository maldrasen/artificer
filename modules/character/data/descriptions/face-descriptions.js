
// === Hideous Faces ===================================================================================================

FaceDescription.build({ requires:['minion(C).face.hideous'],
  d: `{{C::character.firstName}} is terrifyingly ugly, with a face like a melted turd.`
});

FaceDescription.build({ requires:['minion(C).face.hideous'],
  d: `{{C::character.firstName}} is flat out ugly. Just disgusting to look at, like dog shit given a face.`
});

FaceDescription.build({ requires:['minion(C).face.hideous'],
  d: `{{C::character.firstName}} is horrendously ugly. Uglier than a bag of smashed horse assholes, with all the
      pretty ones taken out.`
});

// === Ugly Faces ======================================================================================================

FaceDescription.build({ requires:['minion(C).face.ugly'],
  d: `{{C::character.firstName}} is not at all attractive with weirdly asymmetrical facial features.`
});

FaceDescription.build({ requires:['minion(C).face.ugly'],
  d: `{{C::character.firstName}} is hopelessly unattractive with a face that looks like it was put together in the dark.`
});

FaceDescription.build({ requires:['minion(C).face.ugly'],
  d: `{{C::character.firstName}} has a face that was made for a gimp mask, or for doggy style, or really any activity
      that has {{him}} facing away from me.`
});

// Average - Masculine

FaceDescription.build({ requires:['minion(C).face.ugly','minion(C).is-male'],
  d: `{{C::character.firstName}} has a face that looks like it's been through a few fights, and {{he}}'s lost every
      single one of them.`
});

FaceDescription.build({ requires:['minion(C).face.ugly','minion(C).is-male'],
  d: `{{C::character.firstName}} has a face that looks as though it was ravaged by disease at some point. It's
      pockmarked and misshapen.`
});

FaceDescription.build({ requires:['minion(C).face.ugly','minion(C).is-male'],
  d: `{{C::character.firstName}} has a very punchable looking face. I'm not sure what it is. Every time I see {{him}}
      I feel like knocking a few of {{his}} teeth out.`
});

// Average - Feminine

FaceDescription.build({ requires:['minion(C).face.ugly','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is just flat out ugly with a weirdly misshaped head like {{he}} spent the last several
     years getting slapped in the face with a bag full of goat dicks.`
});

FaceDescription.build({ requires:['minion(C).face.ugly','minion(C).is-not-male'],
  d: `It would be difficult to describe {{C::character.firstName}} as anything but ugly. {{He}} has the sort of face
      that could only be improved by repeatedly slapping it.`
});

// === Average Faces ===================================================================================================

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.plain'],
  d: `{{C::character.firstName}} is somewhat attractive though a little plain looking.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.plain'],
  d: `{{C::character.firstName's}} face is rather nondescript but inoffensive enough.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.plain'],
  d: `{{C::character.firstName}} is rather plain looking, nondescript and inoffensive.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.plain'],
  d: `{{C::character.firstName}} could be called homely, not unattractive per se, but certainly not beautiful.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.plain'],
  d: `{{C::character.firstName}} is rather average looking. {{He}}'s not the sort of {{C::species.elf}} who would
      stand out in a crowd.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.hard'],
  d: `Years of difficult living have left {{C::character.firstName's}} face looking hard and scared.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.hard'],
  d: `{{C::character.firstName}} has a hard looking face, the kind of face that is the result of years of difficult
      living.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.hard'],
  d: `{{C::character.firstName's}} face is badle battle scared. {{He}} may have been attractive once, but years of
      fighting have left their mark.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.soft'],
  d: `{{C::character.firstName}} isn't attractive, but has a friendly and youthful looking face.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.soft'],
  d: `{{C::character.firstName}} has as face that's youthful and innocent looking, although {{he}}'s not very
      attractive.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.soft'],
  d: `{{C::character.firstName}} isn't attractive, but {{his}} large eyes give {{him}} a eager and friendly sort of
      face.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.exotic'],
  d: `{{C::character.firstName}} isn't ugly but {{his}} face is strangely shaped making it instantly recognizable.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.exotic'],
  d: `{{C::character.firstName's}} face is rather striking looking. {{He}} isn't exactly ugly but also doesn't look
      like most other {{C::species.elves}}.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.exotic'],
  d: `{{C::character.firstName}} has a bizarrely constructed face that while {{he}} isn't ugly exactly, doesn't look
      like most other {{C::species.elves}}.`
});

// Average - Masculine

FaceDescription.build({ requires:['minion(C).face.average','minion(C).is-male'],
  d: `{{C::character.firstName}} isn't handsome, but {{he}}'s not offensive to look at either.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).is-male'],
  d: `{{C::character.firstName}} doesn't have a face anyone could call handsome, but {{he}}'s not really bad looking
      either.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.plain','minion(C).is-male'],
  d: `{{C::character.firstName}} is somewhat handsome though a little plain looking.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.hard','minion(C).is-male'],
  d: `{{C::character.firstName}} couldn't be called handsome, but {{his}} face is chisled and manly looking.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.hard','minion(C).is-male'],
  d: `{{C::character.firstName}} isn't incredibly handsome, but there's a rugged charm to {{his}} face.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.soft','minion(C).is-male'],
  d: `{{C::character.firstName}} isn't handome, but at least has a friendly and boyishly innocent looking face.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.soft','minion(C).is-male'],
  d: `{{C::character.firstName}} couldn't be called handsome, but has a certain roguish charm about {{him}}.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.exotic','minion(C).is-male'],
  d: `{{C::character.firstName}} has an interesting face. {{He}}'s neither ugly nor handsome, but has unusually
      striking features that make {{his}} face an easy one to remember.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.exotic','minion(C).is-male'],
  d: `{{C::character.firstName}} is an interesting looking {{C::species.elf}}. While {{he}} couldn't really be called
      handsome, there's something about {{his}} face that's interesting and compelling.`
});

// Average - Feminine

FaceDescription.build({ requires:['minion(C).face.average','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is not unattractive, but not what anyone would consider beautiful either.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).is-not-male'],
  d: `{{C::character.firstName}} isn't beautiful, but {{he}}'s not offensive to look at either.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).is-not-male'],
  d: `I wouldn't call {{C::character.firstName}} pretty, but there's a certain charming quality to {{his}} face.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).is-not-male'],
  d: `{{C::character.firstName}} doesn't have a face anyone could call beautiful, but {{he}}'s not really bad looking
      either.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is a pretty enough {{C::species.elf}}. While not exactly beautiful, {{he}}'s
      pleasant to look at.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.hard','minion(C).is-not-male'],
  d: `{{C::character.firstName}} isn't unattractive, but years of hard living have left {{him}} with a hard and angry
      looking face.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.hard','minion(C).is-not-male'],
  d: `{{C::character.firstName}} isn't unattractive but has a savage and wild look about {{him}}.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.soft','minion(C).is-not-male'],
  d: `{{C::character.firstName}} isn't beautiful, but has a friendly and innocent looking face.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.soft','minion(C).is-not-male'],
  d: `{{C::character.firstName}} couldn't be called beautiful, but {{he}} has a certain girlish charm about {{him}}.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.exotic','minion(C).is-not-male'],
  d: `{{C::character.firstName}} has an interesting face. {{He}}'s neither ugly nor beautiful, but has unusually
      striking features that make {{his}} face an easy one to remember.`
});

FaceDescription.build({ requires:['minion(C).face.average','minion(C).face.exotic','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is an interesting looking {{C::species.elf}}. While {{he}} couldn't really be called
      beautiful, there's something about {{his}} face that's interesting and compelling.`
});

// === Pretty Faces ===

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.plain'],
  d: `{{C::character.firstName}} has a fairly attractive if rather plain sort of face.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.plain'],
  d: `{{C::character.firstName}} is a good looking {{C::species.elf}} with a symmetrical, traditionally attractive
      sort of face.`
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.hard'],
  d: `{{C::character.firstName}} has an naturally attractive and honest looking face.`
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.soft'],
  d: `{{C::character.firstName}} has an attractively youthful and sweet looking face.`
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.exotic'],
  d: `{{C::character.firstName}} has an attractively exotic face with interesting and rather striking facial features.`
});

// Pretty - Masculine

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).is-male'],
  d: `I would call {{C::character.firstName}} handsome. {{His}} face has a certain charming quality to it.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).is-male'],
  d: `{{C::character.firstName}} is a handsome {{C::species.elf}}. While not overly attractive, {{he}}'s pleasant to
      look upon at least.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.plain','minion(C).is-male'],
  d: `{{C::character.firstName}} is handsome though a little plain looking.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.plain','minion(C).is-male'],
  d: `{{C::character.firstName}} has a fairly handsome face, even if it is rather nondescript.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.hard','minion(C).is-male'],
  d: `{{C::character.firstName}} has a handsome, chisled and manly looking face.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.hard','minion(C).is-male'],
  d: `{{C::character.firstName}} has a handsome, ruggedly charming sort of face.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.soft','minion(C).is-male'],
  d: `{{C::character.firstName}} has a handsome, friendly, and boyishly innocent looking face.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.soft','minion(C).is-male'],
  d: `{{C::character.firstName}} has a handsome face with a certain roguish charm.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.exotic','minion(C).is-male'],
  d: `{{C::character.firstName}} has a handsome and interesting looking face with striking features that make {{his}}
      face an easy one to remember.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.exotic','minion(C).is-male'],
  d: `{{C::character.firstName}} is a handome and interesting looking {{C::species.elf}} with striking and strangely
      compelling facial features.`,
});

// Pretty - Feminine

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).is-not-male'],
  d: `While not exactly beautiful, {{C::character.firstName}} is certinally a pretty girl.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is a pretty {{C::species.elf}}. While not exactly beautiful, {{he}}'s pleasant to look
      upon at least.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.plain','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is pretty though a little plain looking.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.plain','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is pretty, even if {{he}} is a little plain looking.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.hard','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is pretty in a savage and wild of way.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.hard','minion(C).is-not-male'],
  d: `{{C::character.firstName}} would be beautiful, but years of hard living have left {{him}} with a hard and angry
      looking face.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.soft','minion(C).is-not-male'],
  d: `{{C::character.firstName}} has a pretty, friendly, and girlishly innocent looking face.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.soft','minion(C).is-not-male'],
  d: `{{C::character.firstName}} has a pretty, young looking, and impish sort of face.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.exotic','minion(C).is-not-male'],
  d: `{{C::character.firstName}} has a beautiful and interesting looking face with striking features that make {{his}}
      face an easy one to remember.`,
});

FaceDescription.build({ requires:['minion(C).face.pretty','minion(C).face.exotic','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is a beautiful and interesting looking {{C::species.elf}} with striking and strangely
      compelling facial features.`,
});

// === Beautiful Faces ===

// Beautiful - Masculine

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.plain','minion(C).is-male'],
  d: `{{C::character.firstName}} is handsome with facial features that seem both serene and sensual.`
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.hard','minion(C).is-male'],
  d: `{{C::character.firstName}} is handsome with a hard and dangerous look about him.`
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.hard','minion(C).is-male'],
  d: `{{C::character.firstName}} is dangerously handsome with unmistakably masculine features, high cheekbones and an
      angular jaw.`
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.soft','minion(C).is-male'],
  includes:['eye-color'],
  d: `{{C::character.firstName}} is devilishly handsome with bright {{C::body.eyeColor}} eyes that accentuate {{his}}
      roguish charm.`
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.soft','minion(C).is-male'],
  d: `{{C::character.firstName}} is devilishly handsome with big eyes that accentuate {{his}} roguish charm.`
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.exotic','minion(C).is-male'],
  d: `{{C::character.firstName}} is strangely handsome with distinct and pronounced masculine features.`
});

// Beautiful - Feminine

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.plain','minion(C).is-not-male'],
  d: `{{C::character.firstName}} has a beautifully symmetrical and statuesque face.`,
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.plain','minion(C).is-not-male'],
  d: `{{C::character.firstName}} has a beautifully serene and angelic face.`,
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.hard','minion(C).is-not-male'],
  d: `{{C::character.firstName}} has a face that's both beautiful and savage like a warrior queen.`,
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.hard','minion(C).is-not-male'],
  d: `{{C::character.firstName}} has a face that's both hard and beautiful, severe and statuesque like a dominatrix.`,
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.soft','minion(C).is-not-male'],
  d: `{{C::character.firstName}} has a beautiful and youthful face with {{his}} soft lips perpetually curved up into
      an impish grin.`,
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.soft','minion(C).is-not-male'], includes:['eye-color'],
  d: `{{C::character.firstName}} has a beautiful and youthful face with big {{C::body.eyeColor}} eyes that look both
      innocent and friendly.`,
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.soft','minion(C).is-not-male'], includes:['eye-color'],
  d: `{{C::character.firstName}} has a youthful and beautiful face with big {{C::body.eyeColor}} eyes full of
      innocence and vigor.`,
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.exotic','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is beautiful with striking and strangely erotic looking facial features.`,
});

FaceDescription.build({ requires:['minion(C).face.beautiful','minion(C).face.exotic','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is beautiful with an exotic facial structure that gives her a lewd, erotic appearance.`,
});

// === Breathtaking Faces ===

// Breathtaking - Masculine

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.plain','minion(C).is-male'],
  d: `{{C::character.firstName}} is incredibly handsome; serene, and sensual with features like they were molded from
      granite`
});

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.hard','minion(C).is-male'],
  d: `{{C::character.firstName}} is dashingly handsome, with a hard dangerous look about {{him}} the kind of face that
      really makes a pussy wet with both fear and lust.`
});

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.hard','minion(C).is-male'],
  d: `{{C::character.firstName}} is incredibly handsome with unmistakably masculine features, high cheekbones and an
      angular jaw.`
});

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.soft','minion(C).is-male'],
  includes:['eye-color'],
  d: `{{C::character.firstName}} is devilishly handsome with bright {{C::body.eyeColor}} eyes that accentuate {{his}}
      roguish charm.`
});

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.exotic','minion(C).is-male'],
  includes:['eye-color'],
  d: `{{C::character.firstName}} is incredibly handsome with distinct and pronounced masculine features,
      high cheakbones, and piercing {{C::body.eyeColor}} eyes.`
});

// Breathtaking - Feminine

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.plain','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is breathtakingly beautiful with a gorgeous, statuesque face.`
});

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.plain','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is absolutely gorgeous with a serene, angelic face.`
});

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.hard','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is both gorgeous and savage in equal measure like an avenging goddess.`
});

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.hard','minion(C).is-not-male'],
  d: `{{C::character.firstName}} has an incredibly beautiful face that’s both severe and statuesque.`
});

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.soft','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is absolutely gorgeous. Her youthful face looks both innocent and friendly while also
      being eminently fuckable.`
});

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.soft','minion(C).is-not-male'],
  d: `{{C::character.firstName}} has a perfect and beautiful face, with eyes full of innocence and youthful vigor that
      also convey an unmistakable “fuck me” gaze.`
});

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.exotic','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is incredibly gorgeous with a striking and hauntingly exotic beauty.`
});

FaceDescription.build({ requires:['minion(C).face.breathtaking-or-mythic','minion(C).face.exotic','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is incredibly beautiful with an exotic facial structure that gives her a lewd, erotic
      appearance.`
});
