"use client";

import styles from './McDelivery.module.css';

export default function McDelivery() {
  return (
    <section id="mcdelivery" className={styles.section}>
      <div className={styles.container}>
        {/* Left content */}
        <div className={styles.leftContent}>
          <img
            src="https://mcdindia.com/wp-content/uploads/2020/01/m-logo-big.svg"
            alt="McDelivery"
            width={60}
            height={60}
            className={styles.logo}
          />
          <h1 className={styles.title}>
            Expert Solutions
          </h1>
          <p className={styles.desc}>
            End-to-end professional support to help your business scale—from legal formation and branding to global sourcing.
          </p>

          <p className={styles.verticalsTitle}>Our Core Verticals:</p>
          <div className={styles.verticalsContainer}>
            {/* Legal */}
            <div className={styles.verticalCard}>
              <div className={styles.verticalIcon} style={{ background: '#DA291C' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <span className={styles.verticalText}>Legal & SOP</span>
            </div>

            {/* Branding */}
            <div className={styles.verticalCard}>
              <div className={styles.verticalIcon} style={{ background: '#FFBC0D' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
              </div>
              <span className={styles.verticalText}>Branding</span>
            </div>

            {/* Sourcing */}
            <div className={styles.verticalCard}>
              <div className={styles.verticalIcon} style={{ background: '#00c853' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <span className={styles.verticalText}>Sourcing</span>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className={styles.rightVisual}>
          <img
            src="/images/business_hero.png"
            alt="Business Executive Support"
            className={styles.heroImage}
          />
        </div>
      </div>

      {/* Decorative M */}
      <div className={styles.decoM}>M</div>
    </section>
  );
}
