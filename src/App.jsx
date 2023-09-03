// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Nav from './components/nav'
import CustomRotes from "../src/routes/CustomRotes"
import { BrowserRouter } from 'react-router-dom'

function App() {
  


  return (
    <>
  
  <BrowserRouter>

  <Nav/>
  <CustomRotes/>

  
  </BrowserRouter>
 


  
    </>
  )
}

export default App
