import React from 'react'
import ContactForm from './components/ContactForm'
import TaskList from './components/TaskList'
import PokeFetch from './components/PokeFetch'

const App = () => {
  return (
    <>
      <section>
        <TaskList />
      </section>
      <section>
        <ContactForm />
      </section>
      <section>
        <PokeFetch pokemonNumber={Math.floor(Math.random() * 1000)} />
      </section>
    </>
  )
}

export default App