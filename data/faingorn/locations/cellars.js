Location.build('cellars', {
  inTheName: 'down in the cellars',
  toTheName: 'down to the cellars',

  buildName: () => {
    return `Cellars`;
  },

  buildDescription: () => {
    let start = `The keep's cellars are composed of a dozen or so small chambers, arranged haphazardly and cut directly
      from the bedrock on which the keep sits.`

    let warrens = `Supposedly there's an entrance somewhere in these twisted passages that lead even further down, into
      the warrens where the Deep Hole tribe dwells. I haven't investigated these cellars overly much yet, just enough
      to confirm that any supplies down here have either already been scavenged or have rotted away.</p>`;

    if (Flag.lookup('completed.journal-4-well-talk')) {
      warrens = `A tiny passage in one of the back cells, barely more than a crack in the wall, leads further down into
        the warrens of the Deep Hole Scaven. Supposedly there's another secret entrance down here that leads into a
        more ancient structure underneath the keep, though for all my searching I haven't found it yet.`
    }

    let description = `<p>${start} ${warrens}</p>`

    // This is probably only true until something else changes the state of the cellars.
    if (Flag.lookup('completed.rat-thief-kill-quick')) {
      description += `<p>The mutilated remains of a rat thief lie hung up against a wall near the entrance, serving as
        a warning to any would be intruders from below.</p>`
    }

    return description;
  },

  hasBed: () => false,
  hasChair: () => false,
  hasTable: () => false,
});
