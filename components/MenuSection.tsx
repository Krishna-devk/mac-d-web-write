"use client";

import React, { useState } from 'react';
import { burgerItems, snacksItems, dessertsItems, beveragesItems, type MenuItem } from '@/lib/data';

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
    <section id="menu" style={{ background: '#fff', padding: '0 0 60px' }}>
      {/* Tab navigation */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
        borderBottom: '2px solid #eee',
        background: '#fff',
        flexWrap: 'wrap',
        paddingTop: '50px',
      }}>
        {tabs.map((tab, idx) => (
          <React.Fragment key={tab.id}>
            <button
              id={`menu-tab-${tab.id}`}
              onClick={() => handleTabChange(idx)}
              style={{
                background: 'none',
                border: 'none',
                padding: '20px 28px',
                fontSize: '18px',
                fontWeight: 700,
                cursor: 'pointer',
                color: activeTab === idx ? '#DA291C' : '#292929',
                borderBottom: activeTab === idx ? '3px solid #DA291C' : '3px solid transparent',
                marginBottom: '-2px',
                transition: 'color 0.2s, border-color 0.2s',
                fontFamily: 'inherit',
              }}
            >
              {tab.label}
            </button>
            {idx < tabs.length - 1 && (
              <span style={{ color: '#ccc', fontSize: '22px', fontWeight: 300 }}>|</span>
            )}
          </React.Fragment>
        ))}
        <span style={{ color: '#ccc', fontSize: '22px', padding: '0 8px' }}>|</span>
        <a
          href="https://mcdindia.com/wp-content/uploads/2026/01/menu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          id="menu-view-pdf"
          style={{
            padding: '20px 28px',
            fontSize: '18px',
            fontWeight: 700,
            color: '#DA291C',
            textDecoration: 'none',
          }}
        >
          View Menu
        </a>
      </div>

      {/* Menu content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px 0',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'start',
      }}>
        {/* LEFT: Product info */}
        <div>
          <h2 style={{ fontSize: '36px', fontWeight: 900, color: '#292929', marginBottom: '8px', lineHeight: 1.2 }}>
            {item.name}
          </h2>
          <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#DA291C', marginBottom: '16px' }}>
            {item.tagline}
          </p>
          <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.7, marginBottom: '24px' }}>
            {item.desc}
          </p>
          <div style={{ display: 'flex', gap: '24px', marginBottom: '12px', fontSize: '14px' }}>
            <div>
              <span style={{ color: '#999' }}>Serving Size: </span>
              <span style={{ fontWeight: 600 }}>{item.serving}</span>
            </div>
          </div>
          <div style={{ fontSize: '13px', color: '#DA291C', marginBottom: '32px' }}>
            <span style={{ fontWeight: 700 }}>Allergen Warning! Contains: </span>
            <span style={{ color: '#555' }}>{item.allergens}</span>
          </div>

          {/* Nutrition grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '12px',
            background: '#f9f9f9',
            borderRadius: '12px',
            padding: '20px',
          }}>
            {item.nutrition.map((n) => (
              <div key={n.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>{n.label}</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#292929' }}>{n.value}</div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
            <button
              id="menu-prev"
              onClick={prevItem}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                border: '2px solid #DA291C', background: 'transparent',
                color: '#DA291C', cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
                <path d="M368 505.6c-8 0-16-3.2-22.4-8l-240-225.6c-6.4-6.4-9.6-14.4-9.6-24 0-8 3.2-16 9.6-22.4l240-224c12.8-11.2 33.6-11.2 44.8 1.6 12.8 12.8 11.2 32-1.6 44.8l-214.4 201.6 216 203.2c12.8 11.2 12.8 32 0 44.8-4.8 4.8-14.4 8-22.4 8z"/>
              </svg>
            </button>
            <span style={{ fontSize: '14px', color: '#777' }}>
              {activeItem + 1} / {currentItems.length}
            </span>
            <button
              id="menu-next"
              onClick={nextItem}
              style={{
                width: 44, height: 44, borderRadius: '50%',
                border: '2px solid #DA291C', background: '#DA291C',
                color: '#fff', cursor: 'pointer', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
                <path d="M144 505.6c8 0 16-3.2 22.4-8l240-225.6c6.4-6.4 9.6-14.4 9.6-22.4s-3.2-16-9.6-22.4l-240-224c-12.8-12.8-32-12.8-44.8 0s-11.2 32 1.6 44.8l214.4 201.6-216 203.2c-12.8 11.2-12.8 32 0 44.8 6.4 4.8 14.4 8 22.4 8z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* RIGHT: Product image + thumbnail strip */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          {/* Main image */}
          <div style={{ width: '100%', maxWidth: '400px', aspectRatio: '1', position: 'relative' }}>
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>
          {/* Ingredients */}
          <div style={{
            background: '#fff8e1',
            borderRadius: '8px',
            padding: '16px 20px',
            width: '100%',
            maxWidth: '400px',
          }}>
            <p style={{ fontWeight: 700, fontSize: '14px', color: '#292929', marginBottom: '6px' }}>Ingredients</p>
            <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>{item.ingredients}</p>
          </div>

          {/* Thumbnail strip */}
          <div style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: '420px',
          }}>
            {currentItems.map((it, i) => (
              <button
                key={it.id}
                onClick={() => setActiveItem(i)}
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '8px',
                  border: i === activeItem ? '2.5px solid #DA291C' : '2px solid #eee',
                  background: '#fff',
                  padding: '4px',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                  overflow: 'hidden',
                  flexShrink: 0,
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
