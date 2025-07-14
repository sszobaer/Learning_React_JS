import React from 'react'
import UseStateHook from './Practice/UseStateHook'
import FormHandling from './Practice/FormHandling'
import CardManagement from './Practice/CardManagement'
import Api from './Practice/Api'
import Navbar from './Practice/Navbar'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<UseStateHook/>}/>
        <Route path = "/form" element = {<FormHandling/>}/>
        <Route path = "/card" element = {<CardManagement/>}/>
        <Route path = "/api" element = {<Api/>}/>
      </Routes>
    </div>
  )
}
export default App
