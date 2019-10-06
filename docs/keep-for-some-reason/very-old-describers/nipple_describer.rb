class Bodies::Describers::NippleDescriber
  include Language

  # --- Nipples ----------------------------------------------------------------

  # The short nipple description is a phrase describing the character's nipples
  # that can be included in another description or used by itself. The phrase
  # will be in a form like:
  #
  #   large nipples
  #   long black nipples
  #   pale nipples the size of her thumbs

  def describe_nipples_short

    color = nipple_shade_string

    # If the character is human sized with nornal nipples then the description
    # sometimes return a comparative size.
    if @nipple_shape == "Normal" && @body.human_sized? && @nipple_size > 2
      roll = Roll.random 1, 12

      return "#{nipple_size_comparative_singular} sized nipples" if roll == 1
      return "#{color}, #{nipple_size_comparative_singular} sized nipples"  if roll == 2
      return "nipples the size of #{nipple_size_comparative_plural}" if roll == 3
      return "#{color} nipples the size of #{nipple_size_comparative_plural}"if roll == 4
    end

    case Roll.random 1,10
      when 1..5  then "#{nipple_size_adjective} nipples"
      when 6..7  then "#{nipple_shade_string} nipples"
      when 8..10 then "#{nipple_size_adjective} #{nipple_shade_string} nipples"
    end
  end


  # ---------------------------------------------------------------------
  # These three nipple size methods only apply to normally shaped nipples
  # ---------------------------------------------------------------------

  def nipple_size_comparative_singular
    Roll.random_from case @nipple_size
      when 2 then ["pea","BB"]
      when 3 then ["raisin","peanut","eraser tip"]
      when 4 then ["pebble","button","good"]
      when 5 then ["acorn","thimble","olive"]
      when 6 then ["dime","marble","grape","penny"]
      when 7 then ["fingertip","cherry"]
      when 8 then ["thumb","quarter","walnut"]
      when 9 then ["strawberry","half dollar","marshmallow","golf ball"]
      else ["[TODO: Nipples bigger than #{@nipple_size}]"]
    end
  end

  def nipple_size_comparative_plural
    Roll.random_from case @nipple_size
      when 2 then ["peas","BBs"]
      when 3 then ["raisins","peanuts","eraser tips"]
      when 4 then ["pebbles","buttons"]
      when 5 then ["acorns","hazelnuts","thimbles","olives"]
      when 6 then ["dimes","marbles","grapes"]
      when 7 then ["#{@his} fingertips","cherries","nickels"]
      when 8 then ["#{@his} thumbs","quarters","walnuts"]
      when 9 then ["strawberries","half dollars","marshmallows","D batteries","shot glasses","golf balls"]
      else ["[TODO: Nipples bigger than #{@nipple_size}]"]
    end
  end

  def nipple_size_adjective
    Roll.random_from case @nipple_size
      when 0 then ["flat","perfectly flat"]
      when 1 then ["tiny","small, cute","miniature","very small"]
      when 2 then ["small","little"]
      when 3 then ["smaller than average sized","smallish"]
      when 4 then ["average sized","wrinkled"]
      when 5 then ["larger than average sized","plump","swollen","wrinkled"]
      when 6 then ["much larger than average sized","sizable","large","plump","big","full","long"]
      when 7 then ["huge","thick","immense","tremendous","very long","long and thick"]
      when 8 then ["monstrously huge","massively long and thick","enormously huge","huge, towering"]
      else ["monstrously colossal","massive, titanic","enormous, gigantic","gargantuan"]
    end
  end

  def nipple_shade_string
    Roll.random_from case @nipple_shade
      when 0 then ["black","dark ebony","extremely dark"]
      when 1 then ["very dark","ebony","nearly black","deep mahogany colored"]
      when 2 then ["dark brown","dark","chocolate colored","rich brown"]
      when 3 then ["brown","bronze colored","copper colored","dark amber"]
      when 4 then ["light brown","deeply flushed","amber"]
      when 5 then ["dark pink","rose colored","flushed","light amber"]
      when 6 then ["pink","lightly flushed","pale amber"]
      when 7 then ["light pink","pale","pale pink","lightly colored"]
      when 8 then ["very pale","nearly completely pale"]
      else ["totally pale","completely pale","extremely pale"]
    end
  end

end
