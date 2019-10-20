global.Abuser = (function() {

  function lookup(code) {
    return {
      anus: Abuser.AnusAbuser,
      body: Abuser.BodyAbuser,
      cock: Abuser.CockAbuser,
      head: Abuser.HeadAbuser,
      nipples: Abuser.NipplesAbuser,
      pussy: Abuser.PussyAbuser,
      tits: Abuser.TitsAbuser,
    }[code];
  }

  return { lookup };

})();
