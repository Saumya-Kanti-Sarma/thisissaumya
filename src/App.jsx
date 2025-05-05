import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from "./pages/Home/Home.jsx";
import MeetSaumya from "./pages/MeetSaumya/MeetSaumya.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Heros from "./pages/Heros/Heros.jsx";
const App = () => {
  return (
    <main className='main-wraper'>
      <Navbar />
      <Home />
      <MeetSaumya />
      <Blogs />
      <Heros />

    </main>
  )
}

export default App
