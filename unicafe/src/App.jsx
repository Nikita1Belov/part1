import { useState } from 'react'
import Header from './Header'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral
  let average = 0
  let positive = 0
  if(all > 0){
    average = (good - bad) / all
  }
  if(all > 0){
    positive = good / all * 100
  }

  return (
    <div>
      <Header text='give feedback'/>
      <Button name='good' handleClick={() => setGood(good + 1)} />
      <Button name='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button name='bad' handleClick={() => setBad(bad + 1)} />
      <Header text='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App