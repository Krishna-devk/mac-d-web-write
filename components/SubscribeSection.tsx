"use client";

import { useState } from 'react';

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/McDonaldsIndia', color: '#1877F2', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { name: 'Instagram', href: 'https://www.instagram.com/mcdonaldsindia/', color: '#E4405F', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  )},
  { name: 'YouTube', href: 'https://www.youtube.com/user/McdonaldsIndia', color: '#FF0000', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
  )},
  { name: 'Twitter', href: 'https://twitter.com/mcdonaldsindia', color: '#1DA1F2', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
  )},
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/mcdonald%27s-india/', color: '#0A66C2', icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
];

export default function SubscribeSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="subscribe" style={{ background: '#EBEBEC', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', gap: '60px', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ fontSize: '50px', fontWeight: 900, color: '#292929', lineHeight: 1.1, marginBottom: '20px' }}>
            Special Offers<br />&amp; News
          </h1>
          <p style={{ fontSize: '18px', color: '#555', marginBottom: '32px', lineHeight: 1.6 }}>
            Subscribe now for news, promotions and<br />more delivered right to your inbox.
          </p>

          {submitted ? (
            <div style={{ background: '#DA291C', color: '#fff', padding: '16px 24px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', marginBottom: '36px' }}>
              🎉 Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '14px', marginBottom: '36px', maxWidth: '500px', flexWrap: 'wrap' }}>
              <input
                id="subscribe-email"
                type="email"
                placeholder="Email*"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ flex: 1, minWidth: '220px', padding: '15px 20px', border: '1.5px solid #ddd', borderRadius: '6px', fontSize: '16px', outline: 'none', fontFamily: 'inherit', background: '#fff' }}
              />
              <button
                id="subscribe-submit"
                type="submit"
                style={{ background: '#DA291C', color: '#fff', padding: '15px 32px', border: 'none', borderRadius: '6px', fontWeight: 800, fontSize: '16px', cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s', letterSpacing: '0.5px' }}
              >
                Subscribe
              </button>
            </form>
          )}

          <div>
            <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '14px', color: '#292929' }}>Follow us on:</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`social-${s.name.toLowerCase()}`}
                  title={s.name}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: s.color,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.2s, opacity 0.2s',
                    textDecoration: 'none',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.opacity = '0.85'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '1'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <p style={{ marginTop: '28px', fontSize: '14px', color: '#888' }}>
            Email: <a href="mailto:info@mcdonaldsindia.com" style={{ color: '#DA291C', textDecoration: 'none' }}>info@mcdonaldsindia.com</a>
          </p>
        </div>

        {/* Visual */}
        <div style={{ flexShrink: 0 }}>
          <img
            src="https://mcdindia.com/wp-content/uploads/2019/12/french-fries.png"
            alt="McDonald's Fries"
            style={{ width: '280px', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.15))' }}
          />
        </div>
      </div>
    </section>
  );
}
