require('minitest/autorun')
require_relative('../testing_task_2.rb')

class CardTest < MiniTest::Test

  def setup
    @card1 = Card.new("Diamond", 1)
    @card2 = Card.new("Hearts", 10)
    @cards = [@card1, @card2]
  end

  def test_card_is_ace_or_not
    assert_equal(true, @card1.check_for_ace())
    assert_equal(false, @card2.check_for_ace())
  end

  def test_check_highest_card
    result = Card.highest_card(@card1, @card2)
    assert_equal("Hearts", result)
  end

  def test_cards_total
    assert_equal("You have a total of 11", Card.cards_total(@cards))
  end


end
