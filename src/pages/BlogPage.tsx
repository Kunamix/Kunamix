import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import blogData from "@/constants/blog.json";
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import useSEOMeta from "@/hooks/useSEOMeta";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Set SEO meta tags
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

  // Get all blogs
  const allBlogs = blogData.blogs;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get unique categories
  const categories = Array.from(new Set(allBlogs.map((blog) => blog.category)));

  // Filter blogs based on search and category
  const filteredBlogs = useMemo(() => {
    return allBlogs.filter((blog) => {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />

      <main>
        <PageHero
          title="Our Blog"
          subtitle="Insights, guides, and tutorials on MVP development, startups, and technology from our team."
          badge="📝 Latest Articles"
          breadcrumb={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        />

        <div className="pb-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto">
            {/* Search & Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-12 space-y-6"
            >
              {/* Search Input */}
              <div className="relative">
                <Search
                  className="absolute left-3 top-3 text-muted-foreground"
                  size={20}
                />
                <Input
                  type="text"
                  placeholder="Search blogs by title, keyword, or tag..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-6 text-base"
                />
              </div>

              {/* Category Filter */}
              <div>
                <p className="text-sm font-semibold mb-3 text-muted-foreground">
                  Filter by Category
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant={selectedCategory === null ? "default" : "outline"}
                    onClick={() => setSelectedCategory(null)}
                  >
                    All Categories
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "outline"
                      }
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Blog Grid */}
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogs.map((blog, index) => (
                  <Link
                    key={blog.id}
                    to={`/blog/${blog.slug}`}
                    className="cursor-pointer h-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full"
                    >
                      {/* Cover Image */}
                      <div className="relative h-48 bg-muted overflow-hidden">
                        {blog.coverImage ? (
                          <img
                            src={blog.coverImage}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                            <span className="text-muted-foreground">
                              No image
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col">
                        {/* Category & Read Time */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {blog.category}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock size={14} />
                            {blog.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {blog.title}
                        </h3>

                        {/* Meta Info */}
                        <div className="text-sm text-muted-foreground space-y-2 mb-4">
                          <div className="flex items-center gap-2">
                            <User size={14} />
                            <span>{blog.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            <span>
                              {new Date(blog.publishedAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                          {blog.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Read More */}
                        <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight size={18} />
                        </span>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <p className="text-lg text-muted-foreground mb-6">
                  No blogs found matching your search criteria
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}

            {/* Results Count */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center text-muted-foreground mt-8"
            >
              Showing {filteredBlogs.length} of {allBlogs.length} blogs
            </motion.p>
          </div>
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default BlogPage;
