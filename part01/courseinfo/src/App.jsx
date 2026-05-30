import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  // State to store the index of the currently displayed anecdote
  const [selected, setSelected] = useState(0)

  // NEW: State to store the votes for each anecdote.
  // Initialize with an array of zeros matching the length of anecdotes array.
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  // Event handler: Generate a random number
  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  // NEW: Event handler for voting
  const handleVoteClick = () => {
    // 1. Create a copy of the state array (Immutability rule)
    const newVotes = [...votes]
    
    // 2. Increment the vote for the currently displayed anecdote
    newVotes[selected] += 1
    
    // 3. Update the state with the new copied array
    setVotes(newVotes)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      
      {/* NEW: Display the number of votes for the current anecdote */}
      <p>has {votes[selected]} votes</p>
      
      {/* NEW: Button to trigger the vote handler */}
      <button onClick={handleVoteClick}>vote</button>
      
      <button onClick={handleRandomClick}>next anecdote</button>
    </div>
  )
}

export default App