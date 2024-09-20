import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import logo from '../assets/lejhro_logo.png';
import blueLogo from '../assets/lejhro_logo_blue.png';
import { FaGripLines } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isScrolledDown ? (
        <div className={styles.fixedNavbar}>
          <div className={styles.content}>
            <a href="https://www.lejhro.com/">
              <img src={blueLogo} alt="Logo" className={styles.logo} />
            </a>
            <div style={{display:'flex', alignItems:'center', padding:'20px', gap:'18px'}}>
              <span>Let's Talk</span>
              <FaGripLines className={styles.hiddentoggler} onClick={toggleMenu}/>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.nav}>
          <div className={styles.content}>
            <a href="https://www.lejhro.com/">
              <img src={logo} alt="Logo" className={styles.logo} />
            </a>
            <div className={styles.links}>
              <span>Innovations</span>
              <span>Business services</span>
              <span>Financial services</span>
              <span>Bootcamp</span>
            </div>
            <button className={styles.toggler} onClick={toggleMenu}>
              <FaGripLines />
            </button>
          </div>
          <h2>Blogs</h2>
        </div>
      )}

      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <div className={styles.modal}>
              <div className={styles.modalHeader}>
                <img src={blueLogo} alt="Logo" className={styles.closelogo} />
                <button onClick={toggleMenu}>
                  <ImCross />
                </button>
              </div>
              <div className={styles.sidelinks}>
                <a href="/innovations" className={styles.sidelink}>Innovations</a>
                <a href="http://www.bootcamp.lejhro.com/" className={styles.sidelink} target="_blank" rel="noopener noreferrer">Bootcamp</a>
                <a href="/business-services" className={styles.sidelink}>Business Services</a>
                <a href="/financial-services" className={styles.sidelink}>Financial Services</a>
                <a href="/about" className={styles.sidelink}>About</a>
                <a href="/contact-us" className={styles.sidelink}>Contact Us</a>
                <a href="/blogs" className={styles.sidelink}>Blogs</a>
                <div style={{ display: 'flex', gap: '18px', marginTop: '18px' }}>
                  <a href="https://x.com/lejhro" target="_blank" rel="noopener noreferrer"><FaTwitter className={styles.pages} /> </a>
                  <a href="https://www.facebook.com/lejhro" target="_blank" rel="noopener noreferrer"> <FaFacebook className={styles.pages} /> </a>
                  <a href='https://www.linkedin.com/company/lejhro/' target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.pages} /> </a>
                  <a href='https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ' target="_blank" rel="noopener noreferrer"> <FaYoutube className={styles.pages} /> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
