global.CockDescriber = (function() {

  async function fullDescription(character) {
    const parts = await character.getCompleteBody();
    return syncFullDescription(character, parts);
  }

  function syncFullDescription(character, parts) {
    return "COCK!"
  }

  return { fullDescription, syncFullDescription }

})();

// class Bodies::Describers::CockDescriber
//   include Language
//
//   def initialize body
//     @body = body
//
//     @cocks = @body.cocks
//     @shape = @body.cocks[:shape]
//     @count = @body.cocks[:count]
//     @size = @body.cocks[:size]
//
//     raise "No Cocks!" unless (@count && @size)
//   end
//
//   # For move and other descriptions that only need to get a length in
//   # inch or inches units.
//   def describe_cocks_length plural=false
//     length_in_inches plural
//   end
//
//   # For move and other descriptions that only need to get a width in
//   # inch or inches units.
//   def describe_cocks_width plural=false
//     width_in_inches @body.cock_width, plural
//   end
//
//   # One or two sentence description of the character's cocks. This will mostly
//   # be used when looking at the character to get a detailed description of his
//   # (or hir) cock (or cocks).
//   def full_description
//     description = CockDescription.select_at_random(@body)
//
//     text = description.text
//     text = add_extra_phrases(text) if description.shape.nil?
//     text = "#{text} #{demonic_features}" if @shape == "Demon"
//
//     Loom::Weaver.new(actor: @body.character).resolve(text)
//   end
//
// private
//
//   # === General Extra Tokens ===================================================
//
//   def size_token
//     "[C|#{@body.cock_size_adjective}]"
//   end
//
//   def a_size_token
//     "[C|#{a_an @body.cock_size_adjective}]"
//   end
//
//   # === Description Additions ==================================================
//
//   # If a normal description was selected, we can add a sentence or two
//   # afterwards about other cock features if there is anything interesting
//   # about it.
//   def add_extra_phrases text
//     if @shape == "Dragon"
//       return "#{text} #{ridge_description}"
//     end
//
//     if @cocks[:knot_width_ratio].present?
//       return "#{text} #{knot_description}"
//     end
//
//     if @cocks[:sheath].present?
//       return "#{text} #{sheath_description}"
//     end
//
//     text
//   end
//
//   def knot_description
//     if @count == 1
//       return Roll.random_from([
//         "The base of [his] cock swells to [C|a knot adjective] [C|two inch(knot)] wide knot.",
//         "The knot itself is the size of [C|a knot comparator], at [C|two inches(knot)] wide."
//       ])
//     end
//
//     Roll.random_from([
//       "[His] cocks all swell to [C|a knot adjective] [C|two inch(knot)] wide knot at their base.",
//       "Each of [his] cocks swell to [C|a knot adjective] [C|two inch(knot)] wide knot near the base.",
//       "At the base of each of [his] cocks is a [C|two inch(knot)] wide knot the size of [C|a knot comparator]."
//     ])
//   end
//
//   def sheath_adjective
//     Roll.random_from case @cocks[:sheath]
//       when "Fur"
//         ["furry","fuzzy","soft furry"]
//       when "Skin"
//         ["leathery","hot leathery"]
//       when "Scales"
//         ["scaly","scaled"]
//       else
//         raise "What kind of sheath is : #{@cocks[:sheath]}"
//     end
//   end
//
//   def sheath_description
//     if @count == 1
//       return Roll.random_from([
//         "[Actor's] [C|cock] emerges from #{a_size_token} #{sheath_adjective} cocksheath between [his] legs.",
//         "[Actor's] [C|cock] extends out from #{a_size_token} #{sheath_adjective} sheath.",
//         "The #{size_token} shaft emerges from a #{sheath_adjective} cocksheath, situated between [his] legs.",
//       ])
//     end
//
//     if @count == 2
//       return Roll.random_from([
//         "Both of [Actor's] [C|cocks] emerge from a tightly stretched #{sheath_adjective} cocksheath between [his] legs.",
//         "[Actor's] twin [C|cocks] extend out from an oversized #{sheath_adjective} sheath.",
//         "The two #{size_token} shafts emerge from a wide #{sheath_adjective} cocksheath, situated between [his] legs.",
//       ])
//     end
//
//     Roll.random_from([
//       "[Actor's] [C|count] [C|cocks] emerge from a hugely stretched #{sheath_adjective} cocksheath between [his] legs.",
//       "[Actor's] [C|count] [C|cocks] extend out from a hugely oversized #{sheath_adjective} sheath.",
//       "The [C|count] #{size_token} shafts emerge from an increadibly wide #{sheath_adjective} cocksheath, situated between [his] legs.",
//     ])
//   end
//
//   # === Dragon Cock Specific Descriptions ======================================
//
//   def ridge_description
//     CockDescription.select_at_random(@body, "ridge").text
//   end
//
//   # === Demon Cock Specific Descriptions =======================================
//
//   def demonic_features
//     text = ""
//     text << " #{demonic_knobs}" if @cocks[:knob_height_ratio].present?
//     text << " #{demonic_spines}" if @cocks[:spine_height_ratio].present?
//     text << " #{demonic_knot}" if @cocks[:knot_width_ratio].present?
//     text << " #{demonic_glow}" if @cocks[:glow].present?
//     text
//   end
//
//   def demonic_knobs
//     CockDescription.select_at_random(@body, "knob").text
//   end
//
//   def demonic_knot
//     CockDescription.select_at_random(@body, "knot").text
//   end
//
//   def demonic_spines
//     CockDescription.select_at_random(@body, "spine").text
//   end
//
//   def demonic_glow
//     if @count == 1
//       return Roll.random_from [
//         "It seems to glow with a dim #{@cocks[:glow]} light that pulses in time with the throbbing of [his] cock.",
//         "It emits a deep #{@cocks[:glow]} pulsating glow, seeingly in time with the trobbing of [his] cock.",
//         "It glows #{@cocks[:glow]} with [unholy] radiance, giving its sheen of precum an otherworldly radiance."
//       ]
//     end
//
//     Roll.random_from [
//       "They [C|all/both] seem to glow with a dim #{@cocks[:glow]} light that pulses in time with the throbbing of [his] cocks.",
//       "They [C|all/both] emit a deep #{@cocks[:glow]} pulsating glow, seeingly in time with the trobbing of [his] cocks.",
//       "They [C|all/both] glow #{@cocks[:glow]} with [unholy] radiance, giving their sheen of precum an otherworldly radiance."
//     ]
//   end
//
// end
