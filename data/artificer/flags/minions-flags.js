
FlagInfo.build('minions.can-summon', { validateIn:['Y'] });

FlagInfo.build('minions.count',            { validateInteger:true, default:0 });
FlagInfo.build('minions.loyal-count',      { validateInteger:true, default:0 });
FlagInfo.build('minions.afraid-count',     { validateInteger:true, default:0 });
FlagInfo.build('minions.rebellious-count', { validateInteger:true, default:0 });
FlagInfo.build('minions.traitorous-count', { validateInteger:true, default:0 });

FlagInfo.build('minions.loyal-ids',      { default:'' });
FlagInfo.build('minions.afraid-ids',     { default:'' });
FlagInfo.build('minions.rebellious-ids', { default:'' });
FlagInfo.build('minions.traitorous-ids', { default:'' });
