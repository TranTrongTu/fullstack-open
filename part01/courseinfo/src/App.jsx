const Hello = () => { // no need to write mutiple times 
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello /> 

    </div>
    
  )
}

export default App