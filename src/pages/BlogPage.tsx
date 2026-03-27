import { useState, useMemo, useEffect } from "react";
import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import useSEOMeta from "@/hooks/useSEOMeta";
import { BLOG_POSTS } from "@/data/blog";

// Modular Blog Components
import BlogHero from "@/components/blog/BlogHero";
import BlogSearchFilter from "@/components/blog/BlogSearchFilter";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogFeaturedPost from "@/components/blog/BlogFeaturedPost";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useSEOMeta({
    title: "Blog | Kunamix - MVP Development & Startup Guides",
    description:
      "Read our latest articles about MVP development, startups, technology stack, and app development tips from industry experts.",
    canonical: "https://kunamix.com/blog",
    ogTitle: "Blog | Kunamix Digital Solutions",
    ogDescription:
      "Insights, guides, and tutorials on MVP development, startups, and technology",
    ogUrl: "https://kunamix.com/blog",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = BLOG_POSTS[0];
  const isFiltering = !!searchTerm || !!selectedCategory;

  const filteredBlogs = useMemo(() => {
    return BLOG_POSTS.filter((blog) => {
      const matchesSearch =
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.metaDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.keyword.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCategory =
        !selectedCategory || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // When not filtering, exclude featured post from the grid so it doesn't appear twice
  const gridBlogs = isFiltering
    ? filteredBlogs
    : filteredBlogs.filter((b) => b.id !== featuredPost.id);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen max-w-screen overflow-x-hidden bg-background"
    >
      <Header />

      <main id="main-content">
        <BlogHero />
        <BlogSearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {!isFiltering && <BlogFeaturedPost blog={featuredPost} />}
        <BlogGrid blogs={gridBlogs} />
      </main>

      <Footer />
      <WhatsAppButton />
    </motion.div>
  );
};

export default BlogPage;
