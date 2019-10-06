class Loom::Weaver
  include Language

  def initialize context
    @actor = context[:actor]
  end

  def resolve template
    working = true
    while working
      match = template.match /\[[^\]]+\]/
      if match.present?
        template = template.sub(match[0], find_value(match[0]))
      else
        working = false
      end
    end
    template
  end

private

  def find_value token

    if token.starts_with? "[C|"
      value = cock_weaver.find_value(token)
      return value if value.present?
    end

    if token.starts_with? "[F|"
      value = frame_weaver.find_value(token)
      return value if value.present?
    end

    case token
      when "[Actor]"      then @actor.first_name
      when "[Actor's]"    then @actor.first_name_possessive
      when "[his]"        then @actor.his
      when "[His]"        then @actor.his.titlecase
      when "[him]"        then @actor.him
      when "[Him]"        then @actor.him.titlecase
      when "[He]"         then @actor.he.titlecase
      when "[he]"         then @actor.he
      when "[elf]"        then @actor.race.name
      when "[unholy]"     then random_unholy_adjective
      when "[Male Demon]" then random_male_demon_name
      else raise "Unrecognized replacement token : #{token}"
    end
  end

  def cock_weaver
    @cock_weaver ||= Loom::CockWeaver.new(@actor)
  end

  def frame_weaver
    @frame_weaver ||= Loom::FrameWeaver.new(@actor)
  end

  def random_unholy_adjective
    Roll.random_from ["unholy","demonic","infernal","satanic","corrupt",
      "blasphemous","cursed","accursed"]
  end

  def random_male_demon_name
    Roll.random_from ["Abaddon","Baal","Baphomet","Behemoth","Lucifer",
      "Maldrasen","Mephistopheles","Satan"]
  end

end
