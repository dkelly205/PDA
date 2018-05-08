# Testing task 1:

## Carry out static testing on the code below.

### Read through code below and comment on any errors you can spot.

#### Don't correct the errors!


```ruby
class CardGame

  #no attr_readers

  def initialize(suit, value)
    @suit = suit
    @value = value; #don't need the semi-colon
  end

  def checkforAce(card)
#should use underscores between words, dont usually use camel case for methods in ruby
#card has not been initialized
    if card.value = 1  
#needs to be == 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  #should be def instead of dif
  #should be self.highest_card
  # should have a comma between parameters
  if card1.value > card2.value
    return card.name  
#should return card1,
# also name will not exist as it has not been initialized
  else
    card2
#return card2
  end
end
end   # this would end the class
# should use indentation to make code more readable

def self.cards_total(cards)
# function should be indented
  total #should assign that a value
  for card in cards
    total += card.value
    return "You have a total of" + total
#should return it after the end of the for loop so you just get a final value
  end
end

#class should be ended here

```
