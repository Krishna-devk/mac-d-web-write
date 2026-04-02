"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    title: "Company formation",
    description: "Launch your business with confidence. We handle all legal registrations, documentation, and compliance from day one.",
    image: "/images/services/formation.png",
    color: "#DA291C"
  },
  {
    title: "Company structure",
    description: "Optimizing your organizational hierarchy for maximum efficiency, scalability, and clear operational workflows.",
    image: "/images/services/structure.png",
    color: "#FFBC0D"
  },
  {
    title: "Legal Support & Help",
    description: "Expert legal guidance to protect your interests, from contract drafting to intellectual property management.",
    image: "/images/services/legal.png",
    color: "#292929"
  },
  {
    title: "Business Idea research",
    description: "Validate your vision with deep market analysis, consumer insights, and feasibility studies for success.",
    image: "/images/services/research.png",
    color: "#DA291C"
  },
  {
    title: "Business structure & Process",
    description: "Streamline your operations with robust SOPs and efficient processes that drive sustainable growth.",
    image: "/images/services/process.png",
    color: "#FFBC0D"
  },
  {
    title: "Branding & Identity",
    description: "Creating powerful brand stories, visual identities, and guidelines that resonate with your target audience.",
    image: "/images/services/branding.png",
    color: "#292929"
  },
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ 
      background: '#ffffff', 
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 188, 13, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
        borderRadius: '50%',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(218, 41, 28, 0.03) 0%, rgba(255, 255, 255, 0) 70%)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ 
            textTransform: 'uppercase', 
            letterSpacing: '4px', 
            fontSize: '14px', 
            fontWeight: 800, 
            color: '#DA291C',
            display: 'block',
            marginBottom: '16px'
          }}>Our Expertise</span>
          <h2 style={{ 
            fontSize: '56px', 
            fontWeight: 900, 
            color: '#292929', 
            marginBottom: '24px',
            lineHeight: 1.1
          }}>What We Do</h2>
          <div style={{ 
            width: '80px', 
            height: '4px', 
            background: '#FFBC0D', 
            margin: '0 auto 32px' 
          }} />
          <p style={{ 
            fontSize: '20px', 
            color: '#666', 
            maxWidth: '700px', 
            margin: '0 auto', 
            lineHeight: 1.7,
            fontWeight: 400
          }}>
            Comprehensive professional services tailored to help your business grow, structure, and scale with global standards.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '32px'
        }}>
           {services.map((service, index) => (
             <ServiceCard key={index} index={index + 1} {...service} />
           ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ index, title, description, image, color }: { index: number; title: string; description: string; image: string; color: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: '#fff',
        borderRadius: '24px',
        padding: '0',
        boxShadow: isHovered ? '0 30px 60px rgba(0,0,0,0.12)' : '0 10px 30px rgba(0,0,0,0.04)',
        transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'pointer',
        border: '1px solid #f0f0f0',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* Number Badge */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '25px',
        zIndex: 10,
        fontSize: '48px',
        fontWeight: 900,
        color: isHovered ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.03)',
        transition: 'all 0.3s ease'
      }}>
        {index.toString().padStart(2, '0')}
      </div>

      {/* Image Container */}
      <div style={{
        width: '100%',
        height: '240px',
        position: 'relative',
        overflow: 'hidden',
        background: '#f8f8f8'
      }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '60%',
          background: `linear-gradient(to top, #fff, transparent)`,
          zIndex: 1
        }} />
      </div>
      
      {/* Content */}
      <div style={{
        padding: '32px',
        position: 'relative',
        zIndex: 2,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{
          height: '4px',
          background: color,
          marginBottom: '24px',
          borderRadius: '2px',
          transition: 'width 0.3s ease',
          width: isHovered ? '60px' : '40px'
        }} />
        
        <h3 style={{
          fontSize: '24px',
          fontWeight: 800,
          color: '#292929',
          lineHeight: 1.3,
          marginBottom: '16px',
          transition: 'color 0.3s ease'
        }}>
          {title}
        </h3>
        
        <p style={{
          fontSize: '16px',
          color: '#666',
          lineHeight: 1.6,
          margin: 0,
          flexGrow: 1
        }}>
          {description}
        </p>

        <div style={{
          marginTop: '24px',
          display: 'flex',
          alignItems: 'center',
          color: '#DA291C',
          fontWeight: 700,
          fontSize: '14px',
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? 'translateX(0)' : 'translateX(-10px)',
          transition: 'all 0.3s ease'
        }}>
          LEARN MORE 
          <span style={{ marginLeft: '8px' }}>→</span>
        </div>
      </div>
    </div>
  );
}
