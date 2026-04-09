"use client";

import React, { useState } from 'react';
import { burgerItems, snacksItems, dessertsItems, beveragesItems, type MenuItem } from '@/lib/data';
import styles from './MenuSection.module.css';

const tabs = [
  { id: 'burgers', label: 'Burgers & Wraps', items: burgerItems },
  { id: 'snacks', label: 'Snacks & Sides', items: snacksItems },
  { id: 'desserts', label: 'Desserts', items: dessertsItems },
  { id: 'beverages', label: 'Beverages', items: beveragesItems },
];

const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const currentItems = tabs[activeTab].items;
  const item: MenuItem = currentItems[activeItem] ?? currentItems[0];

  const handleTabChange = (idx: number) => {
    setActiveTab(idx);
    setActiveItem(0);
  };

  const prevItem = () => setActiveItem((i) => (i - 1 + currentItems.length) % currentItems.length);
  const nextItem = () => setActiveItem((i) => (i + 1) % currentItems.length);

  return (
    <section id="menu" className={styles.section}>
      {/* Tab navigation */}
      <div className={styles.tabNav}>
        {tabs.map((tab, idx) => (
          <React.Fragment key={tab.id}>
            <button
              id={`menu-tab-${tab.id}`}
              onClick={() => handleTabChange(idx)}
              className={`${styles.tabBtn} ${activeTab === idx ? styles.tabBtnActive : styles.tabBtnInactive}`}
            >
              {tab.label}
            </button>
            {idx < tabs.length - 1 && (
              <span className={styles.tabDivider}>|</span>
            )}
          </React.Fragment>
        ))}
        <span className={styles.tabDivider} style={{ padding: '0 8px' }}>|</span>
        <a
          href="https://mcdindia.com/wp-content/uploads/2026/01/menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          id="menu-view-pdf"
          className={styles.menuLink}
        >
          View Menu
        </a>
      </div>

      {/* Menu content */}
      <div className={styles.container}>
        {/* LEFT: Product info */}
        <div>
          <h2 className={styles.itemName}>
            {item.name}
          </h2>
          <p className={styles.itemTagline}>
            {item.tagline}
          </p>
          <p className={styles.itemDesc}>
            {item.desc}
          </p>
          <div className={styles.servingInfo}>
            <div>
              <span style={{ color: '#999' }}>Serving Size: </span>
              <span style={{ fontWeight: 600 }}>{item.serving}</span>
            </div>
          </div>
          <div className={styles.allergenInfo}>
            <span style={{ fontWeight: 700 }}>Allergen Warning! Contains: </span>
            <span style={{ color: '#555' }}>{item.allergens}</span>
          </div>

          {/* Nutrition grid */}
          <div className={styles.nutritionGrid}>
            {item.nutrition.map((n) => (
              <div key={n.label} className={styles.nutritionItem}>
                <div className={styles.nutritionLabel}>{n.label}</div>
                <div className={styles.nutritionValue}>{n.value}</div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className={styles.navControls}>
            <button
              id="menu-prev"
              onClick={prevItem}
              className={`${styles.navBtn} ${styles.prevBtn}`}
            >
              <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
                <path d="M368 505.6c-8 0-16-3.2-22.4-8l-240-225.6c-6.4-6.4-9.6-14.4-9.6-24 0-8 3.2-16 9.6-22.4l240-224c12.8-11.2 33.6-11.2 44.8 1.6 12.8 12.8 11.2 32-1.6 44.8l-214.4 201.6 216 203.2c12.8 11.2 12.8 32 0 44.8-4.8 4.8-14.4 8-22.4 8z"/>
              </svg>
            </button>
            <span className={styles.navIndicator}>
              {activeItem + 1} / {currentItems.length}
            </span>
            <button
              id="menu-next"
              onClick={nextItem}
              className={`${styles.navBtn} ${styles.nextBtn}`}
            >
              <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
                <path d="M144 505.6c8 0 16-3.2 22.4-8l240-225.6c6.4-6.4 9.6-14.4 9.6-22.4s-3.2-16-9.6-22.4l-240-224c-12.8-12.8-32-12.8-44.8 0s-11.2 32 1.6 44.8l214.4 201.6-216 203.2c-12.8 11.2-12.8 32 0 44.8 6.4 4.8 14.4 8 22.4 8z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT: Product image + thumbnail strip */}
        <div className={styles.imageColumn}>
          {/* Main image */}
          <div className={styles.mainImageWrapper}>
            <img
              src={item.imageUrl}
              alt={item.name}
              className={styles.mainImage}
            />
          </div>
          {/* Ingredients */}
          <div className={styles.ingredientsBox}>
            <p className={styles.ingredientsTitle}>Ingredients</p>
            <p className={styles.ingredientsText}>{item.ingredients}</p>
          </div>

          {/* Thumbnail strip */}
          <div className={styles.thumbnailStrip}>
            {currentItems.map((it, i) => (
              <button
                key={it.id}
                onClick={() => setActiveItem(i)}
                className={styles.thumbnailBtn}
                style={{
                  border: i === activeItem ? '2.5px solid #DA291C' : '2px solid #eee',
                }}
                aria-label={it.name}
              >
                <img
                  src={it.imageUrl}
                  alt={it.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
