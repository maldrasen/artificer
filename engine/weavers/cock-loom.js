# class Loom::CockWeaver
#   include Language
#
#   def initialize actor
#     @body = actor.body
#     @shape = @body.cocks[:shape]
#     @count = @body.cocks[:count]
#     @size = @body.cocks[:size]
#
#     raise "No Cocks!" unless (@count && @size)
#   end
#
#   def find_value token
#
#     # Each random adjective method has to have three different versions
#     # because of English's complex a / an rules.
#     ["tiny","small","average","large","huge","massive","monstrous","gigantic","titanic"].each do |adjective|
#       if token == "[C|#{adjective}]"
#         return send("#{adjective}_adjective".to_sym)
#       end
#       if token == "[C|a #{adjective}]" || token == "[C|an #{adjective}]"
#         return a_an(send("#{adjective}_adjective".to_sym))
#       end
#       if token == "[C|A #{adjective}]" || token == "[C|An #{adjective}]"
#         return cap_a_an(send("#{adjective}_adjective".to_sym))
#       end
#     end
#
#     case token
#       when "[C|cock]" then cock_word
#       when "[C|cocks]" then cocks_word
#       when "[C|count]" then number_to_english(@count)
#       when "[C|Count]" then number_to_english(@count).titlecase
#       when "[C|all/both]" then all_both(@count)
#       when "[C|All/Both]" then all_both(@count).titlecase
#
#       # Cock Length && Width
#       when "[C|six inch]" then six_inch
#       when "[C|six inches]" then six_inches
#       when "[C|six inch long and one inch wide]" then six_inch_long_and_one_inch_wide
#       when "[C|six inches long and one inch wide]" then six_inches_long_and_one_inch_wide
#       when "[C|two inch(cock)]" then two_inch(@body.cock_width)
#       when "[C|two inches(cock)]" then two_inches(@body.cock_width)
#
#       # Ridges
#       when "[C|ridge comparator]" then ridge_comparator
#       when "[C|a ridge comparator]" then a_an(ridge_comparator)
#
#       # Spines
#       when "[C|two inch(spines)]" then two_inch(@body.spine_height)
#       when "[C|two inches(spines)]" then two_inches(@body.spine_height)
#
#       # Knots
#       when "[C|two inch(knot)]" then two_inch(@body.knot_width)
#       when "[C|two inches(knot)]" then two_inches(@body.knot_width)
#       when "[C|knot adjective]" then knot_adjective
#       when "[C|a knot adjective]" then a_an(knot_adjective)
#       when "[C|a knot comparator]" then a_an(knot_comparator)
#       when "[C|a knot comparators]" then a_an(knot_comparators)
#
#       # Knobs
#       when "[C|two inch(knobs)]" then two_inch(@body.knob_height)
#       when "[C|two inches(knobs)]" then two_inches(@body.knob_height)
#       when "[C|knob comparator]" then knob_comparator
#       when "[C|knob comparators]" then knob_comparators
#       when "[C|a knob comparator]" then a_an(knob_comparator)
#       when "[C|a knob comparators]" then a_an(knob_comparators)
#
#       # Throbs
#       when "[C|throbbing]" then throbbing
#       when "[C|throb]" then throb
#     end
#   end
#
# private
#
#   def throbbing
#     Roll.random_from ["throbbing","pulsing"]
#   end
#
#   def throb
#     Roll.random_from ["throb","pulse"]
#   end
#
#   # === Words for cocks dependent on shape =====================================
#
#   def cock_word
#     Roll.random_from case @shape
#       when "Normal"
#         ["cock","cock","cock","cock","dick"]
#       when "Horse"
#         ["horsecock","horsecock","horsecock","horse shaped cock",
#          "equine cock","flared cock"]
#       when "Dog"
#         ["dogcock","dogcock","dogcock","canine cock","canine shaped cock",
#          "knotted cock"]
#       when "Snake"
#         ["snakecock","snakecock","snakecock","nagacock","nagacock",
#          "reptilian cock","snake shaped cock","tapered cock"]
#       when "Dragon"
#         ["dragoncock","dragoncock","dragoncock","draconic cock",
#          "dragon shaped cock","ridged cock"]
#       when "Demon"
#         ["demoncock","demoncock","demoncock","demoncock","demonic cock",
#          "blasphemous cock","infernal cock","satanic cock","corrupt cock",
#          "corrupted cock","cursed cock"]
#       else raise "Not sure what to call this cock : #{@shape}"
#     end
#   end
#
#   def cocks_word
#     "#{cock_word}s"
#   end
#
#
#
#   # === Adjectives used to describe cock size ==================================
#
#   # Adjectives for various sizes. The adjectives in these lists really are very
#   # cock specific, so they shouldn't be used elsewhere. Because they can
#   # describe knots and sheaths, words specific to length should be kept out.
#   # Thickness should be fine although tentacle descriptions can't use these then.
#
#   def tiny_adjective
#     Roll.random_from ["tiny","miniature","tiny little","cute little","pitiful","pitifully small"]
#   end
#
#   def small_adjective
#     Roll.random_from ["small","small","modest","unimpressive","unpretentious"]
#   end
#
#   def average_adjective
#     Roll.random_from ["average","rather average","fairly average","nice sized",
#       "well proportioned"]
#   end
#
#   def large_adjective
#     Roll.random_from ["large","fat","thick","big","larger than average",
#       "nice big","big beautiful"]
#   end
#
#   def huge_adjective
#     Roll.random_from ["huge","very large","very thick","very big","huge fat"]
#   end
#
#   def massive_adjective
#     Roll.random_from ["massive","massively huge","massively thick",
#       "inhumanly massive","unbelievably thick"]
#   end
#
#   def monstrous_adjective
#     Roll.random_from ["monstrous","monstrously huge","monstrously thick",
#       "fucking huge","incredibly thick","tremendously massive"]
#   end
#
#   def gigantic_adjective
#     Roll.random_from ["gigantic","giant","immense","fucking gigantic",
#       "incredibly huge","massively huge"]
#   end
#
#   def titanic_adjective
#     Roll.random_from ["titanic","fucking colossal","gargantuan",
#       "fucking titanic","massively titanic","unbelievably fucking titanic"]
#   end
#
#
#
#   # === Length and Width Phrases ===============================================
#
#   # six inches long and 1 inch(es) wide
#   def six_inches_long_and_one_inch_wide
#     long_and_wide_phrase true
#   end
#
#   # six inch long and 1 inch wide
#   def six_inch_long_and_one_inch_wide
#     long_and_wide_phrase false
#   end
#
#   def six_inches
#     length_in_inches true
#   end
#
#   def six_inch
#     length_in_inches false
#   end
#
#   def two_inches width
#     width_in_inches width, true
#   end
#
#   def two_inch width
#     width_in_inches width, false
#   end
#
#
#
#   # === Sub-phrases Generators =================================================
#
#   # Phrase describing cock length and width.
#   #   "Eight inches long and one inch wide"
#   def long_and_wide_phrase plural
#     length = length_in_inches plural
#     width = width_in_inches @body.cock_width, plural
#     wide = Roll.random_from ["wide","thick"]
#
#     "#{length} long and #{width} #{wide}"
#   end
#
#   # Convert cock size into English.
#   #   "Eight inches"
#   def length_in_inches plural
#     number = (@size / 10.0).to_i
#     part = @size - (number*10)
#     rational_number_to_standard_units number, part, plural
#   end
#
#   # Convert width value into English.
#   #   "one inch"
#   def width_in_inches width, plural
#     number = width.to_i
#     part = ((width-number)*10).to_i
#     rational_number_to_standard_units number, part, plural
#   end
#
#
#
#   # === Dog Cock Specific Descriptions =========================================
#
#   def knot_comparator
#     width_comparator @body.knot_width
#   end
#
#   def knot_comparators
#     width_comparator_plural @body.knot_width
#   end
#
#   def knot_adjective
#     width = @body.knot_width
#     if width < 2
#       return Roll.random_from ["sizable","fat","thick","plump","bulbous"]
#     end
#     if width >= 2 && width < 2.5
#       return Roll.random_from ["huge","very large","very thick","bulbous"]
#     end
#     if width >= 2.5 && width < 3.5
#       return Roll.random_from ["massive","massively huge","massively thick","incredibly thick"]
#     end
#     if width >= 3.5 && width < 5
#       return Roll.random_from ["monstrous","monstrously huge","monstrously thick","fucking huge","unbelievably thick"]
#     end
#     if width >= 5 && width < 6.5
#       return Roll.random_from ["gigantic","giant","immense","fucking gigantic"]
#     end
#     if width >= 6.5
#       return Roll.random_from ["titanic","fucking colossal","gargantuan","tremendously thick",
#         "fucking titanic","massively titanic","unbelievably fucking titanic"]
#     end
#   end
#
#   # === Dragon Cock Specific Descriptions ======================================
#
#   def ridge_comparator
#     case @size
#       when 0..120 then "pencil"
#       when 120..160 then "finger"
#       when 160..240 then "inch"
#       when 240..300 then "inch and a half"
#       when 300..400 then "two inch"
#       when 400..500 then "three inch"
#       when 500..600 then "four inch"
#       else raise "This dragon's cock is way too big."
#     end
#   end
#
#   # === Demon Cock Specific Descriptions =======================================
#
#   def knob_comparator
#     width_comparator @body.knob_height
#   end
#
#   def knob_comparators
#     width_comparator_plural @body.knob_height
#   end
#
# end
# Roll.random_from ["unholy","demonic","infernal","satanic","corrupt",
#   "blasphemous","cursed","accursed"]
