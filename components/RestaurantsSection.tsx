"use client";

import React, { useState, useMemo } from 'react';
import { stores } from '@/lib/data';
import styles from './RestaurantsSection.module.css';

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
    <section id="restaurants" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* LEFT: City search */}
          <div className={styles.searchColumn}>
            <h2 className={styles.title}>
              Select City
            </h2>

            <div className={styles.searchFieldWrapper}>
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
                className={styles.cityInput}
              />
              {showDropdown && filteredCities.length > 0 && (
                <div className={styles.dropdown}>
                  {filteredCities.map((city) => (
                    <div
                      key={city}
                      onMouseDown={() => handleCitySelect(city)}
                      className={styles.dropdownItem}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {selectedCity && (
              <div className={styles.resultText}>
                <strong className={styles.highlight}>{displayStores.length}</strong> result{displayStores.length !== 1 ? 's' : ''} in <strong>{selectedCity}</strong>, India
              </div>
            )}

            <div style={{ marginTop: '20px' }}>
              <p className={styles.filterLabel}>Filter by City:</p>
              <div className={styles.filterButtons}>
                {cities.slice(0, 8).map((c) => (
                  <button
                    key={c}
                    onClick={() => handleCitySelect(c)}
                    className={styles.filterBtn}
                    style={{
                      border: `1.5px solid ${selectedCity === c ? '#DA291C' : '#ddd'}`,
                      background: selectedCity === c ? '#DA291C' : '#fff',
                      color: selectedCity === c ? '#fff' : '#333',
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Store listing */}
          <div className={styles.rightColumn}>
            <h1 className={styles.mainTitle}>
              Restaurant<br />Locator
            </h1>

            <div className={styles.storeList}>
              {displayStores.map((store) => (
                <div
                  key={store.id}
                  className={styles.storeCard}
                >
                  <p className={styles.storeAddress}>
                    📍 {store.address}, {store.city}
                  </p>
                  <div className={styles.storeStatus}>
                    <span className={store.dineIn === 'Open' ? styles.statusOpen : styles.statusClosed}>
                      Dine-in: {store.dineIn}
                    </span>
                    <span className={store.delivery === 'Open' ? styles.statusOpen : styles.statusClosed}>
                      Delivery: {store.delivery}
                    </span>
                  </div>
                  <div className={styles.storeLinks}>
                    <a
                      href={`tel:${store.phone}`}
                      className={styles.phoneLink}
                    >
                      📞 {store.phone}
                    </a>
                    <a
                      href={store.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mapsLink}
                    >
                      Get Directions →
                    </a>
                  </div>
                  {store.types.length > 0 && (
                    <div className={styles.storeTags}>
                      {store.types.map((t) => (
                        <span key={t} className={styles.tag}>{t}</span>
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
