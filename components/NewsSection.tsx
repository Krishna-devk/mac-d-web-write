"use client";

export default function NewsSection() {
  const news = [
    {
      id: 1,
      category: "HIGHLIGHTS",
      title: "Buddy Meal – Grab a Meal for Two",
      desc: "Introducing the all-new Buddy Meal. A 4-piece meal starting at just ₹119. Share the joy of McDonald's with your favourite person.",
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
    <section id="news" style={{ background: '#f5f5f5', padding: '80px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', alignItems: 'start' }}>
          {/* Featured card */}
          <div style={{
            background: '#fff',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
            gridRow: 'span 2',
          }}>
            <div style={{ height: '280px', overflow: 'hidden' }}>
              <img
                src={featured.image}
                alt={featured.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
              />
            </div>
            <div style={{ padding: '28px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2px', color: '#DA291C', display: 'block', marginBottom: '10px' }}>
                {featured.category}
              </span>
              <h2 style={{ fontSize: '26px', fontWeight: 900, color: '#292929', marginBottom: '14px', lineHeight: 1.3 }}>
                {featured.title}
              </h2>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7, marginBottom: '20px' }}>
                {featured.desc}
              </p>
              <span style={{ fontSize: '13px', color: '#999' }}>{featured.date}</span>
            </div>
          </div>

          {/* Secondary cards */}
          {rest.map((item) => (
            <div key={item.id} style={{
              background: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
              display: 'flex',
              gap: '0',
              flexDirection: 'column',
            }}>
              <div style={{ height: '180px', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '2px', color: '#DA291C', display: 'block', marginBottom: '8px' }}>
                  {item.category}
                </span>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#292929', marginBottom: '8px', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>
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
