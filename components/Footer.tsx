"use client";

import styles from './Footer.module.css';

export default function Footer() {
  const links = [
    { group: 'Company', items: [
      { label: 'About Us', href: 'https://mcdindia.com/about-us/' },
      { label: 'Newsroom', href: 'https://mcdindia.com/newsroom/' },
      { label: 'Careers', href: 'https://mcdindia.com/careers/' },
      { label: 'Investor Relations', href: '#' },
    ]},
    { group: 'Food', items: [
      { label: 'Menu', href: '#menu' },
      { label: 'Nutritional Info', href: 'https://mcdindia.com/wp-content/uploads/2022/11/product-nutritional-booklet_cprlwebsite_231122.pdf' },
      { label: 'Allergen Info', href: '#' },
      { label: 'Quality', href: '#' },
    ]},
    { group: 'Services', items: [
      { label: 'Consultancy Services', href: '#mcdelivery' },
      { label: 'Birthday Party', href: 'https://mcdindia.com/birthday-celebrations/' },
      { label: 'Restaurant Locator', href: '#restaurants' },
      { label: 'McCafé', href: '#' },
    ]},
    { group: 'Legal', items: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ]},
  ];

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        {/* Top row */}
        <div className={styles.topRow}>
          {/* Brand */}
          <div>
            <img
              src="/images/new_logo.png"
              alt="McDelivery Logo"
              className={styles.brandLogo}
            />
            <p className={styles.brandText}>
              McDonald's India (West & South)<br />
              Connaught Plaza Restaurants Pvt. Ltd.
            </p>
            <p className={styles.brandSubtext}>
              Serving happiness since 1996.
            </p>
          </div>

          {/* Link groups */}
          {links.map((group) => (
            <div key={group.group}>
              <h4 className={styles.groupTitle}>
                {group.group}
              </h4>
              <ul className={styles.groupList}>
                {group.items.map((item) => (
                  <li key={item.label} className={styles.groupListItem}>
                    <a
                      href={item.href}
                      className={styles.groupLink}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className={styles.disclaimer}>
          <p className={styles.disclaimerText}>
            The calorie information provided on this website is for indicative purposes only. Calorie values may differ based on regional recipes and serving sizes. 
            This website is operated by Connaught Plaza Restaurants Pvt. Ltd. for McDonald's India (North & East region). All content © 2024 McDonald's India.
          </p>
          <p className={styles.disclaimerSubtext}>
            ⚠️ Beware of fraudulent claims or fake job offers in the name of McDonald's. We never ask for money.
          </p>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} McDonald's. All Rights Reserved.
          </p>
          <div className={styles.bottomLinks}>
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((l) => (
              <a key={l} href="#" className={styles.bottomLink}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
