import React from 'react'
import "./Home.css"
const Home = () => {
  // generated by deepSeek and I hav'nt understood it
  function handleScrolling(sectionIndex, extra) {
    const mainWrapper = document.querySelector('.main-wraper');
    const sectionHeight = window.innerHeight;
    const scrollPosition = sectionIndex * sectionHeight + extra;

    mainWrapper.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });

  }
  return (
    <div className='base-divs Home'>
      <section className="wordsHolder">
        <h1>MY</h1>
        <h1>PORTFOLIO</h1>
        <p >WEBSITE</p>

      </section>
      <button className='HomeNavigateDown' onClick={() => handleScrolling(1, 100)}>↓</button>
    </div>
  )
}

export default Home
