import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <div><p>{text} {value}</p></div>
  )
  
}

const Statistics = ({good, bad, neutral}) => {
  if (good + bad + neutral === 0){
    return (
    <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="No feedback given" value ="" />
    </div>
      
    )
  }

  const average = () => ( good - bad ) / ( good + bad + neutral)

  const total = () => good + bad + neutral

  const positive = () => good*100 / total()
  
  return(
    <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="average" value ={average()} />
      <StatisticLine text="total" value ={total()} />
      <StatisticLine text="positive" value ={positive()} />
    </div>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick = {() => setGood(good + 1)}>good</button>
      <button onClick = {() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick = {() => setBad(bad + 1)}>bad</button>
      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
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