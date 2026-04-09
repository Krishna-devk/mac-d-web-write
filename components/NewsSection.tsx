import React from 'react';
import styles from './NewsSection.module.css';

export default function NewsSection() {
  const news = [
    {
      id: 1,
      category: "HIGHLIGHTS",
      title: "Fuel Your Startup Journey — From Idea to Impact",
      desc: "Discover how our AI-powered platform transforms your business idea into a market-ready product with intelligent automation, data-driven insights, and end-to-end development support.",
      image: "/images/fuel_startup_journey_news.png",
      date: "March 2026",
      featured: true,
    },
    {
      id: 2,
      category: "NEWS",
      title: "The Launchpad Subscription",
      desc: "Unlock your startup’s full potential with our exclusive Launchpad Subscription. Get premium tools, expert mentorship, and resources to scale your idea from concept to market success.",
      image: "/images/launchpad_subscription_news.png",
      date: "January 2026",
      featured: false,
    },
    {
      id: 3,
      category: "NEWS",
      title: "The Dawn of Your New Venture",
      desc: "Embark on your entrepreneurial journey with our all-in-one startup launchpad. From idea validation to market launch, we provide the tools, mentorship, and resources you need to succeed.",
      image: "/images/dawn_of_your_new_venture_news.png",
      date: "February 2026",
      featured: false,
    },
    {
      id: 4,
      category: "HIGHLIGHTS",
      title: "The Signature Growth Strategy",
      desc: "Supercharge your business with our proprietary growth framework. Tailored strategies designed to take your startup from local presence to global dominance.",
      image: "/images/signature_growth_strategy_news.png",
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
