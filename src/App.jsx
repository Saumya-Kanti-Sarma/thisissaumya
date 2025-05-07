import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home/Home.jsx";
import MeetSaumya from "./pages/MeetSaumya/MeetSaumya.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Heros from "./pages/Heros/Heros.jsx";
const App = () => {
  return (
    <main className='main-wraper'>
      <Navbar />
      <Home />
      <MeetSaumya />
      <Projects />
      <Heros />

    </main>
  )
}

export default App
