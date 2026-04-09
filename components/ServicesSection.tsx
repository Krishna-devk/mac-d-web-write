"use client";

import React from 'react';
import Image from 'next/image';
import styles from './ServicesSection.module.css';

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
    <section id="services" className={styles.section}>
      {/* Decorative background elements */}
      <div className={styles.deco1} />
      <div className={styles.deco2} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.subtitle}>Our Expertise</span>
          <h2 className={styles.title}>What We Do</h2>
          <div className={styles.divider} />
          <p className={styles.desc}>
            Comprehensive professional services tailored to help your business grow, structure, and scale with global standards.
          </p>
        </div>

        <div className={styles.grid}>
           {services.map((service, index) => (
             <ServiceCard key={index} index={index + 1} {...service} />
           ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ index, title, description, image, color }: { index: number; title: string; description: string; image: string; color: string }) {
  return (
    <div className={styles.card}>
      {/* Number Badge */}
      <div className={styles.badge}>
        {index.toString().padStart(2, '0')}
      </div>

      {/* Image Container */}
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
        <div className={styles.imageGradient} />
      </div>
      
      {/* Content */}
      <div className={styles.content}>
        <div 
          className={styles.colorLine} 
          style={{ background: color }} 
        />
        
        <h3 className={styles.cardTitle}>
          {title}
        </h3>
        
        <p className={styles.cardDesc}>
          {description}
        </p>

        <div className={styles.learnMore}>
          LEARN MORE 
          <span style={{ marginLeft: '8px' }}>→</span>
        </div>
      </div>
    </div>
  );
}
