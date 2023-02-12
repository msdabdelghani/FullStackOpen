import { useState } from 'react'

const StatisticLine = ({stats}) => {
  return (
      <table>
        <tbody>
        {stats.map((statistic, index) => (
          <tr key={index}>
             <td>{statistic.text}</td>
             <td>{statistic.value}</td>
           </tr>     
          ))}
        </tbody>
      </table>
  )
  
}

const Statistics = ({good, bad, neutral}) => {

  const average = () => ( good - bad ) / ( good + bad + neutral)

  const total = () => good + bad + neutral

  const positive = () => good*100 / total()
  const stats = [
    { text:"good",  value :good },
    { text:"neutral",  value :neutral },
    { text:"good",  value :bad }
  ]
  let newStat;
  if (good + bad + neutral === 0){
    newStat = [{text:"No feedback given", value :""}];
  }else{
    newStat = [{text:"average", value :average() },
      {text:"total", value :total() },
      {text:"positive", value :positive() }
    ]
  }

  const updatedStats = [...stats, ...newStat]

  return(
    <div>
      <StatisticLine stats ={updatedStats} />
    </div>
  )
  
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
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
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
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