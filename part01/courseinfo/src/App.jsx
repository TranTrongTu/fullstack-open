import { useState } from 'react'

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [allClicks, setAll] = useState([]) // list stores L, R, L


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }


  const handleRightClick = () => {
    setAll(allClicks.concat('R')) // must use concat to create new a list -> new address
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      {/*join for rendering: L R L instead of render whole list*/}
      <p>{allClicks.join(' ')}</p> 
    </div>
  )
}
export default App