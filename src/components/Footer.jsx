import React from 'react'
import styles from './Footer.module.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.header}></div>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.section}>
            <h3>Company</h3>
            <a href="/innovations">Innovations</a>
            <a href="/business-services">Business Services</a>
            <a href="/financial-services">Financial services</a>
            <a href="http://www.recruit.lejhro.com/" target="_blank" rel="noreferrer">Lejhro Recruiter</a>
            <a href="/about">About</a>
            <a href="/blogs">Blogs</a>
          </div>
          <div className={styles.section}>
            <h3>Programs</h3>
            <a href="http://www.bootcamp.lejhro.com/" target="_blank" rel="noreferrer">Lejhro Bootcamp</a>
          </div>
          <div className={styles.section}>
            <h3>Support</h3>
            <a href="/contact-us">Contact</a>
            <a href="/terms-of-use">Terms of Use</a>
            <a href="/privacy-statement">Privacy Statement</a>
          </div>
          <div className={styles.section}>
            <h3>Connect with us</h3>
            <div style={{display:'flex', gap:'18px'}}>
              <a href="https://x.com/lejhro" target="_blank"><FaTwitter className={styles.pages}/> </a>
              <a href="https://www.facebook.com/lejhro" target="_blank"> <FaFacebook  className={styles.pages}/> </a>
              <a href='https://www.linkedin.com/company/lejhro/' target="_blank"><FaLinkedin className={styles.pages}/> </a>
              <a href='https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ' target="_blank"> <FaYoutube  className={styles.pages}/> </a>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>© 2024 LEJHRO. All Rights Reserved.</p>
    </div>
  )
}

export default Footer



