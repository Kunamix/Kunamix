import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import blogData from "@/constants/blog.json";
import { Calendar, Clock, Share2, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import NotFound from "./NotFound";
import useSEOMeta from "@/hooks/useSEOMeta";

// Helper function to parse bold text
const parseContent = (text: string) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const blog = blogData.blogs.find((blog) => blog.slug === slug);
  const blogIndex = blogData.blogs.findIndex((blog) => blog.slug === slug);
  const nextBlog =
    blogIndex < blogData.blogs.length - 1
      ? blogData.blogs[blogIndex + 1]
      : null;
  const previousBlog = blogIndex > 0 ? blogData.blogs[blogIndex - 1] : null;

  // Set SEO meta tags
  useSEOMeta({
    title: blog?.metaTitle,
    description: blog?.metaDescription,
    canonical: blog ? `https://kunamix.com/blog/${blog.slug}` : undefined,
    ogTitle: blog?.title,
    ogDescription: blog?.metaDescription,
    ogImage: blog?.coverImage,
    ogUrl: blog ? `https://kunamix.com/blog/${blog.slug}` : undefined,
  });

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return <NotFound />;
  }

  // Check if content has sections
  const hasContent =
    blog.content && blog.content.sections && blog.content.sections.length > 0;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.metaDescription,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />

      <main className="pt-24 lg:pt-28 pb-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Meta Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span className="text-xs font-bold text-primary-foreground bg-primary px-3 py-1.5 rounded uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1.5">
              <Clock size={14} />
              {blog.readTime}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight text-foreground"
          >
            {blog.title}
          </motion.h1>

          {/* Intro with Accent Border */}
          {blog.content.intro && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 pl-5 border-l-4 border-primary"
            >
              {blog.content.intro}
            </motion.p>
          )}

          {/* Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center justify-between gap-4 p-5 mb-10 bg-card rounded-lg border border-border"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                {blog.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-foreground">{blog.author}</p>
                <p className="text-sm text-muted-foreground">
                  {blog.authorTitle}
                </p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="gap-2"
            >
              <Share2 size={16} />
              Share Article
            </Button>
          </motion.div>

          {/* Cover Image */}
          {blog.coverImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 rounded-lg overflow-hidden"
            >
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-auto max-h-[400px] object-cover"
              />
            </motion.div>
          )}

          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-12"
          >
            {/* Sections */}
            {hasContent && (
              <div className="space-y-10">
                {blog.content.sections.map((section, index) => (
                  <motion.section
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                    className="scroll-mt-24"
                    id={section.id}
                  >
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 pb-3 border-b-2 border-primary text-foreground">
                      {section.heading}
                    </h2>
                    <div className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                      {parseContent(section.body)}
                    </div>
                  </motion.section>
                ))}
              </div>
            )}

            {/* Conclusion */}
            {blog.content.conclusion && (
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg"
              >
                <p className="text-lg md:text-xl font-medium italic text-foreground leading-relaxed">
                  "{blog.content.conclusion}"
                </p>
              </motion.blockquote>
            )}
          </motion.article>

          {/* CTA Block */}
          {blog.content.cta && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mb-12 p-8 bg-primary text-primary-foreground rounded-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-3">
                {blog.content.cta.heading}
              </h3>
              <p className="mb-6 opacity-90">{blog.content.cta.subheading}</p>
              <Link to={blog.content.cta.buttonLink}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="gap-2 font-semibold"
                >
                  {blog.content.cta.buttonText}
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>
          )}

          {/* Tags Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-12 py-6 border-t border-border"
          >
            <p className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">
              Tagged In
            </p>
            <div className="flex flex-wrap gap-3">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-card border border-border text-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Navigation Between Posts */}
          {(previousBlog || nextBlog) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="py-10 border-t border-border"
            >
              <h3 className="text-lg font-bold mb-6 text-foreground">
                Continue Reading
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {previousBlog && (
                  <Link
                    to={`/blog/${previousBlog.slug}`}
                    className="group p-5 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all duration-300"
                  >
                    <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-2">
                      ← Previous
                    </p>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {previousBlog.title}
                    </h4>
                  </Link>
                )}
                {nextBlog && (
                  <Link
                    to={`/blog/${nextBlog.slug}`}
                    className="group p-5 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all duration-300 text-right md:col-start-2"
                  >
                    <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-2">
                      Next →
                    </p>
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {nextBlog.title}
                    </h4>
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </motion.div>
  );
};

export default BlogDetail;
