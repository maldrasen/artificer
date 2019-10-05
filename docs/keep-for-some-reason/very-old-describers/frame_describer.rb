class Bodies::Describers::FrameDescriber
  include Language

  def initialize body
    @body = body
  end

  def full_description
    description = race_description
    description << " "+FrameDescription.select_at_random(@body).text

    Loom::Weaver.new(actor: @body.character).resolve(description)
  end

private

  # Not really sure if I can think of another way to phrase this. Might look
  # into adding more variety later.
  def race_description
    race = @body.character.race
    "[Actor] is #{a_an race.name}, one of a race of #{race.description}."
  end

end
