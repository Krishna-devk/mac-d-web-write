"use client";

export default function McDelivery() {
  return (
    <section id="mcdelivery" style={{
      background: '#FFBC0D',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        flexWrap: 'wrap',
      }}>
        {/* Left content */}
        <div style={{ flex: 1, minWidth: '280px' }}>
          <img
            src="https://mcdindia.com/wp-content/uploads/2020/04/logo-symbol.svg"
            alt="McDonald's"
            width={60}
            height={60}
            style={{ marginBottom: '16px', filter: 'brightness(0) saturate(100%) invert(17%) sepia(93%) saturate(4736%) hue-rotate(356deg) brightness(91%) contrast(95%)' }}
          />
          <h1 style={{ fontSize: '52px', fontWeight: 900, color: '#DA291C', margin: '0 0 16px', lineHeight: 1.1 }}>
            McDelivery®
          </h1>
          <p style={{ fontSize: '18px', color: '#292929', marginBottom: '32px', maxWidth: '420px', lineHeight: 1.7 }}>
            Get your McDonald's favourites delivered straight to your door. Hot. Fresh. Fast.
          </p>

          <p style={{ fontSize: '16px', fontWeight: 700, color: '#292929', marginBottom: '16px' }}>Order via:</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Swiggy */}
            <a href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer" id="delivery-swiggy" style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '14px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              minWidth: '130px',
            }}>
              <div style={{ width: 32, height: 32, background: '#FC8019', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l7 4.5-7 4.5z"/></svg>
              </div>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#292929' }}>Swiggy</span>
            </a>

            {/* Zomato */}
            <a href="https://www.zomato.com" target="_blank" rel="noopener noreferrer" id="delivery-zomato" style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '14px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              minWidth: '130px',
            }}>
              <div style={{ width: 32, height: 32, background: '#E23744', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15H11v-6h2v6zm0-8H11V7h2v2z"/></svg>
              </div>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#292929' }}>Zomato</span>
            </a>

            {/* Magicpin */}
            <a href="https://www.magicpin.in" target="_blank" rel="noopener noreferrer" id="delivery-magicpin" style={{
              background: '#fff',
              borderRadius: '12px',
              padding: '14px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              minWidth: '130px',
            }}>
              <div style={{ width: 32, height: 32, background: '#b91c8c', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#292929' }}>Magicpin</span>
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="https://mcdindia.com/wp-content/uploads/2019/12/french-fries.png"
            alt="McDonald's delivery"
            style={{ width: '320px', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.12))' }}
          />
        </div>
      </div>

      {/* Decorative M */}
      <div style={{
        position: 'absolute',
        bottom: '-60px',
        right: '-40px',
        fontSize: '340px',
        fontWeight: 900,
        color: 'rgba(218,41,28,0.07)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>M</div>
    </section>
  );
}
