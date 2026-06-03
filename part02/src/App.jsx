// Component for rendering a single part
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

// Component for rendering the list of parts (Dynamic rendering)
const Content = ({ parts }) => {
  return (
    <div>
      {/* Loop through the parts array and generate a Part component for each */}
      {/* CRITICAL: Do not forget the unique 'key' attribute */}
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

// Component for the course title
const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>
}

// NEW: The Course component that wraps Header and Content
const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

// The root component provided by the exercise
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