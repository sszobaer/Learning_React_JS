import React from 'react'
import UseStateHook from './Practice/UseStateHook'
import FormHandling from './Practice/FormHandling'
import CardManagement from './Practice/CardManagement'
import Api from './Practice/Api'
import Navbar from './Practice/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <UseStateHook/>
      <FormHandling/>
      <CardManagement/>
      <Api/>  
    </div>
  )
}

export default App
