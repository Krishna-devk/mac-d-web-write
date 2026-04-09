"use client";

export default function McDelivery() {
  return (
    <section id="mcdelivery" style={{
      background: '#111111',
      padding: '100px 0',
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
            src="https://mcdindia.com/wp-content/uploads/2020/01/m-logo-big.svg"
            alt="McDelivery"
            width={60}
            height={60}
            style={{ marginBottom: '16px', borderRadius: '8px' }}
          />
          <h1 style={{ fontSize: '52px', fontWeight: 900, color: '#fff', margin: '0 0 16px', lineHeight: 1.1 }}>
            Expert Solutions
          </h1>
          <p style={{ fontSize: '18px', color: '#aaaaaa', marginBottom: '32px', maxWidth: '420px', lineHeight: 1.7 }}>
            End-to-end professional support to help your business scale—from legal formation and branding to global sourcing.
          </p>

          <p style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Our Core Verticals:</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Legal */}
            <div style={{
              background: '#222',
              borderRadius: '12px',
              padding: '14px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              minWidth: '130px',
              border: '1px solid #333'
            }}>
              <div style={{ width: 32, height: 32, background: '#DA291C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>Legal & SOP</span>
            </div>

            {/* Branding */}
            <div style={{
              background: '#222',
              borderRadius: '12px',
              padding: '14px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              minWidth: '130px',
              border: '1px solid #333'
            }}>
              <div style={{ width: 32, height: 32, background: '#FFBC0D', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
              </div>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>Branding</span>
            </div>

            {/* Sourcing */}
            <div style={{
              background: '#222',
              borderRadius: '12px',
              padding: '14px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              minWidth: '130px',
              border: '1px solid #333'
            }}>
              <div style={{ width: 32, height: 32, background: '#00c853', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <span style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>Sourcing</span>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src="/images/business_hero.png"
            alt="Business Executive Support"
            style={{ width: '450px', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))', borderRadius: '24px' }}
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
        color: 'rgba(255,255,255,0.03)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>M</div>
    </section>
  );
}
