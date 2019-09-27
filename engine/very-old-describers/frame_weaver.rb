class Loom::FrameWeaver
  include Language

  def initialize actor
    @body = actor.body
    @frame = @body.frame
  end

  def find_value token
    case token
      when "[F|5'10]" then height_measurement
      when "[F|5 foot 10 inches]" then english_height_measurement(false)
      when "[F|5 feet 10 inches]" then english_height_measurement(true)
      when "[F|180lb]" then "#{@frame[:weight]} pound"
      when "[F|180lbs]" then "#{@frame[:weight]} pounds"
      when "[F|looks strong]" then descriptive_phrase
      when "[F|strong]" then descriptive_word
      when "[F|a strong]" then a_an descriptive_word
      when "[F|brown]" then brown
      when "[F|a brown]" then a_an brown
      when "[F|golden]" then golden
      when "[F|a golden]" then a_an golden
      when "[F|ebony]" then ebony
      when "[F|an ebony]" then a_an ebony
    end
  end

private

  def height_measurement
    return "#{height} inch" if @frame[:height] < 24

    feet = @frame[:height] / 12
    inches = @frame[:height] % 12
    "#{feet}'#{inches}"
  end

  def english_height_measurement plural
    five = number_to_english(@frame[:height] / 12)
    ten = number_to_english(@frame[:height] % 12)
    foot = plural ? "feet" : "foot"

    (ten == "zero") ? "#{five} feet" : "#{five} #{foot} #{ten} inches"
  end

  # === Skin Colors ============================================================

  def ebony
    return human_skin_word if @frame[:skin_color] == "Human"
    return black_skin_word if @frame[:skin_color] == "Black"
    return red_skin_word if @frame[:skin_color] == "Red"
    raise "Indescribable Skin Color: #{@frame[:skin_color]}"
  end

  def human_skin_word
    Roll.random_from case @frame[:skin_shade]
      when 1 then ["ebony","deep mahogany","dark umber","dark bronze","coffee"]
      when 2 then ["golden brown","russet brown","bronze","deep amber","copper"]
      when 3 then ["golden","copper","amber","light brown","honey"]
      when 4 then ["light amber","pale","tawny","light golden","pale honey"]
      when 5 then ["very pale","alabaster","ivory","porcelain"]
    end
  end


  def red_skin_word
    Roll.random_from case @frame[:skin_shade]
      when 1 then ["deep crimson","dark red"]
      when 2 then ["garnet","maroon","blood red"]
      when 3 then ["red","ruby red"]
      when 4 then ["pink","dusty pink"]
      when 5 then ["light pink","bright pink"]
    end
  end



  # No shade, assume completely black like drow skin.
  def black_skin_word
    Roll.random_from ["black","jet black","blue black","midnight black"]
  end

  # === Fur Colors =============================================================

  def brown
    case @frame[:fur_color]
      when "Brown" then brown_fur_word
      when "Grey" then grey_fur_word
      when "Red" then red_fur_word
      else raise "Indescribable Skin Color: #{@frame[:skin_color]}"
    end
  end

  def brown_fur_word
    Roll.random_from case @frame[:fur_shade]
      when 1 then ["dark umber","dark bronze","coffee","chocolate"]
      when 2 then ["deep amber","russet brown","bronze","walnut"]
      when 3 then ["amber","golden brown","chestnut"]
      when 4 then ["light amber","tawny","light golden","pale honey"]
      when 5 then ["blond","platinum blond","flaxen"]
    end
  end

  def grey_fur_word
    Roll.random_from case @frame[:fur_shade]
      when 1 then ["black","jet black","sable"]
      when 2 then ["iron gray","smoke","lead gray"]
      when 3 then ["gray","stone gray","salt and pepper"]
      when 4 then ["ash gray","light gray"]
      when 5 then ["white","bright white","silver"]
    end
  end

  def red_fur_word
    Roll.random_from case @frame[:fur_shade]
      when 1 then ["mahogany","dark red"]
      when 2 then ["garnet","maroon"]
      when 3 then ["red","auburn"]
      when 4 then ["copper","light ginger"]
      when 5 then ["strawberry blond"]
    end
  end

  # === Scale Colors ===========================================================

  def golden
    Roll.random_from case @frame[:scale_color]
      when "Red" then ["blood red","crimson","garnet","ruby"]
      when "Gold" then ["golden"]
      when "Green" then ["emerald","jade"]
      when "Blue" then ["sapphire"]
      when "Purple" then ["purple","violet"]
      when "Black" then ["black"]
      when "Grey" then ["ash","slate"]
    end
  end

  # === Weight Phrases =========================================================

  def descriptive_phrase
    debug = case @body.bmi
      when 0..13 then emaciated_phrase
      when 14..17 then very_thin_phrase
      when 18..21 then thin_phrase
      when 22..26 then average_phrase
      when 27..31 then thick_phrase
      when 32..36 then heavy_phrase
      else massive_phrase
    end

    "#{debug} (#{@body.bmi})"
  end

  def emaciated_phrase
    Roll.random_from([
      "is lean to the point of looking emaciated",
      "is severely malnourished looking",
      "is exceedingly thin",
      "is incredibly thin",
      "is extremely thin, skeletal even",
      "looks drawn and thin",
      "looks drawn, sickly, and gaunt",
      "looks gaunt and sickly",
      "looks unhealthy and gaunt, nearing starvation",
      "has a exceedingly thin, almost skeletal body",
    ])
  end

  def very_thin_phrase
    Roll.random_from([
      "is very thin",
      "is very skinny",
      "is a bit bony",
      "is a bit scrawny looking",
      "looks fragile",
      "looks delicate",
      "looks ethereal",
      "has a very thin figure",
      "has a small, fragile physique",
    ])
  end

  def thin_phrase
    Roll.random_from([
      "is thin",
      "is slim",
      "is slight",
      "is thin, and wiry",
      "is lanky",
      "is slender",
      "is slender and bird like",
      "has a tight, wiry physique",
      "has a thin, slight physique",
    ])
  end

  def average_phrase
    Roll.random_from([
      "is strong but slender",
      "looks strong and firm",
      "looks healthy",
      "looks firm and healthy",
      "has a firm, healthy body",
      "has a firm, healthy physique",
    ])
  end

  def thick_phrase
    Roll.random_from([
      "is muscular",
      "is strong",
      "is very strong",
      "looks very strong",
      "looks very athletic",
      "has a well muscled physique",
    ])
  end

  def heavy_phrase
    Roll.random_from([
      "is very muscular",
      "looks very muscular",
      "has a very muscular physique",
      "has a very muscular, body builder's physique",
    ])
  end

  def massive_phrase
    Roll.random_from([
      "is extremely muscular",
      "is incredibly muscular",
      "is ridiculously muscular",
      "is exceedingly muscular",
      "is massively built",
      "has bulging muscles all over [his] body",
      "has an incredibly muscular figure",
    ])
  end



  # === Weight Words ===========================================================

  def descriptive_word
    debug = case @body.bmi
      when 0..13 then emaciated_word
      when 14..17 then very_thin_word
      when 18..21 then thin_word
      when 22..26 then average_word
      when 27..31 then thick_word
      when 32..36 then heavy_word
      else massive_word
    end

    "#{debug} (#{@body.bmi})"
  end

  def emaciated_word
    Roll.random_from([
      "emaciated",
      "malnourished",
      "severely malnourished",
      "drawn, sickly",
      "exceedingly thin",
      "incredibly thin",
      "extremely thin",
      "skeletal",
      "gaunt and sickly",
      "drawn and thin",
      "unhealthy and gaunt",
    ])
  end

  def very_thin_word
    Roll.random_from([
      "very thin",
      "skinny",
      "fragile",
      "delicate",
      "ethereal",
    ])
  end

  def thin_word
    Roll.random_from([
      "thin",
      "slender",
      "slim",
      "slight",
      "wiry",
      "lanky",
      "sinewy",
    ])
  end

  def average_word
    Roll.random_from([
      "strong but slender",
      "strong, firm",
      "healthy",
      "firm",
      "athletic",
    ])
  end

  def thick_word
    Roll.random_from([
      "muscular",
      "strong",
      "well built",
      "burly",
      "powerful",
    ])
  end

  def heavy_word
    Roll.random_from([
      "very muscular",
      "very strong",
      "body builder like",
      "hulking",
    ])
  end

  def massive_word
    Roll.random_from([
      "extremely muscular",
      "massively built",
      "monstrously muscular",
      "exceedingly muscular",
      "ridiculously muscular",
    ])
  end

end
