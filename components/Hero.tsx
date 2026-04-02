"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { heroSlides } from '@/lib/data';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const total = heroSlides.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);
  const slide = heroSlides[current];

  const textLines = slide.mainText.split('\n');

  const content = (
    <div className={styles.heroContentWrapper}>
      <div className={styles.textContent}>
        <p className={styles.heroSubHeading}>{slide.shadowText}</p>
        <h1 className={styles.heroTitle}>
          {textLines.map((line, i) => (
            <React.Fragment key={i}>{line}{i < textLines.length - 1 && <br />}</React.Fragment>
          ))}
        </h1>
      </div>
      <div className={styles.carouselControls}>
        <button onClick={prev} className={`${styles.carouselBtn} ${styles.prevBtn}`} id="hero-prev" aria-label="Previous slide">
          <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor"><path d="M368 505.6c-8 0-16-3.2-22.4-8l-240-225.6c-6.4-6.4-9.6-14.4-9.6-24 0-8 3.2-16 9.6-22.4l240-224c12.8-11.2 33.6-11.2 44.8 1.6 12.8 12.8 11.2 32-1.6 44.8l-214.4 201.6 216 203.2c12.8 11.2 12.8 32 0 44.8-4.8 4.8-14.4 8-22.4 8z"/></svg>
        </button>
        <button onClick={next} className={`${styles.carouselBtn} ${styles.nextBtn}`} id="hero-next" aria-label="Next slide">
          <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor"><path d="M144 505.6c8 0 16-3.2 22.4-8l240-225.6c6.4-6.4 9.6-14.4 9.6-22.4s-3.2-16-9.6-22.4l-240-224c-12.8-12.8-32-12.8-44.8 0s-11.2 32 1.6 44.8l214.4 201.6-216 203.2c-12.8 11.2-12.8 32 0 44.8 6.4 4.8 14.4 8 22.4 8z"/></svg>
        </button>
      </div>
    </div>
  );

  return (
    <section className={styles.hero} id="hero">
      {/* Yellow left panel */}
      {slide.link ? <Link href={slide.link} target="_blank" className={styles.heroContentLink}>{content}</Link> : content}

      {/* Decorative stripes */}
      <div className={styles.stripeMain} />
      <div className={styles.stripeThin} />

      {/* Image panel */}
      <div
        className={styles.heroImageWrapper}
        style={{ backgroundImage: `url(${slide.imageUrl})` }}
      >
        {current === 0 && (
          <div className={styles.heroBadge}>
             {/* <div className={styles.badgeTop}>BUDDY MEAL</div>
             <button className={styles.badgeBottom} onClick={() => alert('Thanks for talking to us!')}>
               Talk to us
             </button> */}
             <button className={styles.badgeTop} onClick={() => alert('Thanks for talking to us!')}>
               Talk To Us
             </button> 
          </div>
        )}
      </div>

      {/* Slide dots */}
      <div className={styles.slideDots}>
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
