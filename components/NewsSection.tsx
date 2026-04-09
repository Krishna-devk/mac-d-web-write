import React from 'react';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      category: "HIGHLIGHTS",
      title: "Fuel Your Startup Journey — From Idea to Impact",
      desc: "Discover how our AI-powered platform transforms your business idea into a market-ready product with intelligent automation, data-driven insights, and end-to-end development support.",
      image: "https://mcdindia.com/wp-content/uploads/2026/03/sara-banner-digital-1_digital-banner-22.jpg",
      date: "March 2026",
      featured: true,
    },
    {
      id: 2,
      category: "NEWS",
      title: "McCafé Subscription Deal",
      desc: "Save 61% more with the McCafé Subscription. Enjoy your favourite brew every day at an unbeatable price.",
      image: "https://mcdindia.com/wp-content/uploads/2026/01/website-banner-mccafe-scaled.jpg",
      date: "January 2026",
      featured: false,
    },
    {
      id: 3,
      category: "NEWS",
      title: "McDonald's Breakfast Is Back",
      desc: "Start your mornings right. Our full breakfast menu is now available at select restaurants across India.",
      image: "https://mcdindia.com/wp-content/uploads/2026/02/breakfast.jpg",
      date: "February 2026",
      featured: false,
    },
    {
      id: 4,
      category: "HIGHLIGHTS",
      title: "Signature Collection by McDonald's",
      desc: "Elevate your meal experience with the new Signature Collection – crafted for the discerning palate.",
      image: "https://mcdindia.com/wp-content/uploads/2025/12/website-banner-1-1.jpg",
      date: "December 2025",
      featured: false,
    },
  ];

  const featured = news.find((n) => n.featured)!;
  const rest = news.filter((n) => !n.featured);

  return (
    <section id="news" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Featured card */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredImageWrapper}>
              <img
                src={featured.image}
                alt={featured.title}
                className={styles.image}
              />
            </div>
            <div className={styles.featuredContent}>
              <span className={styles.category}>
                {featured.category}
              </span>
              <h2 className={styles.featuredTitle}>
                {featured.title}
              </h2>
              <p className={styles.featuredDesc}>
                {featured.desc}
              </p>
              <span className={styles.date}>{featured.date}</span>
            </div>
          </div>

          {/* Secondary cards */}
          {rest.map((item) => (
            <div key={item.id} className={styles.regularCard}>
              <div className={styles.regularImageWrapper}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />
              </div>
              <div className={styles.regularContent}>
                <span className={styles.category}>
                  {item.category}
                </span>
                <h3 className={styles.regularTitle}>
                  {item.title}
                </h3>
                <p className={styles.regularDesc}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
