"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
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
    <>
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
            <a href="#menu" onClick={(e) => scrollToSection(e, 'menu')} className={styles.navItem}>Menu</a>
            <a href="#restaurants" onClick={(e) => scrollToSection(e, 'restaurants')} className={styles.navItem}>Restaurants</a>
            <a href="#mcdelivery" onClick={(e) => scrollToSection(e, 'mcdelivery')} className={styles.navItem}>Services</a>
            <a href="#news" onClick={(e) => scrollToSection(e, 'news')} className={styles.navItem}>News</a>
            <a href="#subscribe" onClick={(e) => scrollToSection(e, 'subscribe')} className={styles.navItem}>Subscribe</a>
          </div>
          <div className={`${styles.mobileMenuToggle} ${isOpen ? styles.toggleActive : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileOverlay} ${isOpen ? styles.overlayOpen : ''}`}>
        <div className={styles.mobileLinks}>
          <a href="#menu" onClick={(e) => scrollToSection(e, 'menu')} className={styles.mobileNavItem}>Menu</a>
          <a href="#restaurants" onClick={(e) => scrollToSection(e, 'restaurants')} className={styles.mobileNavItem}>Restaurants</a>
          <a href="#mcdelivery" onClick={(e) => scrollToSection(e, 'mcdelivery')} className={styles.mobileNavItem}>Services</a>
          <a href="#news" onClick={(e) => scrollToSection(e, 'news')} className={styles.mobileNavItem}>News</a>
          <a href="#subscribe" onClick={(e) => scrollToSection(e, 'subscribe')} className={styles.mobileNavItem}>Subscribe</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
