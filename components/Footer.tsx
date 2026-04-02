"use client";

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
      { label: 'McDelivery', href: '#mcdelivery' },
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
    <footer id="footer" style={{ background: '#292929', color: '#fff', padding: '60px 0 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '220px repeat(4, 1fr)', gap: '40px', marginBottom: '60px', flexWrap: 'wrap' }}>
          {/* Brand */}
          <div>
            <img
              src="https://mcdindia.com/wp-content/uploads/2020/01/m-logo-big.svg"
              alt="McDonald's India"
              style={{ width: 60, marginBottom: 20, filter: 'brightness(0) invert(1)' }}
            />
            <p style={{ fontSize: '13px', color: '#aaa', lineHeight: 1.7 }}>
              McDonald's India (West & South)<br />
              Connaught Plaza Restaurants Pvt. Ltd.
            </p>
            <p style={{ fontSize: '12px', color: '#888', marginTop: '12px' }}>
              Serving happiness since 1996.
            </p>
          </div>

          {/* Link groups */}
          {links.map((group) => (
            <div key={group.group}>
              <h4 style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '1.5px', color: '#FFBC0D', marginBottom: '16px', textTransform: 'uppercase' }}>
                {group.group}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {group.items.map((item) => (
                  <li key={item.label} style={{ marginBottom: '10px' }}>
                    <a
                      href={item.href}
                      style={{ color: '#bbb', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s', lineHeight: 1.5 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#FFBC0D')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#bbb')}
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
        <div style={{ borderTop: '1px solid #3a3a3a', padding: '24px 0', marginBottom: '20px' }}>
          <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.7, maxWidth: '900px' }}>
            The calorie information provided on this website is for indicative purposes only. Calorie values may differ based on regional recipes and serving sizes. 
            This website is operated by Connaught Plaza Restaurants Pvt. Ltd. for McDonald's India (North & East region). All content © 2024 McDonald's India.
          </p>
          <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
            ⚠️ Beware of fraudulent claims or fake job offers in the name of McDonald's. We never ask for money.
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #3a3a3a', padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ fontSize: '12px', color: '#666' }}>
            © {new Date().getFullYear()} McDonald's. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy Policy', 'Terms of Use', 'Accessibility'].map((l) => (
              <a key={l} href="#" style={{ fontSize: '12px', color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FFBC0D')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#666')}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
