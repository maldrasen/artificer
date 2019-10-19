global.CharacterPortraits = (function() {

  // This should eventually return a real character portrait. Just fake this
  // out for now though...
  async function lookup(character) {
    let id;

    if (Random.upTo(10) == 0) {
      return (character.genderCode == 'male') ?
        '../../assets/images/portraits/missing-m.png':
        '../../assets/images/portraits/missing-f.png';
    }

    if (character.genderCode == 'male') {
      id = Random.upTo(10)+1;
      id = id < 10 ? `0${id}` : `${id}`
      return `../../data/image-resources/portraits/rat-m-${id}.png`;
    }

    if (character.genderCode != 'male') {
      id = Random.upTo(27)+1;
      id = id < 10 ? `0${id}` : `${id}`
      return `../../data/image-resources/portraits/rat-f-${id}.png`;
    }
  }

  return { lookup }

})();
