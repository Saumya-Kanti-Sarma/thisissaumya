import React, { useState } from 'react'
import styles from "./styles.module.css";
import Data from './Data';
import { Link } from 'react-router-dom';
const Projects = () => {
  return (
    <div className='base-divs'>
      <main className={styles.mainArea}>
        <div className={styles.searchArea}>
          <input type="text" name="searchBox" className={styles.searchBox} placeholder='Search project here...' />
          <button className={styles.searchBtn}><img src="/icons/search.svg" alt="" /></button>

        </div>
        <div className={styles.contentArea}>
          {
            Data.map((item, index) => (
              <div className={styles.content} key={index}>
                <img src={`/images/projects/${Data[index].image}`} alt="" />
                <Link to={Data[index].link}><h1>{Data[index].title}</h1></Link>
              </div>
            ))
          }
        </div>
      </main>
    </div>
  )
}

export default Projects
