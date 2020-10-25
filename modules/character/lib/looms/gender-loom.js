
// Replaces template tokens in the form: {{actor::gender.he}}  Normally the
// gender pronouns can be handled by the prpnoun shortcut, {{he}}, etc. However
// when there is more than one actor in the context these must be used instead.
Weaver.registerLoom('actor', /^gender/, (subject, token, context) => {
  if (context.get(subject) == null) { return Weaver.error(`Subject(${subject}) not in context`); }

  var gender = context.get(subject).character.gender;

  if (gender == null) { return Weaver.error(`Subject without gender`); }
  if (token == 'gender.man')  { return gender.man;  }
  if (token == 'gender.men')  { return gender.men;  }
  if (token == 'gender.boy')  { return gender.boy;  }
  if (token == 'gender.boys') { return gender.boys; }
  if (token == 'gender.male') { return gender.male; }
  if (token == 'gender.he')   { return gender.he;   }
  if (token == 'gender.him')  { return gender.him;  }
  if (token == 'gender.his')  { return gender.his;  }
  if (token == 'gender.hers') { return gender.hers; }
  if (token == 'gender.Man')  { return gender.Man;  }
  if (token == 'gender.Men')  { return gender.Men;  }
  if (token == 'gender.Boy')  { return gender.Boy;  }
  if (token == 'gender.Boys') { return gender.Boys; }
  if (token == 'gender.Male') { return gender.Male; }
  if (token == 'gender.He')   { return gender.He;   }
  if (token == 'gender.Him')  { return gender.Him;  }
  if (token == 'gender.His')  { return gender.His;  }
  if (token == 'gender.Hers') { return gender.Hers; }

  return Weaver.error(`Bad gender token(${token})`);
});
