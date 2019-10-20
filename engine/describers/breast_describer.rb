class Bodies::Describers::BreastDescriber
  include Language

  def initialize body
    @body = body
  end

  def full_description
    description = BreastDescription.select_at_random(@body).text
    Loom::Weaver.new(actor: @body.character).resolve(description)
  end

private

  def word_for_breasts
    Roll.random_from ['breasts','tits']
  end

  def word_for_breast
    Roll.random_from ['breast','breast','breast','tit','tit','tit','boob']
  end

  # TODO: Right now this is just generating random values so we can see how
  # they work in the generated descriptions. This is going to have to produce
  # words that describe a character's skin or fur. We should move this into a
  # different class
  def skin_adjective
    Roll.random_from ["","","","","scaly","furry","fuzzy","alabaster",
      "tan","pale skinned","dark skinned"]
  end

  def describe_multiple_breasts

    bottom_size = @breast_size / 2
    row_count = number_to_english(@breast_count / 2)
    size_top = breast_size_comparative_singular
    size_bottom = breast_size_comparative_singular(@breast_size / 2)
    roll = Roll.random 1,2

    if roll == 1
      return "#{@first_name} has #{row_count} rows of "+
        "#{word_for_breasts}. The top row of #{word_for_breasts} are the "+
        "largest, about #{size_top} sized, and get progressively smaller "+
        "until they're about as big as #{a_an size_bottom}. #{@his.titlecase} "+
        "#{breast_size_adjective} #{word_for_breasts} are all tipped with "+
        "#{describe_nipples_short}."
    end

    if roll == 2
      return "#{@first_name} has a total of "+
        "#{number_to_english(@breast_count)} #{word_for_breasts}, arranged on "+
        "#{@his} chest in #{row_count} rows. "+
        "#{@his.titlecase} top row of #{word_for_breasts} are the "+
        "largest, easily #{size_top} sized. They grow smaller down "+
        "#{@his} chest until they're each as large as "+
        "#{a_an size_bottom}. #{@his.titlecase} #{breast_size_adjective} "+
        "#{word_for_breasts} are tipped with #{describe_nipples_short}."
    end
  end


  # TODO: We probably need to separate out several different versions of each
  # breast description for size. For now though we can just have one version
  # each and extend these later. We don't want to get bogged down in
  # descriptions.

  def describe_flat_breasts

    she = @he.titlecase
    her = @his.titlecase
    furry = skin_adjective
    phrases = []

    if @body.bmi <= 20
      phrases << "#{her} #{furry} chest is completely flat"
      phrases << "#{her} #{furry} chest is almost completely flat"
      phrases << "#{her} #{furry} chest is flat and boy-like"
      phrases << "#{she} has a flat, boy-like chest"
      phrases << "#{she} has a slender, boyish chest"
    end

    if @body.bmi <= 28 && @body.bmi > 20
      phrases << "#{her} #{furry} lean, muscular chest is flat and boy-like"
      phrases << "#{her} #{furry} chest is muscular and completely flat"
      phrases << "#{her} muscular chest is completely flat"
      phrases << "#{she} has a flat muscular chest"
      phrases << "#{she} has a lean flat chest"
    end

    if @body.bmi > 28
      phrases << "#{her} #{furry} chest is chiseled and muscular"
      phrases << "#{her} #{furry} chest is chiseled and muscular"
      phrases << "#{she} has no breasts, but has large muscular pecks instead"
      phrases << "#{she} has a chest like a bodybuilder"
      phrases << "#{she} has tight, muscular pecks"
      phrases << "#{she} has pecks that a bodybuilder would envy"
      phrases << "#{she} has muscular pecks that a bodybuilder would envy"
    end

    "#{Roll.random_from(phrases)}, with #{describe_nipples_short}."
  end


  def breast_size_comparative_singular size=nil
    size = @breast_size if size.nil?

    Roll.random_from case size
      when 0..5    then ["golf ball","half a lemon"]
      when 6..15   then ["lemon","tennis ball","half an apple","half an orange"]
      when 16..25  then ["baseball","orange","peach","apple","fist"]
      when 26..40  then ["grapefruit","softball","small melon"]
      when 41..60  then ["melon","large melon","half a watermelon","pumpkin"]
      when 61..80  then ["bowling ball","basketball"]
      when 81..100 then ["watermelon","beachball"]
      else ["[TODO: Breasts are too big > #{size}]"]
    end
  end

  def breast_size_adjective
    Roll.random_from case @breast_size
      when 0..5    then ["flat","miniature","boyish","undeveloped"]
      when 6..15   then ["tiny","little","very small","petite"]
      when 16..25  then ["little","small","cute","modest"]
      when 26..40  then ["average","plump","shapely","full"]
      when 41..60  then ["large","big","fat"]
      when 61..80  then ["very large","huge","very big"]
      when 81..90  then ["gigantic","immense","giant","enormous","massive"]
      when 91..100 then ["titanic","colossal","gargantuan","monstrous","tremendous"]
      else ["[TODO: Breasts are too big > #{size}]"]
    end
  end

end
