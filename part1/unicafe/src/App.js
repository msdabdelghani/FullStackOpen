import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const average = () => good + bad + neutral === 0 ? 0 : ( good - bad ) / ( good + bad + neutral)

  const total = () => good + bad + neutral

  const positive = () => total() === 0 ? 0 : good*100 / total()

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick = {() => setGood(good + 1)}>good</button>
      <button onClick = {() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick = {() => setBad(bad + 1)}>bad</button>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total()}</p>
      <p>average {average()} </p>
      <p>positive {positive() }</p>
    </div>
  )
}

export default App


/*
Expand your application so that it shows more statistics about the gathered feedback: 
the total number of collected feedback, 
the average score (good: 1, neutral: 0, bad: -1) and 
the percentage of positive feedback.
*/