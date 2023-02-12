import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(8).fill(0))

  const increment = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints) 
  }
  

  const random = () =>{
    setSelected(Math.floor(Math.random() * 8));
  };

  const maxVotes = Math.max(...points);
  const maxVotedIndex = points.indexOf(maxVotes);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br />
      Has {points[selected]} vote<br />
      <div style={{ display: 'flex'}}>
      <Button onClick={increment} text="vote" />
      <Button onClick={random} text="next anecdote"/>
      </div>
      <h2>Anecdote with most votes</h2>
      {anecdotes[maxVotedIndex]}
    </div>
  )
}

export default App
