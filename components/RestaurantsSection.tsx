"use client";

import React, { useState, useMemo } from 'react';
import { stores } from '@/lib/data';

const cities = Array.from(new Set(stores.map((s) => s.city))).sort();

const RestaurantsSection: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredCities = cities.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  const displayStores = useMemo(() => {
    if (!selectedCity) return stores.slice(0, 10);
    return stores.filter((s) => s.city.toLowerCase() === selectedCity.toLowerCase());
  }, [selectedCity]);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setSearch(city);
    setShowDropdown(false);
  };

  return (
    <section id="restaurants" style={{ background: '#fff', padding: '60px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '60px', alignItems: 'start' }}>
          {/* LEFT: City search */}
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#292929', marginBottom: '24px' }}>
              Select City
            </h2>

            <div style={{ position: 'relative', marginBottom: '24px' }}>
              <input
                id="restaurant-city-search"
                type="text"
                placeholder="Select a City"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowDropdown(true);
                  if (!e.target.value) setSelectedCity(null);
                }}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '2px solid #ddd',
                  borderRadius: '6px',
                  fontSize: '16px',
                  outline: 'none',
                  fontFamily: 'inherit',
                  boxSizing: 'border-box',
                }}
              />
              {showDropdown && filteredCities.length > 0 && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: '#fff',
                  border: '2px solid #ddd',
                  borderTop: 'none',
                  borderRadius: '0 0 6px 6px',
                  zIndex: 100,
                  maxHeight: '220px',
                  overflowY: 'auto',
                }}>
                  {filteredCities.map((city) => (
                    <div
                      key={city}
                      onMouseDown={() => handleCitySelect(city)}
                      style={{
                        padding: '12px 18px',
                        cursor: 'pointer',
                        fontSize: '15px',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#fff8e1')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = '#fff')}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {selectedCity && (
              <div style={{ fontSize: '15px', color: '#777', marginBottom: '20px' }}>
                <strong style={{ color: '#DA291C' }}>{displayStores.length}</strong> result{displayStores.length !== 1 ? 's' : ''} in <strong>{selectedCity}</strong>, India
              </div>
            )}

            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, color: '#555', marginBottom: '10px' }}>Filter by City:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cities.slice(0, 8).map((c) => (
                  <button
                    key={c}
                    onClick={() => handleCitySelect(c)}
                    style={{
                      padding: '6px 14px',
                      border: `1.5px solid ${selectedCity === c ? '#DA291C' : '#ddd'}`,
                      borderRadius: '20px',
                      fontSize: '13px',
                      background: selectedCity === c ? '#DA291C' : '#fff',
                      color: selectedCity === c ? '#fff' : '#333',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      fontFamily: 'inherit',
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Store listing */}
          <div>
            <h1 style={{ fontSize: '40px', fontWeight: 900, color: '#292929', marginBottom: '28px', lineHeight: 1.1 }}>
              Restaurant<br />Locator
            </h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '600px', overflowY: 'auto', paddingRight: '8px' }}>
              {displayStores.map((store) => (
                <div
                  key={store.id}
                  style={{
                    border: '1.5px solid #eee',
                    borderRadius: '10px',
                    padding: '20px',
                    background: '#fff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'box-shadow 0.2s',
                  }}
                >
                  <p style={{ fontWeight: 600, fontSize: '15px', color: '#292929', marginBottom: '10px', lineHeight: 1.5 }}>
                    📍 {store.address}, {store.city}
                  </p>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '12px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '13px', color: store.dineIn === 'Open' ? '#22a050' : '#DA291C', fontWeight: 600 }}>
                      Dine-in: {store.dineIn}
                    </span>
                    <span style={{ fontSize: '13px', color: store.delivery === 'Open' ? '#22a050' : '#DA291C', fontWeight: 600 }}>
                      Delivery: {store.delivery}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <a
                      href={`tel:${store.phone}`}
                      style={{ fontSize: '14px', color: '#333', textDecoration: 'none', fontWeight: 500 }}
                    >
                      📞 {store.phone}
                    </a>
                    <a
                      href={store.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '13px',
                        color: '#DA291C',
                        fontWeight: 700,
                        textDecoration: 'none',
                        borderBottom: '1px solid #DA291C',
                        paddingBottom: '1px',
                      }}
                    >
                      Get Directions →
                    </a>
                  </div>
                  {store.types.length > 0 && (
                    <div style={{ marginTop: '10px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {store.types.map((t) => (
                        <span key={t} style={{
                          fontSize: '11px',
                          background: '#fff8e1',
                          color: '#b8860b',
                          border: '1px solid #FFBC0D',
                          borderRadius: '4px',
                          padding: '2px 8px',
                          fontWeight: 600,
                        }}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsSection;
