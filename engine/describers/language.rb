
  # This is a rather complex method that takes a measurement and returns a
  # phrase describing that measurement in inches or feet.
  #
  #   Number: The number of inches
  #   Part: A number 0-9, represents a tenth of an inch.
  #   Plural: Use feet and inches, or foot and inch.
  #
  # This is used mostly my the CockDescriber, but I could see it being used
  # elsewhere too.
  #
  def rational_number_to_standard_units number, part, plural
    inch = (plural && number != 1) ? "inches" : "inch"
    foot = (plural && number != 12) ? "feet" : "foot"

    if part > 6
      inch = "inches" if inch == "inch" && plural
    end

    if number == 0
      return "three quarters of an inch" if part > 6
      return "a half an inch" if part > 4
      return "a quarter of an inch" if part > 1
      return "a fraction of an inch"
    end

    if number < 6
      return "#{number_to_english(number)} and three quarter #{inch}" if part > 6
      return "#{number_to_english(number)} and a half #{inch}" if part > 4
      return "#{number_to_english(number)} and a quarter #{inch}" if part > 1
      return "#{number_to_english(number)} #{inch}"
    end

    if number < 12
      return "#{number_to_english(number)} and a half #{inch}" if part > 4
      return "#{number_to_english(number)} #{inch}"
    end

    if number == 12 && Roll.random(1,2) == 1
      return "one foot"
    end

    if number < 18
      return "#{number_to_english(number)} and a half #{inch}" if part > 4
      return "#{number_to_english(number)} #{inch}"
    end

    return Roll.random_from([
      "eighteen #{inch}",
      "foot and a half"
    ]) if number == 18 && !plural

    return Roll.random_from([
      "eighteen #{inch}",
      "a foot and a half"
    ]) if number == 18

    if number >= 21 && number < 24
      return  "#{number} #{inch}"
    end

    return Roll.random_from([
      "#{number} #{inch}",
      "two #{foot}"
    ]) if number == 24

    return Roll.random_from([
      "#{number} #{inch}",
      "two and a half #{foot}"
    ]) if number == 30

    return Roll.random_from([
      "#{number} #{inch}",
      "three #{foot}"
    ]) if number == 36

    "#{number} #{inch}"
  end

  # Because you sometimes need to compare the size of round things.
  def width_comparator width
    if width < 0.2
      return Roll.random_from ["pea","peanut","pearl"]
    end
    if width >= 0.2 && width < 0.5
      return Roll.random_from ["olive","acorn","cherry","grape","marble","cranberry"]
    end
    if width < 0.5
      return Roll.random_from ["olive","acorn","cherry","grape"]
    end
    if width >= 0.5 && width < 1
      return Roll.random_from ["walnut","cherry tomato"]
    end
    if width >= 1 && width < 1.5
      return Roll.random_from ["strawberry","marshmallow"]
    end
    if width >= 1.5 && width < 2
      return Roll.random_from ["golf ball","lime","small tomato","chicken egg"]
    end
    if width >= 2 && width < 2.5
      return Roll.random_from ["tennis ball","pool ball","plum","tomato"]
    end
    if width >= 2.5 && width < 3
      return Roll.random_from ["baseball","small fist","large tomato"]
    end
    if width >= 3 && width < 3.5
      return Roll.random_from ["peach","lemon","fist"]
    end
    if width >= 3.5 && width < 4
      return Roll.random_from ["softball","small apple","big fist"]
    end
    if width >= 4 && width < 5
      return Roll.random_from ["orange","apple","small onion"]
    end
    if width >= 5 && width < 6
      return Roll.random_from ["onion","large apple","bell pepper"]
    end
    if width >= 6 && width < 7
      return Roll.random_from ["mango","large onion","grapefruit"]
    end
    if width >= 7 && width < 8
      return Roll.random_from ["large grapefruit","football"]
    end
    if width >= 8 && width < 9
      return Roll.random_from ["volleyball","bowling ball","soccer ball"]
    end
    if width >= 9 && width < 10
      return Roll.random_from ["basketball","cabbage"]
    end
    if width >= 10 && width < 12
      return Roll.random_from ["cantaloupe","small melon","small coconut"]
    end
    if width >= 12 && width < 15
      return Roll.random_from ["head of lettuce","coconut"]
    end
    if width >= 15 && width < 18
      return Roll.random_from ["pineapple","large coconut"]
    end
    if width >= 18 && width < 22
      return Roll.random_from ["honeydew melon","small watermelon"]
    end
    if width >= 22 && width < 30
      return Roll.random_from ["pumpkin","watermelon"]
    end
    if width >= 30
      return Roll.random_from ["beach ball"]
    end
  end

  # Because you sometimes need to compare the size of round things... in plural!
  # I wish I could think of a better way to do this rather than just copying and
  # editing the list, but plurals like "heads of lettuce" make it tricky.
  def width_comparator_plural width
    if width < 0.2
      return Roll.random_from ["peas","peanuts","pearls"]
    end
    if width >= 0.2 && width < 0.5
      return Roll.random_from ["olives","acorns","cherries","grapes","marbles","cranberries"]
    end
    if width >= 0.5 && width < 1
      return Roll.random_from ["walnuts","cherry tomatoes"]
    end
    if width >= 1 && width < 1.5
      return Roll.random_from ["strawberries","marshmallows"]
    end
    if width >= 1.5 && width < 2
      return Roll.random_from ["golf balls","limes","small tomatoes","chicken eggs"]
    end
    if width >= 2 && width < 2.5
      return Roll.random_from ["tennis balls","pool balls","plums","tomatoes"]
    end
    if width >= 2.5 && width < 3
      return Roll.random_from ["baseballs","small fists","large tomatoes"]
    end
    if width >= 3 && width < 3.5
      return Roll.random_from ["peaches","lemons","fists"]
    end
    if width >= 3.5 && width < 4
      return Roll.random_from ["softballs","small apples","big fists"]
    end
    if width >= 4 && width < 5
      return Roll.random_from ["oranges","apples","small onions"]
    end
    if width >= 5 && width < 6
      return Roll.random_from ["onions","large apples","bell peppers"]
    end
    if width >= 6 && width < 7
      return Roll.random_from ["mangoes","large onions","grapefruits"]
    end
    if width >= 7 && width < 8
      return Roll.random_from ["large grapefruits","footballs"]
    end
    if width >= 8 && width < 9
      return Roll.random_from ["volleyballs","bowling balls","soccer balls"]
    end
    if width >= 9 && width < 10
      return Roll.random_from ["basketballs","cabbages"]
    end
    if width >= 10 && width < 12
      return Roll.random_from ["cantaloupes","small melons","small coconuts"]
    end
    if width >= 12 && width < 15
      return Roll.random_from ["heads of lettuce","coconuts"]
    end
    if width >= 15 && width < 18
      return Roll.random_from ["pineapples","large coconuts"]
    end
    if width >= 18 && width < 22
      return Roll.random_from ["honeydew melons","small watermelons"]
    end
    if width >= 22 && width < 30
      return Roll.random_from ["pumpkins","watermelons"]
    end
    if width >= 30
      return Roll.random_from ["beach balls"]
    end
  end

end
