import Person from './components/Person'
import { useState } from 'react'

const Filter = (props) => {
  return (
    <div>
        {props.text} <input value={props.value} onChange={props.onChange}/>
      </div>
  )
}

const PersonForm = (props) => {
  return (
    <>
     <form onSubmit={props.onSubmit}>
        <div>
          {props.nameText} <input value = {props.name} onChange={props.nameChange}/>
        </div>
        <div>
          {props.numberText} <input value = {props.number} onChange={props.numberChange}/>
        </div>
        <div>
          <button type={props.buttonType}>{props.buttonText}</button>
        </div>
      </form>
    </>
  )
}

const Persons = (props) => {
  return (
    <>
      <ul>{props.personsToShow.map(person =>
          <Person key={person.id} person={person} />
          )}
      </ul>
    </>
  )
}

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch,setNewSearch] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }
  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number : newNumber,
      id : persons.length + 1
    }
    const personExist = persons.some(person => person.name === personObject.name);
    if(personExist){
      alert(`${personObject.name} is already added to phonebook`);
    }else {
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text = 'filter shown with' value = {newSearch} onChange = {handleSearchChange}/>
      <h3>add new</h3>
      <PersonForm
        onSubmit = {addPerson}
        nameText = 'name:'
        name = {newName}
        nameChange = {handleNameChange}
        numberText = 'number'
        number = {newNumber}
        numberChange = {handleNumberChange}
        buttonText = 'add'
        buttonType = 'submit'
      />
      <h2>Numbers</h2>
      <Persons personsToShow = {personsToShow}/>
    </div>
  )
}

export default App