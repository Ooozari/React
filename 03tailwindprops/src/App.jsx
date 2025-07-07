import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  const cardDetail = [
    {
      name: 'Uzair',
      year: 2019,
      btnText: 'Find more',
    },
    {
      name: 'John',
      year: 2021,
      btnText: 'Learn more',
    },
    {
      name: 'Kay',
      year: 2024,
      btnText: 'Read more',
    }]
  return (
    <>
    {cardDetail.map((card) => (
        <Card
          name={card.name}
          year={card.year}
          btnText={card.btnText}
        />
      ))}      
    </>
  )
}

export default App
