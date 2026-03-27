import React from 'react'
import styles from './Page.module.css'

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <div className={styles.pageHero}>
        <div className={styles.pageBg} />
        <div className={styles.pageGrid} />
        <div className={styles.pageContent}>
          <p className={styles.pageTag}>Who We Are</p>
          <h1 className={styles.pageTitle}>ABOUT KUNAMIX</h1>
          <p className={styles.pageSub}>A passionate team of designers, developers and strategists building exceptional digital products.</p>
        </div>
      </div>

      {/* Story */}
      <section className={styles.twoCol} style={{ background: 'var(--cream)' }}>
        <div>
          <h2 className={styles.sectionHeading}>OUR STORY</h2>
          <p className={styles.bodyText}>Kunamix was founded in 2020 with one mission: to help ambitious brands compete and win in the digital world. We started as a small design studio and have grown into a full-service digital agency trusted by 50+ clients across India and beyond.</p>
          <p className={styles.bodyText}>Every project we take on gets the same level of care, creativity and commitment — whether it's a startup's first website or a large-scale enterprise platform.</p>
        </div>
        <div>
          <h2 className={styles.sectionHeading}>OUR MISSION</h2>
          <p className={styles.bodyText}>To deliver digital solutions that are not only beautiful but genuinely effective — helping our clients grow their audience, convert more customers, and build stronger brands online.</p>
          <p className={styles.bodyText}>We believe great design and smart strategy go hand in hand. That's the Kunamix way.</p>
        </div>
      </section>

      {/* Values */}
      <section className={styles.darkSection}>
        <p className="section-tag">What Drives Us</p>
        <h2 className={styles.sectionHeadingLight}>OUR VALUES</h2>
        <div className={styles.valuesGrid}>
          {[
            { icon: '✦', title: 'Quality First', desc: 'We never compromise on craft. Every pixel, line of code and word of copy is carefully considered.' },
            { icon: '⬡', title: 'Client-Centric', desc: 'Your success is our success. We build long-term partnerships, not just one-off transactions.' },
            { icon: '◈', title: 'Innovation', desc: 'We stay ahead of trends, using the latest tools and techniques to keep your brand competitive.' },
            { icon: '△', title: 'Transparency', desc: 'Clear communication, honest timelines and no hidden costs — always.' },
            { icon: '○', title: 'Results-Driven', desc: 'Beautiful work that also performs. We measure success by your growth, not just aesthetics.' },
            { icon: '◇', title: 'Passion', desc: 'We genuinely love what we do, and that enthusiasm shows in every project we deliver.' },
          ].map((v) => (
            <div key={v.title} className={styles.valueCard}>
              <span className={styles.valueIcon}>{v.icon}</span>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className={styles.lightSection}>
        <p className="section-tag">The People</p>
        <h2 className={styles.sectionHeading}>MEET THE TEAM</h2>
        <div className={styles.teamGrid}>
          {[
            { name: 'Aryan Singh', role: 'Founder & Creative Director', emoji: '👨🏽‍🎨' },
            { name: 'Priya Sharma', role: 'Lead Designer', emoji: '👩🏽‍💻' },
            { name: 'Rahul Kumar', role: 'Head of Development', emoji: '🧑🏽‍💻' },
            { name: 'Neha Patel', role: 'Marketing Strategist', emoji: '👩🏽‍💼' },
          ].map((m) => (
            <div key={m.name} className={styles.teamCard}>
              <div className={styles.teamPhoto}>{m.emoji}</div>
              <div className={styles.teamInfo}>
                <p className={styles.teamName}>{m.name}</p>
                <p className={styles.teamRole}>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
