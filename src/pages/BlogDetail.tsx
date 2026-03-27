import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import NotFound from "./NotFound";
import useSEOMeta from "@/hooks/useSEOMeta";
import { BLOG_POSTS } from "@/data/blog";

// Modular Components
import BlogDetailHero from "@/components/blog/BlogDetailHero";
import BlogDetailContent from "@/components/blog/BlogDetailContent";
import BlogDetailNav from "@/components/blog/BlogDetailNav";
import BlogDetailTOC from "@/components/blog/BlogDetailTOC";
import BlogRelatedPosts from "@/components/blog/BlogRelatedPosts";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const blogIndex = BLOG_POSTS.findIndex((b) => b.slug === slug);
  const blog = blogIndex !== -1 ? BLOG_POSTS[blogIndex] : null;

  const nextBlog =
    blogIndex !== -1 && blogIndex < BLOG_POSTS.length - 1
      ? BLOG_POSTS[blogIndex + 1]
      : null;
  const previousBlog = blogIndex > 0 ? BLOG_POSTS[blogIndex - 1] : null;

  useSEOMeta({
    title: blog?.metaTitle,
    description: blog?.metaDescription,
    canonical: blog ? `https://kunamix.com/blog/${blog.slug}` : undefined,
    ogTitle: blog?.title,
    ogDescription: blog?.metaDescription,
    ogImage: blog?.coverImage,
    ogUrl: blog ? `https://kunamix.com/blog/${blog.slug}` : undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen max-w-screen overflow-x-hidden bg-background"
    >
      <Header />

      <main id="main-content">
        <BlogDetailHero blog={blog} />

        {/* Main Content & Sidebar Wrapper */}
        <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8 mt-12 md:mt-16 lg:mt-20 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* LEFT: Main Article Column - Constrained for perfect reading width */}
          <article className="w-full lg:max-w-[720px] xl:max-w-[760px] shrink-0 min-w-0">
            <BlogDetailContent blog={blog} />
          </article>

          {/* RIGHT: Sticky Table of Contents Sidebar */}
          <aside className="hidden lg:block w-[280px] xl:w-[300px] shrink-0 sticky top-32 pb-10">
            <BlogDetailTOC blog={blog} />
          </aside>
        </div>

        {/* Related Posts Section Wrapper - Duplicate Title Removed */}
        <section className="border-t border-border bg-[#fcfcfc] dark:bg-zinc-950 mt-20 md:mt-32 pt-20 pb-24">
          <div className="max-w-[1200px] mx-auto px-4 xs:px-5 sm:px-6 md:px-8">
            <BlogRelatedPosts currentBlog={blog} allBlogs={BLOG_POSTS} />
          </div>
        </section>

        <BlogDetailNav previousBlog={previousBlog} nextBlog={nextBlog} />
      </main>

      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default BlogDetail;
