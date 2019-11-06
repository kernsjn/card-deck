const deck = []

const suit = ['spades', 'diamonds', 'clubs', 'hearts']
const value = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

let j = 0
let i = 52
let card

const main = () => {
  for (let i = 0; i < suit.length; i++) {
    for (let n = 0; n < value.length; n++) {
      card = value[n] + ' of ' + suit[i]
      deck.push(card)
    }
  }
  console.log(deck)

  for (i; i >= 1; i--) {
    j = Math.floor(Math.random() * i)

    const swapper = deck[j]
    deck[j] = deck[i]
    deck[i] = swapper
  }
}

const clickDeal = () => {
  document.querySelector('.cardFlip').textContent = deck.pop()
}

document.addEventListener('DOMContentLoaded', main)

document.querySelector('.clickDeal').addEventListener('click', clickDeal)

// HINTS

// for i from n - 1 down to 1 do:
//   j = random integer (where 0 <= j <= i)
//   swap items[i] with items[j]

// const z = Math.floor(Math.random() * n)
