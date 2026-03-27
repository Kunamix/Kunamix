import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Page.module.css'

// import { db } from '../firebase'
// import { collection, getDocs, query, orderBy } from 'firebase/firestore'

const SAMPLE_POSTS = [
  { id: '1', title: '10 Web Design Trends Dominating 2026', tags: ['Design', 'Trends'], date: 'Mar 2026', icon: '🎨', bg: 'blogImgDark' },
  { id: '2', title: 'Why Your Brand Needs a Digital Strategy in 2026', tags: ['Branding', 'Strategy'], date: 'Feb 2026', icon: '📊', bg: 'blogImgWarm' },
  { id: '3', title: 'Building Scalable Web Apps with React & Firebase', tags: ['Development', 'Firebase'], date: 'Jan 2026', icon: '⚙️', bg: 'blogImgDark' },
  { id: '4', title: 'The Complete Guide to SEO for Small Businesses', tags: ['SEO', 'Marketing'], date: 'Dec 2025', icon: '🔍', bg: 'blogImgWarm' },
  { id: '5', title: 'How to Choose the Right Agency for Your Project', tags: ['Business', 'Tips'], date: 'Nov 2025', icon: '💡', bg: 'blogImgDark' },
  { id: '6', title: 'Mobile-First Design: Why It Matters More Than Ever', tags: ['Design', 'Mobile'], date: 'Oct 2025', icon: '📱', bg: 'blogImgWarm' },
]

export default function Blog() {
  const [posts, setPosts] = useState(SAMPLE_POSTS)
  const [loading, setLoading] = useState(false)

  // Uncomment once Firebase is configured:
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setLoading(true)
  //     try {
  //       const q = query(collection(db, 'posts'), orderBy('date', 'desc'))
  //       const snap = await getDocs(q)
  //       const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  //       if (data.length > 0) setPosts(data)
  //     } catch (err) {
  //       console.error('Firebase error:', err)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   fetchPosts()
  // }, [])

  return (
    <>
      <div className={styles.pageHero}>
        <div className={styles.pageBg} />
        <div className={styles.pageGrid} />
        <div className={styles.pageContent}>
          <p className={styles.pageTag}>Knowledge Hub</p>
          <h1 className={styles.pageTitle}>OUR BLOG</h1>
          <p className={styles.pageSub}>Insights on design, development, marketing and growing your business online.</p>
        </div>
      </div>

      <section className={styles.lightSection}>
        <p className="section-tag">All Articles</p>
        <h2 className={styles.sectionHeading}>LATEST POSTS</h2>

        {loading ? (
          <div style={{ padding: '60px 0', textAlign: 'center', color: '#999' }}>Loading posts…</div>
        ) : (
          <div className={styles.blogGrid}>
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className={styles.blogCard}>
                <div className={`${styles.blogImg} ${post.bg === 'blogImgDark' ? styles.blogImgDark : styles.blogImgWarm}`}>
                  {post.icon || '📝'}
                </div>
                <div className={styles.blogMeta}>
                  <div className={styles.blogTags}>
                    {(post.tags || []).map((t) => (
                      <span key={t} className={styles.blogTag}>{t}</span>
                    ))}
                    <span className={styles.blogDate}>{post.date}</span>
                  </div>
                  <h3 className={styles.blogTitle}>{post.title}</h3>
                  <span className={styles.blogLink}>Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
