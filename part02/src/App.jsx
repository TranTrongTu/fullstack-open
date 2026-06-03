import { useState } from 'react'

const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

// NEW COMPONENT: Calculates and displays the total number of exercises
const Total = ({ parts }) => {
  // Use the array reduce method to sum up all exercises
  const totalAmount = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <p><strong>total of {totalAmount} exercises</strong></p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      {/* Pass the parts array down to the Total component */}
      <Total parts={course.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App