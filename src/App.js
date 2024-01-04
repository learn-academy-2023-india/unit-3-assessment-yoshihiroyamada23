import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) we are creating a function called drawCard so we can put conditions
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2)  the code below explains that everytime we draw a card, it is randomized so we don't get the suit and rank in that same order. So the rank and suit are plugged in the system and it randomizes by the .random and the .length plugs in the whole array. in this coding, we are getting 1 card from draw that is why there is a -1. so it is subtracting 1 suit and rank from the array.
    if (hand.indexOf(draw) === -1) {
      // 3)in this coding, we are getting 1 card from draw that is why there is a -1. so it is subtracting 1 suit and rank from the array. this coding explains that we are creating a new array from "hand" and adding new values at the end of the array
      setHand([...hand, draw])
      // 4) this coding explains that we are creating a new array from "hand" and adding new values at the end of the array
    } else if (hand.length !== 52) {
      // 5)the array of hand is checking if it not equal to 52. I believe it will stop drawing when it reaches the end of the draw. draws a card and update the hand
      drawCard()
      // 6)draws a card and update the hand 
    } else {
      // 7)this else statement explains that when the 52 cards have been drawn, it would alert us that "All cards have been dealt"
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    const shuffleArray =[...hand]
    setHand([])
  }

  return (
    <>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
  )
}

export default App
