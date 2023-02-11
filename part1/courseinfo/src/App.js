const Header = (props) => {
  return ( <h1>{props.title}</h1> );
};

const Part = (props) => {
  return ( <p>{props.parts} {props.numbers}</p> );
};


const Content = (props) => {

  const reformattedParts = props.parts.map(({ name, exercises }) => ({ name, exercises }));
  
  return (
    <>
    { reformattedParts.map( part => 
       <Part key={part.name} parts={part.name} numbers={part.exercises} />
      )
    }
    </>
  );
};

const Total = (props) => {
  const sumExercises = props.parts.map(({exercises}) => exercises).reduce((acc, current) => acc + current);
  return ( <p>Number of exercises {sumExercises}</p> )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App