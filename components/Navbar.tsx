"use client";

import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBackground}></div>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
            <Link href="/" onClick={(e) => scrollToSection(e, 'hero')}>
              <div className={styles.logoRedBox}>
                <img 
                  src="https://mcdindia.com/wp-content/uploads/2020/01/m-logo-big.svg" 
                  alt="McDelivery Logo" 
                  className={styles.logoImg}
                />
              </div>
            </Link>
        </div>
        <div className={styles.navLinks}>
          <a href="#menu" onClick={(e) => scrollToSection(e, 'services')} className={styles.navItem}>Menu</a>
          {/* <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className={styles.navItem}>What We Do</a> */}
          <a href="#restaurants" onClick={(e) => scrollToSection(e, 'restaurants')} className={styles.navItem}>Restaurants</a>
          <a href="#mcdelivery" onClick={(e) => scrollToSection(e, 'mcdelivery')} className={styles.navItem}>Services</a>
          <a href="#news" onClick={(e) => scrollToSection(e, 'news')} className={styles.navItem}>News</a>
          <a href="#subscribe" onClick={(e) => scrollToSection(e, 'subscribe')} className={styles.navItem}>Subscribe</a>
          {/* <Link href="/birthday" className={styles.navItem}>Birthday Party</Link>
          <Link href="/careers" className={styles.navItem}>Careers</Link> */}
        </div>
        <div className={styles.mobileMenuToggle}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
