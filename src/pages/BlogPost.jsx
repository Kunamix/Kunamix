import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './Page.module.css'

// import { db } from '../firebase'
// import { doc, getDoc } from 'firebase/firestore'

const SAMPLE_POST = {
  title: '10 Web Design Trends Dominating 2026',
  tags: ['Design', 'Trends'],
  date: 'March 2026',
  author: 'Kunamix Team',
  content: `
    <p>The world of web design is evolving faster than ever. In 2026, we're seeing a convergence of performance, aesthetics, and accessibility that's reshaping how brands present themselves online.</p>
    <h2>1. Bento Grid Layouts</h2>
    <p>Inspired by Japanese bento boxes, this modular grid approach allows for creative, asymmetric layouts that feel organised yet unexpected. Brands like Apple popularised this, and it's now becoming mainstream.</p>
    <h2>2. AI-Augmented Personalisation</h2>
    <p>Websites that adapt in real-time to user behaviour — from layout shifts to content prioritisation — are no longer sci-fi. They're standard practice for top-tier digital products.</p>
    <h2>3. Micro-Interactions Everywhere</h2>
    <p>Subtle animations that respond to user actions build trust and delight. From button hovers to scroll-triggered reveals, micro-interactions are the secret to memorable user experiences.</p>
    <h2>4. Dark Mode as Default</h2>
    <p>Dark-first design has gone from a trend to a standard. It reduces eye strain, saves battery, and often looks more premium — especially for tech and creative brands.</p>
    <h2>5. Performance-First Design</h2>
    <p>With Core Web Vitals playing a major role in SEO, design teams are building with performance in mind from day one. Lightweight assets, optimised fonts, and lazy loading are essential.</p>
  `,
}

export default function BlogPost() {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate fetch — replace with Firebase:
    // async function fetchPost() {
    //   const snap = await getDoc(doc(db, 'posts', id))
    //   if (snap.exists()) setPost({ id: snap.id, ...snap.data() })
    // }
    // fetchPost()
    setTimeout(() => {
      setPost(SAMPLE_POST)
      setLoading(false)
    }, 300)
  }, [id])

  if (loading) return (
    <div style={{ padding: '160px 48px', color: 'var(--gray)', textAlign: 'center' }}>Loading…</div>
  )

  if (!post) return (
    <div style={{ padding: '160px 48px', textAlign: 'center' }}>
      <p>Post not found. <Link to="/blog" style={{ color: 'var(--orange)' }}>Back to Blog</Link></p>
    </div>
  )

  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageBg} />
        <div className={styles.pageGrid} />
        <div className={styles.pageContent}>
          <p className={styles.pageTag}>
            <Link to="/blog" style={{ color: 'var(--orange)', textDecoration: 'none' }}>Blog</Link> / Article
          </p>
          <h1 className={styles.pageTitle} style={{ fontSize: 'clamp(36px,5vw,72px)' }}>{post.title}</h1>
          <p className={styles.pageSub}>{post.date} · {post.author}</p>
        </div>
      </div>

      <section className={styles.legalPage}>
        <div className={styles.legalContent}>
          <p className={styles.legalUpdated}>
            {(post.tags || []).join(' · ')} — {post.date}
          </p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(0,0,0,0.1)' }}>
            <Link to="/blog" style={{ color: 'var(--orange)', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none' }}>
              ← Back to All Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
