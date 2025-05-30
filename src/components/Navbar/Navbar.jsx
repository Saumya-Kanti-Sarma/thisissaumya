import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"
const Navbar = () => {
  const [menu, setMenu] = useState("-100%");

  function handleMenuToggle() {
    setMenu(() => menu == "-100%" ? "5px" : "-100%");
  }


  // generated by deepSeek and I hav'nt understood it
  function handleScrolling(sectionIndex, extra) {
    const mainWrapper = document.querySelector('.main-wraper');
    const sectionHeight = window.innerHeight;
    const scrollPosition = sectionIndex * sectionHeight + extra;

    mainWrapper.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
    setMenu(() => menu == "5px" ? "-100%" : "-100%")
  }

  return (
    <>
      <nav className={styles.nav}>
        <button
          className={styles.indBtn1}
          onClick={() => handleScrolling(0, 0)}>Saumya Sarma</button>
        <section className={styles.navSection}>
          <button onClick={() => handleScrolling(1, 100)}>Meet Saumya</button>
          <button onClick={() => handleScrolling(2, 200)}>Blogs</button>
          <button onClick={() => handleScrolling(3, 300)}>Heros</button>
        </section>
        <button className={styles.indBtn2}
          onClick={() => handleScrolling(4, 400)}
        >Social Media</button>
        <button
          onClick={handleMenuToggle}
          className={styles.indBtn3}>
          <img src={`/icons/menu.svg`} />
        </button>
      </nav>
      <div className={styles.menu} style={{ right: `${menu}` }}>
        <button
          onClick={handleMenuToggle}
          className={styles.menuCrossBtn}>
          <img src={`/icons/cross.svg`} />
        </button>
        <button className={styles.menuBtn} onClick={() => handleScrolling(1, 100)}>Meet Saumya</button>
        <button className={styles.menuBtn} onClick={() => handleScrolling(2, 200)}>Projects</button>
        <button className={styles.menuBtn} onClick={() => handleScrolling(3, 300)}>Heros</button>
        <button className={styles.menuBtn} onClick={() => handleScrolling(4, 400)}>Social Media</button>
      </div>
    </>
  )
}

export default Navbar
