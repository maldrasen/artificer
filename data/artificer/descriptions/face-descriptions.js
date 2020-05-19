// objectiveBeauty() {
//   const personal = this.character.personal;
//   const faceType = this.body.faceType;
//   const options = [];
//
//   if (personal == 0) { ArrayUtility.addAll(options,[
//     `[NAME] is terrifyingly ugly, with a face like a melted turd.`,
//     `[NAME] is flat out ugly. Just disgusting to look at, like dog shit given a face.`,
//     `[NAME] is horrendously ugly. Uglier than a bag of smashed horse assholes, with all the pretty ones taken out.`,
//   ]); }
//
//   if (personal > 0 && personal < 5) { ArrayUtility.addAll(options,[
//     `[NAME] is not at all attractive with weirdly asymmetrical facial features.`,
//     `[NAME] is hopelessly unattractive with a face that looks like it was put together in the dark.`,
//     `[NAME] has a face that was made for a gimp mask, or for doggy style, or really any activity that has
//        {{him}} facing away from me.`,
//   ]); }
//
//   if (personal >= 5 && personal < 20) {
//     if (faceType == 'plain') { ArrayUtility.addAll(options,[
//       `[NAME] is somewhat attractive though a little plain looking.`,
//       `[NAME'S] face is rather nondescript but inoffensive enough.`,
//       `[NAME] is rather plain looking, nondescript and inoffensive.`,
//       `[NAME] could be called homely, not unattractive per se, but certainly not beautiful.`,
//       `[NAME] is rather average looking. {{He}}'s not the sort of {{C::species.elf}} who wouldn't stand out in a crowd.`,
//     ]); }
//     if (faceType == 'hard') { ArrayUtility.addAll(options,[
//       `Years of difficult living have left [NAME'S] face looking hard and scared.`,
//       `[NAME] has a hard looking face, the kind of face that is the result of years of difficult living.`,
//       `[NAME'S] face is badle battle scared. {{He}} may have been attractive once, but years of fighting have left their mark.`,
//     ]); }
//     if (faceType == 'soft') { ArrayUtility.addAll(options,[
//       `[NAME] isn't attractive, but has a friendly and youthful looking face.`,
//       `[NAME] has as face that's youthful and innocent looking, although {{he}}'s not very attractive.`,
//       `[NAME] isn't attractive, but {{his}} large eyes give {{him}} a eager and friendly sort of face.`,
//     ]); }
//     if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//       `[NAME] isn't ugly but {{his}} face is strangely shaped making it instantly recognizable.`,
//       `[NAME'S] face is rather striking looking. {{He}} isn't exactly ugly but also doesn't look like most other
//          {{C::species.elves}}.`,
//       `[NAME] has a bizarrely constructed face that while {{he}} isn't ugly exactly, doesn't look like most other
//          {{C::species.elves}}.`,
//     ]); }
//   }
//
//   if (personal >= 20 && personal < 30) {
//     if (faceType == 'plain') { ArrayUtility.addAll(options,[
//       `[NAME] has a fairly attractive if rather plain sort of face.`,
//       `[NAME] is a good looking {{C::species.elf}} with a symmetrical, traditionally attractive sort of face.`,
//     ]); }
//     if (faceType == 'hard') { ArrayUtility.addAll(options,[
//       `[NAME] has an naturally attractive and honest looking face.`,
//     ]); }
//     if (faceType == 'soft') { ArrayUtility.addAll(options,[
//       `[NAME] has an attractively youthful and sweet looking face.`,
//     ]); }
//     if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//       `[NAME] has an attractively exotic face with interesting and rather striking facial features.`,
//     ]); }
//   }
//
//   // === Masculine faces ===
//   if (this.character.genderCode == 'male') {
//     if (personal > 0 && personal < 5) { ArrayUtility.addAll(options,[
//       `[NAME] has a face that looks like it's been through a few fights, and {{he}}'s lost every single one of them.`,
//       `[NAME] has a face that looks as though it was ravaged by disease at some point. It's pockmarked and misshapen.`,
//       `[NAME] has a very punchable looking face. I'm not sure what it is. Every time I see {{him}} I feel like
//          knocking a few of {{his}} teeth out.`,
//     ]); }
//
//     if (personal >= 5 && personal < 20) {
//       ArrayUtility.addAll(options,[
//         `[NAME] isn't handsome, but {{he}}'s not offensive to look at either.`,
//         `[NAME] doesn't have a face anyone could call handsome, but {{he}}'s not really bad looking either.`,
//       ]);
//
//       if (faceType == 'plain') { ArrayUtility.addAll(options,[
//         `[NAME] is somewhat handsome though a little plain looking.`,
//       ]); }
//
//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//         `[NAME] couldn't be called handsome, but {{his}} face is chisled and manly looking.`,
//         `[NAME] isn't incredibly handsome, but there's a rugged charm to {{his}} face.`,
//       ]); }
//
//       if (faceType == 'soft') { ArrayUtility.addAll(options,[
//         `[NAME] isn't handome, but at least has a friendly and boyishly innocent looking face.`,
//         `[NAME] couldn't be called handsome, but has a certain roguish charm about {{him}}.`,
//       ]); }
//
//       if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//         `[NAME] has an interesting face. {{He}}'s neither ugly nor handsome, but has unusually striking features
//            that make {{his}} face an easy one to remember.`,
//         `[NAME] is an interesting looking {{C::species.elf}}. While {{he}} couldn't really be called handsome,
//            there's something about {{his}} face that's interesting and compelling.`,
//       ]); }
//     }
//
//     if (personal >= 20 && personal < 30) {
//       ArrayUtility.addAll(options,[
//         `I would call [NAME] handsome. {{His}} face has a certain charming quality to it.`,
//         `[NAME] is a handsome {{C::species.elf}}. While not overly attractive, {{he}}'s  pleasant to look upon at least.`,
//       ]);
//
//       if (faceType == 'plain') { ArrayUtility.addAll(options,[
//         `[NAME] is handsome though a little plain looking.`,
//         `[NAME] has a fairly handsome face, even if it is rather nondescript.`,
//       ]); }
//
//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//         `[NAME] has a handsome, chisled and manly looking face.`,
//         `[NAME] has a handsome, ruggedly charming sort of face.`,
//       ]); }
//
//       if (faceType == 'soft') { ArrayUtility.addAll(options,[
//         `[NAME] has a handsome, friendly, and boyishly innocent looking face.`,
//         `[NAME] has a handsome face with a certain roguish charm.`,
//       ]); }
//
//       if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//         `[NAME] has a handsome and interesting looking face with striking features that make {{his}} face an easy one to remember.`,
//         `[NAME] is a handome and interesting looking {{C::species.elf}} with striking and strangely compelling facial features.`,
//       ]); }
//     }
//
//     if (personal >= 30 && personal < 40) {
//       if (faceType == 'plain') { ArrayUtility.addAll(options,[
//       ]); }
//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//       ]); }
//       if (faceType == 'soft') { ArrayUtility.addAll(options,[
//       ]); }
//       if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//       ]); }
//     }
//
//     if (personal >= 50) {
//       if (faceType == 'plain') { ArrayUtility.addAll(options,[
//       ]); }
//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//         `[NAME] is dashingly handsome, with a hard dangerous look about {{him}} the kind of face that really makes a
//            pussy wet with both fear and lust.`,
//       ]); }
//       if (faceType == 'soft') { ArrayUtility.addAll(options,[
//       ]); }
//       if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//       ]); }
//     }
//   }
//
//   // === Feminine Faces ===
//   if (this.character.genderCode != 'male') {
//     if (personal > 0 && personal < 5) {
//       ArrayUtility.addAll(options,[
//         `[NAME] is just flat out ugly with a weirdly misshaped head like {{he}} spent the last several years getting
//            slapped in the face with a bag full of goat dicks.`,
//         `It would be difficult to describe [NAME] as anything but ugly. {{He}} has the sort of face that could only
//            be improved by repeatedly slapping it.`,
//       ]);
//     }
//
//     if (personal >= 5 && personal < 20) {
//       ArrayUtility.addAll(options,[
//         `[NAME] is not unattractive, but not what anyone would consider beautiful either.`,
//         `[NAME] isn't beautiful, but {{he}}'s not offensive to look at either.`,
//         `I wouldn't call [NAME] pretty, but there's a certain charming quality to {{his}} face.`,
//         `[NAME] doesn't have a face anyone could call beautiful, but {{he}}'s not really bad looking either.`,
//         `[NAME] is a pretty enough {{C::species.elf}}. While not exactly beautiful, {{he}}'s  pleasant to look at.`,
//       ]);
//
//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//         `[NAME] isn't unattractive but has a savage and wild look about {{him}}.`,
//         `[NAME] isn't unattractive, but years of hard living have left {{him}} with a hard and angry looking face.`,
//       ]); }
//
//       if (faceType == 'soft') { ArrayUtility.addAll(options,[
//         `[NAME] isn't beautiful, but has a friendly and innocent looking face.`,
//         `[NAME] couldn't be called beautiful, but {{he}} has a certain girlish charm about {{him}}.`,
//       ]); }
//
//       if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//         `[NAME] has an interesting face. {{He}}'s neither ugly nor beautiful, but has unusually striking features
//            that make {{his}} face an easy one to remember.`,
//         `[NAME] is an interesting looking {{C::species.elf}}. While {{he}} couldn't really be called beautiful,
//            there's something about {{his}} face that's interesting and compelling.`,
//       ]); }
//     }
//
//     if (personal >= 20 && personal < 30) {
//       ArrayUtility.addAll(options,[
//         `While not exactly beautiful, [NAME] is certinally a pretty girl.`,
//         `[NAME] is a pretty {{C::species.elf}}. While not exactly beautiful, {{he}}'s pleasant to look upon at least.`,
//       ]);
//
//       if (faceType == 'plain') { ArrayUtility.addAll(options,[
//         `[NAME] is pretty though a little plain looking.`,
//         `[NAME] is pretty, even if {{he}} is a little plain looking.`,
//       ]); }
//
//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//         `[NAME] is pretty in a savage and wild of way.`,
//         `[NAME] would be beautiful, but years of hard living have left {{him}} with a hard and angry looking face.`,
//       ]); }
//
//       if (faceType == 'soft') { ArrayUtility.addAll(options,[
//         `[NAME] has a pretty, friendly, and girlishly innocent looking face.`,
//         `[NAME] has a pretty, young looking, and impish sort of face.`,
//       ]); }
//
//       if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//         `[NAME] has a beautiful and interesting looking face with striking features that make {{his}} face an easy one to remember.`,
//         `[NAME] is a beautiful and interesting looking {{C::species.elf}} with striking and strangely compelling facial features.`,
//       ]); }
//     }
//
//     if (personal >= 30 && personal < 40) {
//       if (faceType == 'plain') { ArrayUtility.addAll(options,[
//         `[NAME] has a beautifully symmetrical and statuesque face.`,
//         `[NAME] has a beautifully serene and angelic face.`,
//       ]); }
//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//         `[NAME] has a face that's both beautiful and savage like a warrior queen.`,
//         `[NAME] has a face that's both hard and beautiful, severe and statuesque like a dominatrix.`,
//       ]); }
//       if (faceType == 'soft') { ArrayUtility.addAll(options,[
//         `[NAME] has a beautiful and youthful face with big {{C::body.eyeColor}} eyes that looks both innocent and friendly.`,
//         `[NAME] has a youthful and beautiful face with big {{C::body.eyeColor}} eyes full of innocence and vigor.`,
//       ]); }
//       if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//         `[NAME] is beautiful with striking and strangely erotic looking facial features.`,
//         `[NAME] is beautiful with an exotic facial structure that gives her a lewd, erotic appearance.`
//       ]); }
//     }
//
//     if (personal >= 50) {
//       if (faceType == 'plain') { ArrayUtility.addAll(options,[
//         `[NAME] is incredibly beautiful with a gorgeous, statuesque face.`,
//         `[NAME] is absolutely gorgeous with a serene, angelic face.`,
//       ]); }
//       if (faceType == 'hard') { ArrayUtility.addAll(options,[
//         `[NAME] is both gorgeous and savage in equal measure like an avenging goddess.`,
//         `[NAME] has an incredibly beautiful face that’s both severe and statuesque.`,
//       ]); }
//       if (faceType == 'soft') { ArrayUtility.addAll(options,[
//         `[NAME] is absolutely gorgeous. Her youthful face looks both innocent and friendly while also being eminently
//            fuckable.`,
//         `[NAME] has a perfect and beautiful face, with eyes full of innocence and youthful vigor that also convey an
//            unmistakable “fuck me” gaze.`,
//       ]); }
//       if (faceType == 'exotic') { ArrayUtility.addAll(options,[
//         `[NAME] is incredibly gorgeous with a striking and hauntingly exotic beauty.`,
//         `[NAME] is incredibly beautiful with an exotic facial structure that gives her a lewd, erotic appearance.`
//       ]); }
//     }
//   }
//
//   let description = Random.from(options);
//
//   // TODO: If a character's personal attribute is over 50 we should select a
//   //       beautiful description, then add some extra details about how
//   //       unworldly their beauty has become.
//
//   return description.
//     replace(/\[NAME\]/,`{{C::character.firstName}}`).
//     replace(/\[NAME'S\]/,`{{C::character.firstName's}}`)
//
// }
