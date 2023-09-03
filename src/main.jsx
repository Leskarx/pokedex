// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import CustomRotes from "../src/routes/CustomRotes"
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/nav.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Nav/>
    <CustomRotes/>
  </BrowserRouter>
 
  
)
