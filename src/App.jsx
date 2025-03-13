import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import Resources from './components/Resources'
import PageTitle from './components/PageTitle'
import { Route, Routes } from "react-router-dom"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <PageTitle/>
    <Layout/>
    <Resources />
    <Routes> 
      <Route path="/html" element={<Resources category={"html"}/>}> </Route>
      <Route path="/css" element={<Resources category={"css"}/>}> </Route>
      <Route path="/javascript" element={<Resources category={"javascript"}/>}> </Route>
      <Route path="/react" element={<Resources category={"react"}/>}> </Route>
      <Route path="/sanity" element={<Resources category={"headless-cms"}/>}></Route>
    </Routes>
    </>
  )
}

export default App
