const Header = (props) => {

  return ( <h1>{props.title}</h1> );

};

 

const Part = (props) => {

  return ( <p>{props.parts} {props.numbers}</p> );

};

 

const Content = (props) => {

 

  return (

    <>

    { props.parts.map( part =>

       <Part key={part.id} parts={part.name} numbers={part.exercises} />

      )

    }

    </>

  );

};

 

const Total = (props) => {

  const sumExercises = props.parts.reduce((acc, current) => (acc + current.exercises), 0);

  return ( <b>Total of {sumExercises} exercises</b> )

}

 

const Course = (props) => {

    const {course} = props

    return (

      <>

        <Header title={course.name} />

        <Content parts={course.parts} />

        <Total parts={course.parts} />

      </>

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