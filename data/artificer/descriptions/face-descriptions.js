
// === Hideous Faces ===================================================================================================

Description.buildFace({ requires:['minion(C).face.hideous'],
  d: `{{C::character.firstName}} is terrifyingly ugly, with a face like a melted turd.`
});

Description.buildFace({ requires:['minion(C).face.hideous'],
  d: `{{C::character.firstName}} is flat out ugly. Just disgusting to look at, like dog shit given a face.`
});

Description.buildFace({ requires:['minion(C).face.hideous'],
  d: `{{C::character.firstName}} is horrendously ugly. Uglier than a bag of smashed horse assholes, with all the
      pretty ones taken out.`
});

// === Ugly Faces ======================================================================================================

Description.buildFace({ requires:['minion(C).face.ugly'],
  d: `{{C::character.firstName}} is not at all attractive with weirdly asymmetrical facial features.`
});

Description.buildFace({ requires:['minion(C).face.ugly'],
  d: `{{C::character.firstName}} is hopelessly unattractive with a face that looks like it was put together in the dark.`
});

Description.buildFace({ requires:['minion(C).face.ugly'],
  d: `{{C::character.firstName}} has a face that was made for a gimp mask, or for doggy style, or really any activity
      that has {{him}} facing away from me.`
});

// Average - Masculine

Description.buildFace({ requires:['minion(C).face.ugly','minion(C).is-male'],
  d: `{{C::character.firstName}} has a face that looks like it's been through a few fights, and {{he}}'s lost every
      single one of them.`
});

Description.buildFace({ requires:['minion(C).face.ugly','minion(C).is-male'],
  d: `{{C::character.firstName}} has a face that looks as though it was ravaged by disease at some point. It's
      pockmarked and misshapen.`
});

Description.buildFace({ requires:['minion(C).face.ugly','minion(C).is-male'],
  d: `{{C::character.firstName}} has a very punchable looking face. I'm not sure what it is. Every time I see {{him}}
      I feel like knocking a few of {{his}} teeth out.`
});

// Average - Feminine

Description.buildFace({ requires:['minion(C).face.ugly','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is just flat out ugly with a weirdly misshaped head like {{he}} spent the last several
     years getting slapped in the face with a bag full of goat dicks.`
});

Description.buildFace({ requires:['minion(C).face.ugly','minion(C).is-not-male'],
  d: `It would be difficult to describe {{C::character.firstName}} as anything but ugly. {{He}} has the sort of face
      that could only be improved by repeatedly slapping it.`
});

// === Average Faces ===================================================================================================

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.plain'],
  d: `{{C::character.firstName}} is somewhat attractive though a little plain looking.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.plain'],
  d: `{{C::character.firstName's}} face is rather nondescript but inoffensive enough.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.plain'],
  d: `{{C::character.firstName}} is rather plain looking, nondescript and inoffensive.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.plain'],
  d: `{{C::character.firstName}} could be called homely, not unattractive per se, but certainly not beautiful.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.plain'],
  d: `{{C::character.firstName}} is rather average looking. {{He}}'s not the sort of {{C::species.elf}} who wouldn't
      stand out in a crowd.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.hard'],
  d: `Years of difficult living have left {{C::character.firstName's}} face looking hard and scared.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.hard'],
  d: `{{C::character.firstName}} has a hard looking face, the kind of face that is the result of years of difficult
      living.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.hard'],
  d: `{{C::character.firstName's}} face is badle battle scared. {{He}} may have been attractive once, but years of
      fighting have left their mark.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.soft'],
  d: `{{C::character.firstName}} isn't attractive, but has a friendly and youthful looking face.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.soft'],
  d: `{{C::character.firstName}} has as face that's youthful and innocent looking, although {{he}}'s not very
      attractive.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.soft'],
  d: `{{C::character.firstName}} isn't attractive, but {{his}} large eyes give {{him}} a eager and friendly sort of
      face.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.exotic'],
  d: `{{C::character.firstName}} isn't ugly but {{his}} face is strangely shaped making it instantly recognizable.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.exotic'],
  d: `{{C::character.firstName's}} face is rather striking looking. {{He}} isn't exactly ugly but also doesn't look
      like most other {{C::species.elves}}.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.exotic'],
  d: `{{C::character.firstName}} has a bizarrely constructed face that while {{he}} isn't ugly exactly, doesn't look
      like most other {{C::species.elves}}.`
});

// Average - Masculine

Description.buildFace({ requires:['minion(C).face.average','minion(C).is-male'],
  d: `{{C::character.firstName}} isn't handsome, but {{he}}'s not offensive to look at either.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).is-male'],
  d: `{{C::character.firstName}} doesn't have a face anyone could call handsome, but {{he}}'s not really bad looking
      either.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.plain','minion(C).is-male'],
  d: `{{C::character.firstName}} is somewhat handsome though a little plain looking.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.hard','minion(C).is-male'],
  d: `{{C::character.firstName}} couldn't be called handsome, but {{his}} face is chisled and manly looking.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.hard','minion(C).is-male'],
  d: `{{C::character.firstName}} isn't incredibly handsome, but there's a rugged charm to {{his}} face.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.soft','minion(C).is-male'],
  d: `{{C::character.firstName}} isn't handome, but at least has a friendly and boyishly innocent looking face.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.soft','minion(C).is-male'],
  d: `{{C::character.firstName}} couldn't be called handsome, but has a certain roguish charm about {{him}}.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.exotic','minion(C).is-male'],
  d: `{{C::character.firstName}} has an interesting face. {{He}}'s neither ugly nor handsome, but has unusually
      striking features that make {{his}} face an easy one to remember.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.exotic','minion(C).is-male'],
  d: `{{C::character.firstName}} is an interesting looking {{C::species.elf}}. While {{he}} couldn't really be called
      handsome, there's something about {{his}} face that's interesting and compelling.`
});

// Average - Feminine

Description.buildFace({ requires:['minion(C).face.average','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is not unattractive, but not what anyone would consider beautiful either.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).is-not-male'],
  d: `{{C::character.firstName}} isn't beautiful, but {{he}}'s not offensive to look at either.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).is-not-male'],
  d: `I wouldn't call {{C::character.firstName}} pretty, but there's a certain charming quality to {{his}} face.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).is-not-male'],
  d: `{{C::character.firstName}} doesn't have a face anyone could call beautiful, but {{he}}'s not really bad looking
      either.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is a pretty enough {{C::species.elf}}. While not exactly beautiful, {{he}}'s
      pleasant to look at.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.hard','minion(C).is-not-male'],
  d: `{{C::character.firstName}} isn't unattractive, but years of hard living have left {{him}} with a hard and angry
      looking face.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.hard','minion(C).is-not-male'],
  d: `{{C::character.firstName}} isn't unattractive but has a savage and wild look about {{him}}.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.soft','minion(C).is-not-male'],
  d: `{{C::character.firstName}} isn't beautiful, but has a friendly and innocent looking face.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.soft','minion(C).is-not-male'],
  d: `{{C::character.firstName}} couldn't be called beautiful, but {{he}} has a certain girlish charm about {{him}}.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.exotic','minion(C).is-not-male'],
  d: `{{C::character.firstName}} has an interesting face. {{He}}'s neither ugly nor beautiful, but has unusually
      striking features that make {{his}} face an easy one to remember.`
});

Description.buildFace({ requires:['minion(C).face.average','minion(C).face.exotic','minion(C).is-not-male'],
  d: `{{C::character.firstName}} is an interesting looking {{C::species.elf}}. While {{he}} couldn't really be called
      beautiful, there's something about {{his}} face that's interesting and compelling.`
});

// === Pretty Faces ===

Description.buildFace({ requires:['minion(C).face.pretty'],
  d: `(WIP Pretty Face)`
});

//
//   if (personal >= 20 && personal < 30) {
//     if (faceType == 'plain') { ArrayUtility.addAll(options,[
//       `{{C::character.firstName}} has a fairly attractive if rather plain sort of face.`,
//       `{{C::character.firstName}} is a good looking {{C::species.elf}} with a symmetrical, traditionally attractive sort of face.`,
//     ]); }
//     if (faceType == 'hard') { ArrayUtility.addAll(options,[
//       `{{C::character.firstName}} has an naturally attractive and honest looking face.`,
//     ]); }
//     if (faceType == 'soft') { ArrayUtility.addAll(options,[
//       `{{C::character.firstName}} has an attractively youthful and sweet looking face.`,
//     ]); }
//     if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//       `{{C::character.firstName}} has an attractively exotic face with interesting and rather striking facial features.`,
//     ]); }
//   }
//
//   if (this.character.genderCode == 'male') {
//
//
//     if (personal >= 20 && personal < 30) {
//       ArrayUtility.addAll(options,[
//         `I would call {{C::character.firstName}} handsome. {{His}} face has a certain charming quality to it.`,
//         `{{C::character.firstName}} is a handsome {{C::species.elf}}. While not overly attractive, {{he}}'s  pleasant to look upon at least.`,
//       ]);
//
//       if (faceType == 'plain') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} is handsome though a little plain looking.`,
//         `{{C::character.firstName}} has a fairly handsome face, even if it is rather nondescript.`,
//       ]); }
//
//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} has a handsome, chisled and manly looking face.`,
//         `{{C::character.firstName}} has a handsome, ruggedly charming sort of face.`,
//       ]); }
//
//       if (faceType == 'soft') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} has a handsome, friendly, and boyishly innocent looking face.`,
//         `{{C::character.firstName}} has a handsome face with a certain roguish charm.`,
//       ]); }
//
//       if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} has a handsome and interesting looking face with striking features that make {{his}} face an easy one to remember.`,
//         `{{C::character.firstName}} is a handome and interesting looking {{C::species.elf}} with striking and strangely compelling facial features.`,
//       ]); }
//     }
//   if (this.character.genderCode != 'male') {
//
//
//     if (personal >= 20 && personal < 30) {
//       ArrayUtility.addAll(options,[
//         `While not exactly beautiful, {{C::character.firstName}} is certinally a pretty girl.`,
//         `{{C::character.firstName}} is a pretty {{C::species.elf}}. While not exactly beautiful, {{he}}'s pleasant to look upon at least.`,
//       ]);
//
//       if (faceType == 'plain') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} is pretty though a little plain looking.`,
//         `{{C::character.firstName}} is pretty, even if {{he}} is a little plain looking.`,
//       ]); }
//
//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} is pretty in a savage and wild of way.`,
//         `{{C::character.firstName}} would be beautiful, but years of hard living have left {{him}} with a hard and angry looking face.`,
//       ]); }
//
//       if (faceType == 'soft') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} has a pretty, friendly, and girlishly innocent looking face.`,
//         `{{C::character.firstName}} has a pretty, young looking, and impish sort of face.`,
//       ]); }
//
//       if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} has a beautiful and interesting looking face with striking features that make {{his}} face an easy one to remember.`,
//         `{{C::character.firstName}} is a beautiful and interesting looking {{C::species.elf}} with striking and strangely compelling facial features.`,
//       ]); }
//     }

// === Beautiful Faces ===

Description.buildFace({ requires:['minion(C).face.beautiful'],
  d: `(WIP Beautiful Face)`
});

//     if (personal >= 30 && personal < 40) {
//       if (faceType == 'plain') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} has a beautifully symmetrical and statuesque face.`,
//         `{{C::character.firstName}} has a beautifully serene and angelic face.`,
//       ]); }
//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} has a face that's both beautiful and savage like a warrior queen.`,
//         `{{C::character.firstName}} has a face that's both hard and beautiful, severe and statuesque like a dominatrix.`,
//       ]); }
//       if (faceType == 'soft') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} has a beautiful and youthful face with big {{C::body.eyeColor}} eyes that looks both innocent and friendly.`,
//         `{{C::character.firstName}} has a youthful and beautiful face with big {{C::body.eyeColor}} eyes full of innocence and vigor.`,
//       ]); }
//       if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} is beautiful with striking and strangely erotic looking facial features.`,
//         `{{C::character.firstName}} is beautiful with an exotic facial structure that gives her a lewd, erotic appearance.`
//       ]); }

// === Breathtaking Faces ===

Description.buildFace({ requires:['minion(C).face.breathtaking-or-mythic'],
  d: `(WIP Beautiful Face)`
});

//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} is dashingly handsome, with a hard dangerous look about {{him}} the kind of face that really makes a
//            pussy wet with both fear and lust.`,
//       ]); }

//       if (faceType == 'plain') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} is incredibly beautiful with a gorgeous, statuesque face.`,
//         `{{C::character.firstName}} is absolutely gorgeous with a serene, angelic face.`,
//       ]); }
//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} is both gorgeous and savage in equal measure like an avenging goddess.`,
//         `{{C::character.firstName}} has an incredibly beautiful face that’s both severe and statuesque.`,
//       ]); }
//       if (faceType == 'soft') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} is absolutely gorgeous. Her youthful face looks both innocent and friendly while also being eminently
//            fuckable.`,
//         `{{C::character.firstName}} has a perfect and beautiful face, with eyes full of innocence and youthful vigor that also convey an
//            unmistakable “fuck me” gaze.`,
//       ]); }
//       if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//         `{{C::character.firstName}} is incredibly gorgeous with a striking and hauntingly exotic beauty.`,
//         `{{C::character.firstName}} is incredibly beautiful with an exotic facial structure that gives her a lewd, erotic appearance.`
//       ]); }
//     }
//   }
//
