import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import blogData from "@/constants/blog.json";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const latestBlogs = blogData.blogs.slice(0, 3);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background to-muted">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, guides, and tutorials on MVP development, startups, and
            technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestBlogs.map((blog, index) => (
            <Link to={`/blog/${blog.slug}`} key={blog.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300 group cursor-pointer h-full"
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
                      <span className="text-muted-foreground">No image</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col h-full">
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

                  {/* Read More Link */}
                  <span className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={18} />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/blog">
            <Button size="lg" className="gap-2">
              View All Blogs
              <ArrowRight size={20} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
